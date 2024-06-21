const category = document.getElementById('category')
const category2 = document.getElementById('category2')
const category3 = document.getElementById('category3')
const category4 = document.getElementById('category4')
const html = document.documentElement
const openModal = document.getElementById('shopCart')
const openCart = document.getElementById('openCart')
const closeCart = document.getElementById('closeCart')

const addBacketPopular1 = document.getElementById('add_to_backet_popular1')
const addBacketPopular2 = document.getElementById('add_to_backet_popular2')
const addBacketPopular3 = document.getElementById('add_to_backet_popular3')
const addBacketPopular4 = document.getElementById('add_to_backet_popular4')
const countBacketPopular1 = document.getElementById('count_backet_popular1')
const countBacketPopular2 = document.getElementById('count_backet_popular2')
const countBacketPopular3 = document.getElementById('count_backet_popular3')
const countBacketPopular4 = document.getElementById('count_backet_popular4')
const countPlusPopular1 = document.getElementById('countPlusPopular1')
const countPlusPopular2 = document.getElementById('countPlusPopular2')
const countPlusPopular3 = document.getElementById('countPlusPopular3')
const countPlusPopular4 = document.getElementById('countPlusPopular4')
const countMinusPopular1 = document.getElementById('countMinusPopular1')
const countMinusPopular2 = document.getElementById('countMinusPopular2')
const countMinusPopular3 = document.getElementById('countMinusPopular3')
const countMinusPopular4 = document.getElementById('countMinusPopular4')
const countGoodsHtmlPopular1 = document.getElementById('countGoodsPopular1')
const countGoodsHtmlPopular2 = document.getElementById('countGoodsPopular2')
const countGoodsHtmlPopular3 = document.getElementById('countGoodsPopular3')
const countGoodsHtmlPopular4 = document.getElementById('countGoodsPopular4')
const pricePopular1 = document.getElementById('pricePopular1')
const pricePopular2 = document.getElementById('pricePopular2')
const pricePopular3 = document.getElementById('pricePopular3')
const pricePopular4 = document.getElementById('pricePopular4')

const addBacketDrink1 = document.getElementById('add_to_backet_drink1')
const addBacketDrink2 = document.getElementById('add_to_backet_drink2')
const addBacketDrink3 = document.getElementById('add_to_backet_drink3')
const countBacketDrink1 = document.getElementById('count_backet_drink1')
const countBacketDrink2 = document.getElementById('count_backet_drink2')
const countBacketDrink3 = document.getElementById('count_backet_drink3')
const countPlusDrink1 = document.getElementById('countPlusDrink1')
const countPlusDrink2 = document.getElementById('countPlusDrink2')
const countPlusDrink3 = document.getElementById('countPlusDrink3')
const countMinusDrink1 = document.getElementById('countMinusDrink1')
const countMinusDrink2 = document.getElementById('countMinusDrink2')
const countMinusDrink3 = document.getElementById('countMinusDrink3')
const countGoodsHtmlDrink1 = document.getElementById('countGoodsDrink1')
const countGoodsHtmlDrink2 = document.getElementById('countGoodsDrink2')
const countGoodsHtmlDrink3 = document.getElementById('countGoodsDrink3')
const priceDrink1 = document.getElementById('priceDrink1')
const priceDrink2 = document.getElementById('priceDrink2')
const priceDrink3 = document.getElementById('priceDrink3')

