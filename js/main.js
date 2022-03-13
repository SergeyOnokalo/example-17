const $priceCar1 = document.querySelector('#priceCar1'),
      $priceCar3 = document.querySelector('#priceCar3'),
      $priceCar4 = document.querySelector('#priceCar4'),
      $priceCar5 = document.querySelector('#priceCar5'),
      $priceCar2 = document.querySelector('#priceCar2'),
      $priceCar6 = document.querySelector('#priceCar6'),
      $priceCar7 = document.querySelector('#priceCar7'),
      $priceCar8 = document.querySelector('#priceCar8')

const $extraCharge1 = document.querySelector('#extraCharge1'),
      $extraCharge2 = document.querySelector('#extraCharge2'),
      $extraCharge3 = document.querySelector('#extraCharge3'),
      $extraCharge4 = document.querySelector('#extraCharge4'),
      $extraCharge5 = document.querySelector('#extraCharge5'),
      $extraCharge6 = document.querySelector('#extraCharge6'),
      $extraCharge7 = document.querySelector('#extraCharge7'),
      $extraCharge8 = document.querySelector('#extraCharge8')

const $initialPriceCar = document.querySelector('#initialPriceCar'),
      $totalPriceCar = document.querySelector('#totalPriceCar'),
      $initialPriceAppearance = document.querySelector('#initialPriceAppearance'),
      $totalPriceAppearance = document.querySelector('#totalPriceAppearance'),
      $initialPriceAppearance2 = document.querySelector('#initialPriceAppearance2'),
      $totalPriceAppearance2 = document.querySelector('#totalPriceAppearance2'),
      $initialPriceAppearance3 = document.querySelector('#initialPriceAppearance3'),
      $totalPriceAppearance3 = document.querySelector('#totalPriceAppearance3'),
      $initialPriceAppearance4 = document.querySelector('#initialPriceAppearance4'),
      $totalPriceAppearance4 = document.querySelector('#totalPriceAppearance4'),
      $initialPriceAppearance5 = document.querySelector('#initialPriceAppearance5'),
      $totalPriceAppearance5 = document.querySelector('#totalPriceAppearance5'),
      $initialPriceAppearance6 = document.querySelector('#initialPriceAppearance6'),
      $totalPriceAppearance6 = document.querySelector('#totalPriceAppearance6'),
      $initialPriceAppearance7 = document.querySelector('#initialPriceAppearance7'),
      $totalPriceAppearance7 = document.querySelector('#totalPriceAppearance7'),
      $initialPriceAppearance8 = document.querySelector('#initialPriceAppearance8'),
      $totalPriceAppearance8 = document.querySelector('#totalPriceAppearance8'),
      $initialPriceCredit = document.querySelector('#initialPriceCredit'),
      $totalPriceCredit = document.querySelector('#totalPriceCredit'),
      $initialMainTotal = document.querySelector('#initialMainTotal'),
      $totalMainTotal = document.querySelector('#totalMainTotal')

const $creditBtnOnOff = document.querySelector('#creditBtnOnOff')

const $summa = document.querySelector('#summa'),
      $period = document.querySelector('#period'),
      $rate = document.querySelector('#rate'),
      $ann = document.querySelector('#ann')

const $btnMonth = document.querySelector('#btnMonth'),
      $btnYear = document.querySelector('#btnYear')

const $inputValue = document.querySelectorAll('.input-value')

let _initialPriceCar = 0, 
    _totalPriceCar = 0,
    _initialPriceAppearance = 0,
    _totalPriceAppearance = 0,
    _initialPriceAppearance2 = 0,
    _totalPriceAppearance2 = 0,
    _initialPriceAppearance3 = 0,
    _totalPriceAppearance3 = 0,
    _initialPriceAppearance4 = 0,
    _totalPriceAppearance4 = 0,
    _initialPriceAppearance5 = 0,
    _totalPriceAppearance5 = 0,
    _initialPriceAppearance6 = 0,
    _totalPriceAppearance6 = 0,
    _initialPriceAppearance7 = 0,
    _totalPriceAppearance7 = 0,
    _initialPriceAppearance8 = 0,
    _totalPriceAppearance8 = 0,
    _initialPriceCredit = 0,
    _totalPriceCredit = 0,
    _initialMainTotal = 0,
    _totalMainTotal = 0

let summa = 0,
    period = 0,
    rate = 0,
    monthRate = 0,
    ann = 0

// Event listener 'input'
for(input of $inputValue) {
  input.addEventListener('input', () => {
    calcPrice()
    calcAnn()
    calcTotal()
  })
}

// 1000000 = 1 000 000
const addSpace = value => {
  let item = [String(value)]
  for (var s of item) {
    let [_, num, suffix] = s.match(/^(.*?)((?:[,.]\d+)?|)$/)
    return `${num.replace(/\B(?=(?:\d{3})*$)/g, ' ')}${suffix}`
  }
}

// Parse str to num
const strToNum = str => str.value || str.innerHTML ? +(str.value) || +(str.innerHTML) : 0

//Calclates %
const calcPercent = (price, percent) => {
  return +(strToNum(price) + (strToNum(price) / 100 * strToNum(percent))).toFixed()
}

