import React from 'react';

const ToDo = ({ todo, handleCheckedCompleted, deleteTodoItem }) => {
  return (
    <li
      style={{ marginBottom: 10, borderBottom: '1px solid gray', width: 420 }}
    >
      <div style={{ display: 'flex', gap: 300, marginButtom: 15 }}>
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCheckedCompleted(todo.id)}
          />
          {todo.title}
        </div>
        <div>
          <button
            type="button"
            aria-label="close"
            onClick={() => deleteTodoItem(todo.id)}
          >
            close
          </button>
        </div>
      </div>
    </li>
  );
};

export default ToDo;
