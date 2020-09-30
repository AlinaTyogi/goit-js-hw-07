const listEl = document.querySelectorAll(".item");

const messageCatagories = `'В списке ${listEl.length} категории.'`;
console.log(messageCatagories);

const category = (array) => {
  array.forEach((element) => {
    const title = element.querySelector("h2");
    const message = `Категория: ${title.textContent}. Количество элементов: ${listEl.length}.`;
    console.log(message);
  });
};
category(listEl);
