const category = document.getElementById('category');
const category2 = document.getElementById('category2');
const category3 = document.getElementById('category3');
const category4 = document.getElementById('category4');
const html = document.documentElement;
const openModal = document.getElementById('shopCart');
const openCart = document.getElementById('openCart');
const closeCart = document.getElementById('closeCart');

const addBacketPopular1 = document.getElementById('add_to_backet_popular1');
const addBacketPopular2 = document.getElementById('add_to_backet_popular2');
const addBacketPopular3 = document.getElementById('add_to_backet_popular3');
const addBacketPopular4 = document.getElementById('add_to_backet_popular4');
const countBacketPopular1 = document.getElementById('count_backet_popular1');
const countBacketPopular2 = document.getElementById('count_backet_popular2');
const countBacketPopular3 = document.getElementById('count_backet_popular3');
const countBacketPopular4 = document.getElementById('count_backet_popular4');
const countPlusPopular1 = document.getElementById('countPlusPopular1');
const countPlusPopular2 = document.getElementById('countPlusPopular2');
const countPlusPopular3 = document.getElementById('countPlusPopular3');
const countPlusPopular4 = document.getElementById('countPlusPopular4');
const countMinusPopular1 = document.getElementById('countMinusPopular1');
const countMinusPopular2 = document.getElementById('countMinusPopular2');
const countMinusPopular3 = document.getElementById('countMinusPopular3');
const countMinusPopular4 = document.getElementById('countMinusPopular4');
const countGoodsHtmlPopular1 = document.getElementById('countGoodsPopular1');
const countGoodsHtmlPopular2 = document.getElementById('countGoodsPopular2');
const countGoodsHtmlPopular3 = document.getElementById('countGoodsPopular3');
const countGoodsHtmlPopular4 = document.getElementById('countGoodsPopular4');
const pricePopular1 = document.getElementById('pricePopular1');
const pricePopular2 = document.getElementById('pricePopular2');
const pricePopular3 = document.getElementById('pricePopular3');
const pricePopular4 = document.getElementById('pricePopular4');

const addBacketCold1 = document.getElementById('add_to_backet_Cold1');
const addBacketCold2 = document.getElementById('add_to_backet_Cold2');
const addBacketCold3 = document.getElementById('add_to_backet_Cold3');
const addBacketCold4 = document.getElementById('add_to_backet_Cold4');
const addBacketCold5 = document.getElementById('add_to_backet_Cold5');
const addBacketCold6 = document.getElementById('add_to_backet_Cold6');
const addBacketCold7 = document.getElementById('add_to_backet_Cold7');
const countBacketCold1 = document.getElementById('count_backet_Cold1');
const countBacketCold2 = document.getElementById('count_backet_Cold2');
const countBacketCold3 = document.getElementById('count_backet_Cold3');
const countBacketCold4 = document.getElementById('count_backet_Cold4');
const countBacketCold5 = document.getElementById('count_backet_Cold5');
const countBacketCold6 = document.getElementById('count_backet_Cold6');
const countBacketCold7 = document.getElementById('count_backet_Cold7');
const countPlusCold1 = document.getElementById('countPlusCold1');
const countPlusCold2 = document.getElementById('countPlusCold2');
const countPlusCold3 = document.getElementById('countPlusCold3');
const countPlusCold4 = document.getElementById('countPlusCold4');
const countPlusCold5 = document.getElementById('countPlusCold5');
const countPlusCold6 = document.getElementById('countPlusCold6');
const countPlusCold7 = document.getElementById('countPlusCold7');
const countMinusCold1 = document.getElementById('countMinusCold1');
const countMinusCold2 = document.getElementById('countMinusCold2');
const countMinusCold3 = document.getElementById('countMinusCold3');
const countMinusCold4 = document.getElementById('countMinusCold4');
const countMinusCold5 = document.getElementById('countMinusCold5');
const countMinusCold6 = document.getElementById('countMinusCold6');
const countMinusCold7 = document.getElementById('countMinusCold7');
const countGoodsHtmlCold1 = document.getElementById('countGoodsCold1');
const countGoodsHtmlCold2 = document.getElementById('countGoodsCold2');
const countGoodsHtmlCold3 = document.getElementById('countGoodsCold3');
const countGoodsHtmlCold4 = document.getElementById('countGoodsCold4');
const countGoodsHtmlCold5 = document.getElementById('countGoodsCold5');
const countGoodsHtmlCold6 = document.getElementById('countGoodsCold6');
const countGoodsHtmlCold7 = document.getElementById('countGoodsCold7');
const priceCold1 = document.getElementById('priceCold1');
const priceCold2 = document.getElementById('priceCold2');
const priceCold3 = document.getElementById('priceCold3');
const priceCold4 = document.getElementById('priceCold4');
const priceCold5 = document.getElementById('priceCold5');
const priceCold6 = document.getElementById('priceCold6');
const priceCold7 = document.getElementById('priceCold7');

