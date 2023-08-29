const service = require('./service')

//save
const savepromo = async(req,res)=>
{
    try{

        const sp = await service.promo(req.body)
        res.send({
                code:200,
                status:true,
                message:'Promo saved successfully'
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

//get-promo
const getpromo = async(req,res)=>
{
    try{

        const promo = await service.allpromo()
        res.send({
            code:200,
            status:true,
            Response:promo
        })

    }catch(error)
    {
        res.send({
            code:400,
            status:false,
            message:'Something wenmt wrong!!!'
        })
    }
}



module.exports=
{
    savepromo,
    getpromo
}