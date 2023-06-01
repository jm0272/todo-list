import React from "react";

export default function Form({todoList, onClick, onChange}) {

  const { input } = todoList;

  return (
    <div>
      <input type="text" name="todo" onChange={(e) => {onChange(e)}} value={input.todo}/>
      <button onClick={ () => {onClick(input.todo)} }>Add</button>
    </div>
  );
}
