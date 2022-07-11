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
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type ProfilePageType = {
    posts: Array<PostType>
}

export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}



export let state: RootStateType = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dmitry'},
            {id: 2, name: 'Kate'},
            {id: 3, name: 'Alex'},
            {id: 4, name: 'Sveta'},
            {id: 5, name: 'Semen'},
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
    }
}