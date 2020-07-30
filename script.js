const navBars = document.getElementById('nav-bars');
const optionsOverlay = document.getElementById('options-overlay');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const nav4 = document.getElementById('nav4');
const nav5 = document.getElementById('nav5');
const nav6 = document.getElementById('nav6');
const nav7 = document.getElementById('nav7');
const nav8 = document.getElementById('nav8');
const nav9 = document.getElementById('nav9');
const nav10 = document.getElementById('nav10');
const nav11 = document.getElementById('nav11');
const nav12 = document.getElementById('nav12');
const nav13 = document.getElementById('nav13');
const navItems = [nav1, nav2, nav3, nav4, nav5, nav6, nav7, nav8, nav9, nav10, nav11, nav12, nav13];

let adImageCount = 0;
const adImage = document.getElementById('ad-image');
const adImages = ['./images/vertu1.jpg', './images/vertu2.jpg', './images/vertu3.jpg']

// Control Nav animation
const navAnimation = (direction1, direction2) => {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`)
    })
}

const toggleNav = () => {
    //Toggle nav menu open/close
    navBars.classList.toggle('change');
    //Toggle overlay on
    optionsOverlay.classList.toggle('overlay-active');
    if (optionsOverlay.classList.contains('overlay-active')) {
        optionsOverlay.classList.replace('overlay-slide-left','overlay-slide-right');
        navAnimation('out', 'in');
    } else {
        optionsOverlay.classList.replace('overlay-slide-right','overlay-slide-left')
        navAnimation('in', 'out');
    }
}

const rotateAdImages = () => {
    if (adImageCount >= adImages.length) {
        adImageCount = 0;
    }
    adImage.src = adImages[adImageCount];
    adImageCount++;
}

setInterval(rotateAdImages, 6000);
// Event Listeners
navBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => nav.addEventListener('click', toggleNav));