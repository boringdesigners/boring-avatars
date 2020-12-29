import React from 'react'
import { getNumberFromString, getModulus } from '../../playground/utilities'

const NUMBER_OF_CELLS = 12
const LAYERS = 3
const CELLS_LAYER = NUMBER_OF_CELLS / LAYERS

function getRandomColor(number, colors, range, index) {
  switch (index)
  {
      case 0: return colors[getModulus(Math.floor((number / 1) % 10) + index, range)]
      case 1: return colors[getModulus(Math.floor((number / 10) % 10) + index, range)]
      case 2: return colors[getModulus(Math.floor((number / 1) % 10) + index, range)]
      case 3: return colors[getModulus(Math.floor((number / 10) % 10) + index, range)]

      default: return colors[getModulus(number + index, range)]
  }
}

function oddCells(color, invertedColor, startingCell) {
  let cellColors = new Array(CELLS_LAYER).fill(invertedColor)
  cellColors[startingCell] = color

  if (startingCell === (CELLS_LAYER - 1)) {
    cellColors[0] = color
  } else {
    cellColors[startingCell + 1] = color
  }
  return cellColors
}

function fillCells(number, colors, range) {
  return Array.from({length: CELLS_LAYER}, (_, i) => getRandomColor(number, colors, range, i));
}

function generateColors(colors, name) {
  const numFromName = getNumberFromString(name)
  const range = colors && colors.length
  const startingCell = getModulus(numFromName, CELLS_LAYER)
  const innerColor1 = getRandomColor(numFromName, colors, range, getModulus(numFromName, NUMBER_OF_CELLS + 3))
  const innerColor2 = getRandomColor(numFromName, colors, range, getModulus(numFromName, NUMBER_OF_CELLS * 2))

  let level1Colors = fillCells(numFromName, colors, range);
  const level2Colors = oddCells(innerColor1, 'transparent', startingCell)
  const level3Colors = oddCells('transparent', innerColor2, startingCell)

  return level1Colors.concat(level2Colors, level3Colors);
}

function AvatarGeometric(props) {
  const cellColors = generateColors(props.colors, props.name)

  return (
    <div style={{display: 'inline-block', width: props.size, height: props.size}}>
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path  d="M80 40A40 40 0 0040 0v40h40z" fill={cellColors[0]} />
        <path d="M40 0A40 40 0 000 40h40V0z" fill={cellColors[1]} />
        <path d="M0 40a40 40 0 0040 40V40H0z" fill={cellColors[2]} />
        <path d="M40 80a40 40 0 0040-40H40v40z" fill={cellColors[3]} />
        <path d="M70 40a30 30 0 00-30-30v30h30z" fill={cellColors[4]} />
        <path d="M40 10a30 30 0 00-30 30h30V10z" fill={cellColors[5]} />
        <path d="M10 40a30 30 0 0030 30V40H10z" fill={cellColors[6]} />
        <path d="M40 70a30 30 0 0030-30H40v30z" fill={cellColors[7]} />
        <path d="M60 40a20 20 0 00-20-20v20h20z" fill={cellColors[8]} />
        <path d="M40 20a20 20 0 00-20 20h20V20z" fill={cellColors[9]} />
        <path d="M20 40a20 20 0 0020 20V40H20z" fill={cellColors[10]} />
        <path d="M40 60a20 20 0 0020-20H40v20z" fill={cellColors[11]} />
      </svg>
    </div>
  )
}

export default AvatarGeometric
