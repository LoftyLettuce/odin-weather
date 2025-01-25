import "./styles.css";
import { changeDay } from "./changeDay";
import { imageCarousel } from "./imageCarousel";
import { setImage } from "./randomImage";
async function weatherFrom(city) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=CGRJF9AWVHYYTBGAV53C7SUQR&contentType=json`;
  try {
    const data = await fetch(url, { mode: "cors" });
    if (data.status == 200) {
      return await data.json();
    } else {
      alert("Something went so wrong:<");
    }
  } catch (error) {
    alert(error);
  }
}
window.onload = () => {
  imageCarousel();
  const searchBtn = document.getElementById("search");
  let data = false;
  searchBtn.addEventListener("click", () => {
    const cityName = document.getElementById("city").value;
    console.log("waiting...");
    weatherFrom(cityName)
      .then((weatherData) => {
        data = weatherData;
        (document.querySelector('.day-wrapper').children)[0].click();
      })
      .catch(alert);
  });
  let recentProject = false;
  Array.from(document.querySelector('.day-wrapper').children).forEach((e, i)=>{
    e.addEventListener('click', ()=>{
      if (data){
        if (recentProject){
          recentProject.classList.remove('focus');
        }
        recentProject = e;
        recentProject.classList.add('focus');
        changeDay(i, data);
      }
    })
  })
  document.querySelector(".toggle-theme input").addEventListener("click",()=>{
    let themeIsDark = document.querySelector(".toggle-theme input:checked");
    const root = document.documentElement;
    root.className = themeIsDark?"dark":"light";
  })
  setImage(4);
};
