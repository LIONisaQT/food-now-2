import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '$',
  },
  {
    value: 1,
    label: '$$',
  },
  {
    value: 2,
    label: '$$$',
  },
  {
    value: 3,
    label: '$$$$',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSliderMarks() {
  return (
    <Box sx={{ width: 350 }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={0}
        step={1}
        valueLabelDisplay="off"
        marks={marks}
        min = {0}
        max = {3}
      />
    </Box>
  );
}