const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const bcrypt = require("bcryptjs");
 
require("./db/conn");
const Register = require("./models/registers");

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
                Name: req.body.Name,
                Password: req.body.Password,
                confirmPassword: req.body.confirmPassword
            })

            const registered = await registerEmployee.save();
            res.status(201).render("index");
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

        const userName = await Register.findOne({Name:name});

        const isMatch = await bcrypt.compare(password, userName.Password) 

        if(isMatch){
            res.status(201).render("index");
        }else{
            res.send("Invalid Login Details");
        }
    } catch (error) {
        res.status(400).send("Invalid Login Details");
    }
})

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})