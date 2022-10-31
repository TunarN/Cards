const btns = document.querySelectorAll(".card-bottom button")
const images = document.querySelector(".image img")
    btns.forEach((btn)=>{
        btn.addEventListener("click",function(){
        // this.parentNode.parentNode.style.transform = 'rotateY(30deg)';
         this.parentNode.parentNode.firstChild.nextElementSibling.classList.toggle("d-none"); 
        }) 
      })



