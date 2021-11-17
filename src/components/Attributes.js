import * as React from 'react';
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export default function Checkboxes(props) {

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
      props.update("attributes", list);
      console.log(list);
    };

    return (
      <section className="App-question">
        <h4>6. Additional attributes</h4>
        <FormGroup>
          <FormControlLabel control = {<Checkbox />} onChange={handleCheckboxChange} value="open_now" label="Open now" />
          <FormControlLabel control = {<Checkbox />} onChange={handleCheckboxChange} value="hot_and_new" label="Hot and new" />
          <FormControlLabel control = {<Checkbox />} onChange={handleCheckboxChange} value="reservation" label="Reservation" />
          <FormControlLabel control = {<Checkbox />} onChange={handleCheckboxChange} value="waitlist_reservation" label="Waitlist reservation" />
          <FormControlLabel control = {<Checkbox />} onChange={handleCheckboxChange} value="cashback" label="Cashback" />
          <FormControlLabel control = {<Checkbox />} onChange={handleCheckboxChange} value="deals" label="Deals" />
          <FormControlLabel control = {<Checkbox />} onChange={handleCheckboxChange} value="gender_neutral_restrooms" label="Gender neutral bathrooms" />
          <FormControlLabel control = {<Checkbox />} onChange={handleCheckboxChange} value="open_to_all" label="Open to all" />
          <FormControlLabel control = {<Checkbox />} onChange={handleCheckboxChange} value="wheelchair_accessible" label="Wheelchair accessible" />
          <FormControlLabel control = {<Checkbox />} onChange={handleCheckboxChange} value="masks_required" label="Masks required" />
          <FormControlLabel control = {<Checkbox />} onChange={handleCheckboxChange} value="proof_of_vaccine" label="Proof of vaccine required" />
        </FormGroup>
      </section>
    );
  }