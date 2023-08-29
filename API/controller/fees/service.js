const feeSchema = require('../../model/feeschema')
const enrollstudents = require('../../model/enrollmentschema')

//savefee
const fee = async(data)=>
{
    try{

        const s_id_in_enroll =  data.Student_ID

        const enrollidmatch = await enrollstudents.findOne( { Student_ID: s_id_in_enroll } )
        if(!enrollidmatch)
        {
            return false
        }
        else
        {

            const newfee = new feeSchema(data)
            const savefee = await newfee.save()
            return savefee

        }

        
    }catch(error)
    {
        return false
    }
}


//allfee
const allfee = async(data)=>
{
    try{
        const fee = await feeSchema.find()
        return fee
    }catch(error)
    {
        return false
    }
}

module.exports=
{
    fee,
    allfee
}