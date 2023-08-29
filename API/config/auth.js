'use strict';

// const httpErrors = require('http-errors');
const JWT = require('jsonwebtoken');

const verifyJWT = (req,res,cb) => {
   
   if (!req.headers.authorization || req.headers.authorization == undefined) {
      res.send({code: 401, auth: false, message: "No token provided"})
      return;
   }
   
   var token = req.headers.authorization.split(' ')[1];


    JWT.verify(token, process.env.JWT_SECRET_KEY, function(err, decoded) {

     if(err)
     {
      console.log(err.message)
        res.send({ code: 203, auth: false, message: 'Invalid Token' });
     }
     else
     {
        cb();
     }   
     
    });
  };

  module.exports = verifyJWT;