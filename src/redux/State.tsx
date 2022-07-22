export type PostType = {
    id: number
    message: string
    likesCount: string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
    image: string
}
export type FriendsType = {
    id: number
    name: string
    image: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type ProfilePageType = {
    posts: Array<PostType>
    myClick?: () => void
}
export type FriendsPageType = {
    friends: Array<FriendsType>
}

export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: FriendsPageType
}


export let state: RootStateType = {
    dialogsPage: {
        dialogs: [
            {
                id: 1,
                name: 'Dmitry',
                image: 'https://media.istockphoto.com/vectors/human-face-avatar-icon-profile-for-social-network-man-vector-vector-id1227618801?k=20&m=1227618801&s=170667a&w=0&h=Pc_xaak-2cG8pSpHVVbTN3je0BYsxksghZZwzrEuYy4='
            },
            {
                id: 2,
                name: 'Kate',
                image: 'https://media.gettyimages.com/vectors/human-face-avatar-icon-profile-for-social-network-woman-vector-vector-id1227618778?s=2048x2048'
            },
            {
                id: 3,
                name: 'Alex',
                image: 'https://img.freepik.com/premium-vector/stylish-flat-black-white-human-avatar-social-media-presentation-people-avatar-icon-avatar-face-head-with-forearm-human-portrait-isolated-blue-background-vector-graphics_589396-126.jpg'
            },
            {
                id: 4,
                name: 'Sveta',
                image: 'https://media.gettyimages.com/vectors/human-face-avatar-icon-profile-for-social-network-woman-vector-vector-id1227618778?s=2048x2048'
            },
            {
                id: 5,
                name: 'Semen',
                image: 'https://img.favpng.com/17/14/24/social-media-computer-icons-avatar-icon-design-social-networking-service-png-favpng-CNVG8aDRvPkcJWcKYZGsZXfZr.jpg'
            },
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'What day is it today?'},
            {id: 4, message: 'Hello'},
            {id: 5, message: 'How are you?'},
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Message 1', likesCount: 'like 15'},
            {id: 2, message: 'Message 2', likesCount: 'like 8'},
            {id: 3, message: 'Message 3', likesCount: 'like 23'},
        ]
    },
    sidebar: {
        friends: [
            {
                id: 1,
                name: ' Dmitry',
                image: 'https://media.istockphoto.com/vectors/human-face-avatar-icon-profile-for-social-network-man-vector-vector-id1227618801?k=20&m=1227618801&s=170667a&w=0&h=Pc_xaak-2cG8pSpHVVbTN3je0BYsxksghZZwzrEuYy4='
            },
            {
                id: 2,
                name: ' Kate',
                image: 'https://media.gettyimages.com/vectors/human-face-avatar-icon-profile-for-social-network-woman-vector-vector-id1227618778?s=2048x2048'
            },
            {
                id: 3,
                name: ' Alex',
                image: 'https://img.freepik.com/premium-vector/stylish-flat-black-white-human-avatar-social-media-presentation-people-avatar-icon-avatar-face-head-with-forearm-human-portrait-isolated-blue-background-vector-graphics_589396-126.jpg'
            },

        ]
    },

}