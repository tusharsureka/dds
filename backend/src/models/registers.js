const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const employeeSchema = new mongoose.Schema({
    Username :{
        type:String,
        required:true
    },
    Email :{
        type:String,
        required:true,

    },
    Department :{
        type:String,
        required:true
    },
    postof :{
        type:String,
        required:true
    },
    Password :{
        type:String,
        required:true
    },
    confirmPassword :{
        type:String,
        required:true
    }
    
})

employeeSchema.pre("save" ,async function(next){
    if(this.isModified("Password")){
        console.log(`The current password is ${this.Password}`);
        this.Password = await bcrypt.hash(this.Password, 10);
        console.log(`The current password is ${this.Password}`);

        this.confirmPassword = undefined;
    }
    next();
})

const Register = new mongoose.model("Register", employeeSchema);
module.exports = Register;