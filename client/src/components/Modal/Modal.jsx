import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { StyledEngineProvider } from "@mui/material";
import React from "react";
import "./Modal.scss";

function Modal({ children }) {
  return (
    <StyledEngineProvider injectFirst>
      <Dialog open={true} className="modal__container" maxWidth="md">
        <DialogContent className="modal">{children}</DialogContent>
      </Dialog>
    </StyledEngineProvider>
  );
}

export default Modal;
