import * as React from "react"

function GenerateColors(colors) {
  let GColors = new  Array(12).fill('transparent')
  const range = colors && colors.length

  const ColoredCell0 = Math.floor(Math.random() * range)
  const ColoredCell1 = Math.floor(Math.random() * range)
  const ColoredCell2 = Math.floor(Math.random() * range)
  const ColoredCell3 = Math.floor(Math.random() * range)
  const ColoredLevel2 = Math.floor(Math.random() * range)
  const ColoredLevel3 = Math.floor(Math.random() * range)


  GColors[0] = colors[ColoredCell0];
  GColors[1] = colors[ColoredCell1];
  GColors[2] = colors[ColoredCell2];
  GColors[3] = colors[ColoredCell3];

  const StartingCell = Math.floor(Math.random() * 4)

  GColors[StartingCell + 4] = colors[ColoredLevel2];
  GColors[GColors.length - StartingCell] = colors[ColoredLevel3];

  if (StartingCell === 3) {
    GColors[4] = colors[ColoredLevel2];
    //GColors[GColors.length - StartingCell] = colors[ColoredLevel3];
  } else {
    GColors[StartingCell + 5] = colors[ColoredLevel2];
    GColors[GColors.length - StartingCell -1] = colors[ColoredLevel3];
  }

  return GColors
}

function AvatarGeometric(props) {
  const AvatarColors = GenerateColors(props.colors)

  return (
    <div style={{display: 'inline-block', width: '32px', height: '32px'}}>
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M80 40A40 40 0 0040 0v40h40z" fill={AvatarColors[0]} />
        <path d="M40 0A40 40 0 000 40h40V0z" fill={AvatarColors[1]} />
        <path d="M0 40a40 40 0 0040 40V40H0z" fill={AvatarColors[2]} />
        <path d="M40 80a40 40 0 0040-40H40v40z" fill={AvatarColors[3]} />
        <path d="M70 40a30 30 0 00-30-30v30h30z" fill={AvatarColors[4]} />
        <path d="M40 10a30 30 0 00-30 30h30V10z" fill={AvatarColors[5]} />
        <path d="M10 40a30 30 0 0030 30V40H10z" fill={AvatarColors[6]} />
        <path d="M40 70a30 30 0 0030-30H40v30z" fill={AvatarColors[7]} />
        <path
          d="M60 40a20 20 0 00-20-20v20h20zM40 20a20 20 0 00-20 20h20V20z"
          fill={AvatarColors[8]}
        />
        <path d="M20 40a20 20 0 0020 20V40H20z" fill={AvatarColors[9]} />
        <path d="M40 60a20 20 0 0020-20H40v20z" fill={AvatarColors[10]} />
      </svg>
    </div>
  )
}

export default AvatarGeometric
