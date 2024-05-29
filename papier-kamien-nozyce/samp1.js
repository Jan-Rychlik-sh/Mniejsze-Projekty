let gamer1, gamer2;

let poczatek = () => {
  let select1 = document.getElementById("gamer1");
  let select2 = document.getElementById("gamer2");
  let btn = document.getElementById("guzik");
  select1.addEventListener("click", ustawWybor1);
  select2.addEventListener("click", ustawWybor2);
  btn.addEventListener("click", gra);
  ustawWybor1();
  ustawWybor2();
};

let ustawWybor1 = () => {
  gamer1 = document.querySelector("#gamer1").value;
};

let ustawWybor2 = () => {
  gamer2 = document.querySelector("#gamer2").value;
};

onload = poczatek;

let meine_samp_method = (choice1, choice2) => {
  let wynik = document.querySelector("#rezultat");
  //        0-wygrana lewego; 1-wygrana prawego; 2-remis
  //papier gracza 1
  if (choice1 == "papier" && choice2 == "kamien") wygryw(0);
  else if (choice1 == "papier" && choice2 == "nozyce") wygryw(1);
  else if (choice1 == "papier" && choice2 == "papier") wygryw(2);
  //nozyce gracza 1
  else if (choice1 == "nozyce" && choice2 == "papier") wygryw(0);
  else if (choice1 == "nozyce" && choice2 == "kamien") wygryw(1);
  else if (choice1 == "nozyce" && choice2 == "nozyce") wygryw(2);
  //kamien gracza 1
  else if (choice1 == "kamien" && choice2 == "nozyce") wygryw(0);
  else if (choice1 == "kamien" && choice2 == "papier") wygryw(1);
  else if (choice1 == "kamien" && choice2 == "kamien") wygryw(2);
  //////////////////////////////////////////////////////////////
  //papier gracza 2
  else if (choice2 == "papier" && choice1 == "kamien") wygryw(1);
  else if (choice2 == "papier" && choice1 == "nozyce") wygryw(0);
  //nozyce gracza 2
  else if (choice2 == "nozyce" && choice1 == "papier") wygryw(1);
  else if (choice2 == "nozyce" && choice1 == "kamien") wygryw(0);
  //kamien gracza 2
  else if (choice2 == "kamien" && choice1 == "nozyce") wygryw(1);
  else if (choice2 == "kamien" && choice1 == "papier") wygryw(0);
  //przypadek szczególny raczej mało prawdopodobny
  else wygryw(734297);
};

let gra = () => {
  meine_samp_method(gamer1, gamer2);
};

let wygryw = (zwycieskie_bydle) => {
  let wynik = document.querySelector("#rezultat");
  wynik.innerHTML = "";
  let wygrany = document.createElement("span");
  switch (zwycieskie_bydle) {
    case 0:
      wygrany.innerHTML = `Wygrał gracz po lewej`;
      wynik.appendChild(wygrany);
      break;
    case 1:
      wygrany.innerHTML = `Wygrał gracz po prawej`;
      wynik.appendChild(wygrany);
      break;
    case 2:
      wygrany.innerHTML = `REMIS`;
      wynik.appendChild(wygrany);
      break;

    default:
      wygrany.innerHTML = `Coś się zepsuło`;
      wynik.appendChild(wygrany);
      break;
  }
};
