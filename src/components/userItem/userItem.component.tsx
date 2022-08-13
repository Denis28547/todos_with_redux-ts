import { FC, useEffect } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks/hooks";

const User: FC = () => {
  const { userId } = useParams();
  const users = useAppSelector((state) => state.user.users);
  const navigate = useNavigate();

  const currentUser = users.find((user) => user.id === Number(userId));
  console.log(users);
  if (!currentUser) {
    useEffect(() => {
      navigate(-1);
    }, []);
    return null;
  }

  const { username, email, id, address } = currentUser;

  return (
    <>
      <Link to="/" style={{ display: "block" }}>
        HOME
      </Link>
      User ({username}) with ID: {id} lives in city {address.city} on street{" "}
      {address.street}
    </>
  );
};

export default User;
