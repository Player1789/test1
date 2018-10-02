// 음식 마우스 이벤트
let sushiPhotos = document.querySelectorAll(".section_3 .container .contents");
sushiPhotos.forEach(content=>content.addEventListener('mouseover',showInfo));
sushiPhotos.forEach(photo => photo.addEventListener('mouseleave', hideInfo));
function showInfo (){this.querySelector('.info').style.display="block"} ;
function hideInfo() { this.querySelector('.info').style.display = "none" };

// 핫밀 마우스 이벤트
let mealPhotos = document.querySelectorAll(".section_3 .container .photo");
mealPhotos.forEach(photo => photo.addEventListener('mouseover', showInfo));
mealPhotos.forEach(photo => photo.addEventListener('mouseleave', hideInfo));
function showInfo() { this.querySelector('.info').style.display = "block" };
function hideInfo() { this.querySelector('.info').style.display = "none" };

//햄버거 메뉴 이벤트
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.header_content ul');
hamburger.addEventListener('click', menuVisibleHandler);
window.addEventListener('resize',menuDefault);
function menuVisibleHandler() {
    if(menu.style.display=="flex"){
        menu.style.display="none"
    } else {
        menu.style.display = "flex";
    }
};
function menuDefault () {
    if(window.innerWidth>1200){
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
};
