const iSalari = document.querySelector('#salari'),
      iFreelance = document.querySelector('#freelance'),
      iExtra1 = document.querySelector('#extra-1'),
      iExtra2 = document.querySelector('#extra-2')

const cFlat = document.querySelector('#flat'),
      cHouseServices = document.querySelector('#house-services'),
      cTransport = document.querySelector('#transport'),
      cCredit = document.querySelector('#credit')

const tMount1 = document.querySelector('#mount-1'),
      tMount2 = document.querySelector('#mount-2'),
      iDay = document.querySelector('#day'),
      iSaveYear = document.querySelector('#save-year'),
      iSaveMount = document.querySelector('#save-mount')

const _range = document.querySelector('#range'),
      _range2 = document.querySelector('#range-2')

Date.prototype.daysInMonth = function() {
  return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
};
const daysInMonth = new Date().daysInMonth()

let _tMount1, _tMount2, _iDay, _iSaveYear, _iSaveMount = 0
let totalPrecents = 0

const inupts = document.querySelectorAll('.body__input')
for(e of inupts) {
  e.addEventListener('input', () => {
    countingAvailableMoney()
    calcPrecents()
    if(_range.hasAttribute('disabled') === true){
      _range.removeAttribute('disabled')
    }
  })
}

const strToNum = str => str.value ? parseInt(str.value) : 0

const countingAvailableMoney = () => {
  const totalPerMomey = strToNum(iFreelance) + strToNum(iExtra1) + strToNum(iExtra2) + strToNum(iSalari)
  const totalCosts = strToNum(cHouseServices) + strToNum(cTransport) + strToNum(cFlat) + strToNum(cCredit) 
  _tMount1 = totalPerMomey - totalCosts
  tMount1.innerHTML = _tMount1
}

_range.addEventListener('input', e => {
  totalPrecents = e.target.value
  _range2.innerHTML = totalPrecents
  calcPrecents()
})

const calcPrecents = () => {
  _iSaveYear = ((_tMount1 * totalPrecents) / 100).toFixed(2)
  _tMount2 = (_tMount1 - _iSaveYear).toFixed(2)
  _iDay = (_tMount2 / daysInMonth).toFixed(2)
  _iSaveMount = (_iSaveYear * 12).toFixed(2)

  iSaveYear.innerHTML = _iSaveYear
  tMount2.innerHTML = _tMount2
  iDay.innerHTML = _iDay
  iSaveMount.innerHTML = _iSaveMount
}