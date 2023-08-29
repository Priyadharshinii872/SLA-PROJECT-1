const enquirySchema = require('../../model/enquiryschema')

//save enq
const enquiry = async(data)=>
{
    try{
        const newenq = new enquirySchema(data)
        const saveenq = await newenq.save()
        return saveenq
    }catch(error)
    {
        return false
    }
}

//allenquiry 
const allenq = async(data)=>
{
    try{

        const alleq =await enquirySchema.find()
        return alleq

    }catch(error)
    {
        return false
    }
}

module.exports=
{
    enquiry,
    allenq
}