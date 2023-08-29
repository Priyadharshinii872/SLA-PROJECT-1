const service = require('./service')

//save-branch
const savebranch = async(req,res)=>
{
    try{
        const sb = await service.branchsave(req.body)
    if(sb)
    {
        res.send({
            code:200,
            status:true,
            message:'Branch saved Successfully',
            respons:sb
        })
    }
    else
    {
        res.send({
            code:400,
            status:false,
            message:'Not saved'
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

//get all branches
const allbranch = async(req,res)=>
{
    try{

        const sb = await service.getbranch(req.body)
        res.send({
            code:200,
            status:true,
            Allbranches: sb
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
    savebranch,
    allbranch
}