window.onscroll = function () {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;
    const toTop = document.querySelector('#to-top')
    if (window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
    
}


const humbuger = document.querySelector('#hambuger');
const navmenu = document.querySelector('#nav-menu')

hambuger.addEventListener('click', function() {
    hambuger.classList.toggle('hambuger-active');
    navmenu.classList.toggle('hidden');
});

window.addEventListener('click' , function (e) {
    if(e.target != hambuger && e.target != navmenu) {
        hambuger.classList.remove('hambuger-active');
        navmenu.classList.add('hidden');
    }
}) 

const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
})