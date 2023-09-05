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
