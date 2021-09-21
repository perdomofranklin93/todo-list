import * as React from "react";
import { Alert, AlertColor, AlertTitle, Snackbar } from "@mui/material";

interface ErrorMessageProps {
  title?: string;
  text?: string;
  status?: AlertColor;
}

interface ErrorMessageRef {
  open: () => void;
  close: () => void;
}

const ToSnackbar = React.forwardRef<ErrorMessageRef, ErrorMessageProps>(
  (props, ref) => {
    const [open, setOpen] = React.useState<boolean>(false);

    React.useImperativeHandle(ref, () => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
    }));

    return (
      <Snackbar
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onAbort={() => setOpen(false)}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
      >
        <Alert
          variant="filled"
          onClose={() => setOpen(false)}
          severity={props.status}
          sx={{ width: "100%" }}
        >
          {props.title ? <AlertTitle>{props.title}</AlertTitle> : null}
          {props.text}
        </Alert>
      </Snackbar>
    );
  }
);

export { ToSnackbar };
