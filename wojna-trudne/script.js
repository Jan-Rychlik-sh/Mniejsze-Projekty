let cards = [
  //trefl ♣
  "2_trefl",
  "3_trefl",
  "4_trefl",
  "5_trefl",
  "6_trefl",
  "7_trefl",
  "8_trefl",
  "9_trefl",
  "10_trefl",
  "J_trefl",
  "Q_trefl",
  "K_trefl",
  "A_trefl",

  //karo ♦
  "2_karo",
  "3_karo",
  "4_karo",
  "5_karo",
  "6_karo",
  "7_karo",
  "8_karo",
  "9_karo",
  "10_karo",
  "J_karo",
  "Q_karo",
  "K_karo",
  "A_karo",

  //kier ♥
  "2_kier",
  "3_kier",
  "4_kier",
  "5_kier",
  "6_kier",
  "7_kier",
  "8_kier",
  "9_kier",
  "10_kier",
  "J_kier",
  "Q_kier",
  "K_kier",
  "A_kier",

  //pik ♠
  "2_pik",
  "3_pik",
  "4_pik",
  "5_pik",
  "6_pik",
  "7_pik",
  "8_pik",
  "9_pik",
  "10_pik",
  "J_pik",
  "Q_pik",
  "K_pik",
  "A_pik",
];
let player1 = [];
let player2 = [];
let drawIteratio = 0;
let drawPlayer1BufferArray = [];
let drawPlayer2BufferArray = [];
let bufor1;
let bufor2;
let player1W = [];
let player2W = [];
let C2 = document.getElementById("C2");
let C1 = document.getElementById("C1");

let start = () => {
  let numbers = Array.from({ length: 52 }, (_, i) => i); // tworzy tablicę z liczbami od 0 do 51
  let random = [];

  for (let i = 0; i < 52; i++) {
    let index = Math.floor(Math.random() * numbers.length); // losuje indeks
    random.push(numbers[index]); // dodaje wylosowaną liczbę do tablicy random
    numbers.splice(index, 1); // usuwa wylosowaną liczbę z tablicy numbers
  }
  for (let i = 0; i < 26; i++) player1[i] = cards[random[i]];
  for (let i = 26; i < 52; i++) player2[i - 26] = cards[random[i]];
};

onload = start;

class CardCreator {
  constructor(value, color, number, reversed, ThirdCard) {
    this.value = value;
    this.color = color;
    this.number = number;
    this.reversed = reversed;
    this.CardBattleContainer = document.createElement("div");
    this.fontColor;
    this.realSymbol;
    this.ThirdCard = ThirdCard;
  }

  chooseColor() {
    switch (this.color) {
      case "karo":
        this.fontColor = "#f00";
        this.realSymbol = "♦";
        break;
      case "kier":
        this.fontColor = "#f00";
        this.realSymbol = "♥";
        break;

      case "trefl":
        this.fontColor = "#000";
        this.realSymbol = "♣";
        break;
      case "pik":
        this.fontColor = "#000";
        this.realSymbol = "♠";
        break;
    }
  }

  createCard() {
    this.CardBattleContainer.style.fontSize = "6vh";
    this.CardBattleContainer.style.textAlign = "center";
    this.CardBattleContainer.style.backgroundColor = "white";
    if (this.reversed == false) {
      this.CardBattleContainer.id = `CBT${this.number}`;
      this.CardBattleContainer.style.color = this.fontColor;
      let row1 = document.createElement("div");
      row1.style.width = "100%";
      row1.innerText = `${this.realSymbol} ${this.realSymbol}`;
      let row2 = document.createElement("div");
      row2.style.width = "100%";
      row2.id = `BC${this.number}`;
      row2.innerText = `${this.value}`;
      let row3 = document.createElement("div");
      row3.style.width = "100%";
      row3.innerText = `${this.realSymbol} ${this.realSymbol}`;
      this.CardBattleContainer.appendChild(row1);
      this.CardBattleContainer.appendChild(row2);
      this.CardBattleContainer.appendChild(row3);
      if (this.ThirdCard == true) {
        this.CardBattleContainer.id = `CBTRW${this.number}`;
        this.CardBattleContainer.style.border = "6px solid #381208";
        this.CardBattleContainer.style.height = "30vh";
        this.CardBattleContainer.style.width = "20vh";
        this.CardBattleContainer.style.position = "absolute";
      } else {
        this.CardBattleContainer.style.width = "100%";
        this.CardBattleContainer.style.height = "100%";
        this.CardBattleContainer.style.position = "relative";
      }
    } else {
      this.CardBattleContainer.id = `CBTR${this.number}`;
      this.CardBattleContainer.style.height = "30vh";
      this.CardBattleContainer.style.width = "20vh";
      this.CardBattleContainer.style.position = "absolute";
      this.CardBattleContainer.style.transform = "rotate(90deg)";
      this.CardBattleContainer.style.color = "white";
      this.CardBattleContainer.style.backgroundColor = "#41250f";
      this.CardBattleContainer.innerText = "?";
      this.CardBattleContainer.style.display = " flex";
      this.CardBattleContainer.style.alignItems = " center";
      this.CardBattleContainer.style.justifyContent = " center";
      this.CardBattleContainer.style.fontSize = "80px";
      this.CardBattleContainer.style.border = " 6px solid #381208";
    }
  }
}

