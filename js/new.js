const closebutton = document.querySelector('#covid-button')
const covid_flash = document.querySelector('#covid-flash')
console.log(closebutton)
closebutton.addEventListener("click",clickEventHandler)

function clickEventHandler (){
    covid_flash.style.display="none"
    console.log("hello")
  }