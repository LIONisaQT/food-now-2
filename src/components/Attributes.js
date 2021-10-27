import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export default function Checkboxes() {
    return (
      <section className="App-question">
        <h4>6. Additional attributes</h4>
        <FormGroup>
          <FormControlLabel control = {<Checkbox />} label="Open now" />
          <FormControlLabel control = {<Checkbox />} label="Hot and new" />
          <FormControlLabel control = {<Checkbox />} label="Reservation" />
          <FormControlLabel control = {<Checkbox />} label="Waitlist reservation" />
          <FormControlLabel control = {<Checkbox />} label="Cashback" />
          <FormControlLabel control = {<Checkbox />} label="Deals" />
          <FormControlLabel control = {<Checkbox />} label="Gender neutral bathrooms" />
          <FormControlLabel control = {<Checkbox />} label="Open to all" />
          <FormControlLabel control = {<Checkbox />} label="Wheelchair accessible" />
          <FormControlLabel control = {<Checkbox />} label="Masks required" />
          <FormControlLabel control = {<Checkbox />} label="Proof of vaccine required" />
        </FormGroup>
      </section>
    );
  }