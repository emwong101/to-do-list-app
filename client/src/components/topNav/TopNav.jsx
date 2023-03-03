import React, { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
import "./TopNav.scss";
import CreateList from "../createList/CreateList";

function TopNav({ setOpen, setFirstMount }) {
  const location = useLocation();

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <nav className="heading__container">
      <Link
        to="/landing"
        className="heading__logo"
        onClick={() => setFirstMount(false)}
      >
        <h1 className="heading__title">todo</h1>
      </Link>
      <Link to="/home/create" state={{ backgroundLocation: location }}>
        <HiPlus className="heading__add" onClick={handleOpen} />
      </Link>
      <Outlet />
    </nav>
  );
}

export default TopNav;
