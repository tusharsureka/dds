const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const formdetails = new mongoose.Schema({
    name :{
        type:String,
        required:true,
    },
    activity :{
        type:String,
        required:true
    },
    department :{
        type:String,
        required:true
    },
    studentname :{
        type:String,
        required:true
    },
    regno :{
        type:String,
        required:true
    },
    year :{
        type:String,
        required:true
    },
    nature :{
        type:String,
        required:true
    },
    duration :{
        type:String,
        required:true
    },
    link :{
        type:String,
        required:true
    },
    pdf :{
        type:String,
        required:true
    },
    comments :{
        type:String,
        required:true
    }
})

const Form = new mongoose.model("Form", formdetails);
module.exports = Form;