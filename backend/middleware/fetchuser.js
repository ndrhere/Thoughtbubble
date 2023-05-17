const jwt = require('jsonwebtoken')

const secretKey = "mySecretKey";
const fetchuser = (req, res, next) =>{

const authToken = req.header('auth-Token')
const payload = jwt.verify(authToken, secretKey)
if(!payload){
    res.status(400).json({error: 'Please Login with the correct creadentials'})
}

req.user = { userId: payload.userId }

next();


}

module.exports = fetchuser;