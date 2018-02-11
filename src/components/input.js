import React from "react";

let AddItem = ({ handleSubmit, dispatch }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="tarea" placeholder="tarea" />
    </form>
  );
};

export default AddItem;
