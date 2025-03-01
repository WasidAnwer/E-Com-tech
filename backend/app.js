const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoute");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/users", userRoutes);

app.listen(4000, () => {
    console.log("Server running on port 4000");
})