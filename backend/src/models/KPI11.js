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
    type :{
        type:String,
        required:true
    },
    typeactivity :{
        type:String,
        required:true,
    },
    participation :{
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

const KPI11 = new mongoose.model("KPI11", studentdetails);
module.exports = KPI11;