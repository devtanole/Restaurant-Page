function createAbout() {
  const about = document.createElement("div");
  about.classList.add("about");

  const info = document.createElement("div");
  info.classList.add("info");

  const number = document.createElement("p");
  number.classList.add("number");
  number.textContent = "📞 123 456 789";

  const address = document.createElement("p");
  address.classList.add("address");
  address.textContent = "🏠 630 Nene Road, Los Angeles, USA";

  const map = document.createElement("img");
  map.src = "../images/goodmap.png";
  map.alt = "map";
  map.classList.add("map");

  info.appendChild(number);
  info.appendChild(address);
  info.appendChild(map);
  about.appendChild(info);

  return about;
}

function loadAbout() {
  const content = document.getElementById("content");
  content.textContent = "";
  content.appendChild(createAbout());
}
export default loadAbout;
