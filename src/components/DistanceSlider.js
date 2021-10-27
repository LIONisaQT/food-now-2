import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

export default function DistanceSlider() {
  const [value, setValue] = React.useState(10);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="App-question">
      <h4>3. How lazy are you?</h4>
      <Box>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              value={typeof value === 'number' ? value : 0}
              onChange={handleSliderChange}
              size="large"
              aria-labelledby="input-slider"
              step={1}
              min={1}
              max={15}
            />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{value} miles</Typography>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
