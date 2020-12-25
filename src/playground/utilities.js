const getDigitUnderMax = (digit, max) => {
  if(digit >= max) {
    if(8 - digit < 0) {
      return 1
    }
    return 8 - digit
  }
  return digit
}

export const getNumberFromString = (name, max) => {
  const charactersArray = Array.from(name)
  let charactersCodesSum = 0
  
  charactersArray.forEach((charactersArrayItem, index) => {
    return charactersCodesSum += name.charCodeAt(index)
  })

  const bigNum = charactersCodesSum * 123456
  const digit = (''+bigNum)[6]

  return getDigitUnderMax(digit, max);
}
