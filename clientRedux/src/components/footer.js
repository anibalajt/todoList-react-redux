import React from "react";

export default ({ items, handleClearCompleted, handleToggle, toggle }) => {
  return (
    <div className="footer">
      <ul className="filters">
        <li>
          <a
            className={toggle === 1 ? "selected" : ""}
            onClick={handleToggle.bind(this, 1)}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={toggle === 2 ? "selected" : ""}
            onClick={handleToggle.bind(this, 2)}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={toggle === 3 ? "selected" : ""}
            onClick={handleToggle.bind(this, 3)}
          >
            Completed
          </a>
        </li>
      </ul>
      {items > 0 ? (
        <button onClick={handleClearCompleted} className="clear-completed">Clear completed</button>
      ) : null}
    </div>
  );
};
