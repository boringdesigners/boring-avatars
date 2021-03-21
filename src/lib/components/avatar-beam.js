import * as React from "react"
import { getNumber, getDigit, getModulus, getContrast } from '../utilities'

const SIZE = 36
const TRANSLATE_RANGE_1 = 11
const TRANSLATE_RANGE_2 = 11

function getRandomColor(number, colors, range, index) {
  return colors[(number + index) % range]
}

function isCircle(number, index) {
  return (!!(getDigit(number, index) % 2))
}

function getUnit(number, range, index) {
  let value = number % range

  if(index && ((getDigit(number, index) % 2) === 0)) {
    return -value
  } else return value

}

function generateData(name, colors) {
  const numFromName = getNumber(name)
  const range = colors && colors.length
  const wrapperColor = getRandomColor(numFromName, colors, range, 0)

  const data = {
    wrapperColor: wrapperColor,
    faceColor: getContrast(wrapperColor),
    backgroundColor: getRandomColor(numFromName, colors, range, 13),
    wrapperTranslateX: getUnit(numFromName, TRANSLATE_RANGE_1, 2),
    wrapperTranslateY: getUnit(numFromName, TRANSLATE_RANGE_1, 3),
    wrapperRotate: getUnit(numFromName, 360),
    isCircle: isCircle(numFromName, 1),
    eyeSpread: getUnit(numFromName, 6) ,
    mouthSpread: getUnit(numFromName, 5),
    faceRotate: getUnit(numFromName, 10),
    faceTranslateX: getUnit(numFromName, TRANSLATE_RANGE_2, 2),
    faceTranslateY: getUnit(numFromName, TRANSLATE_RANGE_2, 3),
  };

  return data
}

const AvatarBeam = ( props ) => {
  const data = generateData(props.name, props.colors)

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
          <rect
            width={SIZE}
            height={SIZE}
            rx={20}
            fill="white"
          />
        </mask>
        <g mask="url(#prefix__a)" fill="transparent">
          <rect
            width={SIZE}
            height={SIZE}
            rx={20}
            fill={data.backgroundColor}
          />
          <rect
            x="0"
            y="0"
            width={SIZE}
            height={SIZE}
            transform={"translate(" + data.wrapperTranslateX + " " + data.wrapperTranslateY + ") rotate(" + data.wrapperRotate + " " + SIZE / 2 + " " + SIZE / 2 +")"}
            fill={data.wrapperColor}
            rx={data.isCircle ? SIZE : SIZE/6}
          />
          <g transform={"translate(" + data.faceTranslateX + " " + data.faceTranslateY + ") rotate("+ data.faceRotate + ")"} transform-origin="50%">
            <path d={"M15 "+ (18 + data.mouthSpread) + "c2 1 4 1 6 0"} stroke={data.faceColor} fill="none" strokeLinecap="round" />
            <rect x={12 - data.eyeSpread} y={14} width={2} height={2} rx={1} stroke="none" fill={data.faceColor} />
            <rect x={22 + data.eyeSpread} y={14} width={2} height={2} rx={1} stroke="none" fill={data.faceColor} />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default AvatarBeam