const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const studentdetails = new mongoose.Schema({
    university :{
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
    totalactivities :{
        type:String,
        required:true
    },
    noofparticipation :{
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
    nameofactivity :{
        type:String,
        required:true
    },
    comments :{
        type:String,
        required:true
    }
})

const KPI6 = new mongoose.model("KPI6", studentdetails);
module.exports = KPI6;