import React from "react";

const AddItem = ({ handleToggleAll, handleSubmit, textEdit }) => {
  return (
    <form onSubmit={handleSubmit}>
      {!textEdit ? (
        <input
          className="toggle-all"
          type="checkbox"
          onChange={handleToggleAll.bind(this)}
        />
      ) : null}

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
