import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../actions/users";
import UserForm from "../components/user-form";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = function (user) {
    dispatch(addUser(user));
    navigate("/users");
  };

  return <UserForm onSubmit={onSubmit} />;
}
