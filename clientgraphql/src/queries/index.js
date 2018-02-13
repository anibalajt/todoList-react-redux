import gql from "graphql-tag";

const ADD_LIST = gql`
  mutation addList($text: String!, $completed: Boolean!) {
    addList(text: $text, completed: $completed) @client {
      id
    }
  }
`;

const COMPLETED_ITEM = gql`
  mutation completedItem($id: Int!, $completed: Boolean!) {
    completedItem(id: $id, completed: $completed) @client {
      id
    }
  }
`;
const EDIT_LIST = gql`
  mutation editItem($id: Int!, $text: String!) {
    editItem(id: $id, text: $text) @client {
      id
    }
  }
`;
const DELETE_LIST = gql`
  mutation deleteItem($id: Int!) {
    deleteItem(id: $id) @client {
      id
    }
  }
`;
const TOGGLE_ALL = gql`
  mutation toggleAll($completed: Boolean!) {
    toggleAll(completed: $completed) @client
  }
`;
const CLEAR_COMPLETED = gql`
  mutation clearCompleted($completed: Boolean!) {
    clearCompleted(completed: $completed) @client
  }
`;
export {
  ADD_LIST,
  COMPLETED_ITEM,
  EDIT_LIST,
  DELETE_LIST,
  TOGGLE_ALL,
  CLEAR_COMPLETED
};
