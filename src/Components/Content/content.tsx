
import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classContent from  './content.module.css';
import MyInfo from './MyInfo/MyInfo';
import { ContentPropsType } from '../DescriptionType/MyTypes';

const Content = (props: ContentPropsType) => {
  return(
    <div className = {classContent.content}>
      <MyInfo />
      <MyPosts dispatch = {props.dispatch} posts = {props.content.posts} textPost = {props.content.textPost}/>
    </div>
  );
}


export default Content;

