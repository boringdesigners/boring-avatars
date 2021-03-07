import * as React from "react"
import { getNumberFromString, getModulus, getContrast } from '../utilities'

const SIZE = 36

function getRandomColor(number, colors, range, index) {
  return colors[getModulus(number + index, range)]
}

function getRotate(number) {
  return (getModulus(number, 360) + " " + SIZE / 2 + " " + SIZE / 2)
}

function isCircle(number) {
  return (!(getModulus(number, 2)))
}

function getSpread(number, index, range, negative = false) {
  let value = getModulus(number * index, range)

  if(negative && ((number + index) % 2 === 0)) {
    return -value
  } else return value

}

function generateData(name, colors) {
  const numFromName = getNumberFromString(name)
  const range = colors && colors.length
  const wrapperColor = getRandomColor(numFromName, colors, range, 0)

  const data = {
    wrapperColor: wrapperColor,
    faceColor: getContrast(wrapperColor),
    backgroundColor: getRandomColor(numFromName, colors, range, 13),
    wrapperTranslateX: getSpread(numFromName, 5, (SIZE / 3), true),
    wrapperTranslateY: getSpread(numFromName, 7, (SIZE / 3), true),
    wrapperRotate: getRotate(numFromName),
    wrapperScale: 1,
    isCircle: isCircle(numFromName),
    eyeSpread: getSpread(numFromName, 21, 6) ,
    mouthSpread: getSpread(numFromName, 13, 5),
    faceRotate: getSpread(numFromName, 17, 10, true),
    faceTranslateX: getSpread(numFromName, 3, (SIZE / 5), true),
    faceTranslateY: getSpread(numFromName, 7, (SIZE / 5), true),
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
            transform={"translate(" + data.wrapperTranslateX + " " + data.wrapperTranslateY + ") scale(" + data.wrapperScale + ") rotate(" + data.wrapperRotate + ")"}
            fill={data.wrapperColor}
            rx={data.isCircle ? '20': '6'}
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