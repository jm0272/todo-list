import React from "react";

export default function Item({todo, onDelete, onToggle}) {
  return (
    <div>
      <input type="checkbox" onClick={()=>{onToggle(todo.id);}} />
      <span>{todo.todo}</span>
      <button onClick={() => {onDelete(todo.id);}}>삭제</button>
    </div>
  );
}
