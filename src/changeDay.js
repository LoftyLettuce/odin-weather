export function changeDay(number, weatherData){
  Array.from(document.getElementById("big").children).forEach((e) => {
    const infomation = e.querySelector("div");
    if (infomation.textContent.includes(":")) {
      infomation.textContent = infomation.textContent.slice(
        0,
        infomation.textContent.indexOf(":"),
      );
    }
    infomation.textContent = `${infomation.textContent}: ${weatherData.days[number][e.className]}`;
    if (['temp', 'feelslike'].includes(e.className)){
      infomation.textContent += '°C';
    }
  });
  console.log("done");
}