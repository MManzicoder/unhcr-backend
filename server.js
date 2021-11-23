import("./models/mongodb.js");
import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import { graphqlHTTP } from "express-graphql";

import  familyResolvers from "./controllers/families/resolver.mjs";
import  familySchema  from "./controllers/families/schema.mjs";
const app = express();
const PORT = process.env.PORT || 5000


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