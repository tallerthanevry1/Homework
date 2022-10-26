// Constants and Variables

const apiKey = 'b9f731c6c5a8475b77cc712b95d79839';
const url = 'https://api.openweathermap.org/data/2.5/weather?'

let $ = weather.querySelector.binds(weather);
let searchBtn = $(".search-btn");
let cityName;

// Functions

function handleGetData(obj) {
    cityName = obj.value;
  }
  
  searchBtn.onclick = function search() {
    axios
      .get(url, {
        params: {
          lang: "en",
          units: "metric",
          q: cityName,
          appid: apiKey,
        },
      })
      .then((response) => {
        $(".city").innerText = response.data.name;
        $(".temp").innerText = response.data.main.temp;
        $(".humidity").innerText = response.data.main.humidity;
        $(".weather").innerText = response.data.weather[0].description;
  
        console.log(response);
      })
      .catch(() => alert(`Incorrect city! Please enter correct city's name`));
  };
  
  weather.onkeydown = (e) => {
    if (e.key === "Enter") {
      $(".search-btn").click();
    }
  };

// q={city name}&appid={API key}
function handleGetData(){
    $.ajax(url + 'q=city&appid=' + apiKey)
    .then(function(data){
        console.log('Data:', data);
    }, function(error){
        console.log('Error:' , error);

    })
}