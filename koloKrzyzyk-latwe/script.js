let playerThatMove = document.getElementById("whoStart");
let whoGoingToStart = Math.floor(Math.random() * 2);
let O_OR_X;
let fields = new Array(9);

let start = () => {
  if (whoGoingToStart == 0) O_OR_X = "O";
  else O_OR_X = "X";
  playerThatMove.innerHTML += `<span id = "move">${O_OR_X}</span>`;
};

onload = start;

let checkWin = (a) => {
  let move = document.querySelector("#move");
  //zmieniamy zawartość spana inforującego kto się rusza
  if (move.innerHTML == "X") {
    playerThatMove.innerHTML = "Ruch: <span id='move'>O</span>";
    O_OR_X = "X";
  }
  if (move.innerHTML == "O") {
    playerThatMove.innerHTML = "Ruch: <span id='move'>X</span>";
    O_OR_X = "O";
  }
  //i usuwanie z niego onclicka
  let field = document.querySelector(`#f${a}`);
  field.innerHTML = O_OR_X;
  field.setAttribute("onclick", ";");
  getFields();
  sprawdz(O_OR_X);
};

let getFields = () => {
  //tworzymy tablicę z zawartością komórek pola gry
  for (let i = 0; i < 9; i++) {
    fields[i] = document.querySelector(`#f${i}`).innerHTML;
  }
  console.log(fields);
};

let sprawdz = (arg) => {
  if (
    //pozioma wygrana kółka
    (fields[0] == O_OR_X && fields[1] == O_OR_X && fields[2] == O_OR_X) ||
    (fields[3] == O_OR_X && fields[4] == O_OR_X && fields[5] == O_OR_X) ||
    (fields[6] == O_OR_X && fields[7] == O_OR_X && fields[8] == O_OR_X) ||
    //pionowa wygrana kółka
    (fields[0] == O_OR_X && fields[3] == O_OR_X && fields[6] == O_OR_X) ||
    (fields[1] == O_OR_X && fields[4] == O_OR_X && fields[7] == O_OR_X) ||
    (fields[2] == O_OR_X && fields[5] == O_OR_X && fields[8] == O_OR_X) ||
    //skośna wygrana kółka
    (fields[0] == O_OR_X && fields[4] == O_OR_X && fields[8] == O_OR_X) ||
    (fields[2] == O_OR_X && fields[4] == O_OR_X && fields[6] == O_OR_X)
  ) {
    for (let i = 0; i < 9; i++) {
      document.querySelector(`#f${i}`).setAttribute("onclick", ";");
    }
    document.querySelector(
      "#winner"
    ).innerHTML = `Wygrywa: ${O_OR_X} <span onclick='location.reload();'><br>Jeszcze raz?</span>`;
    document.querySelector("#whoStart").innerHTML = "";
  } else {
    let draw = true;
    for (let i = 0; i < 9; i++) {
      if (fields[i] == "") draw = false;
    }
    if (draw == true) {
      document.querySelector(
        "#winner"
      ).innerHTML = `Remis <span onclick='location.reload();'><br>Jeszcze raz?</span>`;
      document.querySelector("#whoStart").innerHTML = "";
    }
  }
};
