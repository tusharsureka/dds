const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const studentdetails = new mongoose.Schema({
    university :{
        type:String,
        required:true,
    },
    faculty :{
        type:String,
        required:true
    },
    department :{
        type:String,
        required:true
    },
    country :{
        type:String,
        required:true,
    },
    date :{
        type:String,
        required:true
    },
    title :{
        type:String,
        required:true
    },
    nature :{
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

const KPI5 = new mongoose.model("KPI5", studentdetails);
module.exports = KPI5;