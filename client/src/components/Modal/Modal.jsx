import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { StyledEngineProvider } from "@mui/material";
import { Slide } from "@mui/material";
import React from "react";
import "./Modal.scss";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
function Modal({ children, open, windowSize }) {
  return (
    <StyledEngineProvider injectFirst>
      <Dialog
        TransitionComponent={Transition}
        open={open}
        className="modal__container"
        maxWidth="md"
        fullScreen={windowSize > 758 ? false : true}
      >
        <DialogContent className="modal">{children}</DialogContent>
      </Dialog>
    </StyledEngineProvider>
  );
}

export default Modal;
