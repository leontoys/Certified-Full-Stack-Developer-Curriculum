//get dom elements
const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
//list of songs
const allSongs = [
  {
    id: 0,
    title: "Scratching The Surface",
    artist: "Quincy Larson",
    duration: "4:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
  },
  {
    id: 1,
    title: "Can't Stay Down",
    artist: "Quincy Larson",
    duration: "4:15",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
  },
  {
    id: 2,
    title: "Still Learning",
    artist: "Quincy Larson",
    duration: "3:51",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
  },
  {
    id: 3,
    title: "Cruising for a Musing",
    artist: "Quincy Larson",
    duration: "3:34",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
  },
  {
    id: 4,
    title: "Never Not Favored",
    artist: "Quincy Larson",
    duration: "3:35",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
  },
  {
    id: 5,
    title: "From the Ground Up",
    artist: "Quincy Larson",
    duration: "3:12",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
  },
  {
    id: 6,
    title: "Walking on Air",
    artist: "Quincy Larson",
    duration: "3:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
  },
  {
    id: 7,
    title: "Can't Stop Me. Can't Even Slow Me Down.",
    artist: "Quincy Larson",
    duration: "3:52",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
  },
  {
    id: 8,
    title: "The Surest Way Out is Through",
    artist: "Quincy Larson",
    duration: "3:10",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
  },
  {
    id: 9,
    title: "Chasing That Feeling",
    artist: "Quincy Larson",
    duration: "2:43",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
  },
];
//Web Audio API
const audio = new Audio()
//to track user?
const userData = {
    songs : allSongs,
    currentSong : null,
    songCurrentTime : 0
}
//this function will play the song
//it takes an id and finds that song from the list
//and plays also sets current time and adds playing class to play button
const playSong = (id)=>{
//find the song where id matches
const song = userData.songs.find((song)=>song.id===id)
//now that we found the song, set the src and title 
//of web audio API object
audio.src = song.src
audio.title = song.title
//if no current song is playing 
if(!userData.currentSong){
    //to start from the beginning
    audio.currentTime = 0
}
//some song is playing currently pass its current time
else{
    audio.currentTime = userData.songCurrentTime
}
//add class playing 
playButton.classList.add("playing")
//set current song
userData.currentSong = song
//now play the song 
audio.play()
}
//Event Listener for play Button
playButton.addEventListener("click",()=>{
    //if no current song
    if(userData.currentSong===null){
    //plays first song
    playSong(userData.songs[0].id)
    }
    else{
        playSong(userData.currentSong.id)
    }
})
//get all songs in the playlist
const songs = document.querySelectorAll(".playlist-song")
//loop through the songs and add event listener to all songs
songs.forEach(song => {
    //get button
    const button = song.querySelector("button")
    console.log(button)
    button.addEventListener("click",()=>{
        //get attribute - song-n 
        const id = Number(song.getAttribute("id").split("-")[1])
        playSong(id)
    })
});
//pause song
const pauseSong = ()=>{
    userData.songCurrentTime = audio.currentTime 
    //remove playing class
    playButton.classList.remove("playing")
    //pause song
    audio.pause()
}