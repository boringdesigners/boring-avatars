import * as React from "react"
import { getNumber, getUnit, getBoolean, getRandomColor, getContrast } from '../utilities'

const SIZE = 36

function generateData(name, colors) {
  const numFromName = getNumber(name)
  const range = colors && colors.length
  const wrapperColor = getRandomColor(numFromName, colors, range)
  const preTranslateX = getUnit(numFromName, 10, 1)
  const wrapperTranslateX = preTranslateX < 5 ? (preTranslateX + SIZE/9) : preTranslateX
  const preTranslateY = getUnit(numFromName, 10, 2)
  const wrapperTranslateY = preTranslateY < 5 ? (preTranslateY + SIZE/9) : preTranslateY


  const data = {
    wrapperColor: wrapperColor,
    faceColor: getContrast(wrapperColor),
    backgroundColor: getRandomColor(numFromName + 13, colors, range),
    wrapperTranslateX: wrapperTranslateX,
    wrapperTranslateY: wrapperTranslateY,
    wrapperRotate: getUnit(numFromName, 360),
    isCircle: getBoolean(numFromName),
    eyeSpread: getUnit(numFromName, 5) ,
    mouthSpread: getUnit(numFromName, 5),
    faceRotate: getUnit(numFromName, 10, 3),
    faceTranslateX: wrapperTranslateX > (SIZE/6) ? wrapperTranslateX/2 : getUnit(numFromName, 8, 1),
    faceTranslateY: wrapperTranslateY > (SIZE/6) ? wrapperTranslateY/2 : getUnit(numFromName, 7, 2),
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
            transform={"translate(" + data.wrapperTranslateX + " " + data.wrapperTranslateY + ") rotate(" + data.wrapperRotate + " " + SIZE / 2 + " " + SIZE / 2  +")"}
            fill={data.wrapperColor}
            rx={data.isCircle ? SIZE : SIZE/6}
          />
          <g transform={"translate(" + data.faceTranslateX + " " + data.faceTranslateY + ") rotate("+ data.faceRotate + " " + SIZE / 2 + " " + SIZE / 2  +")"}>
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