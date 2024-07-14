import React, { useState } from "react";
import { TodoForm } from "./TodoForm.js";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo.js";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), ...todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-wrapper">
      <section className="todo-header">
        <h1>
          Daily Task <br /> Todays main focus
        </h1>
        <TodoForm addTodo={addTodo} />
      </section>
      <section className="list-wrapper">
        {todos.map((todo, index) => (
          <Todo
            task={todo}
            key={todo.id}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </section>
    </div>
  );
};
