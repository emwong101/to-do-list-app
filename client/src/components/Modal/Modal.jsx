import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { StyledEngineProvider } from "@mui/material";
import CreateList from "../createList/CreateList";
import React from "react";
import "./Modal.scss";

function Modal({ children }) {
  return (
    <StyledEngineProvider injectFirst>
      <Dialog open={true}>
        <DialogContent className="modal">
          {/* <CreateList setOpen={setOpen} /> */}
          {children}
        </DialogContent>
      </Dialog>
    </StyledEngineProvider>
  );
}

export default Modal;
