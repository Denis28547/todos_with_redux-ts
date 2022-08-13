import { FC, useEffect } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks/hooks";

import "../additional-styles/button-styles.css";
import "./userItem.styles.css";

const User: FC = () => {
  const { userId } = useParams();
  const users = useAppSelector((state) => state.user.users);
  const navigate = useNavigate();

  const currentUser = users.find((user) => user.id === Number(userId));

  if (!currentUser) {
    useEffect(() => {
      navigate(-1);
    }, []);
    return null;
  }

  const { username, email, id, address } = currentUser;

  return (
    <>
      <Link to="/" className="custom-button userItem-home-button">
        HOME
      </Link>
      <div className="userItem-text">
        User ({username}) with ID: {id} lives in city {address.city} on street{" "}
        {address.street}
      </div>
    </>
  );
};

export default User;
