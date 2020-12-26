import * as React from "react"

const ELEMENTS = 4

function getRandomColor(colors, range) {
  return colors[Math.floor(Math.random() * range)]
}

function getRandomTranslate() {
  return (Math.floor(Math.random() * 10))
}

function getRandomRotate() {
  return (Math.floor(Math.random() * 360) + " 40 40")
}

function generateColors(colors) {
  const range = colors && colors.length
  const elementsProperties = Array.from({length: ELEMENTS}, () => ({
    color: getRandomColor(colors, range),
    translate: getRandomTranslate(),
    rotate: getRandomRotate(),
  }));


  return elementsProperties
}

function AvatarAbstract(props) {
  const properties = generateColors(props.colors)

  return (
    <div style={{display: 'inline-block', width: props.size, height: props.size}}>
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <mask
          id="prefix__a"
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={80}
          height={80}
        >
          <rect width={80} height={80} rx={40} fill="#fff" />
        </mask>
        <g mask="url(#prefix__a)">
          <rect
            width={80}
            height={80}
            rx={40}
            fill={properties[0].color}
          />
          <path
            d="M0 64.167l11.667-32.5 44.166 12.5 15.834 44.166-60 22.5L0 64.167z"
            fill={properties[1].color}
            transform={"translate(" + properties[1].translate + ") rotate(" + properties[1].rotate + ")"}
          />
          <circle
            cx={props.size/2}
            cy={props.size/2}
            fill={properties[2].color}
            r={17.5}
            transform={"translate(" + properties[3].translate + ")"}
          />
          <line
            x1="0"
            y1={props.size/2}
            x2="80"
            y2={props.size/2}
            strokeWidth={2}
            stroke={properties[3].color}
            transform={"translate(" + properties[3].translate + ") rotate(" + properties[3].rotate + ")"}
          />
        </g>
      </svg>
    </div>
  )
}

export default AvatarAbstract