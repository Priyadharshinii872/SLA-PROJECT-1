const mongoose = require('mongoose')

const enquirySchema = new mongoose.Schema({
    Student_Name:{
        type:String
    },
    MobileNo:{
        type:String
    },
    Email:{
        type:String
    },
    College:{
        type:String
    },
    Qualification:{
        type:String
    },
    Year_Of_Passed:{
        type:String
    },
    Stream_enquiry:{
        type:String
    },
    Mode:{
        type:String
    },
    Referred_By:{
        type:String
    },
    location:{
        type:String
    }
})

module.exports= mongoose.model('enquiry', enquirySchema ,'enquiry')