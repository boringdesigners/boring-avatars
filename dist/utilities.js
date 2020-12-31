"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getNumberFromString = exports.getNumberFromString = function getNumberFromString(name) {
  var charactersArray = Array.from(name);
  var charactersCodesSum = 0;

  charactersArray.forEach(function (charactersArrayItem) {
    return charactersCodesSum += charactersArrayItem.charCodeAt(0);
  });

  return charactersCodesSum;
};

var getModulus = exports.getModulus = function getModulus(num, max) {
  return num % max;
};