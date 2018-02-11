import React from "react";

export default ({ handleEdit, edit }) => {

  return (
    <ul>
      <li>Aqui mostraremos la lista</li>
      <li className="">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label onClick={handleEdit}>asdasd</label>
        </div>
        {edit ? <input className="edit" type="text" /> : null}
      </li>
    </ul>
  );
};

// export default List;
