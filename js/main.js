var elbutton = document.querySelector(".button")
var elmenyu = document.querySelector(".menu")


elbutton.addEventListener('click', function(){
  elmenyu.classList.toggle("open")
})

var elrem = document.querySelector(".remove") 

elrem.addEventListener('click', function(){
  elmenyu.classList.remove("open")

})