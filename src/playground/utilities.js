export const getNumberFromString = (name) => {
  const charactersArray = Array.from(name)
  let charactersCodesSum = 0

  charactersArray.forEach((charactersArrayItem) => {
    return charactersCodesSum += charactersArrayItem.charCodeAt(0)
  })

  return charactersCodesSum;
}


export const getModulus = (num, max) => {
  return num % max;
}
