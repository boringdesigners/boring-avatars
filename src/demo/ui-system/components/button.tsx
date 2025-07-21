import styled from 'styled-components'

interface ButtonWrapperProps {
  icon?: React.ReactNode;
  hasChildren?: React.ReactNode;
}

const ButtonWrapper = styled.div<ButtonWrapperProps>`
  appearance: none;
  font: inherit;
  color: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${p => p.hasChildren ? `var(--textbox-x)` : 0};
  ${p => !p.hasChildren && p.icon ? `width: var(--buttonHeight)` : null};
  background: var(--c-button);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 20rem;
  font-size: 0.7rem;
  line-height: 1.3;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  min-height: var(--buttonHeight);

  &:hover {
    background-color: var(--c-buttonHover);
  }
`

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

const Button = ({ children, icon, ...props }: ButtonProps) => {
  return (
    <ButtonWrapper icon={icon} hasChildren={children} {...props}>
      {children}
      {icon && icon}
    </ButtonWrapper>
  )
}

export default Button