const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);

function navToggle() {
   navToggler.classList.toggle("active");
   const nav = document.querySelector(".nav");
   nav.classList.toggle("open");
   if(nav.classList.contains("open")){
      nav.style.maxHeight = nav.scrollHeight + "px";
   }
   else{
      nav.removeAttribute("style");
   }
} 

function troca0(){
   window.location.href = "index.html"

}

function troca(){

   window.location.href = "DS1.HTML"
}

function troca1(){
   window.location.href = "DS3.HTML"
}

function troca2(){
   window.location.href = "ER.HTML"
}

function troca3(){
   window.location.href = "SEK.HTML"
}
