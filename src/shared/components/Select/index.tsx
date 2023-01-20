import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";

export default function Select1() {
      const [age, setAge] = React.useState('');
    
      const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
      };
    
      return (
        <Box sx={{ width: 200 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      );
    }
    