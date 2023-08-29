const service = require('./service')
const bcrypt = require('bcrypt')

//reg
const reg = async(req,res)=>
{
    try{
        
    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(req.body.Enter_Password,salt)
    req.body.Enter_Password= hashpassword
    const hash_renterpassword = await bcrypt.hash(req.body.Reenter_Password,salt)
    req.body.Reenter_Password = hash_renterpassword

   
    const equalpassword = (req.body.Enter_Password==req.body.Reenter_Password)
    if(!equalpassword)
    {
        res.send({
            code:200,
            status:true,
            message:'mismatched reenter password',
        })
        
    }
    else
    {
        const save = await service.register(req.body)
        if(save)
        {
        res.send({
            code:200,
            status:true,
            message:'Registered Successfully',
            response:save
        })
        }

        
        res.send({
            code:400,
            status:false,
            message:'Already Registered Account'
        })
    }


    }catch(error)
    {
        return false
    }

}

//reg
const regagg = async(req,res)=>
{
    try{
        
    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(req.body.Enter_Password,salt)
    req.body.Enter_Password= hashpassword
    const hash_renterpassword = await bcrypt.hash(req.body.Reenter_Password,salt)
    req.body.Reenter_Password = hash_renterpassword

    const save = await service.register(req.body)
    if(save)
    {
    
        res.send({
            code:200,
            status:true,
            message:'Registered Successfully',
            response:save
        })
    }
    else
    {
        res.send({
            code:400,
            status:false,
            message:'Already Registered Account'
        })
    }


    }catch(error)
    {
        return false
    }

}

module.exports=
{
    reg,
    regagg
}