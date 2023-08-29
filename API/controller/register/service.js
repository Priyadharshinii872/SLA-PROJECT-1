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

//filesave
const processUserData = async (userData) => 
{

    const salt = await bcrypt.genSalt(10);

    for (const user of userData) {
        const hashPassword = await bcrypt.hash(user.Password, salt);
        user.Enter_Password = hashPassword;
        const hashRenterPassword = await bcrypt.hash(user.Reenter_Password, salt);
        user.Reenter_Password = hashRenterPassword;
        
        await promoSchema.promo(user);
        await enqSchema.enquiry(user);
        await enrollSchema.enrollsave(user);
        await feeSchema.fee(user);
        await branchSchema.branchsave(user);

        // Assuming you have separate schemas and models for each user type
        const newUser = new registerschema(user);
        await newUser.save();
    }
};

module.exports=
{
    register,
    regagg,
    processUserData
}