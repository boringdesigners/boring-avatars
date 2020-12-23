import * as React from "react"

function AvatarGeometric(props) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M32 16A16.002 16.002 0 0016 0v16h16z" fill="#0E4D64" />
      <path d="M16 0A16 16 0 000 16h16V0z" fill="#0A2F51" />
      <path d="M0 16a16 16 0 0016 16V16H0z" fill="#DEEDCF" />
      <path d="M16 32a16 16 0 0016-16H16v16z" fill="#BFE1B0" />
      <path d="M28 16A12 12 0 0016 4v12h12z" fill="#99D492" />
      <path d="M16 4A12 12 0 004 16h12V4z" fill="#74C67A" />
      <path d="M4 16a12 12 0 0012 12V16H4z" fill="#56B870" />
      <path d="M16 28a12 12 0 0012-12H16v12z" fill="#39A96B" />
      <path
        d="M24 16a7.999 7.999 0 00-8-8v8h8zM16 8a8 8 0 00-8 8h8V8z"
        fill="#1D9A6C"
      />
      <path d="M8 16a8 8 0 008 8v-8H8z" fill="#188977" />
      <path d="M16 24a8 8 0 008-8h-8v8z" fill="#137177" />
    </svg>
  )
}

export default AvatarGeometric
