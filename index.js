console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex=0;
let audioElement = new Audio("./assests/songs/Apna Bana Le - Bhediya 320 Kbps.mp3");
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songs=[
    {songName: "Apna Bana Le", filePath:"./assests/songs/Apna Bana Le - Bhediya 320 Kbps.mp3", coverPath: "./assests/covers/apna bana le.jpg"},
    {songName: "Apna Bana Le", filePath:"./assests/songs/Apna Bana Le - Bhediya 320 Kbps.mp3", coverPath: "./assests/covers/apna bana le.jpg"},
    {songName: "Apna Bana Le", filePath:"./assests/songs/Apna Bana Le - Bhediya 320 Kbps.mp3", coverPath: "./assests/covers/apna bana le.jpg"},
]


//audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})
//handle song play

//listen songs
audioElement.addEventListener('timeupdate', ()=>{
    //Upadate Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})