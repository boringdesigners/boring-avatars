import * as React from "react"

function getRandomColor(colors, range) {
  return colors[Math.floor(Math.random() * range)]
}

function AvatarTexture(props) {
  const fill = getRandomColor(props.colors, props.colors.length)

  return (
    <div style={{display: 'inline-block', width: props.size, height: props.size}}>
      <svg
        viewBox="0 0 220 220"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="prefix__a">
          <feTurbulence baseFrequency={0.7} numOctaves={50} result="turbulence" />
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale={400}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <circle cx={100} cy={100} r={100} fill={fill} filter="url(#prefix__a)" />
      </svg>
    </div>
  )
}

export default AvatarTexture