// Calculates the price of the car, appearance
const calcPrice = () => {
  _initialPriceCar = strToNum($priceCar1)
  _initialPriceAppearance = strToNum($priceCar2) + strToNum($priceCar3) + strToNum($priceCar4) + strToNum($priceCar5) + strToNum($priceCar6) + strToNum($priceCar7) + strToNum($priceCar8)
  _initialPriceAppearance2 = strToNum($priceCar2)
  _initialPriceAppearance3 = strToNum($priceCar3)
  _initialPriceAppearance4 = strToNum($priceCar4)
  _initialPriceAppearance5 = strToNum($priceCar5)
  _initialPriceAppearance6 = strToNum($priceCar6)
  _initialPriceAppearance7 = strToNum($priceCar7)
  _initialPriceAppearance8 = strToNum($priceCar8)

  _totalPriceCar = calcPercent($priceCar1,$extraCharge1)
  _totalPriceAppearance = calcPercent($priceCar2,$extraCharge2) + calcPercent($priceCar3,$extraCharge3) + calcPercent($priceCar4,$extraCharge4) + calcPercent($priceCar5,$extraCharge5) + calcPercent($priceCar6,$extraCharge6) + calcPercent($priceCar7,$extraCharge7) + calcPercent($priceCar8,$extraCharge8)
  _totalPriceAppearance2 = calcPercent($priceCar2,$extraCharge2)
  _totalPriceAppearance3 = calcPercent($priceCar3,$extraCharge3)
  _totalPriceAppearance4 = calcPercent($priceCar4,$extraCharge4)
  _totalPriceAppearance5 = calcPercent($priceCar5,$extraCharge5)
  _totalPriceAppearance6 = calcPercent($priceCar6,$extraCharge6)
  _totalPriceAppearance7 = calcPercent($priceCar7,$extraCharge7)
  _totalPriceAppearance8 = calcPercent($priceCar8,$extraCharge8)

  $initialPriceCar.innerHTML = addSpace(_initialPriceCar)
  $initialPriceAppearance.innerHTML = addSpace(_initialPriceAppearance)
  $initialPriceAppearance2.innerHTML = addSpace(_initialPriceAppearance2)
  $initialPriceAppearance3.innerHTML = addSpace(_initialPriceAppearance3)
  $initialPriceAppearance4.innerHTML = addSpace(_initialPriceAppearance4)
  $initialPriceAppearance5.innerHTML = addSpace(_initialPriceAppearance5)
  $initialPriceAppearance6.innerHTML = addSpace(_initialPriceAppearance6)
  $initialPriceAppearance7.innerHTML = addSpace(_initialPriceAppearance7)
  $initialPriceAppearance8.innerHTML = addSpace(_initialPriceAppearance8)

  $totalPriceCar.innerHTML = addSpace(_totalPriceCar)
  $totalPriceAppearance.innerHTML = addSpace(_totalPriceAppearance)
  $totalPriceAppearance2.innerHTML = addSpace(_totalPriceAppearance2)
  $totalPriceAppearance3.innerHTML = addSpace(_totalPriceAppearance3)
  $totalPriceAppearance4.innerHTML = addSpace(_totalPriceAppearance4)
  $totalPriceAppearance5.innerHTML = addSpace(_totalPriceAppearance5)
  $totalPriceAppearance6.innerHTML = addSpace(_totalPriceAppearance6)
  $totalPriceAppearance7.innerHTML = addSpace(_totalPriceAppearance7)
  $totalPriceAppearance8.innerHTML = addSpace(_totalPriceAppearance8)

  creditOnOff()
}

// Credit on off
$creditBtnOnOff.addEventListener('click', () => {
  $creditBtnOnOff.classList.toggle('calc__body-item-btn--active')
  creditOnOff()
})
const creditOnOff = () => {
  if ($creditBtnOnOff.classList.contains('calc__body-item-btn--active')) {
    $summa.innerHTML = _totalPriceCar + _totalPriceAppearance
    calcAnn()
    calcTotal()
  } else {
    $summa.innerHTML = 0
    calcAnn()
    calcTotal()
  }
}

// Annuity credit
const checkAnn = a => isNaN(a) ? ann = 0 : ann = a

const calcAnn = () => {
  summa = strToNum($summa)
  period = strToNum($period)
  rate = strToNum($rate)
  monthRate = rate / (100 * 12),
  console.log(summa)
  ann = +(summa * (monthRate / (1 - Math.pow((1 + monthRate), -period)))).toFixed()

  console.log(rate)
  console.log(monthRate)

  checkAnn(ann)

  $ann.innerHTML = addSpace(ann)

  _initialPriceCredit = summa
  _totalPriceCredit = period * ann

  $initialPriceCredit.innerHTML = addSpace(_initialPriceCredit)
  $totalPriceCredit.innerHTML = addSpace(_totalPriceCredit)

  $btnYear.classList.remove('calc__body-item-btn--active')
  $btnMonth.classList.add('calc__body-item-btn--active')
}

// Credit button listener 
$btnMonth.addEventListener('click', () => {
  $btnYear.classList.remove('calc__body-item-btn--active')
  $btnMonth.classList.add('calc__body-item-btn--active')

  $ann.innerHTML = addSpace(ann)
})
$btnYear.addEventListener('click', () => {
  $btnMonth.classList.remove('calc__body-item-btn--active')
  $btnYear.classList.add('calc__body-item-btn--active')

  $ann.innerHTML = addSpace(ann * 12) 
})

// Output total price
const calcTotal = () => {
  _initialMainTotal = _initialPriceCar + _initialPriceAppearance + _initialPriceCredit
  _totalMainTotal = _totalPriceCar + _totalPriceAppearance + _totalPriceCredit

  $initialMainTotal.innerHTML = addSpace(_initialMainTotal)
  $totalMainTotal.innerHTML = addSpace(_totalMainTotal)
}
