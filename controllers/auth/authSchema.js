const { buildSchema } = require("graphql");

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
        loginAdmin(email: String! password: String!): Admin!       
    }
    type RootMutation{
        createAdmin(userInput: UserData): Admin!
        updateAdmin(id: ID! data: userData!): Admin!
        deleteAdmin(id: ID!): Message!
    }
    schema{
        query: RootQuery
        mutation: RootMutation
    }
`)