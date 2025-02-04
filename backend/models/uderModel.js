const db = require("../data/db");

const User = {
    findByEmail: (email, callback) => {
        db.query("select * from users where email=?", [email], callback);
    },
    findByPhone: (phone, callback) => {
        db.query("select * from users where phone=?", [phone], callback);
    },
    userCreate: (dataUser, callback) => {
        db.query("insert into users set ?", dataUser, callback);
    },
}
module.exports = User;