import React from 'react'
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

const SliderComponent = ({ defaultValue, min, max, step, onChange, value }) => {
  return (
    <>
      <Typography variant="subtitle2">Home Value</Typography>
      <Typography variant ="h5">$3000</Typography>
      <Slider defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        marks
        step={step}
        onChange={onChange}
        value={value}
      />
      <Typography></Typography>
    </>
    //fake dom. - when parent error occurs
    //same works with <react.fragment> </react.fragment> but needs  import React from 'react'
  );
};

export default SliderComponent
