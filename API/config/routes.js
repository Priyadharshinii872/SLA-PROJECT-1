const express = require("express");
const router = express.Router();
const auth = require("./auth");

const reg_functions = require('../controller/register/index')
const login_functions = require('../controller/login/index')
const branch_functions = require('../controller/managebranch/index')
const promo_functions = require('../controller/promocode/index')
const enq_functions = require('../controller/enquiry/index')
const enroll_functions = require('../controller/enrollment/index')
const fee_functions = require('../controller/fees/index')

let routes = (app) => {

  router.get("/", function(req, res){
    res.send("Route hit")
  }); 

  //reg
  router.post('/reg',reg_functions.reg)
  router.post('/regagg',reg_functions.regagg)
  router.post('/filesave',reg_functions.filesave)

  //login
  router.post('/login',login_functions.lg)
  router.post('/login2',login_functions.lg2)

  //save-branch
  router.post('/savebranch',branch_functions.savebranch)
  router.post('/getbranch',branch_functions.allbranch)

  //promocode
  router.post('/savepromo',promo_functions.savepromo)
  router.post('/getpromo',promo_functions.getpromo)
  
  //enquiry
  router.post('/saveenq',enq_functions.saveneq)
  router.post('/getenq',enq_functions.getenq)

  //enrollment
  router.post('/saveenroll',enroll_functions.enrollsave)
  router.post('/getenroll',enroll_functions.getallenroll)
  router.post('/combinedata',enroll_functions.combinedata)

  //fee
  router.post('/savefee',fee_functions.savefee)
  router.post('/getfee',fee_functions.getfee)




  app.use("/api", router);
};

module.exports = routes;