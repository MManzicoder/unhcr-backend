import {buildSchema} from "graphql"

export default buildSchema(`
     RootQuery{

     }
     RootMutation{

     }
     schema{
         query: RootQuery
         mutation: RootMutation
     }
`)