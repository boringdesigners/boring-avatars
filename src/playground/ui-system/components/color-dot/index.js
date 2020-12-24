import React, { useState } from 'react'
import styled from 'styled-components'
import { ChromePicker } from 'react-color'

const DotWrapper = styled.div`
  position: relative;
`

const Wrapper = styled.div`
  background-color: ${p => p.color};
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  cursor: pointer;
`

const PickerWrapper = styled.div`
  position: absolute;
  top: 2rem;
`

const ColorDot = ({ color }) => {
  const [pickerIsOpen, setPickerIsOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(color)

  return (
    <DotWrapper>
      <Wrapper
        color={selectedColor}
        onClick={() => setPickerIsOpen(!pickerIsOpen)}
      />
      {pickerIsOpen && (
        <PickerWrapper>
          <ChromePicker color={selectedColor} onChange={(value) => setSelectedColor(value.hex)} />
        </PickerWrapper>
      )}
    </DotWrapper>
  )
}

export default ColorDot