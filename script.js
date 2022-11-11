let weather = document.querySelector("#weather");

weather.addEventListener("click", () => {
  fetch("https://api.openweathermap.org/data/2.5/weather?q={Baku}&appid={cff232b73898ed00f87ed3bb41185c7c}")
    .then((response) => {
      response.json()
        .then((data) => {
            console.log(data);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});
