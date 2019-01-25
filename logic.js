$(document).ready(function() {
// Variable showImage will hold the setInterval when we start the slideshow
var showImage;
const imgDiv = $(".imgDiv");
let interval;

$("#start").on("click", function(event) {
  startSlideshow();
});

$("#stop").on("click", function(event) {
  stopSlideshow();
});

// Links
// https://media.giphy.com/media/11FuEnXyGsXFba/giphy.gif
// https://source.unsplash.com/random

const createPic = () => {
interval = setInterval(function() {
  imgDiv.empty();
  let pic = $("<img>").attr("src","https://source.unsplash.com/random").addClass("img-fluid");
  imgDiv.append(pic);
}, 1000 * 60 * 5)
  
};

// function displayImage() {
//   $("#imgPlace").attr("src", "https://media.giphy.com/media/11FuEnXyGsXFba/giphy.gif");
// };

// function nextImage() {

// $("#imgPlace").attr("src", "https://source.unsplash.com/random");
// console.log("Next Picture!");
// setTimeout(displayImage, 1000);
// };

// function startSlideshow() {

// showImage = setInterval(nextImage, 1000 * 60);

// };

function stopSlideshow() {

clearInterval(interval);
};

// This will run the display image function as soon as the page loads.
// displayImage();

createPic();
});
