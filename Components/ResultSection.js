import React from "react";
import { Typography, TableContainer, Table, TableHead, TableRow, TableCell, CardContent } from "@mui/material";
import CopyButton from "./CopyButton";

const ResultSection = ({ title, copyValue }) => {
  return (
      
          <TableHead>
            <TableRow>
              <TableCell>{title}</TableCell>
              <TableCell align="left">
                <CopyButton text={copyValue} />
              </TableCell>
            </TableRow>
          </TableHead>
        
  );
};

export default ResultSection;
