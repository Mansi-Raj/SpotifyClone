console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex=0;
let audioElement = new Audio("songs/Apna Bana Le - Bhediya 320 Kbps.mp3");
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItems'));
let songs=[
    {songName: "Apna Bana Le", filePath:"songs/Apna Bana Le - Bhediya 320 Kbps.mp3", coverPath: "cover/apna bana le.jpg", songTime: "04:21"},
    {songName: "Nazm Nazm", filePath:"songs/Nazm Nazm feat. Ayushmann Khurrana- Bareilly Ki Barfi 320 Kbps.mp3", coverPath: "cover/nazm nazm.jpeg", songTime:"03:14"},
    {songName: "O Re Piya", filePath:"songs/O Re Piya - Aaja Nachle 320 Kbps.mp3 ", coverPath: "cover/o re piya.jpeg", songTime: "06:19"},
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

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    element.getElementsByClassName("timeStamp")[0].innerText=songs[i].songTime;
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

