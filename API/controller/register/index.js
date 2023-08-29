const service = require('./service')
const promocollect = require('../../model/promocodeschema')
const promoSchema = require('../../controller/promocode/service')
const enqSchema = require('../../controller/enquiry/service')
const enrollSchema = require('../../controller/enrollment/service')
const feeSchema = require('../../controller/fees/service')
const branchSchema = require('../../controller/managebranch/service')

const bcrypt = require('bcrypt')
const csv = require('csvtojson')

//reg
const reg = async(req,res)=>
{
    try
    {
        if((req.file==undefined)||(req.file==null))
        {
            res.send({
                code:400,
                status:false,
                message:'Kindly upload csv file'
            })
        }
        else
        {
            let path = './files/' + req.file.filename
            let details = await csv().fromFile(path)

            const salt = await bcrypt.genSalt(10)
            
            for (let item of details)
            {
                const hashpassword = await bcrypt.hash(item.Password, salt)
                item.Enter_Password = hashpassword
                const hash_renterpassword = await bcrypt.hash(item.Reenter_Password, salt)
                item.Reenter_Password = hash_renterpassword

                const equalpassword = (item.Enter_Password==item.Reenter_Password)

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
                    const promo = new promocollect(item)
                    await promo.save()
        
                    await enqSchema.enquiry(item)
                    await enrollSchema.enrollsave(item)
                    await feeSchema.fee(item)
                    await branchSchema.branchsave(item)

                    const save = await service.register(item)
                
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

               
            }

            res.send({
                code: 200,
                status: true,
                message: 'File Uploaded Successfully'
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

//filesave
const filesave = async (req, res) => {
    try {

        if (!req.file)
        {
            return res.status(400).json({
                code: 400,
                status: false,
                message: 'Kindly upload a CSV file'
            });
        }

        const path = './files/' + req.file.filename;
        const userData = await csv().fromFile(path);

        await processUserData(userData);

        return res.status(200).json({
            code: 200,
            status: true,
            message: 'Data uploaded and processed successfully'
        });

    } catch (error)
    {
        console.error(error);
        return res.status(500).json({
            code: 500,
            status: false,
            message: 'An error occurred'
        });
    }
};

module.exports=
{
    reg,
    regagg,
    filesave
}