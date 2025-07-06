import styled from 'styled-components'
import Button from './button'

const SegmentGroupWrapper = styled.div`
  background-color: var(--c-button);
  padding: 0.2rem;
  border-radius: 10rem;
  display: inline-flex;
`

interface SegmentWrapperProps {
  isSelected?: boolean;
}

const SegmentWrapper = styled(Button)<SegmentWrapperProps>`
  &:not(:hover) {
    background-color: ${p => p.isSelected ? `var(--c-background)` : `transparent`};
  }

  ${p => p.isSelected && `background-color: var(--c-background)`};
  ${p => !p.isSelected && `color: var(--c-fade)`};
`

interface SegmentGroupProps {
  children?: React.ReactNode;
}

export const SegmentGroup = ({ children }: SegmentGroupProps) => {
  return (
    <SegmentGroupWrapper>{children}</SegmentGroupWrapper>
  )
}

interface SegmentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  isSelected?: boolean;
}

const Segment = ({ children, isSelected, ...props }: SegmentProps) => {
  return (
    <SegmentWrapper isSelected={isSelected} {...props}>{children}</SegmentWrapper>
  )
}

export default Segment