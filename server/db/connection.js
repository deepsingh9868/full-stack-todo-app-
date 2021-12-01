const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.connect(DB)
    .then(() => {
        console.log("Connection with db successful");
    }).catch((err) => console.log(err));