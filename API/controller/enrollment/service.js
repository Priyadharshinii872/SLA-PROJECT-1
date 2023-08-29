const enrollSchema = require('../../model/enrollmentschema')
const feeModel = require('../../model/feeschema')

//save enroll
const enrollsave = async(data)=>
{
    try{

        const count = await enrollSchema.countDocuments()

        data.Student_ID = 'SLA'+ data.Batch  +  data.Stream +  (count+1)

        const newenroll = new enrollSchema(data)
        const saveenroll = await newenroll.save()
        return saveenroll

    }catch(error)
    {
        return false
    }
}


//getallenrollments
const getenroll = async(data)=>
{
    try{

        const en = await enrollSchema.find()
        return en
        
    }catch(error)
    {
        return false
    }
}

//getby student_id
const combinedata = async(data)=>
{
    try
    {
        const enrollsid = await enrollSchema.findOne({Student_ID:data.Student_ID})

        const feesid = await feeModel.findOne({Student_ID:data.Student_ID})

        if(enrollsid&&feesid)
        {
            const cb = {
                Student_ID: enrollsid.Student_ID,
                Student_Name: enrollsid.Student_Name,
                Batch: enrollsid.Batch,
                Branch: enrollsid.Branch,
                Stream: enrollsid.Stream,
                Batch_Start_Date: enrollsid.Batch_Start_Date,
                Batch_Timing: enrollsid.Batch_Timing,
                Course_fee: enrollsid.Course_fee,
                Promo_Code: enrollsid.Promo_Code,
                Discount_fee: enrollsid.Discount_fee,
                Paid_Amount: feesid.Paid_Amount,
                Pending_Amount: feesid.Pending_Amount
            }

            return cb
        }

    }catch(error)
    {
        return false
    }
}

//update all enrollment details by student_id
const updatestudentenroll = async(data)=>
{
    try{

        const upt = await enrollSchema.findOneAndUpdate({Student_ID:data.Student_ID},{$set:{Student_ID:data.Student_ID}})

    }catch(error)
    {
        return false
    }
}

module.exports=
{
    enrollsave,
    getenroll,
    combinedata
}