import * as React from 'react';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function DateFilter() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 120, color: '#5800FF' }} size="small">
        <Select
          value={age}
          onChange={handleChange} 
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className='date-filter'
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='january2023'>January 2023</MenuItem>
          <MenuItem value='february2023'>February 2023</MenuItem>
          <MenuItem value='march2023'>March 2023</MenuItem>
          <MenuItem value='april2023'>April 2023</MenuItem>
          <MenuItem value='may2023'>May 2023</MenuItem>
          <MenuItem value='june2023'>June 2023</MenuItem>
          <MenuItem value='july2023' selected>July 2023</MenuItem>
          <MenuItem value='august2023'>August 2023</MenuItem>
          <MenuItem value='september2023'>September 2023</MenuItem>
          <MenuItem value='october2023'>October 2023</MenuItem>
          <MenuItem value='november2023'>November 2023</MenuItem>
          <MenuItem value='december2023'>December 2023</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}