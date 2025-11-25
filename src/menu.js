function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const menuItems = document.createElement("div");
  menuItems.classList.add("menu-items");

  const sections = [
    "dinner",
    "lunch",
    "breakfast",
    "sides",
    "drinks",
    "desserts",
  ];
  sections.forEach((section) => {
    const div = document.createElement("div");
    div.classList.add("menu-item", section);
    const span = document.createElement("span");
    span.textContent = section.toUpperCase();
    div.appendChild(span);
    menuItems.appendChild(div);
  });

  menu.appendChild(menuItems);
  return menu;
}

function loadMenu() {
  const content = document.getElementById("content");
  content.textContent = "";
  content.appendChild(createMenu());
}

export default loadMenu;