const addBacketBakery1 = document.getElementById('add_to_backet_bakery1')
const addBacketBakery2 = document.getElementById('add_to_backet_bakery2')
const addBacketBakery3 = document.getElementById('add_to_backet_bakery3')
const countBacketBakery1 = document.getElementById('count_backet_bakery1')
const countBacketBakery2 = document.getElementById('count_backet_bakery2')
const countBacketBakery3 = document.getElementById('count_backet_bakery3')
const countPlusBakery1 = document.getElementById('countPlusBakery1')
const countPlusBakery2 = document.getElementById('countPlusBakery2')
const countPlusBakery3 = document.getElementById('countPlusBakery3')
const countMinusBakery1 = document.getElementById('countMinusBakery1')
const countMinusBakery2 = document.getElementById('countMinusBakery2')
const countMinusBakery3 = document.getElementById('countMinusBakery3')
const countGoodsHtmlBakery1 = document.getElementById('countGoodsBakery1')
const countGoodsHtmlBakery2 = document.getElementById('countGoodsBakery2')
const countGoodsHtmlBakery3 = document.getElementById('countGoodsBakery3')
const priceBakery1 = document.getElementById('priceBakery1')
const priceBakery2 = document.getElementById('priceBakery2')
const priceBakery3 = document.getElementById('priceBakery3')

let pricePopularJs1 = 190
let pricePopularJs2 = 190
let pricePopularJs3 = 190
let pricePopularJs4 = 190

let priceDrinkJs1 = 190
let priceDrinkJs2 = 190
let priceDrinkJs3 = 190

let priceBakeryJs1 = 190
let priceBakeryJs2 = 190
let priceBakeryJs3 = 190

let countGoodsPopular1 = 1
let countGoodsPopular2 = 1
let countGoodsPopular3 = 1
let countGoodsPopular4 = 1

let countGoodsDrink1 = 1
let countGoodsDrink2 = 1
let countGoodsDrink3 = 1

let countGoodsBakery1 = 1
let countGoodsBakery2 = 1
let countGoodsBakery3 = 1
//items
const itemModal = document.getElementById('modalItem')
const closeItem = document.getElementById('close-modal-btn')
const openItem1 = document.getElementById('openItem1')
const openItem2 = document.getElementById('openItem2')
const openItem3 = document.getElementById('openItem3')
const openItem4 = document.getElementById('openItem4')
const openItem5 = document.getElementById('openItem5')
const openItem6 = document.getElementById('openItem6')
const openItem7 = document.getElementById('openItem7')
const openItem8 = document.getElementById('openItem8')
const openItem9 = document.getElementById('openItem9')
const openItem10 = document.getElementById('openItem10')

countPlusPopular1.addEventListener('click', () => {
	countGoodsPopular1++
	countGoodsHtmlPopular1.innerHTML = countGoodsPopular1
	pricePopularJs1 += 190
	pricePopular1.innerHTML = pricePopularJs1
})
countMinusPopular1.addEventListener('click', () => {
	if (countGoodsPopular1 >= 1) {
		countGoodsPopular1--
		countGoodsHtmlPopular1.innerHTML = countGoodsPopular1
		pricePopularJs1 -= 190
		pricePopular1.innerHTML = pricePopularJs1
	}
})

countPlusPopular2.addEventListener('click', () => {
	countGoodsPopular2++
	countGoodsHtmlPopular2.innerHTML = countGoodsPopular2
	pricePopularJs2 += 190
	pricePopular2.innerHTML = pricePopularJs2
})
countMinusPopular2.addEventListener('click', () => {
	if (countGoodsPopular2 >= 1) {
		countGoodsPopular2--
		countGoodsHtmlPopular2.innerHTML = countGoodsPopular2
		pricePopularJs2 -= 190
		pricePopular2.innerHTML = pricePopularJs2
	}
})

countPlusPopular3.addEventListener('click', () => {
	countGoodsPopular3++
	countGoodsHtmlPopular3.innerHTML = countGoodsPopular3
	pricePopularJs3 += 190
	pricePopular3.innerHTML = pricePopularJs3
})
countMinusPopular3.addEventListener('click', () => {
	if (countGoodsPopular3 >= 1) {
		countGoodsPopular3--
		countGoodsHtmlPopular3.innerHTML = countGoodsPopular3
		pricePopularJs3 -= 190
		pricePopular3.innerHTML = pricePopularJs3
	}
})

