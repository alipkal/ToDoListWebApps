import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

// Fungsi kod dalam TodoList
function TodoList() {
  const [todos, setTodos] = useState([]);

  //Fungsi untuk menambah "todo list"
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  //Fungsi untuk mengemas kini "todo list"
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  //Fungsi untuk memadam "todo list"
  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  //Fungsi untuk memaparkan "todo list"
  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
      //Kod untuk memaparkan halaman Todo List Web Apps
    <>
      <h1>Todo List Web Apps?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;