const addBacketDrink1 = document.getElementById('add_to_backet_drink1');
const addBacketDrink2 = document.getElementById('add_to_backet_drink2');
const addBacketDrink3 = document.getElementById('add_to_backet_drink3');
const addBacketDrink4 = document.getElementById('add_to_backet_drink4');
const addBacketDrink5 = document.getElementById('add_to_backet_drink5');
const addBacketDrink6 = document.getElementById('add_to_backet_drink6');
const addBacketDrink7 = document.getElementById('add_to_backet_drink7');
const addBacketDrink8 = document.getElementById('add_to_backet_drink8');
const addBacketDrink9 = document.getElementById('add_to_backet_drink9');
const countBacketDrink1 = document.getElementById('count_backet_drink1');
const countBacketDrink2 = document.getElementById('count_backet_drink2');
const countBacketDrink3 = document.getElementById('count_backet_drink3');
const countBacketDrink4 = document.getElementById('count_backet_drink4');
const countBacketDrink5 = document.getElementById('count_backet_drink5');
const countBacketDrink6 = document.getElementById('count_backet_drink6');
const countBacketDrink7 = document.getElementById('count_backet_drink7');
const countBacketDrink8 = document.getElementById('count_backet_drink8');
const countBacketDrink9 = document.getElementById('count_backet_drink9');
const countPlusDrink1 = document.getElementById('countPlusDrink1');
const countPlusDrink2 = document.getElementById('countPlusDrink2');
const countPlusDrink3 = document.getElementById('countPlusDrink3');
const countPlusDrink4 = document.getElementById('countPlusDrink4');
const countPlusDrink5 = document.getElementById('countPlusDrink5');
const countPlusDrink6 = document.getElementById('countPlusDrink6');
const countPlusDrink7 = document.getElementById('countPlusDrink7');
const countPlusDrink8 = document.getElementById('countPlusDrink8');
const countPlusDrink9 = document.getElementById('countPlusDrink9');
const countMinusDrink1 = document.getElementById('countMinusDrink1');
const countMinusDrink2 = document.getElementById('countMinusDrink2');
const countMinusDrink3 = document.getElementById('countMinusDrink3');
const countMinusDrink4 = document.getElementById('countMinusDrink4');
const countMinusDrink5 = document.getElementById('countMinusDrink5');
const countMinusDrink6 = document.getElementById('countMinusDrink6');
const countMinusDrink7 = document.getElementById('countMinusDrink7');
const countMinusDrink8 = document.getElementById('countMinusDrink8');
const countMinusDrink9 = document.getElementById('countMinusDrink9');
const countGoodsHtmlDrink1 = document.getElementById('countGoodsDrink1');
const countGoodsHtmlDrink2 = document.getElementById('countGoodsDrink2');
const countGoodsHtmlDrink3 = document.getElementById('countGoodsDrink3');
const countGoodsHtmlDrink4 = document.getElementById('countGoodsDrink4');
const countGoodsHtmlDrink5 = document.getElementById('countGoodsDrink5');
const countGoodsHtmlDrink6 = document.getElementById('countGoodsDrink6');
const countGoodsHtmlDrink7 = document.getElementById('countGoodsDrink7');
const countGoodsHtmlDrink8 = document.getElementById('countGoodsDrink8');
const countGoodsHtmlDrink9 = document.getElementById('countGoodsDrink9');
const priceDrink1 = document.getElementById('priceDrink1');
const priceDrink2 = document.getElementById('priceDrink2');
const priceDrink3 = document.getElementById('priceDrink3');
const priceDrink4 = document.getElementById('priceDrink4');
const priceDrink5 = document.getElementById('priceDrink5');
const priceDrink6 = document.getElementById('priceDrink6');
const priceDrink7 = document.getElementById('priceDrink7');
const priceDrink8 = document.getElementById('priceDrink8');
const priceDrink9 = document.getElementById('priceDrink9');

const addBacketBakery1 = document.getElementById('add_to_backet_bakery1');
const addBacketBakery2 = document.getElementById('add_to_backet_bakery2');
const addBacketBakery3 = document.getElementById('add_to_backet_bakery3');
const countBacketBakery1 = document.getElementById('count_backet_bakery1');
const countBacketBakery2 = document.getElementById('count_backet_bakery2');
const countBacketBakery3 = document.getElementById('count_backet_bakery3');
const countPlusBakery1 = document.getElementById('countPlusBakery1');
const countPlusBakery2 = document.getElementById('countPlusBakery2');
// const countPlusBakery3 = document.getElementById('countPlusBakery3');
const countMinusBakery1 = document.getElementById('countMinusBakery1');
const countMinusBakery2 = document.getElementById('countMinusBakery2');
const countMinusBakery3 = document.getElementById('countMinusBakery3');
const countGoodsHtmlBakery1 = document.getElementById('countGoodsBakery1');
const countGoodsHtmlBakery2 = document.getElementById('countGoodsBakery2');
const countGoodsHtmlBakery3 = document.getElementById('countGoodsBakery3');
const priceBakery1 = document.getElementById('priceBakery1');
const priceBakery2 = document.getElementById('priceBakery2');
const priceBakery3 = document.getElementById('priceBakery3');

let pricePopularJs1 = 190;
let pricePopularJs2 = 190;
let pricePopularJs3 = 190;
let pricePopularJs4 = 190;

let priceDrinkJs1 = 190;
let priceDrinkJs2 = 190;
let priceDrinkJs3 = 190;
let priceDrinkJs4 = 190;
let priceDrinkJs5 = 190;
let priceDrinkJs6 = 190;
let priceDrinkJs7 = 190;
let priceDrinkJs8 = 190;
let priceDrinkJs9 = 190;

