const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const DairydetailsSchema = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId, 
    ref:'User'
  },
 
  day: {
    type: Date,
    default:  function () {
      const d = new Date();
      d.setHours(8, 0, 0, 0);
      return d;
    },
  },

  ImportantEvents: {
    type: String,
  },

  favouritepersonoftheDay: {
    type: String,
  },

  eatingHabits: {
    type: String,
  },

  wakingTime: {
    type: String,

   
  },

  sleepingTime: {
    type: String,
  },
});

const Dairy = mongoose.model("dairy", DairydetailsSchema);

module.exports = Dairy;
