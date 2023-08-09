console.log("welcome to music web");
let audioElement = new Audio('songs/1.mp3');
let songIndex=0;
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let masterSongName=document.getElementById('masterSongName');
let songItem=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:'6-6 Foot - Arjan Dhillon.mp3',filePath:'songs/1.mp3',coverPath:'covers/1.jpg'},
    {songName:'Bahut Nede - Amrinder Gill.mp3',filePath:'songs/2.mp3',coverPath:'covers/2.jpg'},
    {songName:'Jatt Disda - Sunanda Sharma.mp3',filePath:'songs/3.mp3',coverPath:'covers/3.jpg'},
    {songName:'Jatta Ve - The Landers.mp3',filePath:'songs/4.mp3',coverPath:'covers/4.jpg'},
    {songName:'P.O.V(point of Veiw) - Karan Aujla.mp3',filePath:'songs/5.mp3',coverPath:'covers/5.jpg'},
    {songName:'Putt Jatt Da - Diljit Dosanjh.mp3',filePath:'songs/6.mp3',coverPath:'covers/6.jpg'},
    {songName:'Take It Easy - Karan Aujla.mp3',filePath:'songs/7.mp3',coverPath:'covers/7.jpg'},
    {songName:'Tu Te Sharab - Jordan Sandhu.mp3',filePath:'songs/8.mp3',coverPath:'covers/8.jpg'}
]
  songItem.forEach((element,i)=>{
//  element.getElementsByClassName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
   else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
audioElement.addEventListener('timeupdate',()=>{
console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})
const makeAllPlays=()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex= parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>7){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;

    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=7;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})