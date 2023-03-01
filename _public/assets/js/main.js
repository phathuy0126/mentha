const drops = document.querySelector('.c-animation__drops');
const leaftop = document.querySelector('.c-animation__leaftop');
const leafright = document.querySelector('.c-animation__leafright');

const imgProcess11 = document.querySelector('.c-listprocess__item:nth-child(1) .c-listProcess__img');
const imgProcess10 = document.querySelector('.c-listprocess__item:nth-child(2) .c-listProcess__img');
const imgProcess9 = document.querySelector('.c-listprocess__item:nth-child(3) .c-listProcess__img');

var lastScrollTop = 0;

const activeClass = (value) => {
    if (value) {
        drops.style.transform = 'translateY(0%)';
        leaftop.style.transform = 'translateY(0px)';
        leafright.style.transform = 'translateX(0px)';
    } else {
        drops.style.transform = 'translateY(-1000px)';

        if (width > 768) {
            leaftop.style.transform = 'translateY(-60px)';
            leafright.style.transform = 'translateX(60px)';
        }
    }
}


window.addEventListener("scroll", function () {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        activeClass(false);
    } else if (st < lastScrollTop) {
        activeClass(true);
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


const width = document.body.clientWidth;

window.addEventListener('resize', () => {
    if (width <= 768) {
        imgProcess11.setAttribute('src', './assets/img/process11mobile.png');
        imgProcess10.setAttribute('src', './assets/img/process10mobile.png');
        imgProcess9.setAttribute('src', './assets/img/process9mobile.png');
    }
})



const iconmenu = document.querySelectorAll('.c-menuicon');
const navbarmobile = document.querySelector('.c-navbarmobile'); 
const navbarmbitem = document.querySelectorAll('.c-navbarmobile__item');

iconmenu.forEach((icon) => {
    icon.addEventListener('click', () => {
        navbarmobile.classList.toggle('is-active');
    })
})

navbarmbitem.forEach((item) => {
    item.addEventListener('click', () => {
        navbarmobile.classList.remove('is-active');
    })
})
