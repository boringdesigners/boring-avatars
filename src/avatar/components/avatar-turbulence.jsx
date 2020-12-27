import * as React from "react"

function getRandomColor(colors, range) {
  return colors[Math.floor(Math.random() * range)]
}

function AvatarTexture(props) {
  const fill = getRandomColor(props.colors, props.colors.length)

  return (
    <div style={{display: 'inline-block', width: props.size, height: props.size}}>
      <svg
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask__a"
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={80}
          height={80}
        >
          <rect width={80} height={80} rx={40} fill="#fff" />
        </mask>

        <filter id="filter__a">
          <feTurbulence baseFrequency={5} numOctaves={50} type="turbulence" result="turbulence" />
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale={200}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <circle cx={0} cy={0} r={80} fill={fill} mask="url(#mask__a)" filter="url(#filter__a)" />
      </svg>
    </div>
  )
}

export default AvatarTexture
