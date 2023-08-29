const mongoose = require('mongoose')

const signinSchema = new mongoose.Schema({
    Mobileno:{
        type:Number
    },
    Password:{
        type:String
    },
    Forget_Password:{
        type:String
    }
})

module.exports= mongoose.model('signin',signinSchema,'signin')