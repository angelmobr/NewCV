let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');  

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  });

  // Cerrar cuando se hace clic en un enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuIcon.classList.remove('bx-x');   // regresa a “hamburguesa”
      navbar.classList.remove('active');   // oculta el menú
    });
  });


document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 1000,
        once: false });
    
    const text = new SplitType('.hero-title', {types: "words, chars"});

    text.chars.forEach((char, index) => {

        let charOriginalColor = window.getComputedStyle(char).color;
        let charsTl = gsap.timeline();
    
        charsTl.from(char, {
            y: gsap.utils.random(-150, 150),
            x: gsap.utils.random(-300, 300),
            rotate: gsap.utils.random(-360, 360),
            scale: gsap.utils.random(0, 2),
            opacity: 0,
            duration: .75,
            ease: "back.out",
            delay: index * 0.01
        })
        charsTl.from(char, {
            color: getSoftTurquoiseVariant(),
            duration: 1,
        }, "-=.25")
    
    
        char.addEventListener("mouseenter", charsHover);

        function getSoftTurquoiseVariant() {
            const r = Math.max(0, Math.min(255, 50 + gsap.utils.random(-50, 100)));
            const g = Math.max(0, Math.min(255, 200 + gsap.utils.random(-100, 55)));
            const b = Math.max(0, Math.min(255, 217 + gsap.utils.random(-100, 60)));
            return `rgb(${r}, ${g}, ${b})`;
        }
    
        function charsHover() {
    
            gsap.timeline()
            .to(char, {
                y: gsap.utils.random(-50, 50),
                x: gsap.utils.random(-50, 50),
                rotate: gsap.utils.random(-90, 90),
                scale: gsap.utils.random(0.5, 1.5),
                duration: .5,
                ease: "back.out",
                color: getSoftTurquoiseVariant(),
                onStart: () => {
                    char.removeEventListener("mouseenter", charsHover);
                }
            })
            .to(char, {
                y: 0,
                x: 0,
                rotate: 0,
                scale: 1,
                color: charOriginalColor,
                delay: 1,
                duration: .5,
                ease: "back.out",
                onComplete: () => {
                    setTimeout(() => {
                        char.addEventListener("mouseenter", charsHover);
                    }, 100);
                }
            })
        }
    
    })

}

);