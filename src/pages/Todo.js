import React from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: localStorage.getItem("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        : ["Task 1 Added as Default"],
      newTodo: "",
    };
  }

  // Function to handle input change for the new todo item
  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  // Function to add a new todo item
  addTodo = (event) => {
    event.preventDefault();
    if (this.state.newTodo.trim()) {
      this.setState((prevState) => ({
        todos: [...prevState.todos, prevState.newTodo],
        newTodo: "",
      }));
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  };

  // Function to delete a todo item by its index
  deleteTodo = (index) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((_, i) => i !== index),
    }));
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };

  render() {
    return (
      <div className="container-md text-center mh-100">
        <h1>Todo List</h1>
        <div className="row mb-3 h-75">
          <TodoList todos={this.state.todos} onDeleteTodo={this.deleteTodo} />
        </div>
        <TodoForm
          newTodo={this.state.newTodo}
          onInputChange={this.handleInputChange}
          onAddTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default Todo;
