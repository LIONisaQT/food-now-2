import * as React from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';

export default function PriceSlider(props) {
  return (
    <section className="App-question">
      <h4>4. How cheap are you?</h4>
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
    </section>
  );
}