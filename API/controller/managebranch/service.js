const branchSchema = require('../../model/mbschema')

//save branch
const branchsave = async(data)=>
{
    try{
        
        const newbranch = new branchSchema(data)
        const savebranch = await newbranch.save()
        return savebranch

    }catch(error)
    {
        return false
    }
}

//getall branches
const getbranch = async(data)=>
{
    try{

        const getall = await branchSchema.find()
        return getall

    }catch(error){

        return alse
    }
}

module.exports=
{
    branchsave,
    getbranch
}