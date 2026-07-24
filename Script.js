/*==========================================
Blessed Caring Partnership
script.js
==========================================*/


/*==============================
FAQ Accordion
==============================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if(faq !== item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


/*==============================
Counter Animation
==============================*/

const counters = document.querySelectorAll(".count");

const speed = 200;

const runCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-count");

        const count = +counter.innerText;

        const increment = target / speed;

        if(count < target){

            counter.innerText = Math.ceil(count + increment);

            setTimeout(runCounter,10);

        }else{

            counter.innerText = target + "+";

        }

    });

};

const counterSection = document.querySelector(".counter");

let started = false;

window.addEventListener("scroll",()=>{

    if(counterSection){

        const top = counterSection.offsetTop-400;

        if(window.pageYOffset > top && !started){

            runCounter();

            started=true;

        }

    }

});


/*==============================
Sticky Header Shadow
==============================*/

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow="0 15px 35px rgba(0,0,0,.10)";

}

else{

header.style.boxShadow="0 5px 15px rgba(0,0,0,.05)";

}

});


/*==============================
Smooth Scroll
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


/*==============================
Service Card Animation
==============================*/

const cards=document.querySelectorAll(".service-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


/*==============================
Fade In Animation
==============================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const hidden=document.querySelectorAll(".service-card,.about-box,.why-card,.testimonial-card,.blog-card,.contact-box");

hidden.forEach(el=>observer.observe(el));


/*==============================
Console Message
==============================*/

console.log("Blessed Caring Partnership Website Loaded Successfully.");
