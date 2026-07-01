// ===============================
// Typing Animation
// ===============================

const text = [
    "Cyber Security Student",
    "SOC Analyst",
    "Google Certified",
    "FAST NUCES Student"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect(){

    if(!typingElement) return;

    const current = text[textIndex];

    if(!deleting){

        typingElement.textContent = current.substring(0,charIndex+1);
        charIndex++;

        if(charIndex === current.length){
            deleting = true;
            setTimeout(typeEffect,1500);
            return;
        }

    }else{

        typingElement.textContent = current.substring(0,charIndex-1);
        charIndex--;

        if(charIndex === 0){
            deleting = false;
            textIndex++;

            if(textIndex >= text.length){
                textIndex = 0;
            }
        }
    }

    setTimeout(typeEffect,deleting ? 60 : 120);
}

typeEffect();


// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        if(navLinks.style.display==="flex"){

            navLinks.style.display="none";

        }else{

            navLinks.style.display="flex";
            navLinks.style.flexDirection="column";
            navLinks.style.position="absolute";
            navLinks.style.top="80px";
            navLinks.style.right="20px";
            navLinks.style.background="#0b1120";
            navLinks.style.padding="20px";
            navLinks.style.borderRadius="15px";
            navLinks.style.gap="15px";

        }

    });

}


// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
".about-box,.skill-card,.timeline-box,.project-card,.certificate-card,.contact-box"
);

function reveal(){

    revealElements.forEach((element)=>{

        const windowHeight = window.innerHeight;

        const top = element.getBoundingClientRect().top;

        if(top < windowHeight - 80){

            element.style.opacity="1";
            element.style.transform="translateY(0)";

        }

    });

}

revealElements.forEach((element)=>{

    element.style.opacity="0";
    element.style.transform="translateY(40px)";
    element.style.transition="all .8s ease";

});

window.addEventListener("scroll",reveal);

reveal();


// ===============================
// Current Year
// ===============================

const footer = document.querySelector("footer p");

if(footer){

footer.innerHTML =
`© ${new Date().getFullYear()} Muhammad Umar Khan`;

}