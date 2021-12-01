const User = require('../model/userSchema');
const { checkemail, checkpassword } = require('../middlewares/RegisterInitialChecks');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: "./config.env" });

exports.register = async (req, res) => {
    const { name, email, password, confirmpassword } = req.body;
    if (!email || !name || !password || !confirmpassword || checkemail(email) === false || checkpassword(password) === false) return res.status(400).send({ msg: "Invalid credentials" });

    try {
        const userexists = await User.findOne({ email: email });
        if (userexists) {
            return res.status(400).json({ error: "user already exists" });

        }
        else if (password !== confirmpassword) {
            return res.status(400).json({ error: "Password didn't match" });

        }
        const user = new User({
            name, email, password, confirmpassword
        })
        //middleware goes here to hash the password before storing in database
        user.save()
            .then(() => {
                res.status(200).send("User registered successfully")
            }).catch((err) => console.log(err));
    }
    catch (err) {
        res.status(500).send("Internal server error");
    }

}


exports.login = async (req, res) => {
    const { email, password } = req.body;
    // console.log(req.body);
    if (!email || !password || !checkemail(email) || !checkpassword(password)) {
        res.status(400).json({ msg: "Invalid credentails" });
    }
    try {
        const user = await User.findOne({ email: email });
        const verifypassword = await bcrypt.compare(password, user.password);
        // console.log(user);
        if (verifypassword) {
            const token = await jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
                expiresIn: 3600
            })
            // console.log(user._uid);
            res.cookie("token", token);
            res.cookie("uid", user.uid);
            res.set("Authorization", `Bearer ${token}`)
            // console.log(user.uid);
            res.status(200).send("User login successful");

        }
        else {
            res.status(400).send("Invalid credentials");
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Internal sever error");
    }
}

exports.logout = (req, res) => {
    res.clearCookie("token");
    return res.status(200).send("User logged out");
}