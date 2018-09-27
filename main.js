
// 스시 마우스 이벤트
let sushiPhotos = document.querySelectorAll(".section_2 .container .photo");
sushiPhotos.forEach(photo=>photo.addEventListener('mouseover',showInfo));
sushiPhotos.forEach(photo => photo.addEventListener('mouseleave', hideInfo));
function showInfo () {this.querySelector('.info').style.display="block"} ;
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
        menu.style.display = "flex"
    }
};
function menuDefault () {
    if(window.innerWidth>1000){
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
};

//앵커 메뉴
const menus = document.querySelectorAll('.header ul li span');
menus.forEach(menu=>menu.addEventListener('click',anchorHandler));
function anchorHandler(){
    switch(this.innerHTML){
        case "SUSHI":
            console.log('sushi');
            window.scrollTo(0, 2000);
            break;
        case "MEAL":
            console.log('meal')
            break;
        case "MENU":
            console.log('menu')
            break;
        case "ABOUT":
            console.log('about')
            break;
    }
}