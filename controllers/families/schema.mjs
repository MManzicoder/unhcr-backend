import {buildSchema} from 'graphql'

const familySchema = buildSchema(`
type Person{    
    firstName:String!
    lastName:String!
    dob:String!
    gender:String!
    education:Int!
    defects:[String!]
    
},


type Parent{
    personInfo: Person!
    alive:Boolean 
    leader:Boolean 
},


type Family {
    _id: ID!
    man: Parent!
    woman:Parent!
    campName:String!
    children:[Person!]    
    createdAt:String! 
}, 
input PersonData{
    firstName:String!
    lastName:String!
    dob:String!
    education:Int!
    defects:[String!]
},
input ParentData{
    personInfo: PersonData!
    alive:Boolean
    leader:Boolean 
}
input FamilyInput{
    man:ParentData!,
    woman:ParentData!
    campName:String!
    children:[PersonData!]
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