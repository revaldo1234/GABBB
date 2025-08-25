let container = document.querySelector('.container');

window.addEventListener('none',(e)=>{
  
  x = e.pageX;
  y = e.pageY;
  
  container.style.animation = "none";
  container.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
})

window.addEventListener('none',(e)=>{
  container.style.animation = "animate 45s linear infinite";
})

 window.addEventListener("none",(e)=>{
  
      var x = e.touches[0].pageX;
      var y = e.touches[0].pageY;
  
  container.style.animation = "none";
  container.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  
})

window.addEventListener('none',(e)=>{
  container.style.animation = "animate 45s linear infinite";
})

container.addEventListener('none',()=>{
  
  document.querySelector('.love').style.opacity = "1";
})
