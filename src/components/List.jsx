import React from "react";
import Item from "./Item";

export default function List({todos, onDelete, onToggle}) {
  console.log(todos);
  return (
    <div>
      <ul>
      {
        todos.map((todo, index) => {
          return <Item key={index} onDelete={onDelete} onToggle={onToggle} todo={todo}></Item>;
        })
      }
      </ul>
    </div>
  );
}
