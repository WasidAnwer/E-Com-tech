const db = require("../data/db");

const User = {
    findByEmail: (email, callback) => {
        db.query("select * from users where email=?", [email], callback);
    },
    userCreate: (dataUser, callback) => {
        db.query("insert into users set ?", dataUser, callback);
    },
}
module.exports = User;