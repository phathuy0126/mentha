const drops = document.querySelector('.c-animation__drops');
const leaftop = document.querySelector('.c-animation__leaftop');
const leafright = document.querySelector('.c-animation__leafright');

const boxmore = document.querySelectorAll('.c-boxseffect__more');

var lastScrollTop = 0;

const activeClass = (value) => {
    if (value) {
        drops.style.transform = 'translateY(0%)';
        leaftop.style.transform = 'translateY(0px)';
        leafright.style.transform = 'translateX(0px)';
    } else {
        drops.style.transform = 'translateY(-1000px)';

            leaftop.style.transform = 'translateY(-60px)';
            leafright.style.transform = 'translateX(60px)';
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

const listMoreSp = document.querySelectorAll('.c-listprocess__icon');

listMoreSp.forEach((more) => {
    more.addEventListener('click', (e) => {
        if (e.target.classList.contains('c-listprocess__iconpc')) {
            e.target.parentElement.parentElement.parentElement.querySelector('.c-listprocess__body').classList.toggle('is-active');
            e.target.parentElement.parentElement.classList.toggle('is-active');
        } else {
            e.target.parentElement.querySelector('.c-listprocess__body').classList.toggle('is-active');
            e.target.classList.toggle('is-active');
        }
    })
})


// let section = document.querySelectorAll('.c-section'); console.log(section);
// let lists = document.querySelectorAll('.c-navbar__item');console.log(lists);
// function activeLink(){
//     lists.forEach((item) => {
//         item.classList.remove('is-active');
//     })
//     this.classList.add('is-active')
// }
// lists.forEach((item) => {
//     item.addEventListener('click',activeLink);
// })

// window.onscroll = () =>{
//   section.forEach(sec =>{
//     let top = window.scrollY; 
//     let offset = sec.offsetTop;
//     let height = sec.offsetHeight;
//     let id = '#' + sec.getAttribute('id');
//     console.log(sec, sec.offsetTop);
//     if(top >= offset && top <= offset + height ){
//         lists.forEach((item) => {
//             item.classList.remove('is-active');
//             if (id == item.querySelector('a').getAttribute("href")) {
//                 item.classList.add('is-active');
//             }
//         })
//     } 
//   })
// };