let priceColdJs1 = 190;
let priceColdJs2 = 190;
let priceColdJs3 = 190;
let priceColdJs4 = 190;
let priceColdJs5 = 190;
let priceColdJs6 = 190;
let priceColdJs7 = 190;

let priceBakeryJs1 = 190;
let priceBakeryJs2 = 190;
let priceBakeryJs3 = 190;

let countGoodsPopular1 = 1;
let countGoodsPopular2 = 1;
let countGoodsPopular3 = 1;
let countGoodsPopular4 = 1;

let countGoodsDrink1 = 1;
let countGoodsDrink2 = 1;
let countGoodsDrink3 = 1;
let countGoodsDrink4 = 1;
let countGoodsDrink5 = 1;
let countGoodsDrink6 = 1;
let countGoodsDrink7 = 1;
let countGoodsDrink8 = 1;
let countGoodsDrink9 = 1;

let countGoodsCold1 = 1;
let countGoodsCold2 = 1;
let countGoodsCold3 = 1;
let countGoodsCold4 = 1;
let countGoodsCold5 = 1;
let countGoodsCold6 = 1;
let countGoodsCold7 = 1;

let countGoodsBakery1 = 1;
let countGoodsBakery2 = 1;
let countGoodsBakery3 = 1;
//items
const itemModal = document.getElementById('modalItem');
const itemModal2 = document.getElementById('modalItem2');
const itemModal3 = document.getElementById('modalItem3');
const itemModal4 = document.getElementById('modalItem4');
const itemModal5 = document.getElementById('modalItem5');
const itemModal6 = document.getElementById('modalItem6');
const itemModal7 = document.getElementById('modalItem7');
const itemModal8 = document.getElementById('modalItem8');
const itemModal9 = document.getElementById('modalItem9');
const itemModal10 = document.getElementById('modalItem10');
const itemModal11 = document.getElementById('modalItem11');
const itemModal12 = document.getElementById('modalItem12');
const itemModal13 = document.getElementById('modalItem13');
const itemModal14 = document.getElementById('modalItem14');
const itemModal15 = document.getElementById('modalItem15');
const itemModal16 = document.getElementById('modalItem16');
const itemModal17 = document.getElementById('modalItem17');
const itemModal18 = document.getElementById('modalItem18');
const itemModal19 = document.getElementById('modalItem19');
const itemModal20 = document.getElementById('modalItem20');
const itemModal21 = document.getElementById('modalItem21');
const itemModal22 = document.getElementById('modalItem22');
const itemModal23 = document.getElementById('modalItem23');
const closeItem = document.getElementById('close-modal-btn');
const openItem1 = document.getElementById('openItem1');
const openItem2 = document.getElementById('openItem2');
const openItem3 = document.getElementById('openItem3');
const openItem4 = document.getElementById('openItem4');
const openItem5 = document.getElementById('openItem5');
const openItem6 = document.getElementById('openItem6');
const openItem7 = document.getElementById('openItem7');
const openItem8 = document.getElementById('openItem8');
const openItem9 = document.getElementById('openItem9');
// const openItem10 = document.getElementById('openItem10');
const openItem11 = document.getElementById('openItem11');
const openItem12 = document.getElementById('openItem12');
const openItem13 = document.getElementById('openItem13');
const openItem14 = document.getElementById('openItem14');
const openItem15 = document.getElementById('openItem15');
const openItem16 = document.getElementById('openItem16');
const openItem17 = document.getElementById('openItem17');
const openItem18 = document.getElementById('openItem18');
const openItem19 = document.getElementById('openItem19');
const openItem20 = document.getElementById('openItem20');
const openItem21 = document.getElementById('openItem21');
const openItem22 = document.getElementById('openItem22');
const openItem23 = document.getElementById('openItem23');

countPlusPopular1.addEventListener('click', () => {
  countGoodsPopular1++;
  countGoodsHtmlPopular1.innerHTML = countGoodsPopular1;
  pricePopularJs1 += 190;
  pricePopular1.innerHTML = pricePopularJs1;
});
countMinusPopular1.addEventListener('click', () => {
  if (countGoodsPopular1 >= 1) {
    countGoodsPopular1--;
    countGoodsHtmlPopular1.innerHTML = countGoodsPopular1;
    pricePopularJs1 -= 190;
    pricePopular1.innerHTML = pricePopularJs1;
  }
});

countPlusPopular2.addEventListener('click', () => {
  countGoodsPopular2++;
  countGoodsHtmlPopular2.innerHTML = countGoodsPopular2;
  pricePopularJs2 += 190;
  pricePopular2.innerHTML = pricePopularJs2;
});
countMinusPopular2.addEventListener('click', () => {
  if (countGoodsPopular2 >= 1) {
    countGoodsPopular2--;
    countGoodsHtmlPopular2.innerHTML = countGoodsPopular2;
    pricePopularJs2 -= 190;
    pricePopular2.innerHTML = pricePopularJs2;
  }
});

