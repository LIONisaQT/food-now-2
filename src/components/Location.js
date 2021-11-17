import * as React from 'react';
import { TextField } from '@mui/material'

export default function Location(props) {
  const [location, setLocation] = React.useState("");
  const handleChange = (event) => {
    props.update("location",event.target.value);
  };

  return (
        <section className="App-question">
          <h4>2. WYA?</h4>
          <TextField
            id="outlined-name"
            onChange={handleChange}
          />
        </section>
  );
}