const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
    },
    tokens :[{
        token :{
            type:String,
            required:true
        }
    }]
    
})

employeeSchema.methods.generateAuthToken = async function(){
    try {
        console.log(this._id);
        const token = jwt.sign({_id:this._id},"mynameistusharsurekaandthisisadoicproject");
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        res.send("the error is" + error);
        console.log("the error is" + error);
    }
}

employeeSchema.pre("save" ,async function(next){
    if(this.isModified("Password")){
        // console.log(`The current password is ${this.Password}`);
        this.Password = await bcrypt.hash(this.Password, 10);
        this.confirmPassword = await bcrypt.hash(this.Password, 10);
        // console.log(`The current password is ${this.Password}`);
    }
    next();
})

const Register = new mongoose.model("Register", employeeSchema);
module.exports = Register;