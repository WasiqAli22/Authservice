// const { string } = require('@hapi/joi');
// const mongoose = require('mongoose');
// const User = require('../model/User');
// var Schema = mongoose.Schema;

// const branduserSchema = new Schema(
//     {
//         Companyid:{  type: mongoose.Schema.Types.ObjectId,
//             ref: 'User' },
//         firstName:{
//             type: String,
//             required:true,
//             min:4,
//             max:255


//             },
//         lastName:{
//                 type: String,
//                 required:true,
//                 min:4,
//                 max:255   
    
//                 },
                
//          email:{
//                 type: String,
//                 required: true,
//                 min:6,
//                 max:255
//                  },
//          phonenumber:{
//                 type : String,
//                 required:true,
//                 max:30
//             },

//          companyName:{
//                 type: String,
//                 required:true,
//                 min:5,
//                 max:255
                
//              },
//          role:{
//                 type: String,
//                 required:true,
//                 min:5,
//                 max:255
                
//              }

        


//  });
//  module.exports= mongoose.model('Branduser',branduserSchema);