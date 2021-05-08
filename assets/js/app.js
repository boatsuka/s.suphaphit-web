(function () {
	`use strict`

	//! Settings variable function fetchCovidTH
	var confirmedThai = document.querySelector(`#confirmed-th`),
		recoveredThai = document.querySelector(`#recovered-th`),
		deathsThai = document.querySelector(`#deaths-th`),
		dateThai = document.querySelector(`#date-th`)

	//! Settings variable function fetchCovidGlobal
	var confirmedGlobal = document.querySelector(`#confirmed-global`),
		recoveredGlobal = document.querySelector(`#recovered-global`),
		deathsGlobal = document.querySelector(`#deaths-global`)

	//? function fetchCovidTH
	async function fetchCovidTH(url) {
		await fetch(url)
			.then((response) => {
				if (response.status !== 200) {
					return response.json()
				}
				response.json().then(function (data) {
					confirmedThai.innerHTML =
						new Intl.NumberFormat().format(data.confirmed.value) + " คน"
					recoveredThai.innerHTML =
						new Intl.NumberFormat().format(data.recovered.value) + " คน"
					deathsThai.innerHTML = new Intl.NumberFormat().format(data.deaths.value) + " คน"
					dateThai.innerHTML = "อัพเดทเมื่อวันที่ " + data.lastUpdate
				})
			})
			.catch((error) => {
				throw new error()
			})
	}

	//? function fetchCovidGlobal
	async function fetchCovidGlobal(url) {
		await fetch(url)
			.then((response) => {
				if (response.status !== 200) {
					return response.json()
				}
				response.json().then(function (data) {
					confirmedGlobal.innerHTML =
						new Intl.NumberFormat().format(data.confirmed.value) + " คน"
					recoveredGlobal.innerHTML =
						new Intl.NumberFormat().format(data.recovered.value) + " คน"
					deathsGlobal.innerHTML =
						new Intl.NumberFormat().format(data.deaths.value) + " คน"
				})
			})
			.catch((error) => {
				throw new error()
			})
	}
    
	//! Use Function
	fetchCovidTH("https://covid19.mathdro.id/api/countries/TH")
	fetchCovidGlobal("https://covid19.mathdro.id/api")
})()
