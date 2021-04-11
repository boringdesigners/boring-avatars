import * as React from "react"
import { getNumber, getDigit } from '../utilities'

const ELEMENTS = 4
const SIZE = 80

function getRandomColor(number, colors, range) {
  return colors[(number) % range]
}

function getUnit(number, range, index) {
  let value = number % range

  if(index && ((getDigit(number, index) % 2) === 0)) {
    return -value
  } else return value

}

function generateColors(name, colors) {
  const numFromName = getNumber(name)
  const range = colors && colors.length

  const elementsProperties = Array.from({length: ELEMENTS}, (_,i) => ({
    color: getRandomColor(numFromName + i, colors, range),
    translateX: getUnit(numFromName / (i + 1), (SIZE/13 - (i * 8)), 1),
    translateY: getUnit(numFromName / (i + 1), (SIZE/13 - (i * 8)), 2),
    rotate: getUnit(numFromName / (i + 1), 360),
  }));


  return elementsProperties
}

const AvatarAbstract = ( props ) => {
  const properties = generateColors(props.name, props.colors)

  return (
    <div style={{display: 'inline-block', width: props.size, height: props.size}}>
      <svg
        viewBox={"0 0 " + SIZE + " " + SIZE}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <mask
          id="prefix__a"
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={SIZE}
          height={SIZE}
        >
          <rect width={SIZE} height={SIZE} rx={SIZE / 2} fill="#fff" />
        </mask>
        <g mask="url(#prefix__a)">
          <rect
            width={SIZE}
            height={SIZE}
            rx={SIZE / 2}
            fill={properties[0].color}
          />
          <g transform={"rotate(" + properties[0].rotate + " " + SIZE / 2 + " " + SIZE / 2 +")"}>
            <path
              d="M8 56.5L19.667 24L63.833 36.5L79.667 80.666L19.667 103.166L8 56.5Z"
              fill={properties[1].color}
              transform={"translate(" + properties[1].translateX + " " + properties[1].translateY + ") rotate(" + properties[1].rotate + " " + SIZE / 2 + " " + SIZE +")"}
            />
          </g>
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            fill={properties[2].color}
            r={17.5}
            transform={"translate(" + properties[2].translateX + " " + properties[2].translateY + ")"}
            transform-origin="50%"
          />
          <line
            x1="0"
            y1={SIZE / 2}
            x2="80"
            y2={SIZE / 2}
            strokeWidth={2}
            stroke={properties[3].color}
            transform={"translate(" + properties[3].translateX + " " + properties[3].translateY + ") rotate(" + properties[3].rotate + ")"}
            transform-origin="50%"
          />
        </g>
      </svg>
    </div>
  )
}

export default AvatarAbstract