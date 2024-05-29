let liczba = "";
let dzialanie = "";
let rezult;
let clear = () => {
  document.getElementById("result").value = "";
};
let enterNumber = (num) => {
  document.getElementById("result").value += num;
};
let add = () => {
  dzialanie = "add";
  document.getElementById("add").classList.add("active");
  eventsRemove();
  numbersNewEventsAdd();
};
let subtract = () => {
  dzialanie = "subtract";
  document.getElementById("subtract").classList.add("active");
  eventsRemove();
  numbersNewEventsAdd();
};
let multiple = () => {
  dzialanie = "multiple";
  document.getElementById("multiple").classList.add("active");
  eventsRemove();
  numbersNewEventsAdd();
};
let divide = () => {
  dzialanie = "divide";
  document.getElementById("divide").classList.add("active");
  eventsRemove();
  numbersNewEventsAdd();
};
let power = () => {
  dzialanie = "power";
  document.getElementById("power").classList.add("active");
  eventsRemove();
  numbersNewEventsAdd();
};
let equals = () => {
  let resultElement = document.getElementById("result");
  let result = parseFloat(resultElement.value);

  switch (dzialanie) {
    case "add":
      result += parseFloat(liczba);
      break;
    case "subtract":
      result -= parseFloat(liczba);
      break;
    case "multiple":
      result *= parseFloat(liczba);
      break;
    case "divide":
      if (liczba != 0) {
        result /= parseFloat(liczba);
      }
      break;
    case "power":
      result **= parseFloat(liczba);
      break;
  }

  if (result == result.toFixed(6)) {
    resultElement.value = result;
  } else {
    resultElement.value = result.toFixed(6);
  }

  document.getElementById(dzialanie).classList.remove("active");
  document.getElementById("equals").classList.remove("sugestion");
  removeClassFromNumbers();
  defeaultEvents();
};

let eventsAdd = () => {
  document.getElementById("equals").addEventListener("click", equals);
  document.getElementById("add").addEventListener("click", add);
  document.getElementById("subtract").addEventListener("click", subtract);
  document.getElementById("multiple").addEventListener("click", multiple);
  document.getElementById("divide").addEventListener("click", divide);
  document.getElementById("power").addEventListener("click", power);
  document.getElementById("c").addEventListener("click", clear);
  document
    .getElementById("dot")
    .addEventListener("click", (dotF = () => enterNumber(".")));
  document
    .getElementById("zero")
    .addEventListener("click", (zeroF = () => enterNumber("0")));
  document
    .getElementById("nine")
    .addEventListener("click", (nineF = () => enterNumber("9")));
  document
    .getElementById("eigth")
    .addEventListener("click", (eigthF = () => enterNumber("8")));
  document
    .getElementById("seven")
    .addEventListener("click", (sevenF = () => enterNumber("7")));
  document
    .getElementById("six")
    .addEventListener("click", (sixF = () => enterNumber("6")));
  document
    .getElementById("five")
    .addEventListener("click", (fiveF = () => enterNumber("5")));
  document
    .getElementById("four")
    .addEventListener("click", (fourF = () => enterNumber("4")));
  document
    .getElementById("three")
    .addEventListener("click", (threeF = () => enterNumber("3")));
  document
    .getElementById("two")
    .addEventListener("click", (twoF = () => enterNumber("2")));
  document
    .getElementById("one")
    .addEventListener("click", (oneF = () => enterNumber("1")));
};

onload = eventsAdd;

let eventsRemove = () => {
  document.getElementById("add").removeEventListener("click", add);
  document.getElementById("subtract").removeEventListener("click", subtract);
  document.getElementById("multiple").removeEventListener("click", multiple);
  document.getElementById("divide").removeEventListener("click", divide);
  document.getElementById("power").removeEventListener("click", power);
  document.getElementById("c").removeEventListener("click", clear);
  document.getElementById("equals").removeEventListener("click", equals);
  document.getElementById("dot").removeEventListener("click", dotF);
  document.getElementById("zero").removeEventListener("click", zeroF);
  document.getElementById("nine").removeEventListener("click", nineF);
  document.getElementById("eigth").removeEventListener("click", eigthF);
  document.getElementById("seven").removeEventListener("click", sevenF);
  document.getElementById("six").removeEventListener("click", sixF);
  document.getElementById("five").removeEventListener("click", fiveF);
  document.getElementById("four").removeEventListener("click", fourF);
  document.getElementById("three").removeEventListener("click", threeF);
  document.getElementById("two").removeEventListener("click", twoF);
  document.getElementById("one").removeEventListener("click", oneF);
};

