// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
var isSunMode = 1;
// Active Navbar max-width(991px)
var burgerMenu = document.querySelector('.navbar-toggler');

burgerMenu.onclick = function(){
    document.querySelector('.main-header').classList.toggle('active')
    document.querySelector('body').classList.toggle('freeze')
}

// Scroll Fix Navbar
window.addEventListener('scroll', function(){
    if(window.scrollY > 10){
        document.querySelector('header.main-header').classList.add('nav-fixed')
    }else{
        document.querySelector('header.main-header').classList.remove('nav-fixed')
    }
})

// Toggle Dark Mode

const modeBtn = document.querySelector('.theme-mode .mode-btn');
function switchModeIcon(){
    if(isSunMode){
        document.querySelector('.mode-btn i.gg-sun').style.display = "block"
        document.querySelector('.mode-btn i.gg-moon').style.display = "none";
        isSunMode = 0;
    } else{
        document.querySelector('.mode-btn i.gg-sun').style.display = "none"
        document.querySelector('.mode-btn i.gg-moon').style.display = "block";
        isSunMode = 1;
    }
}

modeBtn.addEventListener('click', function(){
    switchModeIcon();
    document.querySelector('body').classList.toggle('dark-mode');
})

// Search Active

const searchBtn = document.querySelector('.icon-material-search')

searchBtn.addEventListener('click', function(){
    document.querySelector('body').classList.add('search-active');
    document.querySelector('.search-input').focus();
})

// Close Search
function closeSearch(){
    let searchCloseBtn = document.querySelector('.header-search .icon-close');
    searchCloseBtn.addEventListener('click', function(){
        document.querySelector('body').classList.remove('search-active');
    })
    
}
closeSearch();
