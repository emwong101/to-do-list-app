import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Link, useLocation, Outlet } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
import "./TopNav.scss";
import CreateList from "../createList/CreateList";

function TopNav({ setOpen }) {
  const location = useLocation();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav className="heading__container">
      <Link to="/landing" className="heading__logo">
        <h1 className="heading__title">todo</h1>
      </Link>
      {/* {windowSize > 768 ? (
        <>
          <HiPlus className="heading__add" onClick={handleOpen} />
          <Dialog open={open} onClose={handleClose}>
            <DialogContent>
              <CreateList setOpen={setOpen} />
            </DialogContent>
          </Dialog>
        </>
      ) : ( */}
      <Link to="/home/create" state={{ backgroundLocation: location }}>
        <HiPlus className="heading__add" onClick={handleOpen} />
      </Link>
      {/* )} */}
      <Outlet />
    </nav>
  );
}

export default TopNav;
