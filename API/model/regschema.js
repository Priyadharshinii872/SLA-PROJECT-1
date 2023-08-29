const mongoose = require('mongoose')

const registetSchema = new mongoose.Schema({
    Name:{
        type:String
    },
    MobileNo:{
        type:String
    },
    OTP_Verification:{
        type:String
    },
    EmailID:{
        type:String
    },
    Enter_Password:{
        type:String
    },
    Reenter_Password:{
       type:String
     }
})


module.exports= mongoose.model('register',registetSchema,'register')