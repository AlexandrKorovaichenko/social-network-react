import React from 'react';
import { PropsType } from '../../../DescriptionType/MyTypes';

const Post = (props: PropsType) => {
  return(
        <div>
          <div>{props.message}</div>
          <span>like</span> {props.likes}
        </div>
  );
}

export default Post;

