const { response } = require('express')
const service = require('./service')

//save-enroll
const enrollsave = async(req,res)=>
{
    try{

        const en = await service.enrollsave(req.body)
        res.send({
            code:200,
            status:true,
            message:'Enrollement saved successfully',
            response:en
        })

    }catch(error)
    {
        res.send({
            code:400,
            status: false,
            message:'Something went wrong!!!'
        })
    }
}

//getenroll.
const getallenroll = async(req,res)=>
{
    const gt = await service.getenroll()
    res.send({
        code:200,
        status:true,
        message:'all enrollments',
        response:gt
    })
}


//combine data
const combinedata  = async(req,res)=>
{
    try{

        const id = req.body.Student_ID
        const details = await service.combinedata({Student_ID:id})
        if(details)
        {
            res.send({
                code:200,
                status:true,
                message:'student Details',
                response: details
            })
        }
        else
        {
            res.send({
                code:400,
                status:false,
                message:'student details NOT found'
            })
        }

    }catch(error)
    {
        res.send({
            code:400,
            status:false,
            message:'Something went wrong'
        })
    }
}

module.exports=
{
    enrollsave,
    getallenroll,
    combinedata
}