countPlusPopular3.addEventListener('click', () => {
  countGoodsPopular3++;
  countGoodsHtmlPopular3.innerHTML = countGoodsPopular3;
  pricePopularJs3 += 190;
  pricePopular3.innerHTML = pricePopularJs3;
});
countMinusPopular3.addEventListener('click', () => {
  if (countGoodsPopular3 >= 1) {
    countGoodsPopular3--;
    countGoodsHtmlPopular3.innerHTML = countGoodsPopular3;
    pricePopularJs3 -= 190;
    pricePopular3.innerHTML = pricePopularJs3;
  }
});

countPlusPopular4.addEventListener('click', () => {
  countGoodsPopular4++;
  countGoodsHtmlPopular4.innerHTML = countGoodsPopular4;
  pricePopularJs4 += 190;
  pricePopular4.innerHTML = pricePopularJs4;
});
countMinusPopular4.addEventListener('click', () => {
  if (countGoodsPopular4 >= 1) {
    countGoodsPopular4--;
    countGoodsHtmlPopular4.innerHTML = countGoodsPopular4;
    pricePopularJs4 -= 190;
    pricePopular4.innerHTML = pricePopularJs4;
  }
});

countPlusDrink1.addEventListener('click', () => {
  countGoodsDrink1++;
  countGoodsHtmlDrink1.innerHTML = countGoodsDrink1;
  priceDrinkJs1 += 190;
  priceDrink1.innerHTML = priceDrinkJs1;
});
countMinusDrink1.addEventListener('click', () => {
  if (countGoodsDrink1 >= 1) {
    countGoodsDrink1--;
    countGoodsHtmlDrink1.innerHTML = countGoodsDrink1;
    priceDrinkJs1 -= 190;
    priceDrink1.innerHTML = priceDrinkJs1;
  }
});

countPlusDrink2.addEventListener('click', () => {
  countGoodsDrink2++;
  countGoodsHtmlDrink2.innerHTML = countGoodsDrink2;
  priceDrinkJs2 += 190;
  priceDrink2.innerHTML = priceDrinkJs2;
});
countMinusDrink2.addEventListener('click', () => {
  if (countGoodsDrink2 >= 1) {
    countGoodsDrink2--;
    countGoodsHtmlDrink2.innerHTML = countGoodsDrink2;
    priceDrinkJs2 -= 190;
    priceDrink2.innerHTML = priceDrinkJs2;
  }
});

countPlusDrink3.addEventListener('click', () => {
  countGoodsDrink3++;
  countGoodsHtmlDrink3.innerHTML = countGoodsDrink3;
  priceDrinkJs3 += 190;
  priceDrink3.innerHTML = priceDrinkJs3;
});
countMinusDrink3.addEventListener('click', () => {
  if (countGoodsDrink3 >= 1) {
    countGoodsDrink3--;
    countGoodsHtmlDrink3.innerHTML = countGoodsDrink3;
    priceDrinkJs3 -= 190;
    priceDrink3.innerHTML = priceDrinkJs3;
  }
});

countPlusDrink4.addEventListener('click', () => {
  countGoodsDrink4++;
  countGoodsHtmlDrink4.innerHTML = countGoodsDrink4;
  priceDrinkJs4 += 190;
  priceDrink4.innerHTML = priceDrinkJs4;
});
countMinusDrink4.addEventListener('click', () => {
  if (countGoodsDrink4 >= 1) {
    countGoodsDrink4--;
    countGoodsHtmlDrink4.innerHTML = countGoodsDrink4;
    priceDrinkJs4 -= 190;
    priceDrink4.innerHTML = priceDrinkJs4;
  }
});

countPlusDrink5.addEventListener('click', () => {
  countGoodsDrink5++;
  countGoodsHtmlDrink5.innerHTML = countGoodsDrink5;
  priceDrinkJs5 += 190;
  priceDrink5.innerHTML = priceDrinkJs5;
});
countMinusDrink1.addEventListener('click', () => {
  if (countGoodsDrink5 >= 1) {
    countGoodsDrink5--;
    countGoodsHtmlDrink5.innerHTML = countGoodsDrink5;
    priceDrinkJs5 -= 190;
    priceDrink5.innerHTML = priceDrinkJs5;
  }
});

countPlusDrink6.addEventListener('click', () => {
  countGoodsDrink6++;
  countGoodsHtmlDrink6.innerHTML = countGoodsDrink6;
  priceDrinkJs6 += 190;
  priceDrink6.innerHTML = priceDrinkJs6;
});
countMinusDrink6.addEventListener('click', () => {
  if (countGoodsDrink6 >= 1) {
    countGoodsDrink6--;
    countGoodsHtmlDrink6.innerHTML = countGoodsDrink6;
    priceDrinkJs6 -= 190;
    priceDrink6.innerHTML = priceDrinkJs6;
  }
});

countPlusDrink7.addEventListener('click', () => {
  countGoodsDrink7++;
  countGoodsHtmlDrink7.innerHTML = countGoodsDrink7;
  priceDrinkJs7 += 190;
  priceDrink7.innerHTML = priceDrinkJs7;
});
countMinusDrink7.addEventListener('click', () => {
  if (countGoodsDrink7 >= 1) {
    countGoodsDrink7--;
    countGoodsHtmlDrink7.innerHTML = countGoodsDrink7;
    priceDrinkJs7 -= 190;
    priceDrink7.innerHTML = priceDrinkJs7;
  }
});

