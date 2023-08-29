const multer = require('multer')

const storage1=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./files/')
    },
    filename:(req,file,cb)=>{

        console.log(file.originalname);

        cb(null,`${'SLA'}-${file.originalname}`)
    }
})

var upload=multer({storage:storage1});        

module.exports=upload