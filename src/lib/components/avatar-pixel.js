import * as React from 'react';
import { getNumber, getRandomColor } from '../utilities';

const ELEMENTS = 64;
const SIZE = 80;

function generateColors(name, colors) {
  const numFromName = getNumber(name);
  const range = colors && colors.length;

  const elementsProperties = Array.from({ length: ELEMENTS }, (_, i) => ({
    color: getRandomColor(numFromName % (i + 13), colors, range),
  }));

  return elementsProperties;
}

const AvatarSunset = (props) => {
  const properties = generateColors(props.name, props.colors);

  return (
    <svg
      viewBox={'0 0 ' + SIZE + ' ' + SIZE}
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
    >
      <title>{props.name}</title>
      <mask
        id="mask__pixel"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={SIZE}
        height={SIZE}
      >
        <rect width={SIZE} height={SIZE} rx={props.square ?  undefined : SIZE * 2 } fill="white" />
      </mask>
      <g mask="url(#mask__pixel)">
        <rect width={10} height={10} fill={properties[0].color} />
        <rect x={20} width={10} height={10} fill={properties[1].color} />
        <rect x={40} width={10} height={10} fill={properties[2].color} />
        <rect x={60} width={10} height={10} fill={properties[3].color} />
        <rect x={10} width={10} height={10} fill={properties[4].color} />
        <rect x={30} width={10} height={10} fill={properties[5].color} />
        <rect x={50} width={10} height={10} fill={properties[6].color} />
        <rect x={70} width={10} height={10} fill={properties[7].color} />
        <rect y={10} width={10} height={10} fill={properties[8].color} />
        <rect y={20} width={10} height={10} fill={properties[9].color} />
        <rect y={30} width={10} height={10} fill={properties[10].color} />
        <rect y={40} width={10} height={10} fill={properties[11].color} />
        <rect y={50} width={10} height={10} fill={properties[12].color} />
        <rect y={60} width={10} height={10} fill={properties[13].color} />
        <rect y={70} width={10} height={10} fill={properties[14].color} />
        <rect x={20} y={10} width={10} height={10} fill={properties[15].color} />
        <rect x={20} y={20} width={10} height={10} fill={properties[16].color} />
        <rect x={20} y={30} width={10} height={10} fill={properties[17].color} />
        <rect x={20} y={40} width={10} height={10} fill={properties[18].color} />
        <rect x={20} y={50} width={10} height={10} fill={properties[19].color} />
        <rect x={20} y={60} width={10} height={10} fill={properties[20].color} />
        <rect x={20} y={70} width={10} height={10} fill={properties[21].color} />
        <rect x={40} y={10} width={10} height={10} fill={properties[22].color} />
        <rect x={40} y={20} width={10} height={10} fill={properties[23].color} />
        <rect x={40} y={30} width={10} height={10} fill={properties[24].color} />
        <rect x={40} y={40} width={10} height={10} fill={properties[25].color} />
        <rect x={40} y={50} width={10} height={10} fill={properties[26].color} />
        <rect x={40} y={60} width={10} height={10} fill={properties[27].color} />
        <rect x={40} y={70} width={10} height={10} fill={properties[28].color} />
        <rect x={60} y={10} width={10} height={10} fill={properties[29].color} />
        <rect x={60} y={20} width={10} height={10} fill={properties[30].color} />
        <rect x={60} y={30} width={10} height={10} fill={properties[31].color} />
        <rect x={60} y={40} width={10} height={10} fill={properties[32].color} />
        <rect x={60} y={50} width={10} height={10} fill={properties[33].color} />
        <rect x={60} y={60} width={10} height={10} fill={properties[34].color} />
        <rect x={60} y={70} width={10} height={10} fill={properties[35].color} />
        <rect x={10} y={10} width={10} height={10} fill={properties[36].color} />
        <rect x={10} y={20} width={10} height={10} fill={properties[37].color} />
        <rect x={10} y={30} width={10} height={10} fill={properties[38].color} />
        <rect x={10} y={40} width={10} height={10} fill={properties[39].color} />
        <rect x={10} y={50} width={10} height={10} fill={properties[40].color} />
        <rect x={10} y={60} width={10} height={10} fill={properties[41].color} />
        <rect x={10} y={70} width={10} height={10} fill={properties[42].color} />
        <rect x={30} y={10} width={10} height={10} fill={properties[43].color} />
        <rect x={30} y={20} width={10} height={10} fill={properties[44].color} />
        <rect x={30} y={30} width={10} height={10} fill={properties[45].color} />
        <rect x={30} y={40} width={10} height={10} fill={properties[46].color} />
        <rect x={30} y={50} width={10} height={10} fill={properties[47].color} />
        <rect x={30} y={60} width={10} height={10} fill={properties[48].color} />
        <rect x={30} y={70} width={10} height={10} fill={properties[49].color} />
        <rect x={50} y={10} width={10} height={10} fill={properties[50].color} />
        <rect x={50} y={20} width={10} height={10} fill={properties[51].color} />
        <rect x={50} y={30} width={10} height={10} fill={properties[52].color} />
        <rect x={50} y={40} width={10} height={10} fill={properties[53].color} />
        <rect x={50} y={50} width={10} height={10} fill={properties[54].color} />
        <rect x={50} y={60} width={10} height={10} fill={properties[55].color} />
        <rect x={50} y={70} width={10} height={10} fill={properties[56].color} />
        <rect x={70} y={10} width={10} height={10} fill={properties[57].color} />
        <rect x={70} y={20} width={10} height={10} fill={properties[58].color} />
        <rect x={70} y={30} width={10} height={10} fill={properties[59].color} />
        <rect x={70} y={40} width={10} height={10} fill={properties[60].color} />
        <rect x={70} y={50} width={10} height={10} fill={properties[61].color} />
        <rect x={70} y={60} width={10} height={10} fill={properties[62].color} />
        <rect x={70} y={70} width={10} height={10} fill={properties[63].color} />
      </g>
    </svg>
  );
};

export default AvatarSunset;
