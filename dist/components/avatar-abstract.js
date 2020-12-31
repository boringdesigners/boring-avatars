"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _utilities = require("../utilities");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var ELEMENTS = 4;
var SIZE = 80;

function getRandomColor(number, colors, range, index) {
  return colors[(0, _utilities.getModulus)(number + index, range)];
}

function getRandomTranslateX(number, index) {
  var value = (0, _utilities.getModulus)(number * index, SIZE / 4);

  if (number % 2 === 0) {
    return -value;
  } else return value;
}

function getRandomTranslateY(number, index) {
  var value = (0, _utilities.getModulus)(number * index, SIZE / 4);

  if (number % 2 === 0) {
    return value;
  } else return -value;
}

function getRandomRotate(number) {
  return (0, _utilities.getModulus)(number, 360) + " " + SIZE / 2 + " " + SIZE / 2;
}

function generateColors(name, colors) {
  var numFromName = (0, _utilities.getNumberFromString)(name);
  var range = colors && colors.length;

  var elementsProperties = Array.from({ length: ELEMENTS }, function (_, i) {
    return {
      color: getRandomColor(numFromName, colors, range, i),
      translateX: getRandomTranslateX(numFromName, i),
      translateY: getRandomTranslateY(numFromName, i),
      rotate: getRandomRotate(numFromName)
    };
  });

  return elementsProperties;
}

var AvatarAbstract = function AvatarAbstract(props) {
  var properties = generateColors(props.name, props.colors);

  return React.createElement(
    "div",
    { style: { display: 'inline-block', width: props.size, height: props.size } },
    React.createElement(
      "svg",
      _extends({
        viewBox: "0 0 " + SIZE + " " + SIZE,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, props),
      React.createElement(
        "mask",
        {
          id: "prefix__a",
          maskUnits: "userSpaceOnUse",
          x: 0,
          y: 0,
          width: SIZE,
          height: SIZE
        },
        React.createElement("rect", { width: SIZE, height: SIZE, rx: SIZE / 2, fill: "#fff" })
      ),
      React.createElement(
        "g",
        { mask: "url(#prefix__a)" },
        React.createElement("rect", {
          width: SIZE,
          height: SIZE,
          rx: SIZE / 2,
          fill: properties[0].color
        }),
        React.createElement("path", {
          d: "M0 64.167l11.667-32.5 44.166 12.5 15.834 44.166-60 22.5L0 64.167z",
          fill: properties[1].color,
          transform: "translate(" + properties[1].translateX + " " + properties[1].translateY + ") rotate(" + properties[1].rotate + ")"
        }),
        React.createElement("circle", {
          cx: SIZE / 2,
          cy: SIZE / 2,
          fill: properties[2].color,
          r: 17.5,
          transform: "translate(" + properties[3].translateX + " " + properties[3].translateY + ")"
        }),
        React.createElement("line", {
          x1: "0",
          y1: SIZE / 2,
          x2: "80",
          y2: SIZE / 2,
          strokeWidth: 2,
          stroke: properties[3].color,
          transform: "translate(" + properties[3].translateX + " " + properties[3].translateY + ") rotate(" + properties[3].rotate + ")"
        })
      )
    )
  );
};

exports.default = AvatarAbstract;