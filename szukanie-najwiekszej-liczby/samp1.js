let N = parseInt(prompt("Jak duzo danych ma być: ", 2));
let start = () => {
  console.log(N);
  if (isNaN(N) || N < 2) {
    alert("Podaj liczbę dodatnią większą od 1");
    location.reload();
  }
  let br = document.createElement("br");
  let form = document.getElementsByTagName("form")[0];
  for (let i = 0; i < N; i++) {
    let input = document.createElement("input");
    input.type = "number";
    input.id = `input${i}`;
    input.value = 0;
    form.appendChild(input);
  }
  let body = document.getElementsByTagName("body")[0];
  let button = document.createElement("button");
  button.id = "btn";
  button.innerText = "Sprawdź";
  body.appendChild(br);
  body.appendChild(button);
  button.addEventListener("click", sprawdz);
  let wynik = document.createElement("div");
  wynik.id = "wynik";
  body.appendChild(wynik);
  body.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      button.click();
    }
  });
};
onload = start;

let sprawdz = () => {
  for (let i = 0; i < N; i++) {
    if (isNaN(parseInt(document.getElementById(`input${i}`).value))) {
      alert("Uzupełnij wszystkie pola poprawnymi danymi");
      return;
    }
  }
  let params = [];
  for (let i = 0; i < N; i++) {
    params[i] = parseInt(document.getElementById(`input${i}`).value);
  }
  console.log(params);
  let max = params[0];
  for (let i = 0; i < N; i++) {
    if (params[i] > max) {
      console.log(max);
      max = params[i];
    }
    document.getElementById("wynik").innerHTML = `Największa liczba to: ${max}`;
  }
};
