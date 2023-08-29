const mongoose = require('mongoose')

const feeSchema = new mongoose.Schema({
    Student_ID:{
        type:String
    },
    Student_Name:{
        type:String
    },
    Batch:{
        type:String
    },
    Stream:{
        type:String
    },
    Start_Date:{
        type:String
    },
    Timing:{
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
    },
    Paid_Amount:{
        type:Number
    },
    Pending_Amount:{
        type:Number
    }
})

module.exports= mongoose.model('fees',feeSchema,'fees')