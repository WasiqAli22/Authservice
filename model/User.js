const mongoose = require('mongoose');
// const Branduser = require('../model/Branduser');
var Schema = mongoose.Schema;


const branduserSchema = new Schema(
    {
        // Companyid:{  type: mongoose.Schema.Types.ObjectId,
        //     ref: 'User' },
        firstName:{
            type: String,
            
            min:4,
            max:255


            },
        lastName:{
                type: String,
                
                min:4,
                max:255   
    
                },
                
         email:{
                type: String,
                
                min:6,
                max:255
                 },
         phonenumber:{
                type : String,
                
                max:30
            },

         companyName:{
                type: String,
                
                min:5,
                max:255
                
             },
         role:{
                type: String,
                
                min:5,
                max:255
                
             }

        


 });

const userSchema = new Schema(
    {
        firstName:{
            type: String,
            required:true,
            min:4,
            max:20


            },
        lastName:{
                type: String,
                required:true,
                min:4,
                max:20  
    
                },
        country:{
                    type: String,
                    required:true,
                    min:4,
                    max:20
        
        
                    },
        city:{
                  type: String,
                  required:true,
                  min:5,
                  max:20
            
            
                    },
        companyName:{
                type: String,
                required:true,
                min:5,
                max:25
                
                
                        },
        websiteUrl:{
                type: String,
                required:true,
                min:5,
                max:25
                    
                    
                         },
        email:{
                type: String,
                required: true,
                min:6,
                max:100
            },

        password:{
            type: String,
            required: true,
            min:6,
            max:255
        },
        econcent: {
             type: Boolean,
             required: true,
             default: 1
            },
        brandusers: [branduserSchema] 
        ,
        date:{
            type: Date,
            default: Date.now
             
        }

    });


    





// Custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');




 // Virtual for user's full name
userSchema
.virtual("fullName")
.get(function () {
    return this.firstName + " " + this.lastName;
});


    
    module.exports= mongoose.model('User',userSchema);
   

   