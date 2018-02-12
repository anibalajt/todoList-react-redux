import React from "react";

const AddItem = ({ handleSubmit, dispatch, textEdit }) => {
  return (
    <form onSubmit={handleSubmit}>
      {!textEdit ? <input className="toggle-all" type="checkbox" /> : null}

      <input
        defaultValue={textEdit}
        autoComplete="off"
        className="new"
        type="text"
        name="item"
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export default AddItem;
