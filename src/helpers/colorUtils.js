
export const generateHex = () => {

  const hexChars = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let newHex = '';

  for (let i = 1; i <= 6; i++) {
    newHex += hexChars[Math.floor(Math.random() * 16)];
  }

  return '#' + newHex;
}

export const generateRGB = () => {

  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

}

export const hexToRgb = (hex) => {

  hex = hex.replace(/^#/, '');

  var r = parseInt(hex.substring(0, 2), 16);

  var g = parseInt(hex.substring(2, 4), 16);
  
  var b = parseInt(hex.substring(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
}

export const rgbToHex = (rgb) => {

  const rgbRegEx = /\d{1,3}/g;

  const result = rgb.match(rgbRegEx);

  const r = parseInt(result[0]);

  const b = parseInt(result[1]);

  const g = parseInt(result[2]);


  return `#${r.toString(16)}${b.toString(16)}${g.toString(16)}`.toUpperCase();

}

export const isLightColor = (hexColor) => {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 128;
}

