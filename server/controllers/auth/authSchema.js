import { buildSchema } from "graphql";

export default buildSchema(`
    input UserData {
        firstName: String!
        lastName: String!
        phone: String!
        username: String!
        email: String!
        password: String!
    }
    type Message{
        message: String!
    }
    type Admin{
        _id: ID!
        firstName: String!
        lastName: String!
        username: String!
        email: String!
        adminType: String!
        phone: String!
        token: String!
    }

    type RootQuery{
        hello: Message!
        loginAdmin(email: String! password: String!): Admin!      
        verifyAccount(activationcode: String!): Admin!
    }
    type RootMutation{
        createAdmin(userInput: UserData): Message!
        updateAdmin(id: String! data: UserData!): Admin!
        deleteAdmin(adminId: String! id: String!): Message!
    }
    schema{
        query: RootQuery
        mutation: RootMutation
    }
`)