let endOfCards = () => {
  let howMany1 = parseInt(document.getElementById("howMany1").innerText);
  let HMW1 = document.getElementById("HMW1").innerText;
  if (howMany1 <= 0) {
    // alert("koniec");
    player1 = player1W.slice(); // Utwórz głęboką kopię tablicy player1W
    player1W = [];
    howMany1 = parseInt(HMW1);
    HMW1 = "00";
    document.getElementById("WC1").style.backgroundColor = "";
    document.getElementById("howMany1").innerText = howMany1; // Aktualizacja wyświetlacza
    document.getElementById("HMW1").innerText = "0"; // Aktualizacja wyświetlacza
  }

  let howMany2 = parseInt(document.getElementById("howMany2").innerText);
  let HMW2 = document.getElementById("HMW2").innerText;
  if (howMany2 <= 0) {
    // alert("koniec");
    player2 = player2W.slice(); // Utwórz głęboką kopię tablicy player2W
    player2W = [];
    howMany2 = parseInt(HMW2);
    HMW2 = "00";
    document.getElementById("WC2").style.backgroundColor = "";
    document.getElementById("howMany2").innerText = howMany2; // Aktualizacja wyświetlacza
    document.getElementById("HMW2").innerText = "0"; // Aktualizacja wyświetlacza
  }
};

let battle1 = () => {
  bufor1 = player1[0];
  let BF1 = document.getElementById("BF1");
  document.getElementById("howMany1").innerHTML--;
  let indexVALUE = player1[0].indexOf("_");
  let resultVALUE = player1[0].slice(0, indexVALUE);
  let indexNUMBER = player1[0].lastIndexOf("_");
  let resultNUMBER = player1[0].slice(indexNUMBER + 1);
  let card = new CardCreator(resultVALUE, resultNUMBER, 1, false);
  card.chooseColor();
  card.createCard();
  BF1.innerHTML = "";
  BF1.appendChild(card.CardBattleContainer);
  // C1.setAttribute("onclick", ";");
  C1.setAttribute("onclick", ";");
  C2.setAttribute("onclick", "battle2();");
  player1.splice(0, 1);
};

battle2 = () => {
  bufor2 = player2[0];
  let BF2 = document.getElementById("BF2");
  document.getElementById("howMany2").innerHTML--;
  let indexVALUE = player2[0].indexOf("_");
  let resultVALUE = player2[0].slice(0, indexVALUE);
  let indexNUMBER = player2[0].lastIndexOf("_");
  let resultNUMBER = player2[0].slice(indexNUMBER + 1);
  let card = new CardCreator(resultVALUE, resultNUMBER, 2, false);
  card.chooseColor();
  card.createCard();
  BF2.innerHTML = "";
  BF2.appendChild(card.CardBattleContainer);
  // C2.setAttribute("onclick", ";");
  player2.splice(0, 1);
  whoWin(false);
};

