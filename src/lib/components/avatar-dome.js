import React from 'react'
import { getNumber, getModulus, getRandomColor } from '../utilities'

const NUMBER_OF_CELLS = 12
const LAYERS = 3
const SIZE = 80
const CELLS_LAYER = NUMBER_OF_CELLS / LAYERS

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

function generateColors(colors, name) {
  const numFromName = getNumber(name)
  const range = colors && colors.length
  const startingCell = getModulus(numFromName, CELLS_LAYER)
  const level2Color = getRandomColor(numFromName + LAYERS, colors, range)
  const level3Color = getRandomColor(numFromName - LAYERS, colors, range)

  const level1Colors = Array.from({length: CELLS_LAYER}, (_, i) => getRandomColor(numFromName % (i+3), colors, range));
  const level2Colors = oddCells(level2Color, 'none', startingCell)
  const level3Colors = oddCells('none', level3Color, startingCell)

  return level1Colors.concat(level2Colors, level3Colors);
}

const AvatarDome = ( props ) => {
  const cellColors = generateColors(props.colors, props.name)

  return (
    <div style={{display: 'inline-block', width: props.size, height: props.size}}>
      <svg
        viewBox={"0 0 " + SIZE + " " + SIZE}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M80 40A40 40 0 0040 0v40h40z" fill={cellColors[0]} />
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

export default AvatarDome
