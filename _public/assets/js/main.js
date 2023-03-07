const drops = document.querySelector('.c-animation__drops');
const leaftop = document.querySelector('.c-animation__leaftop');
const leafright = document.querySelector('.c-animation__leafright');

const boxmore = document.querySelectorAll('.c-boxseffect__more');

const width = document.body.innerWidth;
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
    const st = document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        activeClass(false);
    } else if (st <= lastScrollTop) {
        activeClass(true);
    }
}, false);

const iconmenu = document.querySelectorAll('.c-menuicon');
const navbarmobile = document.querySelector('.c-navbarmobile');
const navbarmbitem = document.querySelectorAll('.c-navbarmobile__item');

iconmenu.forEach((icon) => {
    icon.addEventListener('click', () => {
        navbarmobile.classList.toggle('is-active');
        document.body.classList.toggle('is-noscroll');
    })
})

navbarmbitem.forEach((item) => {
    item.addEventListener('click', () => {
        navbarmobile.classList.remove('is-active');
        document.body.classList.remove('is-noscroll');
    })
})

const overlay = document.querySelectorAll('.c-boxseffect__overlay');

boxmore.forEach((item) => {
    item.addEventListener('click', (e) => {
        overlay.forEach((over) => {
            over.classList.remove('is-active');
        })
        e.target.offsetParent.querySelector('.c-boxseffect__overlay').classList.add('is-active');
    })
})

const phone = document.querySelector('.c-footer__phone');

window.addEventListener('resize', (e) => {
    if (e.target.innerWidth <= 1025) {
        phone.setAttribute('href','tel: 06-6231-5626');
    } else {
        phone.setAttribute('href','#');
    }
})

if (width <= 1025) {
    phone.setAttribute('href','tel: 06-6231-5626');
} else {
    phone.setAttribute('href','#');
}

const listMoreSp = document.querySelectorAll('.c-listprocess__icon');

listMoreSp.forEach((more) => {
    more.addEventListener('click', (e) => {
        e.target.parentElement.querySelector('.c-listprocess__desc').classList.toggle('is-active');
        e.target.classList.toggle('is-active');
    })
})