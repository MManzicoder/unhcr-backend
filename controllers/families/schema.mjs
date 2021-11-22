import {buildSchema} from 'graphql'

const familySchema = buildSchema(`
type Family {
    _id: ID!,
    leader: String!,
    children:Int!,
    createdAt:String!
},
input FamilyInput{
    leader:String!,
    children:Int!
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