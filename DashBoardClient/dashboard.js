const cloud = document.getElementById("cloud");
const sidebar = document.querySelector(".sidebar");
const spans = document.querySelectorAll("span");
const lever = document.querySelector (".switch");
const circle = document.querySelector(".circle");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");

menu.addEventListener("click",()=>{
    sidebar.classList.toggle("max-sidebar");
    if(sidebar.classList.contains("max-sidebar")){
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if(window.innerWidth<=320){
        sidebar.classList.add("small-sidebar");
        main.classList.add("min-main");
        spans.forEach((span)=>{
            span.classList.add("hidden")
        })
    }
});


lever.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("modo-escuro")
    circle.classList.toggle("on")
})

cloud.addEventListener("click", () => {
    sidebar.classList.toggle("small-sidebar");
    main.classList.toggle("min-main");
    spans.forEach((span)=>{
        span.classList.toggle("hidden");
    });
});
