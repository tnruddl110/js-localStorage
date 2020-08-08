// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const selectCountry = document.querySelector(".select");

function init() {
  if (localStorage.country == undefined || localStorage.country == "") {
    // do nothing
  } else {
    const find = document.querySelector(
      ".select option[value=" + localStorage.country + "]"
    );
    find.setAttribute("selected", true);
  }

  selectCountry.addEventListener("change", (event) => {
    const result = event.target.value;
    localStorage.setItem("country", result);
  });
}

init();