countPlusDrink8.addEventListener('click', () => {
  countGoodsDrink8++;
  countGoodsHtmlDrink8.innerHTML = countGoodsDrink8;
  priceDrinkJs8 += 190;
  priceDrink8.innerHTML = priceDrinkJs8;
});
countMinusDrink8.addEventListener('click', () => {
  if (countGoodsDrink8 >= 1) {
    countGoodsDrink8--;
    countGoodsHtmlDrink8.innerHTML = countGoodsDrink8;
    priceDrinkJs8 -= 190;
    priceDrink8.innerHTML = priceDrinkJs8;
  }
});

countPlusDrink9.addEventListener('click', () => {
  countGoodsDrink9++;
  countGoodsHtmlDrink9.innerHTML = countGoodsDrink9;
  priceDrinkJs9 += 190;
  priceDrink9.innerHTML = priceDrinkJs9;
});
countMinusDrink9.addEventListener('click', () => {
  if (countGoodsDrink9 >= 1) {
    countGoodsDrink9--;
    countGoodsHtmlDrink9.innerHTML = countGoodsDrink9;
    priceDrinkJs9 -= 190;
    priceDrink9.innerHTML = priceDrinkJs9;
  }
});

countPlusCold1.addEventListener('click', () => {
  countGoodsCold1++;
  countGoodsHtmlCold1.innerHTML = countGoodsCold1;
  priceColdJs1 += 190;
  priceCold1.innerHTML = priceColdJs4;
});
countMinusCold1.addEventListener('click', () => {
  if (countGoodsCold1 >= 1) {
    countGoodsCold1--;
    countGoodsHtmlCold4.innerHTML = countGoodsCold1;
    priceColdJs1 -= 190;
    priceCold1.innerHTML = priceColdJs1;
  }
});

countPlusCold4.addEventListener('click', () => {
  countGoodsCold4++;
  countGoodsHtmlCold4.innerHTML = countGoodsCold4;
  priceColdJs4 += 190;
  priceCold4.innerHTML = priceColdJs4;
});
countMinusCold2.addEventListener('click', () => {
  if (countGoodsCold2 >= 1) {
    countGoodsCold2--;
    countGoodsHtmlCold2.innerHTML = countGoodsCold2;
    priceColdJs2 -= 190;
    priceCold2.innerHTML = priceColdJs2;
  }
});

countPlusCold3.addEventListener('click', () => {
  countGoodsCold3++;
  countGoodsHtmlCold3.innerHTML = countGoodsCold3;
  priceColdJs3 += 190;
  priceCold3.innerHTML = priceColdJs3;
});
countMinusCold3.addEventListener('click', () => {
  if (countGoodsCold3 >= 1) {
    countGoodsCold3--;
    countGoodsHtmlCold3.innerHTML = countGoodsCold3;
    priceColdJs3 -= 190;
    priceCold3.innerHTML = priceColdJs3;
  }
});

countPlusCold4.addEventListener('click', () => {
  countGoodsCold4++;
  countGoodsHtmlCold4.innerHTML = countGoodsCold4;
  priceColdJs4 += 190;
  priceCold4.innerHTML = priceColdJs4;
});
countMinusCold4.addEventListener('click', () => {
  if (countGoodsCold4 >= 1) {
    countGoodsCold4--;
    countGoodsHtmlCold4.innerHTML = countGoodsCold4;
    priceColdJs4 -= 190;
    priceCold4.innerHTML = priceColdJs4;
  }
});

countPlusCold5.addEventListener('click', () => {
  countGoodsDCold++;
  countGoodsHtmlCold5.innerHTML = countGoodsCold5;
  priceColdJs5 += 190;
  priceCold5.innerHTML = priceColdJs5;
});
countMinusCold5.addEventListener('click', () => {
  if (countGoodsCold5 >= 1) {
    countGoodsCold5--;
    countGoodsHtmlCold5.innerHTML = countGoodsCold5;
    priceColdJs5 -= 190;
    priceCold5.innerHTML = priceColdJs5;
  }
});

countPlusCold6.addEventListener('click', () => {
  countGoodsCold6++;
  countGoodsHtmlCold6.innerHTML = countGoodsCold6;
  priceColdJs6 += 190;
  priceCold6.innerHTML = priceColdJs6;
});
countMinusCold6.addEventListener('click', () => {
  if (countGoodsCold6 >= 1) {
    countGoodsCold6--;
    countGoodsHtmlCold6.innerHTML = countGoodsCold6;
    priceColdJs6 -= 190;
    priceCold6.innerHTML = priceColdJs6;
  }
});

countPlusCold7.addEventListener('click', () => {
  countGoodsCold7++;
  countGoodsHtmlCold7.innerHTML = countGoodsCold7;
  priceColdJs7 += 190;
  priceCold7.innerHTML = priceColdJs7;
});
countMinusCold7.addEventListener('click', () => {
  if (countGoodsDrink7 >= 1) {
    countGoodsDrink7--;
    countGoodsHtmlCold7.innerHTML = countGoodsCold7;
    priceColdJs7 -= 190;
    priceCold7.innerHTML = priceColdJs7;
  }
});

