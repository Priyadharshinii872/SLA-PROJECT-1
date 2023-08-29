const mongoose = require('mongoose')

const streamSchema = new mongoose.Schema({
    streamName:{
        type:string
    }
})

module.exports= mongoose.model('stream',streamSchema,'stream')