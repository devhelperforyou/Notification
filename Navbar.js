let bar=document.querySelector(".bars");
let front=document.querySelector(".front-side")
active=false;
bar.addEventListener('click', (e)=>{
    active=!active;
    // e.preventDefault;
    if(!active){
        front.classList.remove("animation-r");
       front.classList.add("active");
        
       click=false;
    }else{
        front.classList.remove("active");
        front.classList.add("animation-r");
    }
    
})