countPlusBakery1.addEventListener('click', () => {
  countGoodsBakery1++;
  countGoodsHtmlBakery1.innerHTML = countGoodsBakery1;
  priceBakeryJs1 += 190;
  priceBakery1.innerHTML = priceBakeryJs1;
});
countMinusBakery1.addEventListener('click', () => {
  if (countGoodsBakery1 >= 1) {
    countGoodsBakery1--;
    countGoodsHtmlBakery1.innerHTML = countGoodsBakery1;
    priceBakeryJs1 -= 190;
    priceBakery1.innerHTML = priceBakeryJs1;
  }
});

countPlusBakery2.addEventListener('click', () => {
  countGoodsBakery2++;
  countGoodsHtmlBakery2.innerHTML = countGoodsBakery2;
  priceBakeryJs2 += 190;
  priceBakery2.innerHTML = priceBakeryJs2;
});
countMinusBakery2.addEventListener('click', () => {
  if (countGoodsBakery2 >= 1) {
    countGoodsBakery2--;
    countGoodsHtmlBakery2.innerHTML = countGoodsBakery2;
    priceBakeryJs2 -= 190;
    priceBakery2.innerHTML = priceBakeryJs2;
  }
});

// countPlusBakery3.addEventListener('click', () => {
//   countGoodsBakery3++;
//   countGoodsHtmlBakery3.innerHTML = countGoodsBakery3;
//   priceBakeryJs3 += 190;
//   priceBakery3.innerHTML = priceBakeryJs3;
// });
// countMinusBakery3.addEventListener('click', () => {
//   if (countGoodsBakery3 >= 1) {
//     countGoodsBakery3--;
//     countGoodsHtmlBakery3.innerHTML = countGoodsBakery3;
//     priceBakeryJs3 -= 190;
//     priceBakery3.innerHTML = priceBakeryJs3;
//   }
// });

if (countGoodsPopular1 === 0) {
  countBacketPopular1.style.display = 'none';
  addBacketPopular1.style.display = 'flex';
  pricePopularJs1 = 190;
  pricePopular1.innerHTML = pricePopularJs1;
}
addBacketPopular1.addEventListener('click', () => {
  countBacketPopular1.style.display = 'flex';
  addBacketPopular1.style.display = 'none';
});

if (countGoodsPopular2 === 0) {
  countBacketPopular2.style.display = 'none';
  addBacketPopular2.style.display = 'flex';
  pricePopularJs2 = 190;
  pricePopular2.innerHTML = pricePopularJs2;
}
addBacketPopular2.addEventListener('click', () => {
  countBacketPopular2.style.display = 'flex';
  addBacketPopular2.style.display = 'none';
});

if (countGoodsPopular3 === 0) {
  countBacketPopular3.style.display = 'none';
  addBacketPopular3.style.display = 'flex';
  pricePopularJs3 = 190;
  pricePopular3.innerHTML = pricePopularJs3;
}
addBacketPopular3.addEventListener('click', () => {
  countBacketPopular3.style.display = 'flex';
  addBacketPopular3.style.display = 'none';
});

if (countGoodsPopular4 === 0) {
  countBacketPopular4.style.display = 'none';
  addBacketPopular4.style.display = 'flex';
  pricePopularJs4 = 190;
  pricePopular4.innerHTML = pricePopularJs4;
}
addBacketPopular4.addEventListener('click', () => {
  countBacketPopular4.style.display = 'flex';
  addBacketPopular4.style.display = 'none';
});

if (countGoodsDrink1 === 0) {
  countBacketDrink1.style.display = 'none';
  addBacketDrink1.style.display = 'flex';
  priceDrink1Js1 = 190;
  priceDrink1.innerHTML = priceDrinkJs1;
}
addBacketDrink1.addEventListener('click', () => {
  countBacketDrink1.style.display = 'flex';
  addBacketDrink1.style.display = 'none';
});
if (countGoodsDrink2 === 0) {
  countBacketDrink2.style.display = 'none';
  addBacketDrink2.style.display = 'flex';
  priceDrink1Js2 = 190;
  priceDrink2.innerHTML = priceDrinkJs2;
}
addBacketDrink2.addEventListener('click', () => {
  countBacketDrink2.style.display = 'flex';
  addBacketDrink2.style.display = 'none';
});
if (countGoodsDrink3 === 0) {
  countBacketDrink3.style.display = 'none';
  addBacketDrink3.style.display = 'flex';
  priceDrink1Js3 = 190;
  priceDrink3.innerHTML = priceDrinkJs3;
}
addBacketDrink3.addEventListener('click', () => {
  countBacketDrink3.style.display = 'flex';
  addBacketDrink3.style.display = 'none';
});

if (countGoodsDrink4 === 0) {
  countBacketDrink4.style.display = 'none';
  addBacketDrink4.style.display = 'flex';
  priceDrink1Js4 = 190;
  priceDrink4.innerHTML = priceDrinkJs4;
}
addBacketDrink4.addEventListener('click', () => {
  countBacketDrink4.style.display = 'flex';
  addBacketDrink4.style.display = 'none';
});

if (countGoodsDrink5 === 0) {
  countBacketDrink5.style.display = 'none';
  addBacketDrink5.style.display = 'flex';
  priceDrink1Js5 = 190;
  priceDrink5.innerHTML = priceDrinkJs5;
}
addBacketDrink5.addEventListener('click', () => {
  countBacketDrink5.style.display = 'flex';
  addBacketDrink5.style.display = 'none';
});

