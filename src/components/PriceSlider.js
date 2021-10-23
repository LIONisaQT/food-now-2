import * as React from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';

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