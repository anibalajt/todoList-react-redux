import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import Input from "./input";
const LIST_QUERY = gql`
  query GetLIST {
    list @client {
      id
      text
      completed
    }
  }
`;

const List = ({
  handleEdit,
  handleSubmit,
  handleCompleted,
  handleDelete,
  edit,
  idEdit,
  toggle,
  items,
  loading
}) => {
  if (loading) {
    return <div> loading... </div>;
  }
  switch (toggle) {
    case 2:
      items = items.filter(item => {
        return !item.completed ? item : null;
      });
      break;
    case 3:
      items = items.filter(item => {
        return item.completed ? item : null;
      });
      break;
    default:
      break;
  }
  return (
    <ul>
      {items.map(item => (
        <li
          key={item.id}
          className={`${
            edit && idEdit === item.id ? "editing " + idEdit : ""
          } ${item.completed ? "completed" : ""}`}
        >
          <div className="view">
            <input
              checked={item.completed}
              className="toggle"
              type="checkbox"
              onChange={handleCompleted.bind(this, item.id, !item.completed)}
            />
            <label onDoubleClick={() => handleEdit(item.id)}>{item.text}</label>
            <button
              className="delete"
              onClick={handleDelete.bind(this, item.id)}
            />
          </div>
          {edit && idEdit === item.id ? (
            <Input handleSubmit={handleSubmit} textEdit={item.text} />
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default graphql(LIST_QUERY, {
  props: ({ data: { list, loading } }) => ({
    items: list,
    loading
  })
})(List);
