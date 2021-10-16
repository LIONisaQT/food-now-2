import * as React from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';

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
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="$"
          control={<Checkbox />}
          label="$"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="$$"
          control={<Checkbox />}
          label="$$"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="$$$"
          control={<Checkbox />}
          label="$$$"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="$$$$"
          control={<Checkbox />}
          label="$$$$"
          labelPlacement="bottom"
        />
      </FormGroup>
    </FormControl>
  );
}