const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",***
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordlength = 12;

function randomchar() {
  let index = Math.floor(Math.random() * characters.length);
  return characters[index];
}

let first = document.getElementById("pass-first-el");
let second = document.getElementById("pass-second-el");

function randgen() {
  let randompassword1 = "",
    randompassword2 = "";
  for (let i = 0; i < passwordlength; i++) {
    randompassword1 += randomchar();
  }
  for (let i = 0; i < passwordlength; i++) {
    randompassword2 += randomchar();
  }
  first.textContent = randompassword1;
  second.textContent = randompassword2;
}
