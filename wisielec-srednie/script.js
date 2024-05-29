let Proverbs = [
  "Co nagle to po diable",
  "Gdzie kucharek sześć tam nie ma co jeść",
  "Nie chwal dnia przed zachodem słońca",
  "Apetyt rośnie w miarę jedzenia",
  "Cicha woda brzegi rwie",
  "Czego Jaś się nie nauczył tego Jan nie będzie umiał",
  "Darowanemu koniowi w zęby się nie zagląda",
  "Dla chcącego nic trudnego",
  "Dobrymi chęciami piekło jest wybrukowane",
  "Gdzie drwa rąbią tam wióry lecą",
  "Głodnemu chleb na myśli",
  "Jedna jaskółka wiosny nie czyni",
  "Każdy kij ma dwa końce",
  "Kto pierwszy ten lepszy",
  "Kto pyta nie błądzi",
  "Lepszy wróbel w garści, niż gołąb na dachu",
  "Mądry Polak po szkodzie",
  "Nadzieja matką głupich",
  "Nie ma dymu bez ognia",
  "Nie od razu Kraków zbudowano",
  "Nie wszystko złoto co się świeci",
  "Oko za oko ząb za ząb",
  "Pierwsze koty za płoty",
  "Prawda w oczy kole",
  "Przez żołądek do serca",
  "Raz na wozie raz pod wozem",
  "Słowo daje towarzystwo",
  "Strzeżonego Pan Bóg strzeże",
  "Szewc bez butów chodzi",
  "Szukać igły w stogu siana",
  "Uderz w stół a nożyce się odezwą",
  "Wilk syty i owca cała",
  "Z deszczu pod rynnę",
  "Zgoda buduje niezgoda rujnuje",
  "Żeby kózka nie skakała, to by nóżki nie złamała",
];

let alfabet = [
  "A",
  "Ą",
  "B",
  "C",
  "Ć",
  "D",
  "E",
  "Ę",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "Ł",
  "M",
  "N",
  "Ń",
  "O",
  "Ó",
  "P",
  "Q",
  "R",
  "S",
  "Ś",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "Ź",
  "Ż",
];

let missed = 0;
let Yes = new Audio("yes.wav");
let No = new Audio("no.wav");

let word = Proverbs[Math.floor(Math.random() * Proverbs.length)].toUpperCase();
let password = [];
for (let i in word) {
  password[i] = word.charAt(i);
}
let passwordHash = [];

console.log(password);

for (let i in password) {
  if (password[i] == " ") passwordHash[i] = " ";
  else passwordHash[i] = "-";
}

let STRINGpasswordHash = passwordHash.join("").toString();
console.log(STRINGpasswordHash);

console.log(passwordHash);

let start = () => {
  document.getElementById("password").innerText = STRINGpasswordHash;
  let letters = document.getElementById("letters");
  for (let i in alfabet) {
    let letter = document.createElement("div");
    letter.id = `l${i}`;
    letter.classList.add("letter");
    letter.innerHTML = alfabet[i];
    letter.setAttribute("onclick", `sprawdz(${i})`);
    letters.appendChild(letter);
  }
};

let sprawdz = (nr) => {
  let hit = false;
  STRINGpasswordHash = passwordHash.join("").toString();
  let letter = document.getElementById(`l${nr}`);
  for (let i = 0; i < passwordHash.length; i++) {
    if (letter.innerText == password[i]) {
      passwordHash[i] = letter.innerText;
      STRINGpasswordHash = passwordHash.join("").toString();
      document.getElementById("password").innerHTML = STRINGpasswordHash;
      hit = true;
      letter.setAttribute("onclick", ";");
      letter.classList.add("usedWin");
      Yes.play();
    }
  }
  if (hit == false) {
    missed++;
    No.play();
    letter.setAttribute("onclick", ";");
    letter.classList.add("usedLose");
    document
      .querySelector("#gallows img")
      .setAttribute("src", `img/s${missed}.jpg`);
  }
  if (password.join("").toString() == passwordHash.join("").toString()) {
    let letters = document.getElementById("letters");
    letters.innerHTML = "";
    let win = document.createElement("span");
    win.innerText = `Wygrałeś, prawidłowe hasło to rzeczywiście: ${password
      .join("")
      .toString()}.`;
    win.classList.add("win");
    let again = document.createElement("span");
    again.classList.add("again");
    again.innerText = "Jeszcze raz?";
    again.setAttribute("onclick", "location.reload();");
    letters.appendChild(win);
    letters.appendChild(again);
    return;
  }
  if (missed >= 9) {
    let letters = document.getElementById("letters");
    letters.innerHTML = "";
    let lose = document.createElement("span");
    lose.innerText = `Przegrałeś, prawidłowe hasło to ${password
      .join("")
      .toString()}.`;
    lose.classList.add("lose");
    let again = document.createElement("span");
    again.innerText = "Jeszcze raz?";
    again.setAttribute("onclick", "location.reload();");
    again.classList.add("again");
    letters.appendChild(lose);
    letters.appendChild(again);
    return;
  }
};
onload = start;
