const fetchCovidTH = (url) => {
	fetch(url)
		.then((response) => {
			if (response.status !== 200) {
				console.log("Look like there was a problem. Status Code: " + response.status)
				return response.json()
			}
			response.json().then(function (data) {
				document.getElementById("confirmed-th").innerHTML =
					new Intl.NumberFormat().format(data.confirmed.value) + " คน"
				document.getElementById("recovered-th").innerHTML =
					new Intl.NumberFormat().format(data.recovered.value) + " คน"
				document.getElementById("deaths-th").innerHTML =
					new Intl.NumberFormat().format(data.deaths.value) + " คน"
				document.getElementById("date-th").innerHTML =
					"อัพเดทเมื่อวันที่ " + data.lastUpdate
			})
		})
		.catch((error) => {
			throw new error()
		})
}

const fetchCovidGlobal = (url) => {
	fetch(url).then((response) => {
		if (response.status !== 200) {
			console.log("Look like there was a problem. Status Code: " + response.status)
			return response.json()
		}

		response.json().then(function (data) {
			document.getElementById("confirmed-global").innerHTML =
				new Intl.NumberFormat().format(data.confirmed.value) + " คน"
			document.getElementById("recovered-global").innerHTML =
				new Intl.NumberFormat().format(data.recovered.value) + " คน"
			document.getElementById("deaths-global").innerHTML =
				new Intl.NumberFormat().format(data.deaths.value) + " คน"
			document.getElementById("date-global").innerHTML =
				"อัพเดทเมื่อวันที่ " + data.lastUpdate
		})
	})
}

fetchCovidTH("https://covid19.mathdro.id/api/countries/TH")
fetchCovidGlobal("https://covid19.mathdro.id/api")
