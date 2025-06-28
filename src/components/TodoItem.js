const TodoItem = ({ todo, onDelete }) => (
  <li className="list-group-item text-start border rounded mb-1">
    {todo}
    <button className="btn btn-danger float-end px-2 p-0" onClick={onDelete}>
      X
    </button>
  </li>
);

export default TodoItem;
