const mongoose = require('mongoose')

const enrollmentSchema = new mongoose.Schema({
    Student_ID:{
        type:String
    },
    Student_Name:{
        type:String
    },
    Batch:{
        type:String
    },
    Branch:{
        type:String
    },
    Stream:{
        type:String
    },
    Batch_start_Date:{
        type:String
    },
    Batch_Timing:{
        type:String
    },
    Course_fee:{
        type:String
    },
    Promo_Code:{
        type:String
    },
    Discount_fee:{
        type:String
    }
})

module.exports=mongoose.model('enrollment',enrollmentSchema,'enrollment')