const searchInput= document.querySelector("#searchInput");
const searchBtn= document.querySelector("#search-button");
const weatherIcon= document.querySelector(".weather-icon");


searchBtn.addEventListener("click", ()=>{
  fetchData(searchInput.value);
});

async function fetchData(city){

  try{
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=06ded6b91c3c7edf77f520ade9aa667e&units=metric`);
    const  data= await response.json();
    console.log(data);
    const date = new Date(data.dt * 1000);
    const dateTime = date.toLocaleDateString( 
      "en-Us",
      {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });


    document.getElementById("date").innerHTML =` ${dateTime}`;
    document.getElementById("temp").innerHTML =`${data.main.temp}°C`;
    document.getElementById("city").innerHTML =data.name;
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("description").innerHTML=data.weather[0].main;
    document.getElementById("wind").innerHTML=data.wind.speed + "m/s";
    document.getElementById("pressure").innerHTML=data.main.pressure + "Hpa"; 
    let icon = data.weather[0].icon;
    weatherIcon.src=`https://openweathermap.org/img/wn/${icon}@2x.png`;
  }catch(error){
  console.log(error);
  }
}
   
   
fetchData("neath port talbot");