let numbersNewEventsAdd = () => {
  let antyRedundancja = () => {
    document.getElementById("equals").classList.add("sugestion");
    document.getElementById("equals").addEventListener("click", equals);
  };
  document.getElementById("dot").addEventListener(
    "click",
    (dotF = () => {
      liczba += ".";
      document.getElementById("dot").classList.add("active");
    })
  );
  document.getElementById("zero").addEventListener(
    "click",
    (zeroF = () => {
      liczba += "0";
      document.getElementById("zero").classList.add("active");
      antyRedundancja();
    })
  );
  document.getElementById("nine").addEventListener(
    "click",
    (nineF = () => {
      liczba += "9";
      document.getElementById("nine").classList.add("active");
      antyRedundancja();
    })
  );
  document.getElementById("eigth").addEventListener(
    "click",
    (eigthF = () => {
      liczba += "8";
      document.getElementById("eigth").classList.add("active");
      antyRedundancja();
    })
  );
  document.getElementById("seven").addEventListener(
    "click",
    (sevenF = () => {
      liczba += "7";
      document.getElementById("seven").classList.add("active");
      antyRedundancja();
    })
  );
  document.getElementById("six").addEventListener(
    "click",
    (sixF = () => {
      liczba += "6";
      document.getElementById("six").classList.add("active");
      antyRedundancja();
    })
  );
  document.getElementById("five").addEventListener(
    "click",
    (fiveF = () => {
      liczba += "5";
      document.getElementById("five").classList.add("active");
      antyRedundancja();
    })
  );
  document.getElementById("four").addEventListener(
    "click",
    (fourF = () => {
      liczba += "4";
      document.getElementById("four").classList.add("active");
      antyRedundancja();
    })
  );
  document.getElementById("three").addEventListener(
    "click",
    (threeF = () => {
      liczba += "3";
      document.getElementById("three").classList.add("active");
      antyRedundancja();
    })
  );
  document.getElementById("two").addEventListener(
    "click",
    (twoF = () => {
      liczba += "2";
      document.getElementById("two").classList.add("active");
      antyRedundancja();
    })
  );
  document.getElementById("one").addEventListener(
    "click",
    (oneF = () => {
      liczba += "1";
      document.getElementById("one").classList.add("active");
      antyRedundancja();
    })
  );
};

let defeaultEvents = () => {
  document.getElementById("dot").removeEventListener("click", dotF);
  document.getElementById("zero").removeEventListener("click", zeroF);
  document.getElementById("nine").removeEventListener("click", nineF);
  document.getElementById("eigth").removeEventListener("click", eigthF);
  document.getElementById("seven").removeEventListener("click", sevenF);
  document.getElementById("six").removeEventListener("click", sixF);
  document.getElementById("five").removeEventListener("click", fiveF);
  document.getElementById("four").removeEventListener("click", fourF);
  document.getElementById("three").removeEventListener("click", threeF);
  document.getElementById("two").removeEventListener("click", twoF);
  document.getElementById("one").removeEventListener("click", oneF);
  eventsAdd();
  liczba = "";
};

let removeClassFromNumbers = () => {
  let NumbersWithActive = liczba.split("");
  for (let i of NumbersWithActive) {
    switch (i) {
      case ".":
        document.getElementById("dot").classList.remove("active");
        break;
      case "0":
        document.getElementById("zero").classList.remove("active");
        break;
      case "1":
        document.getElementById("one").classList.remove("active");
        break;
      case "2":
        document.getElementById("two").classList.remove("active");
        break;
      case "3":
        document.getElementById("three").classList.remove("active");
        break;
      case "4":
        document.getElementById("four").classList.remove("active");
        break;
      case "5":
        document.getElementById("five").classList.remove("active");
        break;
      case "6":
        document.getElementById("six").classList.remove("active");
        break;
      case "7":
        document.getElementById("seven").classList.remove("active");
        break;
      case "8":
        document.getElementById("eigth").classList.remove("active");
        break;
      case "9":
        document.getElementById("nine").classList.remove("active");
        break;
    }
  }
};