let whoWin = (ThreeCardBattle) => {
  WINNER();
  C1.setAttribute("onclick", ";");
  C2.setAttribute("onclick", ";");

  if (ThreeCardBattle == false) {
    let letterToNumber1 = letterToNumberFUNCTION(
      document.querySelector("#CBT1 #BC1").innerText
    );
    let letterToNumber2 = letterToNumberFUNCTION(
      document.querySelector("#CBT2 #BC2").innerText
    );
    if (parseInt(letterToNumber1) > parseInt(letterToNumber2)) {
      let WC1 = document.getElementById("WC1");
      let HMW1 = document.getElementById("HMW1");
      HMW1.innerHTML = parseInt(HMW1.innerHTML) + 2;
      player1W.push(bufor1);
      player1W.push(bufor2);
      WC1.style.backgroundColor = "#41250f";
      WC1.classList.add("winCard");
      setTimeout(removeWinClass, 1000);
    } else if (parseInt(letterToNumber1) < parseInt(letterToNumber2)) {
      let WC2 = document.getElementById("WC2");
      let HMW2 = document.getElementById("HMW2");
      HMW2.innerHTML = parseInt(HMW2.innerHTML) + 2;
      player2W.push(bufor1);
      player2W.push(bufor2);
      player1.slice(0, 1);
      player2.slice(0, 1);
      WC2.style.backgroundColor = "#41250f";
      WC2.classList.add("winCard");
      setTimeout(() => removeWinClass(), 1000);
    } else {
      drawPlayer1BufferArray.push(bufor1);
      drawPlayer2BufferArray.push(bufor2);
      Cards3Battle();
    }
  } else {
    let letterToNumber1 = letterToNumberFUNCTION(
      document.querySelector("#CBTRW1>#BC1").innerText
    );
    let letterToNumber2 = letterToNumberFUNCTION(
      document.querySelector("#CBTRW2>#BC2").innerText
    );
    if (letterToNumber1 > letterToNumber2) {
      drawIteratio = 0;
      let WC1 = document.getElementById("WC1");
      let HMW1 = document.getElementById("HMW1");
      HMW1.innerHTML =
        parseInt(HMW1.innerHTML) +
        drawPlayer1BufferArray.length +
        drawPlayer2BufferArray.length;
      for (let winnedCard of drawPlayer1BufferArray) {
        player1W.push(winnedCard);
      }
      for (let winnedCard of drawPlayer2BufferArray) {
        player1W.push(winnedCard);
      }
      WC1.style.backgroundColor = "#41250f";
      WC1.classList.add("winCard");
      setTimeout(removeWinClass, 1000);
      drawPlayer1BufferArray = [];
      drawPlayer2BufferArray = [];
    } else if (letterToNumber1 < letterToNumber2) {
      drawIteratio = 0;
      let WC2 = document.getElementById("WC2");
      let HMW2 = document.getElementById("HMW2");
      HMW2.innerHTML =
        parseInt(HMW2.innerHTML) +
        drawPlayer1BufferArray.length +
        drawPlayer2BufferArray.length;
      for (let winnedCard of drawPlayer1BufferArray) {
        player2W.push(winnedCard);
      }
      for (let winnedCard of drawPlayer2BufferArray) {
        player2W.push(winnedCard);
      }
      WC2.style.backgroundColor = "#41250f";
      WC2.classList.add("winCard");
      setTimeout(removeWinClass, 1000);
      drawPlayer1BufferArray = [];
      drawPlayer2BufferArray = [];
    } else {
      let CBTRW1 = document.getElementById("CBTRW1");
      let CBTRW2 = document.getElementById("CBTRW2");
      let BF1 = document.getElementById("BF1");
      let BF2 = document.getElementById("BF2");

      let CBT1 = document.getElementById("CBT1");
      let CBTR1 = document.getElementById("CBTR1");
      BF1.removeChild(CBT1);
      BF1.removeChild(CBTR1);

      let CBT2 = document.getElementById("CBT2");
      let CBTR2 = document.getElementById("CBTR2");
      BF2.removeChild(CBT2);
      BF2.removeChild(CBTR2);

      CBTRW1.id = "CBT1";
      CBTRW2.id = "CBT2";
      Cards3Battle();
      drawIteratio++;
    }
  }
};

let letterToNumberFUNCTION = (arg) => {
  switch (arg) {
    case "J":
      arg = 11;
      break;
    case "Q":
      arg = 12;
      break;
    case "K":
      arg = 13;
      break;
    case "A":
      arg = 14;
      break;

    default:
      break;
  }
  return arg;
};

let removeWinClass = () => {
  document.querySelector(".winCard").classList.remove("winCard");
  let occupiedFields = document.querySelectorAll(".battleField");
  for (let field of occupiedFields) {
    field.innerHTML = "";
  }
  let addEventListeners = () => {
    C1.setAttribute("onclick", "battle1();");
    C2.setAttribute("onclick", ";");
  };
  setTimeout(addEventListeners, 500);
  endOfCards();
};

