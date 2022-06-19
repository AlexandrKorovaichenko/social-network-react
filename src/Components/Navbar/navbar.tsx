import React from 'react';
import { NavLink } from 'react-router-dom';
import classNavbar from './navbar.module.css';

const Navbar = () => {
    return(
        <nav className = {classNavbar.nav}>
            <div className = {classNavbar.item}><NavLink to = "/content"    activeClassName = {classNavbar.active}>Content</NavLink></div>
            <div className = {classNavbar.item}><NavLink to = "/dialogs"   activeClassName = {classNavbar.active}>Dialogs</NavLink></div>
            <div className = {classNavbar.item}><NavLink to = "/news"       activeClassName = {classNavbar.active}>News</NavLink></div>
            <div className = {classNavbar.item}><NavLink to = "/music"      activeClassName = {classNavbar.active}>Music</NavLink></div>
            <div className = {classNavbar.item}><NavLink to = "/settings"   activeClassName = {classNavbar.active}>Settings</NavLink></div>
        </nav>
    );
}


export default Navbar;