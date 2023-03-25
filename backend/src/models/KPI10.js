const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const studentdetails = new mongoose.Schema({
    university :{
        type:String,
        required:true,
    },
    country :{
        type:String,
        required:true
    },
    date :{
        type:String,
        required:true
    },
    contactperson :{
        type:String,
        required:true
    },
    title :{
        type:String,
        required:true,
    },
    link :{
        type:String,
        required:true
    },
    comments :{
        type:String,
        required:true
    }
})

const KPI10 = new mongoose.model("KPI10", studentdetails);
module.exports = KPI10;