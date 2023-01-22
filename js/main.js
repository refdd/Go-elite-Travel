// selecter 
const menuIcon = document.querySelector(".menu_bar")
const menu = document.querySelector(".menu_container")
const cardContainer = document.querySelector(".cardContainer")
const inputCounter = document.querySelector(".inputCounter")
const counterbox = document.querySelector(".counterbox")
const taptour = document.querySelectorAll(".taptour")
const layoutviews = document.querySelectorAll(".layoutviews")
// event 
menuIcon.addEventListener("click", ()=>{
// remove menu icon and add  cancel icon 
const  icon = document.getElementById("menu")
const  close = document.getElementById("close")
icon.classList.toggle("close")
close.classList.toggle("show")
// show and hide menu
menu.classList.toggle("show")
})
// scroll box 

const handleClick = (direction) => {
    // setIsMoved(true);
    
      const { scrollLeft, clientWidth } = cardContainer;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
          cardContainer.scrollTo({ left: scrollTo, behavior: "smooth" });
   

  };
  // taps tour function
  function add_and_remove_active_class() {
    //for in will not work with DOM elements  
    taptour.forEach((elem ,i) => {
    elem.addEventListener('click' , ()=>{
      // for (const lis of taptour) {
      //   lis.classList.remove('active');
      // }
      for (let index = 0; index < taptour.length; index++) {
        taptour[index].classList.remove('active');
      layoutviews[index].classList.remove('active');
         
      }
      elem.classList.add('active');
      layoutviews[i].classList.add('active');

    });
  });
    }
    add_and_remove_active_class() 
    // counter 
    // frist open and close counter 
    inputCounter.addEventListener("click", ()=>{
      counterbox.classList.toggle('active');
    })
