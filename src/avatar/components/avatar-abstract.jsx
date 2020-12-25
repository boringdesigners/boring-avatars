import * as React from "react"

const ELEMENTS = 4

function getRandomColor(colors, range) {
  return colors[Math.floor(Math.random() * range)]
}

function generateColors(colors) {
  const range = colors && colors.length

  return Array.from({length: ELEMENTS}, () => getRandomColor(colors, range));
}

function AvatarAbstract(props) {
  const elementColors = generateColors(props.colors)

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
          <rect width={80} height={80} rx={40} fill={elementColors[0]} />
          <path
            d="M0 64.167l11.667-32.5 44.166 12.5 15.834 44.166-60 22.5L0 64.167z"
            fill={elementColors[1]}
          />
          <circle cx={49.167} cy={40.833} fill={elementColors[2]} r={17.5} />
          <path
            d="M95.84 43.846L44.167 30-7.506 16.154"
            stroke={elementColors[3]}
            strokeWidth={2}
          />
        </g>
      </svg>
    </div>
  )
}

export default AvatarAbstract