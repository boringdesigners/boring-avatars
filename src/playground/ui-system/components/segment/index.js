import React from 'react'

export const SegmentGroup = ({ children }) => {
  return (
    <div>{children}</div>
  )
}

const Segment = ({ children }) => {
  return (
    <button>{children}</button>
  )
}

export default Segment