import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Header from './Components/Header/header';
import Content from './Components/Content/content';
import Dialogs from './Components/Dialogs/dialogs';
import Music from './Components/Music/music';
import News from './Components/News/news';
import { AppPropsType } from './Components/DescriptionType/MyTypes';


function App(props: AppPropsType) { 

  return (

    <BrowserRouter>

      <div className="app-wrapper">

        <Header />
        <Navbar />

          <div className = "app-wrapper-content"> 
            {/*<Route path='/content'  component ={ Content  } />
            <Route path='/messages' component = { Dialogs } />*/}

            <Route path='/dialogs' render = { () => < Dialogs dispatch = {props.dispatch} dialogs = {props.state.dialogs} /> } />
            <Route path='/content' render = { () => < Content dispatch = {props.dispatch} content = {props.state.content}/> } />

            <Route path='/news' component = { News } />
            <Route path='/music' component = { Music } />
            
          </div>

      </div> 

    </BrowserRouter>

  );

}

export default App;