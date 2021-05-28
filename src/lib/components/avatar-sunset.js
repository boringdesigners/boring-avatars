import React, { useMemo } from 'react'
import { getBorderRadius, getNumber, getRandomColor } from '../utilities'

const ELEMENTS = 4
const SIZE = 80

function generateColors(name, colors) {
  const numFromName = getNumber(name)
  const range = colors && colors.length

  const elementsProperties = Array.from({ length: ELEMENTS }, (_, i) => ({
    color: getRandomColor(numFromName + i, colors, range),
  }))

  return elementsProperties
}

const AvatarSunset = ({ name, colors, size, style, borderRadius, ...rest }) => {
  const properties = useMemo(() => generateColors(name, colors), [name, colors])
  name = name.replace(/\s/g, '')

  return (
    <svg
      viewBox={'0 0 ' + SIZE + ' ' + SIZE}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      style={{
        borderRadius,
        ...style,
      }}
      {...rest}
    >
      <g>
        <path fill={'url(#gradient_paint0_linear_' + name + ')'} d="M0 0h80v40H0z" />
        <path fill={'url(#gradient_paint1_linear_' + name + ')'} d="M0 40h80v40H0z" />
      </g>
      <defs>
        <linearGradient
          id={'gradient_paint0_linear_' + name}
          x1={SIZE / 2}
          y1={0}
          x2={SIZE / 2}
          y2={SIZE / 2}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={properties[0].color} />
          <stop offset={1} stopColor={properties[1].color} />
        </linearGradient>
        <linearGradient
          id={'gradient_paint1_linear_' + name}
          x1={SIZE / 2}
          y1={SIZE / 2}
          x2={SIZE / 2}
          y2={SIZE}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={properties[2].color} />
          <stop offset={1} stopColor={properties[3].color} />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default AvatarSunset
