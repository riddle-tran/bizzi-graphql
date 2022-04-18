import { buildSchema } from "graphql";

const schemas = buildSchema(`
    type Query {
        pong: String
        user(id: ID!): User
        users(limit: Int): [User]
    }
    type Mutation {
        deleteUser(id: ID!): UserResponse
        signIn(code: String!): SignInResponse
        addUser(email: String!, userName: String!, avatarUrl: String!, provide: String!, displayName: String!): UserResponse
        updateUser(id: ID!, email: String, userName: String, avatarUrl: String, provide: String, displayName: String): UserResponse
    }
    type User {
        id: ID!
        email: String
        provide: String!
        userName: String!
        avatarUrl: String
        displayName: String
    }
    type Users {
        users: [User]
    }
    type UserResponse {
        data: User
        error: String
        ok: Boolean
    }
    type SignInResponseData {
        token: String,
        user: User
    }
    type SignInResponse {
        data: SignInResponseData
        error: String
        ok: Boolean
    }
`);

export default schemas;
