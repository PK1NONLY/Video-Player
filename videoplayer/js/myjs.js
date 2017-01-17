/**
 * Created by parshant on 6/8/16.
 */
function doFirst() {
   barSize = 600;
    myVideoPlayer = document.getElementById('video_player');
    playButton = document.getElementById('play_button');
    defaultBar = document.getElementById('default_bar');
    progressBar = document.getElementById('progress_bar');

    playButton.addEventListener('click',playOrPause,false);
    defaultBar.addEventListener('click',clickedBar,false);
    


}
function playOrPause() {
    if (!myVideoPlayer.paused && !myVideoPlayer.ended){
        myVideoPlayer.pause();
        playButton.innerHTML = 'Play';
        window.clearInterval(updateBar);
    }
    else{
        myVideoPlayer.play();
        playButton.innerHTML = 'Pause';
        updateBar = setInterval(update,500);
    }
    
}
function update() {
    if (!myVideoPlayer.ended){
        var size = parseInt(myVideoPlayer.currentTime*barSize/myVideoPlayer.duration);
        progressBar.style.width=size+'px';
    }
    else {
        progressBar.style.width='0px';
        playButton.innerHTML = 'Play';
        window.clearInterval(updateBar);
    }

}
function clickedBar(e) {
    var mouseX = e.pageX-defaultBar.offsetLeft;
    var newTime = mouseX*myVideoPlayer.duration/barSize;
    if (!myVideoPlayer.paused && !myVideoPlayer.ended){
        myVideoPlayer.currentTime=newTime;
        progressBar.style.width=mouseX+'px';

    }else if(myVideoPlayer.pause){
        myVideoPlayer.currentTime=newTime;
        progressBar.style.width=mouseX+'px';

    }

}
window.addEventListener('load',doFirst,false);