    enum ForumType {
        PUBLIC
        PRIVATE
    }
    enum RequestStatus {
        PENDING
        APPROVED
        REJECTED
    }
    type Query {
        showAvailableForums(userId: String!): [Forum!]!
        requestsRaisedByMe(userId: String!): [Request!]!
        requestsAuthorisedToMe(userId: String!): [Request!]!
    }
    type Mutation {
      createForum(forumData: ForumInputs): Forum! 
      requestToJoinPrivateForum(forumId: String!, raisedByUserId: String): Request!
      AcceptRequestToJoinForum(reqId: String!): Request!
      RejectRequestToJoinForum(reqId: String!): Request!
    }
    input ForumInputs {
        id: String!
        name: String!
        admin: String!
        type: ForumType!
    }
    type Request {
        reqId: String!
        forumId: String!
        raisedByUserId: String!
        authorizingUserId: String!
        status: RequestStatus!
    }
    type Forum {
        id: String
        name: String
        admin: User
        users: [User]
        type: ForumType!
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