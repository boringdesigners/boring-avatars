import React from 'react'

const Button = ({ children, ...props }) => {
  return (
    <button {...props}>{children}</button>
  )
}

export default Button