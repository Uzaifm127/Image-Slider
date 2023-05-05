const imageSliderImg = document.querySelector(".imageSliderImg");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");

const imgArray = [
  "/Img/food.1.png",
  "/Img/food.2.png",
  "/Img/food.3.png",
  "/Img/food.4.png",
  "/Img/food.6.png",
  "/Img/food.7.png",
  "/Img/food.8.png",
  "/Img/food.10.png",
  "/Img/food.11.png",
  "/Img/food.12.png",
  "/Img/food.13.png",
  "/Img/food.14.png",
  "/Img/food.15.png",
  "/Img/food.16.png",
  "/Img/food.17.png",
  "/Img/food.18.png",
  "/Img/food.20.png",
];

let imgArrayIndex = 0;

const updateImageFunction = () => {
  imageSliderImg.src = imgArray[imgArrayIndex];
};

const leftButtonClick = () => {
  if (imgArrayIndex > 0) {
    imgArrayIndex--;
    imageSliderImg.src = imgArray[imgArrayIndex];
  } else if (imgArrayIndex === 0) {
    imgArrayIndex = imgArray.length - 1;
    imageSliderImg.src = imgArray[imgArrayIndex];
  }
};

// js synchronous in nature hoti hai ye rha proof neeche pehle js jo ooper condition hai usko check karegi vo true hui to execute karegi chahe usi condition pe based neeche kuch or likha ho.

const rightButtonClick = () => {
  if (imgArrayIndex >= 0 && imgArrayIndex !== imgArray.length - 1) {
    imgArrayIndex++;
    imageSliderImg.src = imgArray[imgArrayIndex];
  } else if (imgArrayIndex === imgArray.length - 1) {
    imgArrayIndex = 0;
    imageSliderImg.src = imgArray[imgArrayIndex];
  }
};

// ctrl + k + ctrl + l = wrap up the code.

leftButton.addEventListener("click", leftButtonClick);
rightButton.addEventListener("click", rightButtonClick);

// document.querySelector() is generally considered more efficient when selecting a single element by its class name, because it only needs to find the first matching element, whereas document.getElementsByClassName() needs to create and return a live HTMLCollection object that contains all elements with the specified class name.