countPlusPopular4.addEventListener('click', () => {
	countGoodsPopular4++
	countGoodsHtmlPopular4.innerHTML = countGoodsPopular4
	pricePopularJs4 += 190
	pricePopular4.innerHTML = pricePopularJs4
})
countMinusPopular4.addEventListener('click', () => {
	if (countGoodsPopular4 >= 1) {
		countGoodsPopular4--
		countGoodsHtmlPopular4.innerHTML = countGoodsPopular4
		pricePopularJs4 -= 190
		pricePopular4.innerHTML = pricePopularJs4
	}
})

countPlusDrink1.addEventListener('click', () => {
	countGoodsDrink1++
	countGoodsHtmlDrink1.innerHTML = countGoodsDrink1
	priceDrinkJs1 += 190
	priceDrink1.innerHTML = priceDrinkJs1
})
countMinusDrink1.addEventListener('click', () => {
	if (countGoodsDrink1 >= 1) {
		countGoodsDrink1--
		countGoodsHtmlDrink1.innerHTML = countGoodsDrink1
		priceDrinkJs1 -= 190
		priceDrink1.innerHTML = priceDrinkJs1
	}
})

countPlusDrink2.addEventListener('click', () => {
	countGoodsDrink2++
	countGoodsHtmlDrink2.innerHTML = countGoodsDrink2
	priceDrinkJs2 += 190
	priceDrink2.innerHTML = priceDrinkJs2
})
countMinusDrink2.addEventListener('click', () => {
	if (countGoodsDrink2 >= 1) {
		countGoodsDrink2--
		countGoodsHtmlDrink2.innerHTML = countGoodsDrink2
		priceDrinkJs2 -= 190
		priceDrink2.innerHTML = priceDrinkJs2
	}
})

countPlusDrink3.addEventListener('click', () => {
	countGoodsDrink3++
	countGoodsHtmlDrink3.innerHTML = countGoodsDrink3
	priceDrinkJs3 += 190
	priceDrink3.innerHTML = priceDrinkJs3
})
countMinusDrink3.addEventListener('click', () => {
	if (countGoodsDrink3 >= 1) {
		countGoodsDrink3--
		countGoodsHtmlDrink3.innerHTML = countGoodsDrink3
		priceDrinkJs3 -= 190
		priceDrink3.innerHTML = priceDrinkJs3
	}
})

countPlusBakery1.addEventListener('click', () => {
	countGoodsBakery1++
	countGoodsHtmlBakery1.innerHTML = countGoodsBakery1
	priceBakeryJs1 += 190
	priceBakery1.innerHTML = priceBakeryJs1
})
countMinusBakery1.addEventListener('click', () => {
	if (countGoodsBakery1 >= 1) {
		countGoodsBakery1--
		countGoodsHtmlBakery1.innerHTML = countGoodsBakery1
		priceBakeryJs1 -= 190
		priceBakery1.innerHTML = priceBakeryJs1
	}
})

countPlusBakery2.addEventListener('click', () => {
	countGoodsBakery2++
	countGoodsHtmlBakery2.innerHTML = countGoodsBakery2
	priceBakeryJs2 += 190
	priceBakery2.innerHTML = priceBakeryJs2
})
countMinusBakery2.addEventListener('click', () => {
	if (countGoodsBakery2 >= 1) {
		countGoodsBakery2--
		countGoodsHtmlBakery2.innerHTML = countGoodsBakery2
		priceBakeryJs2 -= 190
		priceBakery2.innerHTML = priceBakeryJs2
	}
})

countPlusBakery3.addEventListener('click', () => {
	countGoodsBakery3++
	countGoodsHtmlBakery3.innerHTML = countGoodsBakery3
	priceBakeryJs3 += 190
	priceBakery3.innerHTML = priceBakeryJs3
})
countMinusBakery3.addEventListener('click', () => {
	if (countGoodsBakery3 >= 1) {
		countGoodsBakery3--
		countGoodsHtmlBakery3.innerHTML = countGoodsBakery3
		priceBakeryJs3 -= 190
		priceBakery3.innerHTML = priceBakeryJs3
	}
})

