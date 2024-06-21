const category = document.getElementById('category');
const category2 = document.getElementById('category2');
const category3 = document.getElementById('category3');
const category4 = document.getElementById('category4');
const html = document.documentElement;
const countGoodsHtml = document.getElementById('countGoods');
const countPlus = document.getElementById('countPlus');
const countMinus = document.getElementById('countMinus');
const openModal = document.getElementById('card');

let countGoods = countGoodsHtml;

countPlus.addEventListener('click', () => {
  countGoods++;
});

category.addEventListener('click', () => {
  category.classList.add('category_on_active');
  category2.classList.remove('category_on_active');
  category3.classList.remove('category_on_active');
  category4.classList.remove('category_on_active');
  html.style.scrollPaddingTop = '135px';
});

category2.addEventListener('click', () => {
  category2.classList.add('category_on_active');
  category.classList.remove('category_on_active');
  category3.classList.remove('category_on_active');
  category4.classList.remove('category_on_active');
});

category3.addEventListener('click', () => {
  category3.classList.add('category_on_active');
  category2.classList.remove('category_on_active');
  category.classList.remove('category_on_active');
  category4.classList.remove('category_on_active');
});

category4.addEventListener('click', () => {
  category4.classList.add('category_on_active');
  category2.classList.remove('category_on_active');
  category3.classList.remove('category_on_active');
  category.classList.remove('category_on_active');
});
