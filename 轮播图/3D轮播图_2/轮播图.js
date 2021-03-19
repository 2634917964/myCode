/*获取轮播图的元素*/
var banner=document.getElementsByClassName("banner")[0];
/*定时器*/
timer();
timert();
/*左右点击*/
var left=document.getElementsByClassName("left")[0];
var right=document.getElementsByClassName("right")[0];
right.onclick=function(){
    clearInterval(timere);
    clearInterval(timer_t);
    index+=60;
    banner.style.transform="rotateY("+index+"deg)";
    timer();
    timert();
}
left.onclick=function(){
    clearInterval(timere);
    clearInterval(timer_t);
    index-=60;
    banner.style.transform="rotateY("+index+"deg)";
    timer();
    timert();
}
/*当前时间*/
var blackBox=document.getElementsByClassName("blackBox");
setInterval(function() {
	var dater = new Date();
	var hours = dater.getHours();
	var minutes = dater.getMinutes();
	var seconds = dater.getSeconds();
	if( minutes < 10) {
		blackBox[1].innerHTML = "0" +  minutes;
	} else {
		blackBox[1].innerHTML =  minutes;
	}
	if(seconds < 10) {
		blackBox[2].innerHTML = "0" + seconds;
	} else {
		blackBox[2].innerHTML = seconds;
	}
	if(hours < 10) {
		blackBox[0].innerHTML = "0" +  hours;
	} else {
		blackBox[0].innerHTML = hours;
	}
	//    miao.innerHTML=60-seconds;
}, 1000);
/*定时器function*/
var index=0;
var timere;
var timer_t;
function timer(){
    timere=setInterval(function(){
        index+=60;
        banner.style.transform="rotateY("+index+"deg)";
        clearInterval(timere);
    },2000);
}
function timert(){
    timer_t=setInterval(function(){
        banner.style.transform="rotateY("+index+"deg)";
        timer();
    },4000);
}
