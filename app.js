const button = document.querySelector(".btn-container")
const inputEl = document.querySelector(".number")
const lengthEl = document.querySelector(".card-one-text")
const volumeEl = document.querySelector(".card-two-text")
const massEl = document.querySelector(".card-three-text")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204
const feetToMeter = 0.304
const gallonToLiter = 3.787
const poundToKilo = 0.453

button.addEventListener("click", () => {
	const numValue = inputEl.value

	lengthEl.textContent = `${numValue} meters = ${(numValue * meterToFeet).toFixed(3)} feet | ${numValue} feet = ${(numValue * feetToMeter).toFixed(3)} meters`

	volumeEl.textContent = `${numValue} liters = ${(numValue * literToGallon).toFixed(3)} gallons | ${numValue} gallons = ${(numValue * gallonToLiter).toFixed(3)} liters`

	massEl.textContent = `${numValue} kilos = ${(numValue * kiloToPound).toFixed(3)} pounds | ${numValue} pounds = ${(numValue * poundToKilo).toFixed(3)} kilos`
})
