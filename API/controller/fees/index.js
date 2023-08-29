const { response } = require('express')
const service = require('./service')

//saveffe
const savefee = async(req,res)=>
{
    try{

        const sf = await service.fee(req.body)
        if(sf)
        {
            res.send({
                code:200,
                status:true,
                message:'Fees saved Successfully',
                response:sf
            })
        }
        else
        {
            res.send({
                code:400,
                status:false,
                message:'Not a Student'
            })
        }
    }catch(error)
    {
        res.send({
            code:400,
            status:false,
            message:'Something went wrong!!!'
        })
    }
}

//getfee
const getfee = async(req,res)=>
{
    try{

        const fee = await service.allfee()
        res.send({
            code:200,
            status:true,
            message:'All fee fetched',
            response:fee
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

module.exports=
{
    savefee,
    getfee
}