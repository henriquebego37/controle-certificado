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

export default function Cabecalho() {
  return (
    <Box
      width="100%"
      height="130px"
      bgcolor="#ffcdd2"
      position="relative"
      margin="0"
      padding="0"
    >
      <Toolbar>
        <Image
          src="E:\Site\public_html\portal\controle\arquivo\uploads\certificado"
          width={500}
          height={500}
          alt={""}
        />
        <CameraIcon sx={{ mr: 3 }} />
        <Typography variant="h6" color="white" textAlign="center">
          Certificados
        </Typography>
      </Toolbar>
    </Box>
  );
}
