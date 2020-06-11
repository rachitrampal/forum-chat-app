const Mutation = {
    createForum(parent, args, {db}, info) {
        if (db.forums.some(forum => forum.id === args.forumData.id)) {
            throw new Error ("Forum with this id already exists. Please provide unique Id!")
        }
        if (db.forums.some(forum => forum.name === args.forumData.name)) {
            throw new Error ("Forum with this name already exists. Please provide unique name!")
        }
        if (!db.users.some(user => user.id === args.forumData.admin)) {
            throw new Error ("User does not exists!")
        }
        let forum = {
            ...args.forumData,
            users: [args.forumData.admin]
        }

        db.forums.push(forum)
        return forum
    },

    joinForum(parent, args, {db}, info) {
        let forum = db.forums.find(forum => forum.id === args.forumId)
        if (!forum) {
            throw new Error ("Forum does not exists!")
        }
        if (!db.users.some(user => user.id === args.userId)) {
            throw new Error ("User does not exists!")
        }

        if (!forum.users.some(id => id === args.userId)) {
            forum.users = [...forum.users, args.userId]
            return forum
        } else {
            throw new Error("This user is already member of this forum!")
        }
        
    },
    createMessage(parent, args, {db}, info) {
        if (db.messages.some(msg => msg.id === args.msgData.id)) {
            throw new Error ("Message with this id already exists. Please provide unique Id!")
        }
        if(!db.users.some(user => user.id === args.msgData.author)) {
            throw new Error("Author does not exists!")
        }
        if(!db.forums.some(forum => forum.id === args.msgData.forum)) {
            throw new Error("Forum does not exists!")
        }

        db.messages.push(args.msgData)

        return args.msgData
    }
}

export {Mutation as default}