require("dotenv/config");
require("./models/mongodb");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>console.log(`SERVER RUNNING ON PORT ${PORT} ...`))