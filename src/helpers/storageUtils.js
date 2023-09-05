export const addHexCodeToStorage = (hex) => {

  const hexCodes = getHexCodesFromToStorage();

  hexCodes.push(hex);

  localStorage.setItem('hexCodes', JSON.stringify(hexCodes));

}

export const getHexCodesFromToStorage = () => {

  let hexCodes;

  localStorage.getItem('hexCodes') === null
    ?
    hexCodes = []
    :
    hexCodes = JSON.parse(localStorage.getItem('hexCodes'));

  return hexCodes;

}

export const deleteHexCodeFromStorage = () => {

}

export const addRgbCodeToStorage = (rgb) => {

  const rgbCodes = getRgbCodesFromToStorage();

  rgbCodes.push(rgb);

  localStorage.setItem('rgbCodes', JSON.stringify(rgbCodes));

}

export const getRgbCodesFromToStorage = () => {

  let rgbCodes;

  localStorage.getItem('rgbCodes') === null
    ?
    rgbCodes = []
    :
    rgbCodes = JSON.parse(localStorage.getItem('rgbCodes'));

  return rgbCodes;

}

export const deleteRgbCodeFromStorage = () => {

}

