import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
import "./TopNav.scss";

function TopNav() {
  return (
    <nav className="heading__container">
      <h1 className="heading__title">todo</h1>
      <Link to="/create">
        <HiPlus className="heading__add" />
      </Link>
    </nav>
  );
}

export default TopNav;
