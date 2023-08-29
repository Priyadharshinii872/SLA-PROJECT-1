const mongoose = require('mongoose')

const promocodeSchema = new mongoose.Schema({
    PromoName:{
        type:String
    },
    Stream:{
        type:String
    },
    Discount:{
        type:String
    },
    Startdate:{
        type:String
    },
    Enddate:{
        type:String
    }
})


module.exports= mongoose.model('promo',promocodeSchema,'promo')