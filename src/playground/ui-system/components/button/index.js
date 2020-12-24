import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
  appearance: none;
  font: inherit;
  color: inherit;
  display: inline-flex;
  align-items: center;
  padding: var(--textbox);
  background: var(--c-button);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 20rem;
  font-size: 0.7rem;
  line-height: 1.3;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  min-height: 2rem;
`

const Button = ({ children, ...props }) => {
  return (
    <ButtonWrapper {...props}>{children}</ButtonWrapper>
  )
}

export default Button