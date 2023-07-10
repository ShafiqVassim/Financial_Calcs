import React, { useState } from "react";
import { Grid, Button } from "@mui/material";

const CalcButton = ({ onSubmit, onClear, onClose }) => {
  const [iconHovered, setIconHovered] = useState(false);

  return (
    // bottom:12, left: 40, if position is absolute
    <Grid item xs={12} style={{ position: "relative", width: "100%" }}>
      <Button type="submit" variant="contained" color="primary">
        Calculate
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={onClear}
        style={{ marginLeft: 6 }}
      >
        Clear Inputs
      </Button>
      <Button
        variant="outlined"
        color={iconHovered ? "error" : "primary"}
        onMouseEnter={() => setIconHovered(true)}
        onMouseLeave={() => setIconHovered(false)}
        onClick={onClose}
        style={{ marginLeft: 6 }}
      >
        Close
      </Button>
    </Grid>
  );
};

export default CalcButton;
