import React from "react";
import Input from "./input";

const List = ({
  items,
  handleEdit,
  handleSubmit,
  handleCompleted,
  edit,
  idEdit
}) => {
  console.log(items);
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i} className={`${edit && idEdit == i ? "editing " + idEdit : ""} ${item.completed?'completed':''}`}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onClick={handleCompleted.bind(this, item.id)}
            />
            <label onClick={() => handleEdit(item.id)}>
              {item.text} - {item.id}
            </label>
            <button className="delete" />
          </div>
          {edit && idEdit == i ? <Input handleSubmit={handleSubmit} /> : null}
        </li>
      ))}
    </ul>
  );
};

export default List;
