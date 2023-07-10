import React from "react";
import { Grid,TextField } from "@mui/material";

const InputField = ({ label, value, onChange }) => {
  return (
    <Grid item xs={12} style={{marginBottom: "1.5rem"}}>
    <TextField
      label={label}
      value={value}
      fullWidth
      margin="normal"
      required
      type="number"
      onChange={onChange}
      step="any"
      variant="outlined"
      style={{marginBottom: "-20px"}}
    />
    </Grid>
  );
};

export default InputField;
