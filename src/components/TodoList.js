import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="list-group list-group-flush overflow-auto px-2">
    {todos.map((todo, index) => (
      <TodoItem key={index} todo={todo} onDelete={() => onDeleteTodo(index)} />
    ))}
  </ul>
);

export default TodoList;
