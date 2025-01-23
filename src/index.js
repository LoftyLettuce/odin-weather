import "./styles.css";
import { changeDay } from "./changeDay";
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
function extractNumber(string) {
  return Number(string.slice(0, string.indexOf("p")));
}
function imageCarousel() {
  const picture = window.getComputedStyle(document.querySelector(".big div"));
  const slide = window.getComputedStyle(document.querySelector(".big"));
  const imgNumber = document.querySelector(".big").children.length - 1;
  document.querySelector(".small").style.width = picture.width;
  let moveRight = function () {
    if (
      extractNumber(slide.left) ==
      -imgNumber * extractNumber(picture.width)
    ) {
      document.querySelector(".big").style.left = 0 + "px";
    } else {
      document.querySelector(".big").style.left =
        extractNumber(slide.left) - extractNumber(picture.width) + "px";
    }
  };
  let moveLeft = function () {
    if (extractNumber(slide.left) == 0) {
      document.querySelector(".big").style.left =
        -imgNumber * extractNumber(picture.width) + "px";
    } else {
      document.querySelector(".big").style.left =
        extractNumber(slide.left) + extractNumber(picture.width) + "px";
    }
  };
  document.querySelector(".right").addEventListener("click", moveRight);
  document.querySelector(".left").addEventListener("click", moveLeft);
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
};
