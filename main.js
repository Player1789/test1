// 메뉴 숨기기
const menubar = document.querySelector('header');
let position = 0;
window.addEventListener('scroll',function(){
    if(position<window.pageYOffset){
        menubar.classList.add('up');
        position = window.pageYOffset;
    }else{
        menubar.classList.remove('up');
        position = window.pageYOffset;
    }
});


//햄버거 메뉴 이벤트
const hamburger = document.querySelector('.header .hamburger');
const menu = document.querySelector('.header_content ul');
hamburger.addEventListener('click', menuVisibleHandler);
window.addEventListener('resize',menuDefault);
function menuVisibleHandler() {
    if(menu.style.display=="flex"){
        menu.style.display = "none"
    } else {
        menu.style.display = "flex";
    }
};
function menuDefault () {
    if(window.innerWidth>1199){
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
};

// 햄버거 메뉴 네비게이션 클릭시 네비게이션 숨기기
menu.addEventListener('click',function(){
    if (window.innerWidth < 1200) {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
})
const logo = document.querySelector('.logo');
logo.addEventListener('click', function(){
    if (window.innerWidth < 1200) {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
})

// 브랜치 클릭시 .select 추가
const branchNavs = document.querySelectorAll('.section_5 .nav ul li');
const branchContents = document.querySelectorAll('.section_5 .container [data-location]');
console.log(branchContents);
branchNavs.forEach(branchNav => branchNav.addEventListener('click',function(){
    branchNavs.forEach(branchNav => branchNav.classList="");
    this.classList="select";
    console.log(this.dataset.location);
    branchContents.forEach(brnachContent => { brnachContent.classList = "no_select" });
    branchContents.forEach(brnachContent => { if (this.dataset.location === brnachContent.dataset.location) { brnachContent.classList="select"}});
}));

// Parallax Event
const hikariSgin = document.querySelector('#pattern_1');
const soysauce = document.querySelector('#soysauce');
const sauceBottle = document.querySelector('#soysauce_bottle');
window.addEventListener('scroll', function (){
    if (window.innerWidth > 1200){
        let wScroll = window.pageYOffset;
        hikariSgin.style.transform = `translateY(${wScroll/2.7}px)`;
        sauceBottle.style.transform = `translateY(${wScroll /4.5}px)`;
        soysauce.style.transform = `translateY(${wScroll /1.6}px)`;}
})