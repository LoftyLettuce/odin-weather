function extractNumber(string) {
  return Number(string.slice(0, string.indexOf("p")));
}
export function imageCarousel() {
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