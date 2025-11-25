function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const chefDiv = document.createElement("div");
  chefDiv.classList.add("chef");

  const chefImage = document.createElement("img");
  chefImage.classList.add("picture");
  chefImage.src = "../images/cheflobster.jpg";
  chefImage.alt = "Lobster Johnson";

  home.appendChild(chefDiv);
  chefDiv.appendChild(
    createParagraph(
      "Chef Johnson has been proudly serving the community since 2001."
    )
  );
  chefDiv.appendChild(chefImage);
  chefDiv.appendChild(createParagraph("Order online or pay us a visit!"));

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const content = document.getElementById("content");
  content.textContent = "";
  content.appendChild(createHome());
}

export default loadHome;
