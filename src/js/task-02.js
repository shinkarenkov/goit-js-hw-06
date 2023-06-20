const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



ingredients.map((ingredient) => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  console.log(itemEl)
  const ulEl = document.querySelector('#ingredients')
ulEl.appendChild(itemEl)
console.log(ulEl)
}).join(``);



