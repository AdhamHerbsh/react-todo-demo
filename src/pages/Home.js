import Todo from "./Todo";
import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="container-md text-center bg-light border rounded mh-100">
        <h1>Welcome to the Todo App</h1>
        <p className="lead">Manage your tasks efficiently!</p>
        <Todo />
      </div>
    );
  }
}

export default Home;
