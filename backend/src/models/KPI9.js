const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const studentdetails = new mongoose.Schema({
    university :{
        type:String,
        required:true,
    },
    program :{
        type:String,
        required:true
    },
    department :{
        type:String,
        required:true
    },
    graduate :{
        type:String,
        required:true,
    },
    date :{
        type:String,
        required:true
    },
    namealumini :{
        type:String,
        required:true
    },
    regnoalumini :{
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

const KPI9 = new mongoose.model("KPI9", studentdetails);
module.exports = KPI9;