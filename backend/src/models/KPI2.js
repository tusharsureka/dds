const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const studentdetails = new mongoose.Schema({
    name :{
        type:String,
        required:true,
    },
    date :{
        type:String,
        required:true,
    },
    department :{
        type:String,
        required:true
    },
    activity :{
        type:String,
        required:true
    },
    participation :{
        type:String,
        required:true
    },
    qs :{
        type:String,
        required:true
    },
    qsrank :{
        type:String,
        required:true
    },
    years :{
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

const KPI2 = new mongoose.model("KPI2", studentdetails);
module.exports = KPI2;