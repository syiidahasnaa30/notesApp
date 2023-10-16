import React from "react";
import { Link } from "react-router-dom";
import { BiArchiveIn, BiHomeAlt } from "react-icons/bi";
import { BsMoonStars } from "react-icons/bs";
import { MdGTranslate } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

const Navigation = () => {
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
          <FiLogOut />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
