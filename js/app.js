// Counter Animation

function animateCounter(id,target){

const element=
document.getElementById(id);

let count=0;

const speed=
Math.ceil(target/150);

const interval=
setInterval(()=>{

count+=speed;

if(count>=target){

count=target;
clearInterval(interval);

}

element.textContent=
count.toLocaleString();

},20);

}

window.addEventListener("load",()=>{

animateCounter(
"threatCount",
12450
);

animateCounter(
"urlCount",
45893
);

});

// Navbar Glow On Scroll

window.addEventListener("scroll",()=>{

const navbar=
document.querySelector(".navbar");

if(window.scrollY>50){

navbar.style.boxShadow=
"0 0 25px rgba(0,245,255,.25)";

}
else{

navbar.style.boxShadow=
"none";

}

});

// Button Scroll

const heroButtons=
document.querySelectorAll(".primary-btn");

heroButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

document
.getElementById("analyzer")
.scrollIntoView({
behavior:"smooth"
});

});

});