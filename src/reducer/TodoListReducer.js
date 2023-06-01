export default function TodoListReducer(todoList, action) {
  console.log(' reducer 1param ', todoList);
  console.log(' reducer action', action);

  switch (action.type) {
    case 'SET_VAL' :
      return {
        ...todoList,
        input : {
          ...todoList.input,
          [action.name] : action.value
        }
      };
    case 'INSERT': {
      const { addTodo } = action;
      return {
        todos : [
          ...todoList.todos,
          addTodo
        ],
        input : {
          todo : ''
        }
      };
    }
    case 'DELETE': {
      const { id } = action;
      console.log('filter된 배열 : ', todoList.todos.filter((todo) => (todo.id !== id)));
      return {
        ...todoList,
        todos : todoList.todos.filter((todo) => (todo.id !== id))
      };
    }
    case 'TOGGLE': {
      const { id } = action;
      return {
        ...todoList,
        todos : todoList.todos.map((todo) => {
          if (todo.id === id) {
            return {
              id : todo.id,
              todo : todo.todo,
              isCompleted : !todo.isCompleted
            }
          }
          return todo;
        })
      };
    }
    default: {
    }
  }
}
