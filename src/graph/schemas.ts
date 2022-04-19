import { buildSchema } from "graphql";

const schemas = buildSchema(`
    type Query {
        pong: String
        getCarts( id:  ID, limit:Int,userId:  String,quantity:  Int, productId:  String): GetCartsResponse
        getProducts(id: ID, name: String, price: Float, thumbnail: String, description: String,limit: Int): GetProductsResponse
    }
    type Mutation {
        signOut: SignOutResponse
        signIn(code: String!): SignInResponse
        createCart(productId: String!, quantity: Int!): CreateCartResponse
        createProduct(name: String!, price: Float!, thumbnail: String, description: String): CreateProductResponse
    }
    type User {
        id: ID!
        email: String
        role: String!
        provide: String!
        userName: String!
        avatarUrl: String
        displayName: String
    }
   
    type SignInResponseData {
        token: String!
        role: String!
        user: User
    }
    type SignInResponse {
        data: SignInResponseData
        error: String
        ok: Boolean
    }

    type SignOutResponse {
        error: String
        ok: Boolean
    }

    type Product {
        id: ID!
        name: String!
        price: Float!
        thumbnail: String
        description: String
    }
    
    type Cart {
        id: ID!
        quantity: Int!
        userId: String!
        productId: String!
    }

    type GetCartsResponse{
        data: [Cart]
        error: String
        ok: Boolean
    }

    type GetProductsResponse {
        data: [Product]
        error: String
        ok: Boolean
    }

    type CreateProductResponse {
        data: Product
        error: String
        ok: Boolean
    }

    type CreateCartResponse {
        data: Cart
        error: String
        ok: Boolean
    }
`);

export default schemas;