let Cards3Battle = () => {
  C1.setAttribute("onclick", "reversedBattle1();");
  C2.setAttribute("onclick", "reversedBattle2();");
};

let reversedBattle1 = () => {
  endOfCards();
  bufor1 = player1[0];
  let BF1 = document.getElementById("BF1");
  document.getElementById("howMany1").innerHTML--;
  let indexVALUE = player1[0].indexOf("_");
  let resultVALUE = player1[0].slice(0, indexVALUE);
  let indexNUMBER = player1[0].lastIndexOf("_");
  let resultNUMBER = player1[0].slice(indexNUMBER + 1);
  let card = new CardCreator(resultVALUE, resultNUMBER, 1, true);
  card.chooseColor();
  card.createCard();
  BF1.appendChild(card.CardBattleContainer);

  C1.setAttribute("onclick", ";");
  C2.setAttribute("onclick", "reversedBattle2();");
  player1.splice(0, 1);
  drawPlayer1BufferArray.push(bufor1);
};

let reversedBattle2 = () => {
  endOfCards();
  bufor2 = player2[0];
  let BF2 = document.getElementById("BF2");
  document.getElementById("howMany2").innerHTML--;
  let indexVALUE = player2[0].indexOf("_");
  let resultVALUE = player2[0].slice(0, indexVALUE);
  let indexNUMBER = player2[0].lastIndexOf("_");
  let resultNUMBER = player2[0].slice(indexNUMBER + 1);
  let card = new CardCreator(resultVALUE, resultNUMBER, 2, true);
  card.chooseColor();
  card.createCard();
  BF2.appendChild(card.CardBattleContainer);
  // C1.setAttribute("onclick", ";");
  C1.setAttribute("onclick", "ThreeCard1();");
  C2.setAttribute("onclick", ";");
  player2.splice(0, 1);
  drawPlayer2BufferArray.push(bufor2);
};

let ThreeCard1 = () => {
  bufor1 = player1[0];
  let BF1 = document.getElementById("BF1");
  document.getElementById("howMany1").innerHTML--;
  let indexVALUE = player1[0].indexOf("_");
  let resultVALUE = player1[0].slice(0, indexVALUE);
  let indexNUMBER = player1[0].lastIndexOf("_");
  let resultNUMBER = player1[0].slice(indexNUMBER + 1);
  let card = new CardCreator(resultVALUE, resultNUMBER, 1, false, true);
  card.chooseColor();
  card.createCard();
  BF1.appendChild(card.CardBattleContainer);
  // C1.setAttribute("onclick", ";");
  C1.setAttribute("onclick", ";");
  C2.setAttribute("onclick", "ThreeCard2();");
  player1.splice(0, 1);
  drawPlayer1BufferArray.push(bufor1);
};

let ThreeCard2 = () => {
  bufor2 = player2[0];
  let BF2 = document.getElementById("BF2");
  document.getElementById("howMany2").innerHTML--;
  let indexVALUE = player2[0].indexOf("_");
  let resultVALUE = player2[0].slice(0, indexVALUE);
  let indexNUMBER = player2[0].lastIndexOf("_");
  let resultNUMBER = player2[0].slice(indexNUMBER + 1);
  let card = new CardCreator(resultVALUE, resultNUMBER, 2, false, true);
  card.chooseColor();
  card.createCard();
  BF2.appendChild(card.CardBattleContainer);
  // C1.setAttribute("onclick", ";");
  C2.setAttribute("onclick", ";");
  C2.setAttribute("onclick", ";");
  player2.splice(0, 1);
  drawPlayer2BufferArray.push(bufor2);
  whoWin(true);
};

let WINNER = () => {
  let howMany1 = document.getElementById("howMany1");
  let howMany2 = document.getElementById("howMany2");
  let HMW1 = document.getElementById("HMW1");
  let HMW2 = document.getElementById("HMW2");

  if (howMany1 == 0 && HMW1 == 0) {
    alert("Wygrał gracz drugi (ten na dole)");
    location.reload();
  } else if (howMany2 == 0 && HMW2 == 0) {
    alert("Wygrał gracz pierwszy (ten na górze)");
    location.reload();
  }
};
