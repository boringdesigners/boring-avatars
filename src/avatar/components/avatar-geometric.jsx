import * as React from "react"

const colors = [
    '#0A2F51',
    '#0E4D64',
    '#137177',
    '#188977',
    '#1D9A6C',
    '#39A96B',
    '#56B870',
    '#74C67A',
    '#99D492',
    '#BFE1B0',
    '#DEEDCF',
  ];

const colors2 = [
  '#182C32',
  '#284251',
  '#3A546E',
  '#4D648B',
  '#6071A6',
  '#757DC0',
  '#A2AED5',
  '#CFD9EA',
];


function GenerateColors(colors) {
  let GColors = new  Array(12).fill('transparent')
  const range = colors.length

  const ColoredCell0 = Math.floor(Math.random() * range)
  const ColoredCell1 = Math.floor(Math.random() * range)
  const ColoredCell2 = Math.floor(Math.random() * range)
  const ColoredCell3 = Math.floor(Math.random() * range)
  const ColoredCell4 = Math.floor(Math.random() * range)
  const ColoredCell5 = Math.floor(Math.random() * range)
  const ColoredCell6 = Math.floor(Math.random() * range)
  const ColoredCell7 = Math.floor(Math.random() * range)
  const ColoredCell8 = Math.floor(Math.random() * range)
  const ColoredCell9 = Math.floor(Math.random() * range)
  const ColoredCell10 = Math.floor(Math.random() * range)
  const ColoredCell11 = Math.floor(Math.random() * range)

  GColors[0] = colors[ColoredCell0];
  GColors[1] = colors[ColoredCell1];
  GColors[2] = colors[ColoredCell2];
  GColors[3] = colors[ColoredCell3];
  GColors[4] = colors[ColoredCell4];
  GColors[5] = colors[ColoredCell5];
  GColors[6] = colors[ColoredCell6];
  GColors[7] = colors[ColoredCell7];
  GColors[8] = colors[ColoredCell8];
  GColors[9] = colors[ColoredCell9];
  GColors[10] = colors[ColoredCell10];
  GColors[11] = colors[ColoredCell11];


  return GColors
}

console.log(GenerateColors(colors))

function AvatarGeometric(props) {

  const AvatarColors = GenerateColors(colors2)

  return (
    <div style={{display: 'inline-block', width: '80px', height: '80px'}}>
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
