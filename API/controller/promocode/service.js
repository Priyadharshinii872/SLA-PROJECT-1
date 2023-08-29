const promoSchema = require('../../model/promocodeschema')

//save promo
const promo = async(data)=>
{
    try{

        const date = new Date()
        const setdate = await date.toISOString().slice(0,10)
        

        data.Startdate = setdate

        
        
        const newpromo = new promoSchema(data)
        const savepromo = await newpromo.save()
        return savepromo

    }catch(error)
    {
        return false
    }
}

//showapromo
const allpromo = async(data)=>
{
    try{

        const allp = await promoSchema.find()
        return allp

    }catch(error)
    {
        return false
    }
}



module.exports=
{
    promo,
    allpromo
}