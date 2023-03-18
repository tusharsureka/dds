require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const bcrypt = require("bcryptjs");
 
require("./db/conn");
const Register = require("./models/registers");
const Detail = require("./models/details");


const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public" );
const template_path = path.join(__dirname, "../templates/views" );
const partials_path = path.join(__dirname, "../templates/partials" );

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine" , "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/" , (req,res) => {
    res.render("index")
});

app.get("/register" , (req,res) => {
    res.render("register")
})

app.post("/register" ,async(req,res) => {
    try {
        const password = req.body.Password;
        const cpassword = req.body.confirmPassword;

        if(password === cpassword){
            const registerEmployee = new Register({

                Username: req.body.Username,
                Email: req.body.Email,
                Department: req.body.Department,
                postof: req.body.postof,
                Password: req.body.Password,
                confirmPassword: req.body.confirmPassword
            })
            console.log("the success part" + registerEmployee);

            const registered = await registerEmployee.save();
            res.status(201).render("index");
            console.log("saved details");
        }else{
            res.send("Passwords are not matching");
        }
    }catch (error) {
        res.status(400).send(error);
    }
})

app.post("/index", async(req,res) => {
    try {
        const name = req.body.Username;
        const password = req.body.Password;
        const postOf = req.body.postof;

        const userName = await Register.findOne({Username:name});
        const isMatch = await bcrypt.compare(password, userName.Password);
        const temp = await userName.postof;

        if(temp == "Head of Department" && isMatch){
            res.status(201).render("dashboard");
        }else if(temp == "Department Admin" && isMatch){
            res.status(201).render("tushar");
        }else{
            res.send("Invalid Login Details");
        }
    } catch (error) {
        res.status(400).send("Invalid Login Details");
    }
})

app.get("/internat" , (req,res) => {
    res.render("diff_pages/internat")
})
app.get("/marketing" , (req,res) => {
    res.render("diff_pages/marketing")
})
app.get("/resourceman" , (req,res) => {
    res.render("diff_pages/resourceman")
})
app.get("/policyprocess" , (req,res) => {
    res.render("diff_pages/policyprocess")
})
app.get("/focusa" , (req,res) => {
    res.render("diff_pages/focusa")
})

app.get("/KPI1" , (req,res) => {
    res.render("KPI's/KPI1")
})
app.get("/KPI2" , (req,res) => {
    res.render("KPI's/KPI2")
})
app.get("/KPI3" , (req,res) => {
    res.render("KPI's/KPI3")
})
app.get("/KPI4" , (req,res) => {
    res.render("KPI's/KPI4")
})
app.get("/KPI5" , (req,res) => {
    res.render("KPI's/KPI5")
})
app.get("/KPI6" , (req,res) => {
    res.render("KPI's/KPI6")
})
app.get("/KPI7" , (req,res) => {
    res.render("KPI's/KPI7")
})
app.get("/KPI8" , (req,res) => {
    res.render("KPI's/KPI8")
})
app.get("/KPI9" , (req,res) => {
    res.render("KPI's/KPI9")
})
app.get("/KPI10" , (req,res) => {
    res.render("KPI's/KPI10")
})
app.get("/KPI11" , (req,res) => {
    res.render("KPI's/KPI11")
})
app.get("/KPI12" , (req,res) => {
    res.render("KPI's/KPI12")
})
app.get("/KPI13" , (req,res) => {
    res.render("KPI's/KPI13")
})
app.get("/KPI14" , (req,res) => {
    res.render("KPI's/KPI14")
})



// app.post("/dashboard", async(req,res) => {
//     try {
//         res.status(201).render("dashboard");
//     } catch (error) {
//         res.status(400).send("Form not submitted");
//     }
// })

app.post("/dashboard" ,async(req,res) => {
    try {
        const registerStudent = new Detail({

            date: req.body.date,
            department: req.body.department,
            activity: req.body.activity,
            participation: req.body.participation,
            qs: req.body.qs,
            qsrank: req.body.qsrank,
            years: req.body.years,
            link: req.body.link,
            pdf: req.body.pdf,
            comments: req.body.comments
        })
            console.log("the success part" + registerStudent);

            const registered = await registerStudent.save();
            res.status(201).render("dashboard");
            console.log("saved details");
        }
    catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})