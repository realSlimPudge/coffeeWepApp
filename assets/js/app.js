const category = document.getElementById('category');
const category2 = document.getElementById('category2');
const category3 = document.getElementById('category3');
const category4 = document.getElementById('category4');

category.addEventListener('click', () => {
  category.classList.add('category_on_active');
  category2.classList.remove('category_on_active');
  category3.classList.remove('category_on_active');
  category4.classList.remove('category_on_active');
});

category2.addEventListener('click', () => {
  category2.classList.add('category_on_active');
  category.classList.remove('category_on_active');
  category3.classList.remove('category_on_active');
  category4.classList.remove('category_on_active');
  body.animate(
    {
      scrollTop: $('#drinks').offset().top,
    },
    'slow',
  );
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
