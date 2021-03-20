var sideLis = document.getElementsByClassName("sideLi");
sideLis[0].onclick=function(){
	addClass(sideA1,"gong-one");
	removeClass(sideA2,"gong-one");
	removeClass(sideA3,"gong-one");
	removeClass(sideA4,"gong-one");
	removeClass(sideA5,"gong-one");
	removeClass(sideA6,"gong-one");
	removeClass(sideA7,"gong-one");
	removeClass(sideA8,"gong-one");
	removeClass(sideA9,"gong-one");
}
sideLis[1].onclick=function(){
	addClass(sideA2,"gong-one");
	removeClass(sideA1,"gong-one");
	removeClass(sideA3,"gong-one");
	removeClass(sideA4,"gong-one");
	removeClass(sideA5,"gong-one");
	removeClass(sideA6,"gong-one");
	removeClass(sideA7,"gong-one");
	removeClass(sideA8,"gong-one");
	removeClass(sideA9,"gong-one");
}
sideLis[2].onclick=function(){
	addClass(sideA3,"gong-one");
	removeClass(sideA1,"gong-one");
	removeClass(sideA2,"gong-one");
	removeClass(sideA4,"gong-one");
	removeClass(sideA5,"gong-one");
	removeClass(sideA6,"gong-one");
	removeClass(sideA7,"gong-one");
	removeClass(sideA8,"gong-one");
	removeClass(sideA9,"gong-one");
}
sideLis[3].onclick=function(){
	addClass(sideA4,"gong-one");
	removeClass(sideA1,"gong-one");
	removeClass(sideA3,"gong-one");
	removeClass(sideA2,"gong-one");
	removeClass(sideA5,"gong-one");
	removeClass(sideA6,"gong-one");
	removeClass(sideA7,"gong-one");
	removeClass(sideA8,"gong-one");
	removeClass(sideA9,"gong-one");
}
sideLis[4].onclick=function(){
	addClass(sideA5,"gong-one");
	removeClass(sideA1,"gong-one");
	removeClass(sideA3,"gong-one");
	removeClass(sideA4,"gong-one");
	removeClass(sideA2,"gong-one");
	removeClass(sideA6,"gong-one");
	removeClass(sideA7,"gong-one");
	removeClass(sideA8,"gong-one");
	removeClass(sideA9,"gong-one");
}
sideLis[5].onclick=function(){
	addClass(sideA6,"gong-one");
	removeClass(sideA1,"gong-one");
	removeClass(sideA3,"gong-one");
	removeClass(sideA4,"gong-one");
	removeClass(sideA5,"gong-one");
	removeClass(sideA2,"gong-one");
	removeClass(sideA7,"gong-one");
	removeClass(sideA8,"gong-one");
	removeClass(sideA9,"gong-one");
}
sideLis[6].onclick=function(){
	addClass(sideA7,"gong-one");
	removeClass(sideA1,"gong-one");
	removeClass(sideA3,"gong-one");
	removeClass(sideA4,"gong-one");
	removeClass(sideA5,"gong-one");
	removeClass(sideA6,"gong-one");
	removeClass(sideA2,"gong-one");
	removeClass(sideA8,"gong-one");
	removeClass(sideA9,"gong-one");
}
sideLis[7].onclick=function(){
	addClass(sideA8,"gong-one");
	removeClass(sideA1,"gong-one");
	removeClass(sideA3,"gong-one");
	removeClass(sideA4,"gong-one");
	removeClass(sideA5,"gong-one");
	removeClass(sideA6,"gong-one");
	removeClass(sideA7,"gong-one");
	removeClass(sideA2,"gong-one");
	removeClass(sideA9,"gong-one");
}
sideLis[8].onclick=function(){
	addClass(sideA9,"gong-one");
	removeClass(sideA1,"gong-one");
	removeClass(sideA3,"gong-one");
	removeClass(sideA4,"gong-one");
	removeClass(sideA5,"gong-one");
	removeClass(sideA6,"gong-one");
	removeClass(sideA7,"gong-one");
	removeClass(sideA8,"gong-one");
	removeClass(sideA2,"gong-one");
}
/*返回顶部*/
var returnToop=document.getElementsByClassName("turntop")[0];
document.onscroll=function(){
	var topJuLi=document.documentElement.scrollTop;
	if(topJuLi>300){
		returnToop.style.display="block";
	}else{
		returnToop.style.display="none";
	}
}


var chu=document.getElementsByClassName("chu")[0];
var links2=document.getElementsByClassName("links2")[0];

chu.onclick=function(){
	toggleClass(sidebar,"gong-two");
}

/*返回顶部*/
function truntoop(){
	var backTopTimer =setInterval(function(){
		var topH = document.documentElement.scrollTop || document.body.scrollTop;
        var backTopSpeed = Math.floor(-topH/8);
        if(topH>0){
            document.documentElement.scrollTop = document.body.scrollTop = topH+backTopSpeed;
        }else{
            clearInterval(backTopTimer);
        }
	},10);
}
