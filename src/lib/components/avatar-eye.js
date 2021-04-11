import * as React from "react"
import { getNumber, getDigit, getAngle } from '../utilities'

const SIZE = 36
const EYE_SIZE = SIZE/2

function getRandomColor(number, colors, range) {
  return colors[(number) % range]
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
  const wrapperTranslateX = getUnit(numFromName, EYE_SIZE/2 - 2, 1)
  const wrapperTranslateY = getUnit(numFromName, EYE_SIZE/2 - 2, 2)
  const wrapperRotate = getAngle(wrapperTranslateX, wrapperTranslateY)

  const data = {
    backgroundColor: getRandomColor(numFromName, colors, range),
    scleraColor: getRandomColor(numFromName + 1, colors, range),
    irisColor: getRandomColor(numFromName + 2, colors, range),
    wrapperTranslateX: wrapperTranslateX,
    wrapperTranslateY: wrapperTranslateY,
    wrapperRotate: -(180 - wrapperRotate),
  };

  return data
}

const AvatarEye = ( props ) => {
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
          <path
            d="M36 18c0-9.941-8.059-18-18-18S0 8.059 0 18s8.059 18 18 18 18-8.059 18-18z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#prefix__a)">
          <path
            d="M36 18c0-9.941-8.059-18-18-18S0 8.059 0 18s8.059 18 18 18 18-8.059 18-18z"
            fill={data.backgroundColor}
          />
          <path fill="#fff" fill-opacity="0.3" d="M0 0h36v18H0z" />
          <mask
            id="prefix__b"
            maskUnits="userSpaceOnUse"
            x={4}
            y={11}
            width={28}
            height={14}
          >
            <path
              d="M18 11C7.818 11 4 18 4 18s5 7 14 7 14-7 14-7-3.818-7-14-7z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#prefix__b)">
            <path
              d="M18 11C8 11 4 18 4 18s5 7 14 7 14-7 14-7-4-7-14-7z"
              fill="#FCFCFC"
            />
            <g transform={"translate(" + data.wrapperTranslateX + " " + data.wrapperTranslateY + ") rotate("+ data.wrapperRotate + ")"} transform-origin="50%">
              <circle cx={SIZE/2} cy={SIZE/2} r={10} fill={data.irisColor} />
              <circle cx={25} cy={SIZE/2} r={1} fill="#FCFCFC" />
              <circle cx={SIZE/2} cy={SIZE/2} r={4} fill="#03030B" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default AvatarEye