import { AppState, AppDispatch } from './../../redux/redux-store';
import { Dispatch, Store } from "redux"


export type AppPropsType = {
  state: AppState
  dispatch: AppDispatch
}

//export type StateType = {  
//  dialogs: DialogsType
//  content: ContentType
//}

export type DialogsType = {
  users: Array<UserType>
  messages: Array<MessageType>
  newMessageText: string
}

export type DialogsPropsType = {
  dialogs: DialogsType
  dispatch: AppDispatch
}

export type UserType = {
    name: string
    id: string
}
  
export type MessageType = {
    message: string
    id: string
}

export type ContentType = {
  posts: Array<PostsType>
  textPost: string
}

export type PostsType = {
  message: string
  likes: number
}


export type PostsPropsType = {
  message: string
  likes: number
  dispatch: AppDispatch
}

export type ContentPropsType = {
  content: ContentType
  dispatch: AppDispatch
}

export type DialogItemPropsType = {
  name: string
  id: string
}

export type MessagePropsType = {
  message: string
}


export type PostPropsType = {
  posts: Array<PropsType>
  textPost: string
  dispatch: AppDispatch
}

export type PropsType = {
  message: string
  likes: number
}

export type AddPostType = {
  type: "ADD-POST"
}

export type UpdatePostType = {
  type: "UPDATE-POST"
  newPostText: string
}

export type AddMessasgeType = {
  type: "ADD-MESSAGE"
}

export type UpdateMessasgeType = {
  type: "UPDATE-MESSAGE"
  newMessageText: string
}

export type ActionsType = AddPostType | UpdatePostType | AddMessasgeType | UpdateMessasgeType