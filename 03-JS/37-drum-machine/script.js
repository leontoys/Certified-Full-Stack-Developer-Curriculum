const drumPads = document.querySelectorAll(".drum-pad")
const display = document.getElementById("display")

const playAudio = (event)=>{
    //console.log(event.target.id)
    //get the audio elements
    const audio = event.target.querySelector("audio")
    //console.log(audio)
    audio.currentTime = 0 
    audio.play()
    console.log(audio.src.split("/").slice(-1))
    display.innerText = audio.src.split("/").slice(-1)
}

drumPads.forEach((drumPad)=>{
//add event listener
drumPad.addEventListener("click",playAudio)
})

//key board event
  document.addEventListener("keydown", (e) => {
    const key = e.key.toUpperCase(); 
    const drumPad = Array.from(drumPads).find(pad => pad.innerText === key);
    if (drumPad) {
        const audio = drumPad.querySelector("audio");
        audio.currentTime = 0; // Reset the audio playback position
        audio.play();
        display.innerText = audio.src.split("/").slice(-1)
    }
});
