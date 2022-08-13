import { FC, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../store/hooks/hooks";
import { fetchUsers } from "../../store/user/user.reducer";

import "../additional-styles/button-styles.css";
import "./user.styles.css";

const Users: FC = () => {
  const dispatch = useAppDispatch();
  const { users, loading } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <div className="users">
      <Link to="/" className="users-home-button custom-button">
        HOME
      </Link>
      <div className="users-container grid-center">
        {users.map((user) => {
          return (
            <Link
              to={`./${user.id}`}
              key={user.id}
              className="user-container grid-center"
            >
              {user.username}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
