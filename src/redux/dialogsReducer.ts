
import { ActionsType, AddMessasgeType, DialogsType, UpdateMessasgeType } from '../Components/DescriptionType/MyTypes';

const ADD_MESSAGE     = "ADD-MESSAGE"
const UPDATE_MESSAGE  = "UPDATE-MESSAGE"

export function addMessageActionCreator():AddMessasgeType{ return { type: ADD_MESSAGE } }
export function updateMesssageActionCreator(text: string):UpdateMessasgeType{ return {type: UPDATE_MESSAGE, newMessageText: text} }

let initialState = {

  users : [
    {name: "Andrey",    id: "1"},
    {name: "Sveta",     id: "2"},
    {name: "Sasha",     id: "3"},
    {name: "Valera",    id: "4"},
    {name: "Victor",    id: "5"}
  ],

  messages: [
    {message: "Hi!",       id: "1"},
    {message: "How are you?", id: "2"},
    {message: "By!",       id: "3"}
  ],

  newMessageText: ""

}

const dialogsReducer = ( state: DialogsType = initialState, action: ActionsType, ): DialogsType => {
    
    switch(action.type){

      case ADD_MESSAGE:
        const newMessageText = state.newMessageText;
        state.newMessageText = "";
        state.messages.push({message: newMessageText, id: "3"});
        return state;
      case UPDATE_MESSAGE:
        state.newMessageText = action.newMessageText;
        return state;
      default:
        return state;
    }

  }

  export default dialogsReducer;