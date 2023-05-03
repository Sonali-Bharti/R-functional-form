import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../actions/users";
import UserForm from "../components/user-form";

export default function UserEdit() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) =>
    state.users.users.find((x) => String(x.userId) === userId)
  );

  const onSubmit = function (updatedUser) {
    dispatch(updateUser({ userId: user.userId, user: updatedUser }));
    navigate("/users");
  };

  return <UserForm onSubmit={onSubmit} user={user} />;
}
