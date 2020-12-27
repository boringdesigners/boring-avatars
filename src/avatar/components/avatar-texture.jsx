import * as React from "react"

function getRandomColor(colors, range) {
  return colors[Math.floor(Math.random() * range)]
}

function AvatarTexture(props) {
  const fill = getRandomColor(props.colors, props.colors.length)
  const fill2 = getRandomColor(props.colors, props.colors.length)


  return (
    <div style={{display: 'inline-block', width: props.size, height: props.size}}>
      <svg
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="prefix__c"
            patternUnits="userSpaceOnUse"
            width={10}
            height={10}
          >
            <circle
              cx={5}
              cy={5}
              r={4}
              fill={fill}
              stroke={fill}
              strokeWidth={0}
            />
          </pattern>

          <pattern
            id="prefix__b"
            patternUnits="userSpaceOnUse"
            width={4}
            height={4}
          >
            <path
              d="M0 4l4-4m-5 1l2-2m2 6l2-2"
              stroke={fill}
              strokeLinecap="square"
            />
          </pattern>
          <pattern
            id="prefix__a"
            patternUnits="userSpaceOnUse"
            width={60}
            height={60}
          >
            <path
              d="M0 60L60 0m-75 15l30-30m30 90l30-30"
              strokeWidth={40}
              //stroke={fill}
              //strokeLinecap="square"
            />
          </pattern>
        </defs>
        <circle cx={70} cy={70} r={70} fill={fill} fill="url(#prefix__c)" />
      </svg>
    </div>
  )
}

export default AvatarTexture
