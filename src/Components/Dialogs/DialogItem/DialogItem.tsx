import React from 'react';
import classDialogs from '../dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { DialogItemPropsType } from '../../DescriptionType/MyTypes';

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className = {classDialogs.dialog}>
            <NavLink to = {"/messages/" + props.id} activeClassName = {classDialogs.active}>{props.name}</NavLink>
        </div>
    )}


    export default DialogItem;