if (countGoodsDrink6 === 0) {
  countBacketDrink6.style.display = 'none';
  addBacketDrink6.style.display = 'flex';
  priceDrink1Js6 = 190;
  priceDrink6.innerHTML = priceDrinkJs6;
}
addBacketDrink6.addEventListener('click', () => {
  countBacketDrink6.style.display = 'flex';
  addBacketDrink6.style.display = 'none';
});

if (countGoodsDrink7 === 0) {
  countBacketDrink7.style.display = 'none';
  addBacketDrink7.style.display = 'flex';
  priceDrink1Js7 = 190;
  priceDrink7.innerHTML = priceDrinkJs7;
}
addBacketDrink7.addEventListener('click', () => {
  countBacketDrink7.style.display = 'flex';
  addBacketDrink7.style.display = 'none';
});

if (countGoodsDrink8 === 0) {
  countBacketDrink8.style.display = 'none';
  addBacketDrink8.style.display = 'flex';
  priceDrink1Js8 = 190;
  priceDrink8.innerHTML = priceDrinkJs8;
}
addBacketDrink8.addEventListener('click', () => {
  countBacketDrink8.style.display = 'flex';
  addBacketDrink8.style.display = 'none';
});

if (countGoodsDrink9 === 0) {
  countBacketDrink9.style.display = 'none';
  addBacketDrink9.style.display = 'flex';
  priceDrink1Js9 = 190;
  priceDrink9.innerHTML = priceDrinkJs9;
}
addBacketDrink9.addEventListener('click', () => {
  countBacketDrink9.style.display = 'flex';
  addBacketDrink9.style.display = 'none';
});

if (countGoodsCold2 === 0) {
  countBacketCold2.style.display = 'none';
  addBacketCold2.style.display = 'flex';
  priceCold1Js2 = 190;
  priceCold2.innerHTML = priceColdJs2;
}
addBacketCold2.addEventListener('click', () => {
  countBacketCold2.style.display = 'flex';
  addBacketCold2.style.display = 'none';
});

if (countGoodsCold3 === 0) {
  countBacketCold3.style.display = 'none';
  addBacketCold3.style.display = 'flex';
  priceCold1Js3 = 190;
  priceCold3.innerHTML = priceColdJs3;
}
addBacketCold3.addEventListener('click', () => {
  countBacketCold3.style.display = 'flex';
  addBacketCold3.style.display = 'none';
});

if (countGoodsCold4 === 0) {
  countBacketCold4.style.display = 'none';
  addBacketCold4.style.display = 'flex';
  priceCold1Js4 = 190;
  priceCold4.innerHTML = priceColdJs4;
}
addBacketCold4.addEventListener('click', () => {
  countBacketCold4.style.display = 'flex';
  addBacketCold4.style.display = 'none';
});

if (countGoodsCold4 === 0) {
  countBacketCold4.style.display = 'none';
  addBacketCold4.style.display = 'flex';
  priceCold1Js4 = 190;
  priceCold4.innerHTML = priceColdJs4;
}
addBacketCold4.addEventListener('click', () => {
  countBacketCold4.style.display = 'flex';
  addBacketCold4.style.display = 'none';
});

if (countGoodsCold5 === 0) {
  countBacketCold5.style.display = 'none';
  addBacketCold5.style.display = 'flex';
  priceCold1Js5 = 190;
  priceCold5.innerHTML = priceColdJs5;
}
addBacketCold5.addEventListener('click', () => {
  countBacketCold5.style.display = 'flex';
  addBacketCold5.style.display = 'none';
});

if (countGoodsCold6 === 0) {
  countBacketCold6.style.display = 'none';
  addBacketCold6.style.display = 'flex';
  priceCold1Js6 = 190;
  priceCold6.innerHTML = priceColdJs6;
}
addBacketCold6.addEventListener('click', () => {
  countBacketCold6.style.display = 'flex';
  addBacketCold6.style.display = 'none';
});

if (countGoodsCold7 === 0) {
  countBacketCold7.style.display = 'none';
  addBacketCold7.style.display = 'flex';
  priceCold1Js7 = 190;
  priceCold7.innerHTML = priceColdJs7;
}
addBacketCold7.addEventListener('click', () => {
  countBacketCold7.style.display = 'flex';
  addBacketCold7.style.display = 'none';
});

if (countGoodsBakery1 === 0) {
  countBacketBakery1.style.display = 'none';
  addBacketBakery1.style.display = 'flex';
  priceBakeryJs1 = 190;
  priceBakery1.innerHTML = priceBakeryJs1;
}
addBacketBakery1.addEventListener('click', () => {
  countBacketBakery1.style.display = 'flex';
  addBacketBakery1.style.display = 'none';
});
if (countGoodsBakery2 === 0) {
  countBacketBakery2.style.display = 'none';
  addBacketBakery2.style.display = 'flex';
  priceBakeryJs2 = 190;
  priceBakery2.innerHTML = priceBakeryJs2;
}
addBacketBakery2.addEventListener('click', () => {
  countBacketBakery2.style.display = 'flex';
  addBacketBakery2.style.display = 'none';
});
// if (countGoodsBakery3 === 0) {
//   countBacketBakery3.style.display = 'none';
//   addBacketBakery3.style.display = 'flex';
//   priceBakeryJs3 = 190;
//   priceBakery3.innerHTML = priceBakeryJs3;
// }
// addBacketBakery3.addEventListener('click', () => {
//   countBacketBakery3.style.display = 'flex';
//   addBacketBakery3.style.display = 'none';
// });

