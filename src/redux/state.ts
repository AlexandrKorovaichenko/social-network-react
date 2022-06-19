import { ActionsType } from '../Components/DescriptionType/MyTypes';
import contentReducer from "./contentReducer";
import dialogsReducer from "./dialogsReducer";


  let store = {

    _state: {

        dialogs: {
          
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

            },
    
      ///////////////////////////////////////////////////////
  
        content: {
          
              posts: [
                  {message: "Hi!",         likes: 10},
                  {message: "This is",     likes: 10},
                  {message: "First post",  likes: 10}
                ],
              
              textPost : "start"

            }
      
    },

    _rerender(){ console.log("State changed"); },
    getState(){ return this._state },
    subscribe(paramCallback: () => void){ this._rerender = paramCallback },

    dispatcn(action: ActionsType ){ 
      this._state.content = contentReducer( this._state.content,action);
      this._state.dialogs = dialogsReducer(this._state.dialogs, action);
      this._rerender();
    }

  }

  export default store;