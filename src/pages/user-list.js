import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../actions/users";

export default function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const handleRemoveUser = (userId) => {
    dispatch(removeUser(userId));
  };

  return (
    <>
      {users.map((user) => (
        <div className="new" key={user.userId}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>

          <Link className="btn" to="/">
            Create
          </Link>

          <Link className="btn" to={`/users/${user.userId}/edit`}>
            Edit
          </Link>

          <button className="btn" onClick={() => handleRemoveUser(user.userId)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
