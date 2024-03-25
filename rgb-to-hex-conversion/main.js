import toHex from "./solution";

function rgb(r, g, b) {
  return `${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

rgb(0, 0, 0); // "000000"
rgb(0, 0, -20); // "000000"
rgb(300, 255, 255); // "FFFFFF"
rgb(173, 255, 47); //"ADFF2F"
