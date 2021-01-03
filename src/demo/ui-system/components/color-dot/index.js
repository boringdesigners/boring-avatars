import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { ChromePicker } from 'react-color'
import { useOnClickOutside } from '../../../hooks'

const DotWrapper = styled.div`
  position: relative;
`

const Wrapper = styled.div`
  width: var(--buttonHeight);
  height: var(--buttonHeight);
  border-radius: 10rem;
  cursor: pointer;
`

const PickerWrapper = styled.div`
  position: absolute;
  top: 2rem;
`

const ColorDot = ({ value, onChange }) => {
  const [pickerIsOpen, setPickerIsOpen] = useState(false)
  const ref = useRef();
  useOnClickOutside(ref, () => setPickerIsOpen(false));

  return (
    <DotWrapper>
      <Wrapper
        color={value}
        onClick={() => setPickerIsOpen(!pickerIsOpen)}
        style={{ background: value }}
      />
      {pickerIsOpen && (
        <PickerWrapper ref={ref}>
          <ChromePicker
            color={value}
            onChange={(v) => onChange(v.hex)}
            disableAlpha
          />
        </PickerWrapper>
      )}
    </DotWrapper>
  )
}

export default ColorDot