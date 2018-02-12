import React from "react";
import Input from "./input";

const List = ({
  handleEdit,
  handleSubmit,
  handleCompleted,
  handleDelete,
  items,
  edit,
  idEdit,
  toggle
}) => {
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
            <label onDoubleClick={() => handleEdit(item.id)}>
              {item.text} - {item.id}
            </label>
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

export default List;
