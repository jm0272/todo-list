import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';
import { useReducer } from 'react';
import TodoListReducer from './reducer/TodoListReducer'

export default function App() {

  const [todoList, dispatch] = useReducer(TodoListReducer, initialTodoList);
  //console.log('todoList init : ', todoList);
  const handleInsert = (todo) => {
    const addTodo = {
      id : todoList.todos.length,
      todo,
      isCompleted : false
    };
    dispatch({ type: 'INSERT', addTodo });
  };

  const handleChange = (e) => {
    const { name , value } = e.target;
    const obj = { type: 'SET_VAL', name, value };
    dispatch(obj);
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE', id });
  };

  const handleToggle = (id) => {
    dispatch({ type: 'TOGGLE', id });
  };

  return (
    <>
      <Header></Header>
      <List todos={todoList.todos} onDelete={handleDelete} onToggle={handleToggle}></List>
      <Form todoList={todoList} onClick={handleInsert} onChange={handleChange}></Form>
    </>
  );
}

const initialTodoList = {
  input : {
    todo : ''
  },
  todos : [
    // {
    //   id : 0,
    //   todo : '',
    //   isCompleted : false
    // }
  ]
};
