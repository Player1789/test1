let sushiPhotos = document.querySelectorAll(".section_2 .container .photo");
sushiPhotos.forEach(photo=>photo.addEventListener('mouseover',showInfo));
sushiPhotos.forEach(photo => photo.addEventListener('mouseleave', hideInfo));
function showInfo () {this.querySelector('.info').style.display="block"} ;
function hideInfo() { this.querySelector('.info').style.display = "none" };

let mealPhotos = document.querySelectorAll(".section_3 .container .photo");
mealPhotos.forEach(photo => photo.addEventListener('mouseover', showInfo));
mealPhotos.forEach(photo => photo.addEventListener('mouseleave', hideInfo));
function showInfo() { this.querySelector('.info').style.display = "block" };
function hideInfo() { this.querySelector('.info').style.display = "none" };