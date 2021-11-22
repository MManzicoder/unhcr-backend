
import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import mongoose from 'mongoose'
import { graphqlHTTP } from "express-graphql";

import  familyResolvers from "./controllers/families/resolver.mjs";
import  familySchema  from "./controllers/families/schema.mjs";
const app = express();
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DB_URL, (err, done)=>{
    if(err) console.log(err.message);
    console.log("CONNECTED TO DB ...");
})

app.use('/auth',
graphqlHTTP({
    schema:familySchema,
    rootValue:familyResolvers,
    graphiql:true
})
)
app.use('/users',
graphqlHTTP({
    schema:familySchema,
    rootValue:familyResolvers,
    graphiql:true
})
)
app.listen(PORT, ()=>console.log(`SERVER RUNNING ON PORT ${PORT} ...`))