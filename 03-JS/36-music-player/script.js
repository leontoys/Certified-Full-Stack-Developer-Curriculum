//get dom elements
const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const playingSong = document.getElementById("player-song-title")
const songArtist = document.getElementById("player-song-artist")
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
const playSong = (id,start=true)=>{
//find the song where id matches
const song = userData.songs.find((song)=>song.id===id)
//now that we found the song, set the src and title 
//of web audio API object
audio.src = song.src
audio.title = song.title
//if no current song is playing 
if(!userData.currentSong|| start){
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
//highlight current song
highlightCurrentSong()
//display song info
setPlayerDisplay()
//seet
setPlayButtonAccessibleText()
}
//Event Listener for play Button
playButton.addEventListener("click",()=>{
    //if no current song
    if(userData.currentSong===null){
    //plays first song
    playSong(userData.songs[0].id)
    }
    else{
        playSong(userData.currentSong.id,false)
    }
})
//get all songs in the playlist
const songs = document.querySelectorAll(".playlist-song")
//loop through the songs and add event listener to all songs
songs.forEach(song => {
    //get button
    const button = song.querySelector("button")
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
//event listener to pause button
pauseButton.addEventListener("click",pauseSong)
//get current song
const getCurrentSongIndex = () => userData.songs.indexOf(userData.currentSong);
//get next song
const getNextSong = ()=> userData.songs[getCurrentSongIndex()+1]
//play next song
const playNextSong = ()=>{
  //if no current song, play first song
  if(userData.currentSong===null){
    playSong(userData.songs[0].id)
    return
  }
  const nextSong = getNextSong()
  if(nextSong){
    playSong(nextSong.id)
  }
  //if current song is last, then on click of next pause 
  else {
    userData.currentSong = null
    userData.songCurrentTime = 0
    pauseSong()
  }
setPlayerDisplay()
highlightCurrentSong()
setPlayButtonAccessibleText()  
}
//auto play
audio.addEventListener("ended",playNextSong)
//next even listener
nextButton.addEventListener("click",playNextSong)
//get previous song
const getPreviousSong = ()=>userData.songs[getCurrentSongIndex()-1]
//play previous song
const playPreviousSong = ()=>{
  if(userData.currentSong===null){
    return
  }
  const previousSong = getPreviousSong()
  if(previousSong===undefined){
    playSong(userData.songs[0].id)
  }
  else{
    playSong(previousSong.id)
  }
}
//even listen
previousButton.addEventListener("click",playPreviousSong)
//highlight current song
const highlightCurrentSong = ()=>{
/*   
  const songs = Array.from( document.querySelectorAll(".playlist-song") )
  const highlighted = songs.find((song)=>song.getAttribute("aria-current")==="true")
  if(highlighted){
    highlighted.removeAttribute("aria-current")
  } */
  const previousCurrentSong = document.querySelector('.playlist-song[aria-current="true"]');
  previousCurrentSong?.removeAttribute("aria-current");  
  const songToHighlight = document.getElementById(`song-${userData.currentSong?.id}`)
  songToHighlight?.setAttribute("aria-current",true)
}
//display player
const setPlayerDisplay = ()=>{
  playingSong.innerText = userData.currentSong ? userData.currentSong.title : ''
  songArtist.innerText = userData.currentSong ? userData.currentSong.artist : ''
}
//accessibility
const setPlayButtonAccessibleText = ()=>{
  playButton.setAttribute("aria-label",userData.currentSong ? `Play ${userData.currentSong}`: `Play`)
}