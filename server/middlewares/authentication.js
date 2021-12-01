const jwt = require('jsonwebtoken');
require('dotenv').config({ path: "./config.env" });

const auth = async (req, res, next) => {
    const token = req.cookies.token;
    // console.log(token);
    if (!token) {
        res.status(403).send('Unauthorized user');
    }
    try {
        const data = jwt.verify(token, process.env.SECRET_KEY);
        // console.log(data);
        // if (!data) {
        //     res.status(403).send("Unauthorized access");
        // }
        next();
    }
    catch (err) {
        res.status(403).send("Unauthorized user");
    }
}


module.exports = auth;