export const getNumberFromString = (name, max) => {
  const charactersArray = Array.from(name)
  let charactersCodesSum = 0

  charactersArray.forEach((charactersArrayItem) => {
    return charactersCodesSum += charactersArrayItem.charCodeAt(0)
  })

  return charactersCodesSum % max;
}