if (countGoodsPopular1 === 0) {
	countBacketPopular1.style.display = 'none'
	addBacketPopular1.style.display = 'flex'
	pricePopularJs1 = 190
	pricePopular1.innerHTML = pricePopularJs1
}
addBacketPopular1.addEventListener('click', () => {
	countBacketPopular1.style.display = 'flex'
	addBacketPopular1.style.display = 'none'
})

if (countGoodsPopular2 === 0) {
	countBacketPopular2.style.display = 'none'
	addBacketPopular2.style.display = 'flex'
	pricePopularJs2 = 190
	pricePopular2.innerHTML = pricePopularJs2
}
addBacketPopular2.addEventListener('click', () => {
	countBacketPopular2.style.display = 'flex'
	addBacketPopular2.style.display = 'none'
})

if (countGoodsPopular3 === 0) {
	countBacketPopular3.style.display = 'none'
	addBacketPopular3.style.display = 'flex'
	pricePopularJs3 = 190
	pricePopular3.innerHTML = pricePopularJs3
}
addBacketPopular3.addEventListener('click', () => {
	countBacketPopular3.style.display = 'flex'
	addBacketPopular3.style.display = 'none'
})

if (countGoodsPopular4 === 0) {
	countBacketPopular4.style.display = 'none'
	addBacketPopular4.style.display = 'flex'
	pricePopularJs4 = 190
	pricePopular4.innerHTML = pricePopularJs4
}
addBacketPopular4.addEventListener('click', () => {
	countBacketPopular4.style.display = 'flex'
	addBacketPopular4.style.display = 'none'
})

if (countGoodsDrink1 === 0) {
	countBacketDrink1.style.display = 'none'
	addBacketDrink1.style.display = 'flex'
	priceDrink1Js1 = 190
	priceDrink1.innerHTML = priceDrinkJs1
}
addBacketDrink1.addEventListener('click', () => {
	countBacketDrink1.style.display = 'flex'
	addBacketDrink1.style.display = 'none'
})
if (countGoodsDrink2 === 0) {
	countBacketDrink2.style.display = 'none'
	addBacketDrink2.style.display = 'flex'
	priceDrink1Js2 = 190
	priceDrink2.innerHTML = priceDrinkJs2
}
addBacketDrink2.addEventListener('click', () => {
	countBacketDrink2.style.display = 'flex'
	addBacketDrink2.style.display = 'none'
})
if (countGoodsDrink3 === 0) {
	countBacketDrink3.style.display = 'none'
	addBacketDrink3.style.display = 'flex'
	priceDrink1Js3 = 190
	priceDrink3.innerHTML = priceDrinkJs3
}
addBacketDrink3.addEventListener('click', () => {
	countBacketDrink3.style.display = 'flex'
	addBacketDrink3.style.display = 'none'
})

if (countGoodsBakery1 === 0) {
	countBacketBakery1.style.display = 'none'
	addBacketBakery1.style.display = 'flex'
	priceBakeryJs1 = 190
	priceBakery1.innerHTML = priceBakeryJs1
}
addBacketBakery1.addEventListener('click', () => {
	countBacketBakery1.style.display = 'flex'
	addBacketBakery1.style.display = 'none'
})
if (countGoodsBakery2 === 0) {
	countBacketBakery2.style.display = 'none'
	addBacketBakery2.style.display = 'flex'
	priceBakeryJs2 = 190
	priceBakery2.innerHTML = priceBakeryJs2
}
addBacketBakery2.addEventListener('click', () => {
	countBacketBakery2.style.display = 'flex'
	addBacketBakery2.style.display = 'none'
})
if (countGoodsBakery3 === 0) {
	countBacketBakery3.style.display = 'none'
	addBacketBakery3.style.display = 'flex'
	priceBakeryJs3 = 190
	priceBakery3.innerHTML = priceBakeryJs3
}
addBacketBakery3.addEventListener('click', () => {
	countBacketBakery3.style.display = 'flex'
	addBacketBakery3.style.display = 'none'
})

