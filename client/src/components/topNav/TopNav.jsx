import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TopNav.scss";

function TopNav() {
  return (
    <div>
      <div className="heading__container">
        <h1 className="heading__title">To-Do</h1>
        <Link to="/create">
          <input className="heading__add" type="button" value="+" />
        </Link>
      </div>
      {/* <div className="heading__filters" onClick={handleClick}>
        <input type="button" value="work" />
        <input type="button" value="study" />
        <input type="button" value="entertainment" />
        <input type="button" value="family" />
      </div> */}
    </div>
  );
}

export default TopNav;
