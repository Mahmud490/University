const menuBtn = document.querySelector(".fa-bars");
       const navBar = document.querySelector(".nav-links");

       const timesBtn = document.querySelector(".fa-times");
       console.log(navBar);
       menuBtn.addEventListener("click",function(){
          navBar.classList.add("show-bar")
       })
       timesBtn.addEventListener("click",function() {
           navBar.classList.remove("show-bar");
       })