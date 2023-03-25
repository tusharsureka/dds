const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const studentdetails = new mongoose.Schema({
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
    Studentname :{
        type:String,
        required:true,
    },
    registrationno :{
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

const KPI4 = new mongoose.model("KPI4", studentdetails);
module.exports = KPI4;