//евгений
// category.addEventListener('click', () => {
// 	category.classList.add('category_on_active')
// 	category2.classList.remove('category_on_active')
// 	category3.classList.remove('category_on_active')
// 	category4.classList.remove('category_on_active')
// })

// category2.addEventListener('click', () => {
// 	category2.classList.add('category_on_active')
// 	category.classList.remove('category_on_active')
// 	category3.classList.remove('category_on_active')
// 	category4.classList.remove('category_on_active')
// })

// category3.addEventListener('click', () => {
// 	category3.classList.add('category_on_active')
// 	category2.classList.remove('category_on_active')
// 	category.classList.remove('category_on_active')
// 	category4.classList.remove('category_on_active')
// })

// category4.addEventListener('click', () => {
//   category4.classList.add('category_on_active');
//   category2.classList.remove('category_on_active');
//   category3.classList.remove('category_on_active');
//   category.classList.remove('category_on_active');
// });

openCart.addEventListener('click', function () {
	openModal.showModal()
	document.body.classList.add('dialog-open')
})
closeCart.addEventListener('click', () => {
	openModal.close()
	document.body.classList.remove('dialog-open')
})

openItem1.addEventListener('click', function () {
	itemModal.showModal()
	document.body.classList.add('dialog-open')
})
openItem2.addEventListener('click', function () {
	itemModal.showModal()
	document.body.classList.add('dialog-open')
})
openItem3.addEventListener('click', function () {
	itemModal.showModal()
	document.body.classList.add('dialog-open')
})
openItem4.addEventListener('click', function () {
	itemModal.showModal()
	document.body.classList.add('dialog-open')
})
openItem5.addEventListener('click', function () {
	itemModal.showModal()
	document.body.classList.add('dialog-open')
})
openItem6.addEventListener('click', function () {
	itemModal.showModal()
	document.body.classList.add('dialog-open')
})
openItem7.addEventListener('click', function () {
	itemModal.showModal()
	document.body.classList.add('dialog-open')
})
openItem8.addEventListener('click', function () {
	itemModal.showModal()
	document.body.classList.add('dialog-open')
})
openItem9.addEventListener('click', function () {
	itemModal.showModal()
	document.body.classList.add('dialog-open')
})
openItem10.addEventListener('click', function () {
	itemModal.showModal()
	document.body.classList.add('dialog-open')
})
closeItem.addEventListener('click', function () {
	itemModal.close()
	document.body.classList.remove('dialog-open')
})

window.addEventListener('click', function (event) {
	if (event.target == openModal) {
		openModal.close()
		document.body.classList.remove('dialog-open')
	} else if (event.target == itemModal) {
		itemModal.close()
		document.body.classList.remove('dialog-open')
	}
})
window.addEventListener('touchstart', function (event) {
	if (event.target == openModal) {
		openModal.close()
		document.body.classList.remove('dialog-open')
	} else if (event.target == itemModal) {
		itemModal.close()
		document.body.classList.remove('dialog-open')
	}
})

const elements = document.querySelectorAll('.category')
const thresholds = [0, 40, 85, 100]

function topScroll() {
	const scrollPercentage =
		(window.scrollY /
			(document.documentElement.scrollHeight - window.innerHeight)) *
		100
	elements.forEach((element, index) => {
		if (scrollPercentage >= thresholds[index]) {
			elements.forEach(el => el.classList.remove('category_on_active'))
			// Add active class to the current element
			element.classList.add('category_on_active')
		}
	})
}
window.addEventListener('scroll', topScroll)
