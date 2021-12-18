window.onload=function(){
    toggleSound();
}
function toggleSound(){
    var music=document.getElementById("vd");//获取ID
    if(music.paused){  //判断是否播放
        music.paused=false;
        music.play();
    }
}
