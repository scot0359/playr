

let pages = [];
let controls = [];
let media;

document.addEventListener('deviceready', init);

function init() {

    addListeners();
    switchPage();
    nextSong();

}

let songs = [{
    id: 0,
    src: "file:///android_asset/www/media/bensound-acousticbreeze.mp3",
    title: "Acoustic Breeze",
    artist: 'This Wild Life',
    img: "file:///android_asset/www/img/acoustic-breeze.jpg"
},
{
    id: 1,
    src: "file:///android_asset/www/media/bensound-creativeminds.mp3",
    title: "Creative Minds",
    artist: 'Lauv',
    img: "file:///android_asset/www/img/creative-minds.jpg"
},
{
    id: 2,
    src: "file:///android_asset/www/media/bensound-onceagain.mp3",
    title: "Once Again",
    artist: 'The 1975',
    img: "file:///android_asset/www/img/once-again.jpg"
},
{
    id: 3,
    src: "file:///android_asset/www/media/bensound-summer.mp3",
    title: "Summer",
    artist: 'Bazzi',
    img: "file:///android_asset/www/img/summer.jpg"
},
{
    id: 4,
    src: "file:///android_asset/www/media/bensound-anewbeginning.mp3",
    title: "A New Beginning",
    artist: 'Wvnder',
    img: "file:///android_asset/www/img/anewbeginning.jpg"
},
{
    id: 5,
    src: "file:///android_asset/www/media/bensound-memories.mp3",
    title: "Memories",
    artist: 'Kygo',
    img: "file:///android_asset/www/img/memories.jpg"
},
{
    id: 6,
    src: "file:///android_asset/www/media/bensound-tomorrow.mp3",
    title: "Tomorrow",
    artist: 'Heavy Things',
    img: "file:///android_asset/www/img/tomorrow.jpg"
},
]

let objectStatus = {
    "0": "MEDIA_NONE",
    "1": "MEDIA_STARTING",
    "2": "MEDIA_RUNNING",
    "3": "MEDIA_PAUSED",
    "4": "MEDIA_STOPPED",
}
let err = {
    "1": "MEDIA_ERR_ABORTED",
    "2": "MEDIA_ERR_NETWORK",
    "3": "MEDIA_ERR_DECODE",
    "4": "MEDIA_ERR_NONE_SUPPORTED",
}

function success (){
    console.log('success doing something');
}

function failure (err){
    console.warn('failure');
    console.error(err);
}

function statusChange (status){
    console.log('media status is now ' + objectStatus[status]);
}

function switchPage(){
    pages = document.querySelectorAll(".page");
    controls = document.querySelectorAll(".control");
    console.log(pages);

    document.getElementById("song1").addEventListener("click", function () {
        /*console.log("moving from page 1 to page 2");*/
        pages[0].classList.remove("active");
        pages[1].classList.add("active");
    });
    
    document.getElementById("song2").addEventListener("click", function () {
        /*console.log("moving from page 1 to page 2");*/
        pages[0].classList.remove("active");
        pages[1].classList.add("active");
    });
    
    document.getElementById("song3").addEventListener("click", function () {
        /*console.log("moving from page 1 to page 2");*/
        pages[0].classList.remove("active");
        pages[1].classList.add("active");
    });
    
    document.getElementById("song4").addEventListener("click", function () {
        /*console.log("moving from page 1 to page 2");*/
        pages[0].classList.remove("active");
        pages[1].classList.add("active");
    });

    document.getElementById("song5").addEventListener("click", function () {
        /*console.log("moving from page 1 to page 2");*/
        pages[0].classList.remove("active");
        pages[1].classList.add("active");
    });

    document.getElementById("song6").addEventListener("click", function () {
        /*console.log("moving from page 1 to page 2");*/
        pages[0].classList.remove("active");
        pages[1].classList.add("active");
    });

    document.getElementById("song7").addEventListener("click", function () {
        /*console.log("moving from page 1 to page 2");*/
        pages[0].classList.remove("active");
        pages[1].classList.add("active");
    });

    document.getElementById("back-btn").addEventListener("click", function () {
        pages[1].classList.remove("active");
        pages[0].classList.add("active");
    });

    document.getElementById("back-btn").addEventListener("click", function () {
        /*console.log("moving from page 1 to page 2");*/
        controls[1].classList.remove("active-controls");
        controls[0].classList.add("active-controls");
    });

    document.getElementById("play-btn").addEventListener("click", function () {
        /*console.log("moving from page 1 to page 2");*/
        controls[1].classList.remove("active-controls");
        controls[0].classList.add("active-controls");
    });

    document.getElementById("pause-btn").addEventListener("click", function () {
        console.log("show play button");
        controls[0].classList.remove("active-controls");
        controls[1].classList.add("active-controls");
    });
}

function addListeners (){
    //Song 1
    document.querySelector("#song1").addEventListener('click', playSong);
    document.querySelector("#song1").addEventListener('click', musicPlayr);
    //Song 2
    document.querySelector("#song2").addEventListener('click', playSong);
    document.querySelector("#song2").addEventListener('click', musicPlayr);
    //Song 3
    document.querySelector("#song3").addEventListener('click', playSong);
    document.querySelector("#song3").addEventListener('click', musicPlayr);
    //Song 4
    document.querySelector("#song4").addEventListener('click', playSong);
    document.querySelector("#song4").addEventListener('click', musicPlayr);
    //Song 5
    document.querySelector("#song5").addEventListener('click', playSong);
    document.querySelector("#song5").addEventListener('click', musicPlayr);
    //Song 6
    document.querySelector("#song6").addEventListener('click', playSong);
    document.querySelector("#song6").addEventListener('click', musicPlayr);
    //Song 7
    document.querySelector("#song7").addEventListener('click', playSong);
    document.querySelector("#song7").addEventListener('click', musicPlayr);
    //buttons
    document.querySelector("#play-btn").addEventListener('click', play);
    document.querySelector("#pause-btn").addEventListener('click', pause);
    //document.querySelector("#back-btn").addEventListener('click', stop);
    document.querySelector("#ff-btn").addEventListener('click', fastForward);
    document.querySelector("#rew-btn").addEventListener('click', rewind);
}

function playSong(ev){
    if(media == null){
        let dataId = ev.target.getAttribute("data-id");
        console.log(dataId);
        let src = songs[dataId].src;
        media = new Media(src, success, failure, statusChange);
        media.play();
    }else{
        media.stop();
        let dataId = ev.target.getAttribute("data-id");
        console.log(dataId);
        let src = songs[dataId].src;
        media = new Media(src, success, failure, statusChange);
        media.play();
    }
}

function musicPlayr(ev){
    let dataId = ev.target.getAttribute("data-id");
    let image = songs[dataId].img;
    let artist = songs[dataId].artist;
    let title = songs[dataId].title;
    document.getElementById("songImg").src = image;
    document.getElementById("songArtist").innerHTML = artist;
    document.getElementById("songTitle").innerHTML = title;
}

function play(){
    media.play();
}

function pause(){
    media.pause();
}

// function stop(){
//     media.stop();
// }

function fastForward(){
    let pos = media.getCurrentPosition((pos) => {
        let dur = media.getDuration();
        console.log('current position', pos);
        pos += 10;
        if(pos < dur){
            media.seekTo(pos * 1000);
        }
    });
}

function rewind(){
    let pos = media.getCurrentPosition((pos) => {
        console.log('current position', pos);
        pos -= 10;
        if( pos > 0){
            media.seekTo(pos * 1000);
        }else{
            media.seekTo(0);
        }
    })
}

