'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilities = require('../utilities');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NUMBER_OF_CELLS = 12;
var LAYERS = 3;
var CELLS_LAYER = NUMBER_OF_CELLS / LAYERS;

function getRandomColor(number, colors, range, index) {
  switch (index) {
    case 0:
      return colors[(0, _utilities.getModulus)(Math.floor(number / 1 % 10) + index, range)];
    case 1:
      return colors[(0, _utilities.getModulus)(Math.floor(number / 10 % 10) + index, range)];
    case 2:
      return colors[(0, _utilities.getModulus)(Math.floor(number / 1 % 10) + index, range)];
    case 3:
      return colors[(0, _utilities.getModulus)(Math.floor(number / 10 % 10) + index, range)];

    default:
      return colors[(0, _utilities.getModulus)(number + index, range)];
  }
}

function oddCells(color, invertedColor, startingCell) {
  var cellColors = new Array(CELLS_LAYER).fill(invertedColor);
  cellColors[startingCell] = color;

  if (startingCell === CELLS_LAYER - 1) {
    cellColors[0] = color;
  } else {
    cellColors[startingCell + 1] = color;
  }
  return cellColors;
}

function fillCells(number, colors, range) {
  return Array.from({ length: CELLS_LAYER }, function (_, i) {
    return getRandomColor(number, colors, range, i);
  });
}

function generateColors(colors, name) {
  var numFromName = (0, _utilities.getNumberFromString)(name);
  var range = colors && colors.length;
  var startingCell = (0, _utilities.getModulus)(numFromName, CELLS_LAYER);
  var innerColor1 = getRandomColor(numFromName, colors, range, (0, _utilities.getModulus)(numFromName, NUMBER_OF_CELLS + 3));
  var innerColor2 = getRandomColor(numFromName, colors, range, (0, _utilities.getModulus)(numFromName, NUMBER_OF_CELLS * 2));

  var level1Colors = fillCells(numFromName, colors, range);
  var level2Colors = oddCells(innerColor1, 'none', startingCell);
  var level3Colors = oddCells('none', innerColor2, startingCell);

  return level1Colors.concat(level2Colors, level3Colors);
}

var AvatarGeometric = function AvatarGeometric(props) {
  var cellColors = generateColors(props.colors, props.name);

  return _react2.default.createElement(
    'div',
    { style: { display: 'inline-block', width: props.size, height: props.size } },
    _react2.default.createElement(
      'svg',
      {
        viewBox: '0 0 80 80',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
      },
      _react2.default.createElement('path', { d: 'M80 40A40 40 0 0040 0v40h40z', fill: cellColors[0] }),
      _react2.default.createElement('path', { d: 'M40 0A40 40 0 000 40h40V0z', fill: cellColors[1] }),
      _react2.default.createElement('path', { d: 'M0 40a40 40 0 0040 40V40H0z', fill: cellColors[2] }),
      _react2.default.createElement('path', { d: 'M40 80a40 40 0 0040-40H40v40z', fill: cellColors[3] }),
      _react2.default.createElement('path', { d: 'M70 40a30 30 0 00-30-30v30h30z', fill: cellColors[4] }),
      _react2.default.createElement('path', { d: 'M40 10a30 30 0 00-30 30h30V10z', fill: cellColors[5] }),
      _react2.default.createElement('path', { d: 'M10 40a30 30 0 0030 30V40H10z', fill: cellColors[6] }),
      _react2.default.createElement('path', { d: 'M40 70a30 30 0 0030-30H40v30z', fill: cellColors[7] }),
      _react2.default.createElement('path', { d: 'M60 40a20 20 0 00-20-20v20h20z', fill: cellColors[8] }),
      _react2.default.createElement('path', { d: 'M40 20a20 20 0 00-20 20h20V20z', fill: cellColors[9] }),
      _react2.default.createElement('path', { d: 'M20 40a20 20 0 0020 20V40H20z', fill: cellColors[10] }),
      _react2.default.createElement('path', { d: 'M40 60a20 20 0 0020-20H40v20z', fill: cellColors[11] })
    )
  );
};

exports.default = AvatarGeometric;