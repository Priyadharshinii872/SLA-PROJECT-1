const mongoose = require('mongoose')

const managebranchSchema = new mongoose.Schema({
    BranchName:{
        type:String
    }
})

module.exports= mongoose.model('branch', managebranchSchema , 'branch')