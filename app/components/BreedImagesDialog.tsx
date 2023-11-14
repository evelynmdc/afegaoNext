import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Image from "next/image";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type PropTypes = {
  open: boolean;
  handleClose: () => void;
  src: string;
  children: React.ReactNode;
};

export function BreedImagesDialog({ open, handleClose, src }: PropTypes) {
  const [newOpen, setNewOpen] = React.useState(open);

  // function handleClose() {
  //   setNewOpen(false);
  // }

  return (
    <React.Fragment>
      <Dialog
        open={newOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent
          style={{
            width: "600px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={src}
            alt="dog"
            loading="lazy"
            style={{ maxWidth: "100%", width: "70%" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setNewOpen(false)}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
