import config from "dotenv";
config.config();
import("./models/mongodb.js");
import express from "express";
import expressGraphql from "express-graphql";

const app = express();
const PORT = process.env.PORT || 5000
app.post("/graphql", expressGraphql.graphqlHTTP({}))
app.listen(PORT, ()=>console.log(`SERVER RUNNING ON PORT ${PORT} ...`))