// category.addEventListener('click', () => {
//   category.classList.add('category_on_active');
//   category2.classList.remove('category_on_active');
//   category3.classList.remove('category_on_active');
//   category4.classList.remove('category_on_active');
//   html.style.scrollPaddingTop = '135px';
// });

// category2.addEventListener('click', () => {
//   category2.classList.add('category_on_active');
//   category.classList.remove('category_on_active');
//   category3.classList.remove('category_on_active');
//   category4.classList.remove('category_on_active');
// });

// category3.addEventListener('click', () => {
//   category3.classList.add('category_on_active');
//   category2.classList.remove('category_on_active');
//   category.classList.remove('category_on_active');
//   category4.classList.remove('category_on_active');
// });

// category4.addEventListener('click', () => {
//   category4.classList.add('category_on_active');
//   category2.classList.remove('category_on_active');
//   category3.classList.remove('category_on_active');
//   category.classList.remove('category_on_active');
// });

openCart.addEventListener('click', function () {
  openModal.showModal();
  document.body.classList.add('dialog-open');
});
closeCart.addEventListener('click', () => {
  openModal.close();
  document.body.classList.remove('dialog-open');
});

openItem1.addEventListener('click', function () {
  itemModal.showModal();
  document.body.classList.add('dialog-open');
});
openItem2.addEventListener('click', function () {
  itemModal2.showModal();
  document.body.classList.add('dialog-open');
});
openItem3.addEventListener('click', function () {
  itemModal3.showModal();
  document.body.classList.add('dialog-open');
});
openItem4.addEventListener('click', function () {
  itemModal4.showModal();
  document.body.classList.add('dialog-open');
});
openItem5.addEventListener('click', function () {
  itemModal5.showModal();
  document.body.classList.add('dialog-open');
});
openItem6.addEventListener('click', function () {
  itemModal6.showModal();
  document.body.classList.add('dialog-open');
});
openItem7.addEventListener('click', function () {
  itemModal7.showModal();
  document.body.classList.add('dialog-open');
});
openItem8.addEventListener('click', function () {
  itemModal8.showModal();
  document.body.classList.add('dialog-open');
});
openItem9.addEventListener('click', function () {
  itemModal9.showModal();
  document.body.classList.add('dialog-open');
});
// openItem10.addEventListener('click', function () {
//   itemModal10.showModal();
//   document.body.classList.add('dialog-open');
// });
openItem11.addEventListener('click', function () {
  itemModal11.showModal();
  document.body.classList.add('dialog-open');
});
openItem12.addEventListener('click', function () {
  itemModal12.showModal();
  document.body.classList.add('dialog-open');
});
openItem13.addEventListener('click', function () {
  itemModal13.showModal();
  document.body.classList.add('dialog-open');
});
openItem14.addEventListener('click', function () {
  itemModal14.showModal();
  document.body.classList.add('dialog-open');
});
openItem15.addEventListener('click', function () {
  itemModal15.showModal();
  document.body.classList.add('dialog-open');
});
openItem16.addEventListener('click', function () {
  itemModal16.showModal();
  document.body.classList.add('dialog-open');
});
openItem17.addEventListener('click', function () {
  itemModal17.showModal();
  document.body.classList.add('dialog-open');
});
openItem18.addEventListener('click', function () {
  itemModal18.showModal();
  document.body.classList.add('dialog-open');
});
openItem19.addEventListener('click', function () {
  itemModal19.showModal();
  document.body.classList.add('dialog-open');
});
openItem20.addEventListener('click', function () {
  itemModal20.showModal();
  document.body.classList.add('dialog-open');
});
openItem21.addEventListener('click', function () {
  itemModal21.showModal();
  document.body.classList.add('dialog-open');
});
openItem22.addEventListener('click', function () {
  itemModal22.showModal();
  document.body.classList.add('dialog-open');
});
openItem23.addEventListener('click', function () {
  itemModal23.showModal();
  document.body.classList.add('dialog-open');
});
closeItem.addEventListener('click', function () {
  itemModal.close();
  document.body.classList.remove('dialog-open');
});

window.addEventListener('click', function (event) {
  if (event.target == openModal) {
    openModal.close();
    document.body.classList.remove('dialog-open');
  } else if (event.target == itemModal) {
    itemModal.close();
    document.body.classList.remove('dialog-open');
  }
});
window.addEventListener('touchstart', function (event) {
  if (event.target == openModal) {
    openModal.close();
    document.body.classList.remove('dialog-open');
  } else if (event.target == itemModal) {
    itemModal.close();
    document.body.classList.remove('dialog-open');
  }
});

const elements = document.querySelectorAll('.category');
const thresholds = [0, 40, 85, 100];

function topScroll() {
  const scrollPercentage =
    (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  elements.forEach((element, index) => {
    if (scrollPercentage >= thresholds[index]) {
      elements.forEach((el) => el.classList.remove('category_on_active'));
      // Add active class to the current element
      element.classList.add('category_on_active');
    }
  });
}
window.addEventListener('scroll', topScroll);
