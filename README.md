# assignment-chat-app

# Overview
This is a Node.js based backend forum application. It contains GraphQL schemas and resolvers for serving specific use cases in reference to the real-time chat application. Please follow the below steps to run this application.

1. Download/Clone the source code on your filesystem.
2. Execute command `npm install` from the terminal(use VS Code or preferable editor) at the root location of the application
3. Execute command `npm run build` to start the application. 
4. The terminal logs will show a clickable url like `http://localhost:4000/graphql`. Open that link and you will see the GraphQL playground to execute the queries.
5. The queries are listed on `./queries.txt` file each of which is performing a specific task. `Note:` These queries use the test data created to support multiple use cases so please refer to the file `./src/db/data.js`
6. For Part 2 of the requirement document please refer to file `CHANGES.md`