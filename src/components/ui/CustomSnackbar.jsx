import { Alert } from "@mui/material";
import Snackbar from "@material-ui/core/Snackbar";
import { useState } from "react";
import { useEffect } from "react";

function CustomSnackbar({ message, type }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      className="snackbar"
    >
      {/* success | error | warning | info  */}
      <Alert onClose={handleClick} severity={`${type ? type : "success"}`}>
        <div>{message}</div>
      </Alert>
    </Snackbar>
  );
}

export default CustomSnackbar;
