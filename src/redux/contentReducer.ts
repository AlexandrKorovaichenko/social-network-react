
import { ActionsType, AddPostType, ContentType, UpdatePostType } from '../Components/DescriptionType/MyTypes';

const ADD_POST        = "ADD-POST"
const UPDATE_POST     = "UPDATE-POST"

export function addPostActionCreator():AddPostType{ return { type: ADD_POST } }
export function updateTextPostActionCreator(text: string):UpdatePostType{ return {type: UPDATE_POST, newPostText: text} }

let initialState = {
    posts: [
        {message: "Hi!",         likes: 10},
        {message: "This is",     likes: 10},
        {message: "First post",  likes: 10}
      ],
    
    textPost : "start"
};

const contentReducer = (  state: ContentType = initialState, action: ActionsType  ): ContentType => {

    switch(action.type){
        case ADD_POST:  
            let nemPost = { message: state.textPost, likes: 5 };
            state.posts.push(nemPost);
            state.textPost = "";
            return state;
        case UPDATE_POST:
            state.textPost = action.newPostText;
            return state;    
        default:
            return state;
    }

}

export default contentReducer;