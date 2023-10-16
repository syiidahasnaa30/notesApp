import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BiArchiveIn, BiHomeAlt } from "react-icons/bi";
import { BsMoonStars } from "react-icons/bs";
import { MdGTranslate } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

const Navigation = ({ user, logout }) => {
  if (user === null) {
    return (
      <nav className="navigation">
        <ul>
          <li>
            <BsMoonStars />
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
          <BsMoonStars />
        </li>
        <li>
          <MdGTranslate />
        </li>
        <li>
          <button onClick={logout}>
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
