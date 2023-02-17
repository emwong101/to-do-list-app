import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
import "./TopNav.scss";
import CreateList from "../createList/CreateList";

function TopNav({ windowSize }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav className="heading__container">
      <h1 className="heading__title">todo</h1>

      {windowSize > 768 ? (
        <>
          <HiPlus className="heading__add" onClick={handleOpen} />
          <Dialog open={open} onClose={handleClose}>
            <DialogContent>
              <CreateList setOpen={setOpen} />
            </DialogContent>
          </Dialog>
        </>
      ) : (
        <Link to="/create">
          <HiPlus className="heading__add" onClick={handleOpen} />
        </Link>
      )}
    </nav>
  );
}

export default TopNav;
