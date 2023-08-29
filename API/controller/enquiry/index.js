const { response } = require('express')
const service = require('./service')

//save-enq
const saveneq = async(req,res)=>
{
    try{

        const eq = await service.enquiry(req.body)
        res.send({
            code:200,
            status:true,
            message:'saved successfully',
            saveresponse:eq
        })

    }catch(error)
    {
        res.send({
            code:400,
            status:false,
            message:'Something went wrong!!!'
        })
    }
}

//getallenq
const getenq = async(req,res)=>
{
    try{

        const geteq = await service.allenq()
        res.send({
            code:200,
            status:true,
            response:geteq
        })

    }catch(error)
    {
        res.send({
            code:400,
            status:false,
            message:'something went wrong!!!'
        })
    }
}

module.exports=
{
    saveneq,
    getenq
}