const API_KEY = "6d9cda1093f705b7e84f3bdb5bc6ce2e";

function onGeoOk(position){
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then(response => response.json())
		.then(data =>{
			const weather = document.querySelector("#weather span:first-child");
			const city = document.querySelector("#weather span:last-child");
			city.innerText = data.name;
			console.log(data.name);
			weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
	});
}
function onGeoError(){
	document.querySelector("#weather").innerText = "Can't find you. No Weater for you.";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
