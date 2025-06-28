const TodoForm = ({ newTodo, onInputChange, onAddTodo }) => (
  <form className="form-control mb-3" onSubmit={onAddTodo}>
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        value={newTodo}
        onChange={onInputChange}
        placeholder="Add a new todo"
      />
      <button className="btn btn-success" type="submit">
        Add Todo
      </button>
    </div>
  </form>
);

export default TodoForm;
