import _ from 'lodash';
import Firebase from 'firebase';
//
import {
  FETCH_POST,
  DELETE_POST,
  CREATE_POST
} from './types';

const Posts = new Firebase('https://fbredux.firebaseio.com/');

const INITIAL_POSTS = {
  123: 'One Wierd Trick...',
  456: 'Bet you wanted to read this'
}

export function fetchPosts()
{
  Post.on('value', snapshot=>{
    dispatch({
      type:FETCH_POST,
      payload:snapshot.val()
    });
  })
}


export function createPost(post)
{
  return {
    type: CREATE_POST,
    payload: {[_.uniqueId()]:post}
  };
}



export function fetchPosts()
{
  return {
    type: FETCH_POST,
    payload: INITIAL_POSTS
  };
}

