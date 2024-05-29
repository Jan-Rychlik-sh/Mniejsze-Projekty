const samogloski = ["a", "ą", "e", "ę", "i", "o", "ó", "u", "y"];
const litery = [
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
  " ",
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
  "ą",
  "ć",
  "ę",
  "ł",
  "ń",
  "ó",
  "ś",
  "ź",
  "ż",
];

let sprawdz = () => {
  console.log("działa");
  let poprawne_slowo = false;
  let ile_samoglosek = 0;
  let slowo = document.getElementsByTagName("input")[0].value;
  slowo = slowo.toLowerCase();
  for (let i = 0; i < slowo.length; i++) {
    for (let j = 0; j < litery.length; j++) {
      if (slowo.charAt(i) == litery[j]) {
        poprawne_slowo = true;
        break;
      }
    }
    for (let j = 0; j < samogloski.length; j++) {
      if (slowo.charAt(i) == samogloski[j]) {
        ile_samoglosek++;
        break;
      }
    }
    if (poprawne_slowo == false) {
      alert("Wpisz poprawne słowo złożone z polskich znaków");
      return;
    }
  }
  //Odmiana przez przypadki
  if (ile_samoglosek == 1) {
    document.getElementById(
      "wynik"
    ).innerText = `Słowo ${slowo} zawiera ${ile_samoglosek} samogłoskę!`;
  } else if (ile_samoglosek == 0) {
    document.getElementById(
      "wynik"
    ).innerText = `Słowo ${slowo} nie ma samogłosek`;
  } else if (ile_samoglosek > 4) {
    document.getElementById(
      "wynik"
    ).innerText = `Słowo ${slowo} zawiera ${ile_samoglosek} samogłosek!`;
  } else {
    document.getElementById(
      "wynik"
    ).innerText = `Słowo ${slowo} zawiera ${ile_samoglosek} samogłoski!`;
  }
};

let body = document.getElementsByTagName("body")[0];
let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", sprawdz);
body.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});
