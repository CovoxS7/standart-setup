import * as bootstrap from "bootstrap";

export default function () {
  //Boostrap Dropdown
  const dropdownElementList = document.querySelectorAll(".dropdown-toogle");
  dropdownElementList.forEach(
    (dropdownElement) => new bootstrap.Dropdown(dropdownElement)
  );
}
