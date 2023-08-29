const userdata = require('../../model/regschema')

//login
const login = async (data) => {
    const user = await userdata.findOne({ MobileNo: data });
    return user;
};

//login2
const login2 = async(data)=>
{
    const lg = await userdata.aggregate([{$match:{MobileNo:data}}])
    return lg
}



module.exports=
{
    login,
    login2
}