import { useRef, useState } from 'react'
import styled from 'styled-components'
import { ChromePicker } from 'react-color'
import { useOnClickOutside } from '../../hooks'

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

interface ColorDotProps {
  value: string;
  onChange: (color: string) => void;
}

const ColorDot = ({ value, onChange }: ColorDotProps) => {
  const [pickerIsOpen, setPickerIsOpen] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null);
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
            onChange={(v: { hex: string }) => onChange(v.hex)}
            disableAlpha
          />
        </PickerWrapper>
      )}
    </DotWrapper>
  )
}
export default ColorDot