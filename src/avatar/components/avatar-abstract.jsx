import * as React from "react"
import { getNumberFromString, getModulus } from '../../playground/utilities'

const ELEMENTS = 4
const SIZE = 80

function getRandomColor(number, colors, range, index) {
  return colors[getModulus(number, range - index)]
}

function getRandomTranslateX(number, index) {
  let value = getModulus(number * index, (SIZE / 4))

  if(number % 2 == 0) {
    return -value
  } else return value

}

function getRandomTranslateY(number, index) {
  let value = getModulus(number * index, (SIZE / 4))

  if(number % 2 == 0) {
    return value
  } else return -value

}

function getRandomRotate(number) {
  return (getModulus(number, 360) + " " + SIZE / 2 + " " + SIZE / 2)
}

function generateColors(name, colors, size) {
  const numFromName = getNumberFromString(name)
  const range = colors && colors.length

  const elementsProperties = Array.from({length: ELEMENTS}, (_,i) => ({
    color: getRandomColor(numFromName, colors, range, i),
    translateX: getRandomTranslateX(numFromName, i),
    translateY: getRandomTranslateY(numFromName, i),
    rotate: getRandomRotate(numFromName),
  }));


  return elementsProperties
}

function AvatarAbstract(props) {
  const properties = generateColors(props.name, props.colors, props.size)

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
          <path
            d="M0 64.167l11.667-32.5 44.166 12.5 15.834 44.166-60 22.5L0 64.167z"
            fill={properties[1].color}
            transform={"translate(" + properties[1].translateX + " " + properties[1].translateY + ") rotate(" + properties[1].rotate + ")"}
          />
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            fill={properties[2].color}
            r={17.5}
            transform={"translate(" + properties[3].translateX + " " + properties[3].translateY + ")"}
          />
          <line
            x1="0"
            y1={SIZE / 2}
            x2="80"
            y2={SIZE / 2}
            strokeWidth={2}
            stroke={properties[3].color}
            transform={"translate(" + properties[3].translateX + " " + properties[3].translateY + ") rotate(" + properties[3].rotate + ")"}
          />
        </g>
      </svg>
    </div>
  )
}

export default AvatarAbstract