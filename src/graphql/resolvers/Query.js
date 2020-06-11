const Query = {
    showAlreadyJoinedForums(parent, args, {db}, info) {
        let user = db.users.find(user => user.id === args.userId)
        if (!user) {
            throw new Error("User does not exists!")
        }
        return user        
    },
    availableForums(parent, args, {db}, info){
        let forums = []
        db.forums.forEach(forum => {
            let existingUsers = forum.users
            if (!existingUsers.some(userId => userId === args.user)) {
                return forums.push(forum)
            }
        });

        return forums
    },
    showAllMessages(parent, args, {db}, info) {
        if(!db.forums.some(forum => forum.id === args.forum)){
            throw new Error("Forum does not exists!")
        }
        return db.messages.filter(msg => msg.forum === args.forum)
                .sort((a, b) => a.createdAt - b.createdAt)
    },
    seeAllMembers(parent, args, {db}, info) {
        let forum = db.forums.find(forum => forum.id === args.forum) 
        if(!forum){
            throw new Error("Forum does not exists!")
        }
        return forum.users.map(userId => db.users.find(user => user.id === userId))
        
    }
}

export {Query as default}