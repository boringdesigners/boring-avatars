import React from 'react'
import styled from 'styled-components'
import { ChromePicker } from 'react-color'

const Wrapper = styled.div`
  background-color: ${p => p.color};
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
`

const ColorDot = ({ color }) => {
  return (
    <>
      <Wrapper color={color} />
      {/* <ChromePicker /> */}
    </>
  )
}

export default ColorDot