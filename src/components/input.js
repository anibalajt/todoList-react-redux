import React from "react";

let AddItem = ({ handleSubmit, dispatch }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input className="new" type="text" name="item" placeholder="tarea" />
    </form>
  );
};

export default AddItem;
