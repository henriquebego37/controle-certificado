import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Home from '@/views/ControleCertificados/BodyHome';

export default function Certificados() {
  return (
    <Box width="100%" height="100%" display="flex">
      <Home />
    </Box> 
  );
}
