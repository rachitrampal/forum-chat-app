const Forum = {
    admin(parent, args, {db}, info) {
        return db.users.find(forum => forum.id === parent.admin)
    },
    users(parent, args, {db}, info) {
        let usersIds = parent.users
        let allUsers = []
        usersIds.forEach(id => {
            let user = db.users.find(user => user.id === id)
            return allUsers.push(user)
        });
        return allUsers
    }
}

export {Forum as default}