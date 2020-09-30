const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const listNew = ingredients.map((ingredient) => {
  const listEl = document.createElement("li");
  listEl.textContent = ingredient;
  return listEl;
});

const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...listNew);
