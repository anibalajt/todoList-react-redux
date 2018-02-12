import React from "react";

const AddItem = ({ handleSubmit, dispatch }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        autoComplete="off"
        className="new"
        type="text"
        name="item"
        placeholder="tarea"
      />
    </form>
  );
};

export default AddItem;
