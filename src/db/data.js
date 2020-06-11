const forums = [
    {
        id: 'f1',
        name: 'Economic',
        admin: 'u1',
        users: ['u1', 'u2']
    },
    {
        id: 'f2',
        name: 'Social',
        admin: 'u2',
        users: ['u1', 'u2', 'u3']
    },
    {
        id: 'f3',
        name: 'Political',
        admin: 'u3',
        users: ['u2', 'u3']
    },
];

const users = [
    {
        id: 'u1',
        name: 'Alex',
        forums: ['f1', 'f2'],
        picture: "alex_pic.png"
    },
    {
        id: 'u2',
        name: 'Max',
        forums: ['f1', 'f2', 'f3'],
        picture: "max_pic.png"
    },
    {
        id: 'u3',
        name: 'Mike',
        forums: ['f2', 'f3'],
        picture: "mike_pic.png"
    },
]

const messages = [
    {
        id: 'm1',
        text: 'This is economic disaster',
        author: 'u2',
        forum: 'f1',
        createdAt: 1591664400000
    },
    {
        id: 'm2',
        text: 'We should look at ecomomic benefits',
        author: 'u1',
        forum: 'f1',
        createdAt: 1591668000000
    },
    {
        id: 'm3',
        text: 'I will plan a social meetup',
        author: 'u3',
        forum: 'f2',
        createdAt: 1591671600000
    },
    {
        id: 'm4',
        text: 'We can discuss our political views here',
        author: 'u3',
        forum: 'f3',
        createdAt: 1591675200000
    },
    {
        id: 'm5',
        text: 'It will help my political career',
        author: 'u2',
        forum: 'f3',
        createdAt: 1591678800000
    },
    {
        id: 'm6',
        text: 'Lets organize a social event',
        author: 'u1',
        forum: 'f2',
        createdAt: 1591682400000
    },
]

const db = {
    forums,
    users,
    messages,
}

export {db as default}