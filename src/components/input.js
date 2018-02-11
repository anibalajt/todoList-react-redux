import React from "react";

const InputTask = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="tarea" placeholder="tarea" />
    </form>
  );
};

export default InputTask;
