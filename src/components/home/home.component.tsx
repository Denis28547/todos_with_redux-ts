import { FC } from "react";
import { Link } from "react-router-dom";

import "../additional-styles/button-styles.css";
import "./home.styles.css";

const Home: FC = () => {
  return (
    <div className="home">
      <div className="home-links-container">
        <Link to="/todo" className="home-link-item  custom-button">
          Todo
        </Link>
        <Link to="/users" className="home-link-item  custom-button">
          Users
        </Link>
      </div>
    </div>
  );
};

export default Home;
