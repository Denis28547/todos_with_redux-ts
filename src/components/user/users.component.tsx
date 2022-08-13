import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../store/hooks/hooks";
import { fetchUsers } from "../../store/user/user.reducer";

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
    <>
      <Link
        style={{ display: "block", margin: "1rem 0", fontSize: "50px" }}
        to="/"
      >
        HOME
      </Link>
      {users.map((user) => {
        return (
          <Link
            style={{
              display: "block",
              margin: "1rem 0",
              fontSize: "40px",
              textDecoration: "none",
            }}
            to={`./${user.id}`}
            key={user.id}
          >
            {user.username}
          </Link>
        );
      })}
    </>
  );
};

export default Users;

{
  /* <div key={user.id}>{user.username}</div> */
}
