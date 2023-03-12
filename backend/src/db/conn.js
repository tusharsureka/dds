const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mystudents")
.then(() => {
    console.log(`connection Established`);
}).catch((e) => {
    console.log(`No Connection`);
})

