const User = require("../models/uderModel");

exports.register = (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }
    User.findByEmail(email, (err, result) => {
        if (err) return res.status(500).json({ message: "database Error" });
        if (result.length > 0) {
            return res.status(400).json({ message: "Email already exists" });
        }
    })
    const dataUser = { name, email, password };
    User.userCreate(dataUser, (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Database Error" });
        }
        else {
            return res.status(201).json({ message: "User Registered Successfully" });
        }
    })
}

exports.login = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(500).json({ message: "All filed is required" });
    }
    User.findByEmail(email, (err, result) => {
        if (err) return res.status(500).json({ message: "Database Error" });

        if (result.length === 0 || result[0].password !== password) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }

    })
}
