const mongoose = require('mongoose');
require('dotenv').config();

cmodule.exports.Connect =async ()=>{
  try {
          mongoose.set("strictQuery", false);
          const con = await mongoose.connect(mongoURI)
          if (con) {
            console.log("MongoDB connected successfully");
          }
          return; 
        } catch (error) {
          console.log(error)}

}
