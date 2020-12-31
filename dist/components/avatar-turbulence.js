"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getRandomColor(colors, range) {
  return colors[Math.floor(Math.random() * range)];
}

function AvatarTexture(props) {
  var fill = getRandomColor(props.colors, props.colors.length);

  return React.createElement(
    "div",
    { style: { display: 'inline-block', width: props.size, height: props.size } },
    React.createElement(
      "svg",
      {
        viewBox: "0 0 80 80",
        xmlns: "http://www.w3.org/2000/svg"
      },
      React.createElement(
        "mask",
        {
          id: "mask__a",
          maskUnits: "userSpaceOnUse",
          x: 0,
          y: 0,
          width: 80,
          height: 80
        },
        React.createElement("rect", { width: 80, height: 80, rx: 40, fill: "#fff" })
      ),
      React.createElement(
        "filter",
        { id: "filter__a" },
        React.createElement("feTurbulence", { baseFrequency: 5, numOctaves: 50, type: "turbulence", result: "turbulence" }),
        React.createElement("feDisplacementMap", {
          in2: "turbulence",
          "in": "SourceGraphic",
          scale: 200,
          xChannelSelector: "R",
          yChannelSelector: "G"
        })
      ),
      React.createElement("circle", { cx: 0, cy: 0, r: 80, fill: fill, mask: "url(#mask__a)", filter: "url(#filter__a)" })
    )
  );
}

exports.default = AvatarTexture;