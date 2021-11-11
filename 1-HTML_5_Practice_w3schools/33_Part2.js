
var myVideo = document.getElementById("video1")
function PlayPause() 
{
    // equal to: if(myVideo.paused==true) 
    if(myVideo.paused) {
        myVideo.play();
    } 
    else myVideo.pause();
}
function MakeBig(){
    if(myVideo.width===420) {
        myVideo.width=560;
    }
    else {
        myVideo.width=420;
    }    
}                 
            