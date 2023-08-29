const registerschema = require('../../model/regschema')
const validator = require('email-validator')

//register user without repeatation of mob_no

const register = async(data)=>
{
    
      try{

        if(data.length!=0)
      {
            const exis = await registerschema.findOne({MobileNo:data.MobileNo})
            if(exis)
            {
                return false
            }
            else
            {
                const newuser = new registerschema(data)
                const saveuser = await newuser.save()
                return saveuser
            }
      }

      }catch(error)
      {
        return false
      }

}


//reg with aggregate method

const regagg = async(req,res)=>
{
    try{

        const exis = await registerschema.aggregate([{$match:{MobileNo:data.MobileNo}}])
        if(exis.length==0)
        {
            return false
        }
        else
        {
            const validate = validator.validate(data.EmailID)
            if(validate)
            {
                const newuser = new registerschema(data)
                const saveuser = await newuser.save()
                return saveuser
            }
            
        }

    }catch(error)
    {
        return false
    }
}



module.exports=
{
    register,
    regagg
}