const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// User Registration
exports.register = async (req, res) => {
	try {
		const { name, email, phone, password } = req.body;
		if (!name || !email || !phone || !password) {
			return res.status(400).json({ message: "All fields are required" });
		}

		const [existEmail, existPhone] = await Promise.all([User.findByEmail(email), User.findByPhone(phone)]);
		if (existEmail?.length) {
			return res.status(400).json({ message: "Email ID already exists" });
		}
		if (existPhone?.length) {
			return res.status(400).json({ message: "Phone number already exists" });
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		await User.userCreate({ name, email, phone, password: hashedPassword });

		return res.status(200).json({ message: "User registered successfully" });

	} catch (error) {
		return res.status(500).json({ message: "Database error", error: error.message });
	}
},

	// Login User
	exports.login = async (req, res) => {
		try {
			const { email, phone, password } = req.body;
			if ((!email && !phone) || !password) {
				return res.status(400).json({ message: "Email or phone and password are required" });
			}

			const user = email ? await User.findByEmail(email) : await User.findByPhone(phone);
			if (!user) {
				return res.status(401).json({ message: "Invalid email or phone" });
			}

			const validPassword = await bcrypt.compare(password, user.password);
			if (!validPassword) {
				return res.status(401).json({ message: "Invalid password" });
			}

			const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "default_secret", { expiresIn: "1h" });
			return res.json({ message: "Login successful", token });
		} catch (error) {
			return res.status(500).json({ message: "Database error", error: error.message });
		}
	};


//Get All Users
exports.getAllUsers = async (req, res) => {
	try {
		const users = await User.getAllUsers();
		if (!users) {
			return res.status(404).json({ message: "User not found" });
		}
		return res.json(users);
	} catch (error) {
		return res.status(500).json({ message: "Database error", error: error.message });
	}
},

	// Get User by Name
	exports.getUserByName = async (req, res) => {
		try {
			const users = await User.getUserByName(req.params.name);
			if (!users) {
				return res.status(404).json({ message: "User not found" });
			}
			return res.json(users);
		} catch (error) {
			return res.status(500).json({ message: "Database error", error: error.message });
		}
	},

	// Get User by ID

	exports.getUserById = async (req, res) => {
		try {
			const users = await User.getUserById(req.params.id);
			if (!users) {
				return res.status(404).json({ message: "User not found" });
			}
			return res.json(users);
		} catch (error) {
			return res.status(500).json({ message: "Database error", error: error.message });
		}
	},
	// Get User By Phone
	exports.getByUserPhone = async (req, res) => {
		try {
			const user = await User.getByUserPhone(req.params.phone);
			if (!user) {
				return res.status(404).json({ message: "User not found" });
			}
			return res.json(user);
		} catch (error) {
			return res.status(500).json({ message: "Database error", error: error.message });
		}
	},
	//Get User by Email
	exports.getUserByEmail = async (req, res) => {
		try {
			const user = await User.getUserByEmail(req.params.email);
			if (!user) {
				return res.status(404).json({ message: "User not found" });
			}
			return res.json(user);
		} catch (error) {
			return res.status(500).json({ message: "Database error", error: error.message });
		}
	},
	//Update User
	exports.updateUser = async (req, res) => {
		try {
			const update = await User.updateUser(req.params.id, req.body);
			if (!update) {
				return res.status(404).json({ message: "User not update" });
			}
			return res.json({ message: "User updated successfully" });
		} catch (error) {
			return res.status(500).json({ message: "Database error", error: error.message });
		}
	},
	//Delete User By Id
	exports.deleteById = async (req, res) => {
		try {
			const delUser = await User.deleteById(req.params.id);
			if (!delUser) {
				return res.status(404).json({ message: "User not found" });
			}
			return res.json({ message: "User delete successfully" });
		} catch (error) {
			return res.status(500).json({ message: "Database error", error: error.message });
		}
	},
	//Delete User By Name
	exports.deleteByName = async (req, res) => {
		try {
			const delname = await User.deleteByName(req.params.name);
			if (!delname) {
				return res.status(404).json({ message: "User not found" });
			}
			return res.json({ message: "User delete successfully" });
		} catch (error) {
			return res.status(500).json({ message: "Database error", error: error.message });
		}
	};
