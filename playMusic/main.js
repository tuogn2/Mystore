
const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById('play');

let isPlaying = false;
// for play functinon

function playMusic(){
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play',"fa-pause");
    img.classList.add('anime')
}

// for pause function

function pauseMusic(){
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause',"fa-play");
    img.classList.remove('anime')
}


play.addEventListener('click',()=>{
    if(isPlaying == false)
        playMusic();
    else
        pauseMusic();
    
        
})


const title = document.getElementById('title');
const artist = document.getElementById('artist');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const songs = [
    {
        name:"mo",
        title:"Mơ",
        artist: "Vũ Cát Tường"
    },
    {
        name :"waiting",
        title :"Waiting For You",
        artist: "MONO"
    },
    {
        name :"mua",
        title :"Cơn Mưa Ngang Qua",
        artist: "M-TP"
    }
]
    const loadSong =(songs)=>{
        title.textContent = songs.title;
        artist.textContent = songs.artist;
        music.src =`./music/${songs.name}.mp3`;
        img.src = `./image/${songs.name}.jpg`
    };

    // loadSong(songs[2]);
    songIndex = 1;
    function nextSong(){
        loadSong(songs[songIndex]);
        pauseMusic();
        if(songIndex == 2)
            songIndex =0;
        else 
            songIndex++;
    }

    function prevSong(){
        loadSong(songs[songIndex]);
        playMusic();
        if(songIndex == 0)
            songIndex =2;
        else 
            songIndex--;
    }
    next.addEventListener('click',nextSong);
    prev.addEventListener('click',prevSong);