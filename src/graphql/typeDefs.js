import { gql } from 'apollo-server-express'

export default gql`
    type Query {
        showAlreadyJoinedForums(userId: String!): User!
        availableForums(user: String!): [Forum!]!
        showAllMessages(forum: String!): [Message!]!
        seeAllMembers(forum: String!): [User!]!
    }
    type Mutation {
        createForum(forumData: ForumInputs): Forum!
        joinForum(forumId: String!, userId: String!): Forum!
        createMessage(msgData: MessageInputs): Message!
    }
    input ForumInputs {
        id: String!
        name: String!
        admin: String!
    }
    input MessageInputs {
        id: String!
        text: String!
        author: String!
        forum: String! 
        createdAt: Float! 
    }
    type Forum {
        id: String
        name: String
        admin: User
        users: [User]
    }
    type User {
        id: String
        name: String
        forums: [Forum]
        picture: String
        messages: [Message!]
    }
    type Message {
        id: String
        text: String
        author: User
        forum: Forum
        createdAt: Float!   
    }
`;
