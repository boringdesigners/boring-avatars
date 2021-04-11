import * as React from "react"
import { getNumber, getDigit } from '../utilities'

const ELEMENTS = 3
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

const AvatarMesh = ( props ) => {
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
          <path
            d="M80 40C80 17.909 62.091 0 40 0S0 17.909 0 40s17.909 40 40 40 40-17.909 40-40z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#prefix__a)">
          <path
            d="M80 40C80 17.909 62.091 0 40 0S0 17.909 0 40s17.909 40 40 40 40-17.909 40-40z"
            fill={properties[0].color}
          />
          <g filter="url(#prefix__filter0_f)">
            <path
              d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
              fill={properties[1].color}
            />
          </g>
          <g filter="url(#prefix__filter1_f)">
            <path
              d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
              fill={properties[2].color}
            />
          </g>
        </g>
        <defs>
          <filter
            id="prefix__filter0_f"
            x={-3.5}
            y={-30.5}
            width={106}
            height={131}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation={15} result="effect1_foregroundBlur" />
          </filter>
          <filter
            id="prefix__filter1_f"
            x={-30}
            y={-6}
            width={138}
            height={122}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation={15} result="effect1_foregroundBlur" />
          </filter>
        </defs>
      </svg>

    </div>
  )
}

export default AvatarMesh