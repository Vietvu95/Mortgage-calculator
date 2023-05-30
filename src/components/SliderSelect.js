import React, { Fragment } from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = ({data, setData}) => {

  const bank_limit = 1000000;
  return (
    <Fragment>
      <SliderComponent
      label='Home Value'
      min={1000}
      max={bank_limit}
      defaultValue={data.homeValue}
      value={data.homeValue}
      step={100}
      onChange={(e, value) => setData({
        homeValue: value
      })}
      unit="$"
      amount={data.homeValue}
    />
    <SliderComponent
      label='Deposit Amount'
      min={0}
      max={50}
      defaultValue={20}
      step={5}
      onChange={(e, value) => console.log(value)}
      unit="$"
      amount={500}
    />
    <SliderComponent
      label='Loan Amount'
      min={0}
      max={50}
      defaultValue={20}
      step={5}
      onChange={(e, value) => console.log(value)}
      unit="$"
      amount={700}
    />
    </Fragment>
  )
}

export default SliderSelect
