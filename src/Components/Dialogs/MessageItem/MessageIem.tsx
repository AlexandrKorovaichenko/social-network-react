import React from 'react';
import classDialogs from '../dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { MessagePropsType } from '../../DescriptionType/MyTypes';

const MessageItem = (props: MessagePropsType) => {
    return (
        <div className = {classDialogs.message}>{props.message}</div>
    )}


export default MessageItem;