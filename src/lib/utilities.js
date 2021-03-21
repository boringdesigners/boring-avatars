export const getNumber = (name) => {
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

export const getDigit = (number, ntn) => {
  return Math.floor(( number/ Math.pow(10, ntn)) % 10);
}

export const getContrast = (hexcolor) => {

	// If a leading # is provided, remove it
	if (hexcolor.slice(0, 1) === '#') {
		hexcolor = hexcolor.slice(1);
	}

	// Convert to RGB value
	var r = parseInt(hexcolor.substr(0,2),16);
	var g = parseInt(hexcolor.substr(2,2),16);
	var b = parseInt(hexcolor.substr(4,2),16);

	// Get YIQ ratio
	var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

	// Check contrast
	return (yiq >= 128) ? 'black' : 'white';

};
