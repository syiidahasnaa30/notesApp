import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BiArchiveIn, BiHomeAlt } from "react-icons/bi";
import { BsSun, BsMoon } from "react-icons/bs";
import { MdGTranslate } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import ThemeContext from "../contexts/ThemeContext";

const Navigation = ({ user, logout, toggleTheme }) => {
  const { theme } = React.useContext(ThemeContext);
  if (user === null) {
    return (
      <nav className="navigation">
        <ul>
          <li>
            <button className="button-logout" onClick={toggleTheme}>
              {theme === "dark" ? <BsSun /> : <BsMoon />}
            </button>
          </li>
          <li>
            <MdGTranslate />
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">
            <BiHomeAlt />
          </Link>
        </li>
        <li>
          <Link to="/archive">
            <BiArchiveIn />
          </Link>
        </li>
        <li>
          <button className="button-logout" onClick={toggleTheme}>
            {theme === "dark" ? <BsSun /> : <BsMoon />}
          </button>
        </li>
        <li>
          <MdGTranslate />
        </li>
        <li>
          <button className="button-logout" onClick={logout}>
            <FiLogOut />
          </button>
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};
export default Navigation;
