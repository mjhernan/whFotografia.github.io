'use strict';
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['!', '#', '$', '%', '&'];
const conjunto = [letters, numbers, symbols];

console.log("Welcome to the PyPassword Generator!");

const nr_letters = getRandomInt(4, 5);
const nr_symbols = getRandomInt(1, 2);
const nr_numbers = getRandomInt(1, 3);

let i = nr_letters;
let j = nr_numbers;
let z = nr_symbols;
let total = i + j + z;
let contra = "";
let contador = 1;

while (total >= contador) {
  const mix = getRandomInt(0, 2);
  if (mix === 0 && i !== 0) {
    const letra = getRandomInt(0, letters.length - 1);
    contra += letters[letra];
    i -= 1;
    contador += 1;
  } else if (mix === 1 && j !== 0) {
    const numero = getRandomInt(0, numbers.length - 1);
    contra += numbers[numero];
    j -= 1;
    contador += 1;
  } else if (mix === 2 && z !== 0) {
    const simbolo = getRandomInt(0, symbols.length - 1);
    contra += symbols[simbolo];
    z -= 1;
    contador += 1;
  }
}

console.log(contra);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}