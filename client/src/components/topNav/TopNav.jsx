import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TopNav.scss";

function TopNav() {
  return (
    <nav className="heading__container">
      <h1 className="heading__title">To-Do</h1>
      <Link to="/create">
        <input className="heading__add" type="button" value="+" />
      </Link>
    </nav>
  );
}

export default TopNav;
