import React, { useMemo } from 'react'
import { getNumber, getUnit, getBoolean, getRandomColor, getContrast } from '../utilities'

const SIZE = 36

function generateProperties(name, colors) {
  const numFromName = getNumber(name)
  const range = colors && colors.length
  const wrapperColor = getRandomColor(numFromName, colors, range)
  const preTranslateX = getUnit(numFromName, 10, 1)
  const wrapperTranslateX = preTranslateX < 5 ? preTranslateX + SIZE / 9 : preTranslateX
  const preTranslateY = getUnit(numFromName, 10, 2)
  const wrapperTranslateY = preTranslateY < 5 ? preTranslateY + SIZE / 9 : preTranslateY

  const properties = {
    wrapperColor: wrapperColor,
    faceColor: getContrast(wrapperColor),
    backgroundColor: getRandomColor(numFromName + 13, colors, range),
    wrapperTranslateX: wrapperTranslateX,
    wrapperTranslateY: wrapperTranslateY,
    wrapperRotate: getUnit(numFromName, 360),
    wrapperScale: 1 + getUnit(numFromName, SIZE / 12) / 10,
    isMouthOpen: getBoolean(numFromName, 2),
    isCircle: getBoolean(numFromName, 1),
    eyeSpread: getUnit(numFromName, 5),
    mouthSpread: getUnit(numFromName, 3),
    faceRotate: getUnit(numFromName, 10, 3),
    faceTranslateX:
      wrapperTranslateX > SIZE / 6 ? wrapperTranslateX / 2 : getUnit(numFromName, 8, 1),
    faceTranslateY:
      wrapperTranslateY > SIZE / 6 ? wrapperTranslateY / 2 : getUnit(numFromName, 7, 2),
  }

  return properties
}

const AvatarBeam = ({ name, colors, size, borderRadius, style, ...rest }) => {
  const properties = useMemo(() => generateProperties(name, colors), [name, colors])

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
      <g fill="transparent">
        <rect width={SIZE} height={SIZE} rx={20} fill={properties.backgroundColor} />
        <rect
          x="0"
          y="0"
          width={SIZE}
          height={SIZE}
          transform={
            'translate(' +
            properties.wrapperTranslateX +
            ' ' +
            properties.wrapperTranslateY +
            ') rotate(' +
            properties.wrapperRotate +
            ' ' +
            SIZE / 2 +
            ' ' +
            SIZE / 2 +
            ') scale(' +
            properties.wrapperScale +
            ')'
          }
          fill={properties.wrapperColor}
          rx={properties.isCircle ? SIZE : SIZE / 6}
        />
        <g
          transform={
            'translate(' +
            properties.faceTranslateX +
            ' ' +
            properties.faceTranslateY +
            ') rotate(' +
            properties.faceRotate +
            ' ' +
            SIZE / 2 +
            ' ' +
            SIZE / 2 +
            ')'
          }
        >
          {properties.isMouthOpen ? (
            <path
              d={'M15 ' + (19 + properties.mouthSpread) + 'c2 1 4 1 6 0'}
              stroke={properties.faceColor}
              fill="none"
              strokeLinecap="round"
            />
          ) : (
            <path
              d={'M13,' + (19 + properties.mouthSpread) + ' a1,0.75 0 0,0 10,0'}
              fill={properties.faceColor}
            />
          )}
          <rect
            x={14 - properties.eyeSpread}
            y={14}
            width={1.5}
            height={2}
            rx={1}
            stroke="none"
            fill={properties.faceColor}
          />
          <rect
            x={20 + properties.eyeSpread}
            y={14}
            width={1.5}
            height={2}
            rx={1}
            stroke="none"
            fill={properties.faceColor}
          />
        </g>
      </g>
    </svg>
  )
}

export default AvatarBeam
