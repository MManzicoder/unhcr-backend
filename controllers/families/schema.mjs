import {buildSchema} from 'graphql'

const familySchema = buildSchema(`
type Child{
    firstName:String!,
    lastName:String!,
    dob:String!,
    education:Int!
    defects:[String!]
}
type Family {
    _id: ID!,
    leader: String!,
    campName:String!,
    children:[Child!],    
    createdAt:String! 
},
input childData{
    firstName:String!,
    lastName:String!,
    dob:String!,
    education:Int!
    defects:[String!]
},
input FamilyInput{
    leader:String!,
    campName:String!,
    children:[childData!]
}
type RootQuery{
    families:[Family!]
    family(_id:String!):Family!
}
type Mutation{
    createFamily(family:FamilyInput):Family
    deleteFamily(_id:String):Family,
    updateFamily(_id: String, family: FamilyInput): String!
}
schema {
    query:RootQuery,
    mutation:Mutation
}
`)

export default familySchema