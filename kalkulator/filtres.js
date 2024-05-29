let filtruj = () => {
  let filtruj1 = document.getElementById("invert").value;
  let filtruj2 = document.getElementById("brightness").value;
  let filtruj3 = document.getElementById("hue_rotate").value;
  if (filtruj1 > 40 && filtruj1 < 60) {
    filtruj1 = 70;
    document.getElementById("invert").value = 70;
  }
  if (30 > filtruj2) {
    filtruj2 = 30;
    document.getElementById("brightness").value = 30;
  }
  document.getElementsByTagName(
    "html"
  )[0].style.filter = `invert(${filtruj1}%) brightness(${filtruj2}%) hue-rotate(${filtruj3}deg)`;
};

document.getElementById("filtry").addEventListener("click", filtruj);
document.getElementById("filtry").addEventListener("focus", filtruj);
document.getElementById("filtry").addEventListener("hover", filtruj);
document.getElementById("filtry").addEventListener("touchmove", filtruj);
