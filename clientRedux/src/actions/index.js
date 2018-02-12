import axios from "axios";

let nextItemId = 0;
const loadItems = text => {
  return {
    type: "LOAD_ITEMS"
  };
};
const addItem = text => {
  return {
    type: "ADD_ITEM",
    id: nextItemId++,
    text
  };
};
const editItem = (id, text) => {
  return {
    type: "EDIT_ITEM",
    id,
    text
  };
};
const deleteItem = id => {
  return {
    type: "DELETE_ITEM",
    id
  };
};
const completedItem = id => {
  return {
    type: "COMPLETED_ITEM",
    id
  };
};
const toggleAll = toggle => {
  return {
    type: "TOGGLE_ALL",
    toggle
  };
};

const clearCompleted = toggle => {
  return {
    type: "CLEAR_COMPLETED"
  };
};
const fetchPosts = subreddit => {
  console.log("fetchPosts");
  return dispatch => {
    // dispatch(requestPosts(subreddit));
    return axios(`http://192.168.2.21/api/${subreddit}`)
      .then(response => response.json())
      .then(json => dispatch(loadItems(subreddit, json)));
  };
};
export {
  loadItems,
  addItem,
  editItem,
  deleteItem,
  completedItem,
  toggleAll,
  clearCompleted,
  fetchPosts
};
