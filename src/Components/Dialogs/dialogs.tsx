import React, { ChangeEvent, useRef } from 'react';
import classDialogs from './dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageIem';
import { DialogsPropsType } from '../DescriptionType/MyTypes';
import {updateMesssageActionCreator, addMessageActionCreator} from "../../redux/dialogsReducer";

const Dialogs = (props: DialogsPropsType) => {

    const usersElementsJSX    = props.dialogs.users.map(element => { return <DialogItem name = {element.name} id = {element.id} /> })
    const messagesElementsJSX = props.dialogs.messages.map(element => { return <MessageItem message = {element.message}/> })
    const newMessageElement   = useRef<HTMLTextAreaElement>(null);

    const addMessage = () => {
        if(newMessageElement.current){
            props.dispatch(addMessageActionCreator());     
        }
    }
    
    const updateMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateMesssageActionCreator(event.currentTarget.value))
    }

    return (
        <div className = {classDialogs.dialogs}>
            
            <div className = {classDialogs.dialogsItems}>
                {usersElementsJSX}
            </div>

            <div className = {classDialogs.messagesItem}>
                {messagesElementsJSX}
                <div>
                    <textarea value = {props.dialogs.newMessageText} ref = {newMessageElement} onChange = {updateMessage}></textarea>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>

        </div>
    )

}

export default Dialogs;