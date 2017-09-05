import _ from "lodash";
import Firebase from "firebase";
//
import { FETCH_POST, DELETE_POST, CREATE_POST } from "./types";

const Posts = new Firebase("https://fbredux.firebaseio.com/");

const INITIAL_POSTS = {
  123: "One Wierd Trick...",
  456: "Bet you wanted to read this"
};

export function fetchPosts() {
  Post.on("value", snapshot => {
    dispatch({
      type: FETCH_POST,
      payload: snapshot.val()
    });
  });
}

export function createPost(post) {
  return dispatch => Posts.push(post);
}

export function deletePost(key) {
  return dispatch => Posts.child(key).remove();
}
