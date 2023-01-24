import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Select1 from "@/shared/components/Select";
import { red } from "@mui/material/colors";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Cabecalho from "@/shared/components/Cabecalho";
import Landing from "@/shared/components/Landing";

export default function Home() {
  return (
    <Box width="100%" height="100%" >
    <Cabecalho />
    <Landing />
    
    
    </Box>
  );
}
