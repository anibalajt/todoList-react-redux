import axios from "axios";

const loadItems = data => {
  return {
    type: "LOAD_ITEMS",
    data
  };
};
const addItem = (response, obj) => {
  return {
    type: "ADD_ITEM",
    id: obj.id,
    text: obj.text
  };
};
const editItem = (response, obj) => {
  return {
    type: "EDIT_ITEM",
    id: obj.id,
    text: obj.text
  };
};
const deleteItem = (response, obj) => {
  return {
    type: "DELETE_ITEM",
    id: obj.id
  };
};
const completedItem = (response, obj) => {
  return {
    type: "COMPLETED_ITEM",
    id: obj.id
  };
};
const toggleAll = (response, obj) => {
  console.log("object",obj);
  return {
    type: "TOGGLE_ALL",
    toggle: obj.completed
  };
};

const clearCompleted = toggle => {
  return {
    type: "CLEAR_COMPLETED"
  };
};
const fetchGet = obj => {
  console.log("fetchGets ",obj);
  const { id, text, completed, action } = obj;
  return dispatch => {
    axios
      .get(`http://192.168.2.21:3001/api/${action}`, {
        params: {
          id,
          text,
          completed
        }
      })
      .then(function(response) {
        console.log(response);
        dispatch(eval(action)(response.data, obj));
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};
const fetchPosts = obj => {
  const { id, text, action } = obj;
  return dispatch => {
    console.log("dispatch");
    axios
      .post(`http://192.168.2.21:3001/api/${action}`, {
        id,
        text
      })
      .then(function(response) {
        response.data.id ? (obj.id = response.data.id) : null;
        dispatch(eval(action)(response.data, obj));
      })
      .catch(function(error) {
        console.log(error);
      });
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
  fetchPosts,
  fetchGet
};
