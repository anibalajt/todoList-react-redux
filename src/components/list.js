import React from "react";
import PropTypes from "prop-types";

const List = ({ items, handleEdit, edit, idEdit }) => {
  console.log(edit, idEdit);
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i} className={edit && idEdit == i ? "editing " + idEdit : ""}>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label onClick={() => handleEdit(item.id)}>{item.text}</label>
            <button className="delete" />
          </div>
          {edit && idEdit == i ? <input className="edit" type="text" /> : null}
        </li>
      ))}
    </ul>
  );
};

export default List;
