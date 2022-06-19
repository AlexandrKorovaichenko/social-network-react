import React, { ChangeEvent, useRef } from 'react';
import { PostPropsType } from '../../DescriptionType/MyTypes';
import Post from  './Post/Post';
import {addPostActionCreator, updateTextPostActionCreator} from "../../../redux/contentReducer"

const MyPosts = (props: PostPropsType) => {

  let newPostElement = useRef<HTMLTextAreaElement>(null);

  let postsElementsJSX = props.posts.map(element => {
    return <Post message = {element.message} likes = {element.likes}/>
  })

  let addPost = () => {
    if(newPostElement.current) {
      props.dispatch(addPostActionCreator()); 
    }
  }

  let updateTextPost = (event: ChangeEvent <HTMLTextAreaElement>) => {
    props.dispatch(updateTextPostActionCreator(event.currentTarget.value));
  }

  return(
      <div>
        <h3>My Posts:</h3>
        
        <div>
          <div><textarea onChange = {(event) => updateTextPost(event)} ref = {newPostElement} value={props.textPost}></textarea></div>
          <div><button onClick = {addPost}>Add post</button></div>
        </div>

        <div className='posts'>
          {postsElementsJSX}
        </div>

      </div>
  );
}

export default MyPosts;

