const { throws } = require("assert");
const db = require("../data/db");
const util = require("util");

// Convert db.query to a promise-based function
const query = util.promisify(db.query).bind(db);

const User = {
    findByEmail: async (email) => {
        try {
            const results = await query("select * from users where email =?", [email]);
            // Return the first user or null if not found
            return results.length > 0 ? results[0] : null;
        } catch (error) {
            throw error;
        }
    },

    findByPhone: async (phone) => {
        try {
            const results = await query("select * from users where phone =?", [phone]);
            return results.length > 0 ? results[0] : null;
        } catch (error) {
            throw error;
        }
    },
    findById: async (id) => {
        try {
            const results = await query("select * from users where id =?", [id]);
            return results.length > 0 ? results[0] : null;
        } catch (error) {
            throw error;
        }
    },
    findByName: async (name) => {
        try {
            const results = await query("SELECT * FROM users WHERE name LIKE ?", [`%${name}%`]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getAllUsers: async () => {
        try {
            return await query("SELECT * FROM users");
        } catch (error) {
            throw error;
        }
    },
    updateUser: async (id, updateData) => {
        try {
            return await query("UPDATE users SET ? WHERE id = ?", [id, updateData]);
        } catch (error) {
            throw error;
        }
    },

    deleteById: async (id) => {
        try {
            return await query("DELETE FROM users WHERE id = ?", [id]);
        } catch (error) {
            throw error;
        }
    },

    deleteByName: async (name) => {
        try {
            return await query("DELETE FROM users WHERE name = ?", [name]);
        } catch (error) {
            throw error;
        }
    },
    userCreate: async (dataUser) => {
        try {
            const result = await query("INSERT INTO users SET ?", dataUser);
            return result.insertId; // Return the inserted user ID
        } catch (error) {
            throw error;
        }
    }
};
module.exports = User;