export function setImage(numberPics){
  let innitPlaces = [];
  for (let i = 1; i < 11; i++)
  {
    innitPlaces.push("place"+i);
  }
  Array.from(document.querySelectorAll('.board')).forEach((board)=>{
    let places = [...innitPlaces];
    for (let i = 0; i < numberPics; i++)
    {
      board.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 20Q4.22 20 2.61 18.43 1 16.85 1 14.58 1 12.63 2.17 11.1 3.35 9.57 5.25 9.15 5.88 6.85 7.75 5.43 9.63 4 12 4 14.93 4 16.96 6.04 19 8.07 19 11 20.73 11.2 21.86 12.5 23 13.78 23 15.5 23 17.38 21.69 18.69 20.38 20 18.5 20M6.5 18H18.5Q19.55 18 20.27 17.27 21 16.55 21 15.5 21 14.45 20.27 13.73 19.55 13 18.5 13H17V11Q17 8.93 15.54 7.46 14.08 6 12 6 9.93 6 8.46 7.46 7 8.93 7 11H6.5Q5.05 11 4.03 12.03 3 13.05 3 14.5 3 15.95 4.03 17 5.05 18 6.5 18M12 12Z" /></svg>';
    }
    Array.from(board.children).forEach((e)=>{
      const index = Math.round(Math.random()*(places.length-1));
      e.style.gridArea = places[index];
      places.splice(index, 1);
    })
  });
}