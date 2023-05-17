const express = require('express')
const connectToMongo = require('./mongoDB')
const User = require('./Schema/UserSchema')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
fetchuser = require('./middleware/fetchuser')
const Dairy = require('./Schema/DairyDetailsSchema')
var cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())

connectToMongo();

const secretKey = "mySecretKey"


//Route 1: Creating a User
app.post('/createuser', [body('name').isLength({min:2}),
body('email').isEmail(), 
body('password').isLength({min:4})], 
async (req,res)=>{
  console.log(req.body)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  
  let user = await User.findOne({email:req.body.email})
  if(user){
    res.status(400).json({error: 'Sorry a user with this email already exists'})
  }

  const salt = bcrypt.genSaltSync(10)
  const hashPassword = bcrypt.hashSync(req.body.password, salt)


  user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword
  })
   //In the context of web authentication, the payload typically contains information about the user or the session, such as the user ID, email, or other relevant information. This information is used to generate a unique token for the user, which can be used to authenticate them in subsequent requests.

  // To generate a payload, you can simply create a JSON object containing the relevant information. For example, if you want to include the user ID and email in the payload, you could create a JSON object like this:

  const payload = {
    userId: user._id
  }
  
  const authToken = jwt.sign(payload, secretKey)
   res.json({authToken})

})

//Route 2: Get User log-in
app.post('/login', [
body('email').isEmail(), 
body('password').isLength({min:4})], 
async (req,res)=>{
  console.log(req.body)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

 let user = await User.findOne({email: req.body.email})
 if(!user){
  res.status(200).json({error: 'Please login with correct credentials'})
 }

 

 let passwordCompare = await bcrypt.compare(req.body.password, user.password)
 if(!passwordCompare){
    res.status(200).json({error: 'Please login with correct credentials'})
 }

const payload = {
  userId: user._id
}

const authToken = jwt.sign(payload, secretKey)
res.json({authToken})


  })


//Route 3: Getting the user
app.get('/getuser',fetchuser, async(req,res)=>{

  userId = req.user.userId
const user = await User.findById(userId)
res.send(user)

}) 




//Route 4: Fetching all the dairies
app.get('/fetchalldairies', fetchuser, async(req,res)=>{


  userId= req.user.userId
  const dairy = await Dairy.find({user: userId})
  res.json(dairy)
  
})
 



//Route 5: Adding a new Dairy
app.post('/adddairy', [body('day').isLength({min:3}),
body('ImportantEvents').isLength({min:5})],
fetchuser, 
async(req,res) =>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

const dairy = new Dairy ({
  day: req.body.day,
  ImportantEvents: req.body.ImportantEvents,
  favouritepersonoftheDay: req.body.favouritepersonoftheDay,
  eatingHabits: req.body.eatingHabits,
  wakingTime: req.body.wakingTime,
  sleepingTime: req.body.sleepingTime,
  user: req.user.userId
})

const savedDairy = await dairy.save();
res.json(savedDairy)

})




//Route 6: Updating a Dairy
app.put('/updatedairy/:id',[body('day').isLength({min:3}),
body('ImportantEvents').isLength({min:5})], fetchuser, 
async(req, res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const userId = req.user.userId
  const dairyId = req.params.id
  const updatedDairy = req.body

  const dairy = await Dairy.findOneAndUpdate({_id: dairyId, userId}, updatedDairy, {new:true})
//Q. So in this code Dairy.findOneAndUpdate({_id: dairyId, userId},   id: dairyId is a separate thing and userId is a separate. Right and we are saying update this having _idas dairyId and userId to this ......Right ?

//Ans: Yes, that's correct. In the code Dairy.findOneAndUpdate({_id: dairyId, userId}, dairyToUpdate, { new: true });, _id: dairyId and userId are two separate fields that we are using to query the dairy that we want to update. We are specifying both the dairy ID and the user ID to ensure that we are only updating the dairy that belongs to the currently logged-in user.
 if(!dairy){
  res.status(404).json({error: 'Dairy not found'})
 }
 res.send(dairy);

})



 //Route 7: To delete a dairy
app.delete('/deletedairy/:id', fetchuser, async(req, res)=>{

const dairyId = req.params.id

let dairy = await Dairy.findById(dairyId)
if(!dairy){
  res.status(404).send("Not Found")
}

if(dairy.user.toString() !== req.user.userId){
  res.status(400).send('Not Allowed')
}

dairy = await Dairy.findByIdAndDelete(dairyId)
res.json({dairy: dairy})


})
  
  





















app.listen(4000, ()=>{
    console.log('App is listening at port 4000')
})