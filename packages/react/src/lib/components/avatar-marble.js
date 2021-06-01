import * as React from "react"
import { getNumber, getUnit, getRandomColor } from '../utilities'

const ELEMENTS = 3
const SIZE = 80

function generateColors(name, colors) {
  const numFromName = getNumber(name)
  const range = colors && colors.length

  const elementsProperties = Array.from({length: ELEMENTS}, (_,i) => ({
    color: getRandomColor(numFromName + i, colors, range),
    translateX: getUnit(numFromName * (i + 1), SIZE / 10, 1),
    translateY: getUnit(numFromName * (i + 1), SIZE / 10, 2),
    scale: (1.2 + (getUnit(numFromName * (i + 1), SIZE / 20) / 10)),
    rotate: getUnit(numFromName * (i + 1), 360, 1)
  }));

  return elementsProperties
}

const AvatarMarble = ( props ) => {
  const properties = generateColors(props.name, props.colors)

  return (
    <svg
      viewBox={"0 0 " + SIZE + " " + SIZE}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      {...props}
    >
      <mask
        id="mask__marble"
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
      <g mask="url(#mask__marble)">
        <path
          d="M80 40C80 17.909 62.091 0 40 0S0 17.909 0 40s17.909 40 40 40 40-17.909 40-40z"
          fill={properties[0].color}
        />
        <path
          filter="url(#prefix__filter0_f)"
          d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
          fill={properties[1].color}
          transform={"translate(" + properties[1].translateX + " " + properties[1].translateY + ") rotate(" + properties[1].rotate + " " + SIZE / 2 + " " + SIZE / 2  +") scale(" + (properties[2].scale) + ")"}
        />
        <path
          filter="url(#prefix__filter0_f)"
          style={{
            mixBlendMode: "overlay",
          }}
          d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
          fill={properties[2].color}
          transform={"translate(" + properties[2].translateX + " " + properties[2].translateY + ") rotate(" + properties[2].rotate + " " + SIZE / 2 + " " + SIZE / 2  +") scale(" + (properties[2].scale) + ")"}
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_f"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation={7} result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  )
}

export default AvatarMarble