// change navigation bar on scroll

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>100)
})

//  show or hide Qs & Ans

const faqs=document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');

        // for changing icon

        const icon=faq.querySelector('.faq-icon i');
        if(icon.className==='uil uil-plus-circle'){
            icon.className="uil uil-minus-circle";
        }
        else{
            icon.className="uil uil-plus-circle";
        }
    })
})

// show hide menu

const menu=document.querySelector(".nav_menu");
const menubtn=document.querySelector("#open-menu-btn");
const closebtn=document.querySelector("#close-menu-btn");

menubtn.addEventListener('click', ()=>{
    menu.style.display="flex";
    closebtn.style.display="inline-block";
    menubtn.style.display="none";
})

// close nav menu

const closeNav=()=>{
    menu.style.display="none";
    closebtn.style.display="none";
    menubtn.style.display="inline-block";
}

closebtn.addEventListener('click',closeNav);