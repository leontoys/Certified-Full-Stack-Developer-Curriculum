const textInput = document.getElementById("text-input");

const charCount  = document.getElementById("char-count");


textInput.addEventListener("input",(event)=>{

  let count = event.target.value.length;

  if(count==50){
    charCount.style.color = 'red';
  }
  charCount.innerText = `Character Count: ${count}/50`;

})
