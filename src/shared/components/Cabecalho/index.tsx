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
import CameraIcon from "@mui/icons-material/PhotoCamera";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();

export default function Cabecalho() {
  return (
    <Box
      display="flex"
      width="100%"
      height="130px"
      bgcolor="#f3e0e0"
      // marginLeft="-8px"
      alignItems="center"
      alignSelf="center"
    >
      <Box
        width="170px"
        height="60px"
        marginLeft="10px"
      >
        <img
          src="https://www.netbil.com.br/portal/controle/arquivo/uploads/certificado/logo.png"
          width="100%x"
          height="100%"
          alt={""}
        />
      </Box>
    </Box>
  );
}
