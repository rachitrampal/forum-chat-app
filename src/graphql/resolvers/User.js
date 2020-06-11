const User = {
    forums(parent, args, {db}, info) {
        let forumIds = parent.forums
        let allForums = []
        forumIds.forEach(id => {
            let forum = db.forums.find(forum => forum.id === id)
            return allForums.push(forum)
        });
        return allForums
    }
}

export {User as default}