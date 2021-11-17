import * as React from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';

export default function PriceSlider(props) {

  const [list, setList] = React.useState([]);

  const handleCheckboxChange = event => {
    if(event.target.checked) {
      console.log(`pushing ${event.target.value}`)
      list.push(event.target.value);
    }
    else {
      console.log("splicing")
      let itemToRemove = list.indexOf(event.target.value)
      list.splice(itemToRemove,1);
    }
    props.update("price", list);
    console.log(list);
  };

  return (
    <section className="App-question">
      <h4>4. How cheap are you?</h4>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="$"
            onChange={handleCheckboxChange}
            control={<Checkbox />}
            label="$"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="$$"
            onChange={handleCheckboxChange}
            control={<Checkbox />}
            label="$$"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="$$$"
            onChange={handleCheckboxChange}
            control={<Checkbox />}
            label="$$$"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="$$$$"
            onChange={handleCheckboxChange}
            control={<Checkbox />}
            label="$$$$"
            labelPlacement="bottom"
          />
        </FormGroup>
      </FormControl>
    </section>
  );
}