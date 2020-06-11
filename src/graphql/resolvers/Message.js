const Message = {
    author(parent, args, {db}, info) {
        return db.users.find(user => user.id === parent.author)
    },
    forum(parent, args, {db}, info) {
        return db.forums.find(forum => forum.id === parent.forum)
    }
}

export {Message as default}