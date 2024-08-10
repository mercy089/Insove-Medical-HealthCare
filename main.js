//mobile-nav
document.addEventListener('DOMContentLoaded', function () {
    const mobileNav = document.querySelector('.m_nav');
    const closeBtn = document.querySelector('.m_nav__close-btn');
    const closeBtnIcn = document.querySelector('.m_nav__close-btn-icon');

    const navOpenedClass = 'left-0';
    const navClosedClass = '-left-[300px]';
    const arrowLeftClass = 'ri-arrow-left-s-line';
    const arrowRightClass = 'ri-arrow-right-s-line';

    closeBtn.addEventListener('click', () => {
        mobileNav.classList.toggle(navOpenedClass);
        mobileNav.classList.toggle(navClosedClass);
        closeBtnIcn.classList.toggle(arrowLeftClass);
        closeBtnIcn.classList.toggle(arrowRightClass);
    });
});


// swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
  });

//  FAQ's
const faqItems=document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
    const faqBtn =item.querySelector('.faq__btn');

    item.addEventListener('click', () => {
        const isOpen=item.classList.toggle('open');
        const iconClass =isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
        const iconElement =faqBtn.querySelector('i');
        iconElement.classList =`${iconClass} text-2xl`;
    });
});

// Scroll reveal Animations
const sr = ScrollReveal({
    origin:'bottom',
    distance:'60px',
    duration: 3000,
    // delay:100,
    // reset:true //resets animation
});

// hero-section
sr.reveal('.heros__text', {origin:'top'});
sr.reveal('.heros__img');

// stats
sr.reveal('.stats__item',{
    // delay:100,
    distance:'100px',
    interval:100,
    origin:'top',
});

//service
sr.reveal('.services');
sr.reveal('.services__top');
sr.reveal('.services__item',{
    // delay:100,
    distance:'100px',
    interval:100,
    origin:'bottom',
}); 

// appointments
sr.reveal('.appointment__title');
sr.reveal('.appointment__form');

//testimonials
sr.reveal('.testimonial');
sr.reveal('.testimonial__container');

// team
sr.reveal('.team__title');
sr.reveal('.team__slider');

// FAQ's
sr.reveal('.faq__title');
sr.reveal('.faq__item',{
    // delay:100,
    distance:'100px',
    interval:100,
    origin:'bottom',
});

// departments
sr.reveal('.bg__departments');
sr.reveal('.departments__container');

// blogs
sr.reveal('.blog__title');
sr.reveal('.blog__post',{
    // delay:100,
    distance:'100px',
    interval:100,
    origin:'bottom'
});

// brands
sr.reveal('.brands__logo',{
    // delay:100,
    distance:'100px',
    interval:100,
    origin:'bottom'
});

// newsletter
sr.reveal('.newsletter');
sr.reveal('.newsletter__container')

// footer
sr.reveal('.footer__item',{
    // delay:100,
    distance:'100px',
    interval:100,
    origin:'bottom'
});

document.addEventListener("DOMContentLoaded", function() {
    // Define the list of section selectors
    const sections = [
      "#section1","#section2","#section3","#section4","#section5","#section6","#section7","#section8","#section9","#section10","#section11","#section12",
    ];

    let currentIndex = 0;

    function scrollToSection(index) {
      const section = document.querySelector(sections[index]);
      if (section) {
        const top = section.offsetTop;
        window.scrollTo({
          top: top,
          behavior: "smooth"
        });
      }
    }
    function scrollPageByPage() {
        scrollToSection(currentIndex);
        currentIndex = (currentIndex + 1) % sections.length; // Cycle through sections
        setTimeout(scrollPageByPage, 1500); // Schedule next scroll
      }
  
      setTimeout(scrollPageByPage, 1500); // Start scrolling after 1.5 seconds
    });