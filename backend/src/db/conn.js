const mongoose = require("mongoose");
const DB = 'mongodb+srv://tusharsureka18:tushar@cluster0.wc0apfi.mongodb.net/sureka?retryWrites=true&w=majority';
 
mongoose.connect(DB).then(() => {
    console.log(`connection now new successful`);
}).catch((err) => console.log(`connection not established to atlas`));

// mongoose.connect("mongodb://localhost:27017/loginDetails")
// .then(() => {
//     console.log(`connection Established`);
// }).catch((e) => {
//     console.log(`No Connection`);
// })