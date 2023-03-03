import Modal from "../../components/Modal/Modal";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import CreateList from "../../components/createList/CreateList";
import DisplayList from "../../components/displayList/DisplayList";
import "./Lists.scss";

function Lists({ open, windowSize }) {
  const { state } = useLocation();
  return (
    <>
      {state?.backgroundLocation ? (
        <Modal open={open} windowSize={windowSize}>
          <Outlet />
        </Modal>
      ) : (
        <Outlet />
      )}{" "}
    </>
  );
}

export default Lists;
