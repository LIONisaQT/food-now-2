import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import { Typography } from '@mui/material';

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function DistanceSlider() {
  const [value, setValue] = React.useState(10);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 15) {
      setValue(15);
    }
  };

  return (
    <Box sx={{ width: 350 }}>
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
        {/* <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 1,
              max: 15,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid> */}
        <Grid item>
          <Typography variant="subtitle1">{value} miles</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
