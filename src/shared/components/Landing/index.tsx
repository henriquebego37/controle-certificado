import {
  AppBar,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import DataTable from "../DataTable";
const theme = createTheme();

export default function Landing() {
  return (
      <Box width="100%" height="100%" display="flex">
      {/* <MenuLateral /> */}
      <DataTable  />
    </Box>
  );
}
