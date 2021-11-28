import("./models/mongodb.js");
import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import { graphqlHTTP } from "express-graphql";
import auth from './controllers/auth/auth.js';
import authSchema from "./controllers/auth/authSchema.js";
import  familyResolvers from "./controllers/families/resolver.mjs";
import  familySchema  from "./controllers/families/schema.mjs";
import fundSchema  from './controllers/funds/schema.js';
import fundResolver  from './controllers/funds/resolver.js';
import moveAbroadSchema from './controllers/moveabroad/moveAbroadSchema.js';
import * as moveabroadResolver from './controllers/moveabroad/moveabroad.js';
const app = express();
const PORT = process.env.PORT || 5000


app.use('/auth',
graphqlHTTP({
    schema: authSchema,
    rootValue: auth,
    graphiql:true
})
)

app.use('/funds',
graphqlHTTP({
    schema: fundSchema,
    rootValue:fundResolver,
    graphiql:true
}))
app.use('/users',
graphqlHTTP({
    schema:familySchema,
    rootValue:familyResolvers,
    graphiql:true
}))

app.use('/moveabroad',
graphqlHTTP({
    schema: moveAbroadSchema,
    rootValue:moveabroadResolver,
    graphiql:true
}))

app.listen(PORT, ()=>console.log(`SERVER RUNNING ON PORT ${PORT} ...`))