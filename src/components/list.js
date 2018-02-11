import React from "react";
import PropTypes from "prop-types";

const List = ({ items, handleEdit, edit }) => (
  <ul>
    {items.map((item, i) => (
      <li key={i}>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label onClick={() => handleEdit(item)}>{item.text}</label>
        </div>
        {edit ? <input className="edit" type="text" /> : null}
      </li>
    ))}
  </ul>
);

export default List;
