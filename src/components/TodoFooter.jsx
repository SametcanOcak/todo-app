import React, { useState } from 'react';

function TodoFooter({ todos, setTodos, status, setStatus }) {
  const completed = todos.filter((todo) => todo.completed === true);
  const unCompleted = todos.filter((todo) => todo.completed === false);

  const clearCompleted = (e) => {
    e.preventDefault();
    setTodos(todos.filter((todo) => todo.completed == false));
  };

  const clickStyle = (e) => {
    setStatus(e.target.id);
  };
  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{unCompleted.length}</strong>
        </span>

        <ul className="filters">
          <li>
            <a 
            onClick= {clickStyle}
            className={status === "all" ? "selected" : ""}
            id='all'
            >
              All
            </a>
          </li>
          <li>
            <a
            onClick= {clickStyle}
            className={status === "active" ? "selected" : ""}
            id='active'
            >
              Active
            </a>
          </li>
          <li>
            <a
            onClick= {clickStyle}
            className={status === "completed" ? "selected" : ""}
            id='completed'
            >
              Completed
            </a>
          </li>
        </ul>

        <button
         className={completed == 0 ? "hidden" : "clear-completed"}
         onClick={clearCompleted}
        >
          Clear completed
        </button>
      </footer>
    </div>
  );
};

export default TodoFooter
