const User = require("../models/uderModel");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password || !phone) {
        return res.status(400).json({ message: "All fields are required" });
    }
    User.findByEmail(email, (err, result) => {
        if (err) return res.status(500).json({ message: "database Error" });
        if (result.length > 0) {
            return res.status(400).json({ message: "Email already exists" });
        }
    })
    User.findByPhone(phone, (err, result) => {
        if (err) {
            return res.status(500).json({ message: "database error" });
        }
        if (result.length > 0) {
            return res.status(400).json({ message: "Phone No Already Exists" });
        }
    })
    const dataUser = { name, email, password, phone };
    User.userCreate(dataUser, (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Database Error" });
        }
        else {
            return res.status(201).json({ message: "User Registered Successfully" });
        }
    });
};

exports.login = (req, res) => {
    const result = [0];
    const { email, password, phone } = req.body;
    if ((!email && !password) || (!phone && !password)) {
        return res.status(500).json({ message: "All filed is required" });
    }
    // if (User.password !== password) {
    //     return res.status(401).json({ message: "Invalid password" });
    // }
    // else if (User.email !== email) {
    //     return res.status(401).json({ message: "Invalid email" });
    // }
    if (email && password) {
        User.findByEmail(email, (err, result) => {
            if (err) return res.status(500).json({ message: "Database Error" });

            if (result.length === 0 || result[0].password !== password) {
                return res.status(401).json({ message: "Invalid Credentials 1" });
            }
        });
    }
    else if (phone && password) {
        User.findByPhone(phone, (err, result) => {
            if (err) {
                return res.status(500).json({ message: "Database Error" });
            }
            if (result.length === 0 || result[0].password !== password) {
                return res.status(401).json({ message: "Invalid Credentials 2" });
            }
        });
    }

    const token = jwt.sign({ id: result[0].id }, "your_secret_key", { expiresIn: "1h" });

    res.json({ message: "Login Successful", token });
};
