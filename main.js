// DOM Document Object Model
/*Abre e fecha o menu quando clicar no ícone: hamburguer e X */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');


for(const element of toggle){
    element.addEventListener('click', function() {
        nav.classList.toggle('show');
    })
}

/*Quando clicar em um item no menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a');

for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show');
    })
}
/*Sombreando o header da página após o scroll */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {        
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
}

/*Testimonials Swiper Carrousel slider */
const swiper =new Swiper('.swiper-container',{
    slidesPerView: 1,
    pagination:{
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767:{
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
});
/*Scrollreveal, show the elements */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})
scrollReveal.reveal(`
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonias .testimonials,
#contact .text, #contact .links ,
footer .brand, footer .social
` ,
{interveal: 100})

/*Button, back to the top */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop(){
    if(window.scrollY >= 450){
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show')
    }
}
/*Menu Ativo conforme a seçãovisível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection(){

 const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
   
 for( const section of sections){
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight
        
        if(checkpointStart && checkpointEnd){
            document.
            querySelector('nav ul li a[href*=' + sectionId +']')
            .classList.add('active')
        } else {
            document.querySelector('nav ul li a[href*=' + sectionId +']')
            .classList.remove('active')
        }
    }
}
/*When Scroll */
window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})
/*Dark light mode*/
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', dark);
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}


