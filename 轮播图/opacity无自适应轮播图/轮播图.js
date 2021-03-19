/*轮播图*/

/*获取轮播图中的元素*/
var dian=document.getElementsByClassName("dian");
var listImg=document.getElementsByClassName("listImg");
var left=document.getElementsByClassName("left")[0];
var right=document.getElementsByClassName("right")[0];
/*开启定时器*/
timer();
/*设计左右点击事件*/
/*左*/
left.onclick=function(){
    clearInterval(timere);
    if(index==0){
        index=4;
        listImg[index].style.opacity=1;
        listImg[0].style.opacity=0;
        dian[index].style.backgroundColor="#e1251b";
        dian[0].style.backgroundColor="rgba(255, 103, 0,.3)";
        /*开启定时器*/
        timer();
    }else{
        index--;
        listImg[index].style.opacity=1;
        listImg[index+1].style.opacity=0;
        dian[index].style.backgroundColor="#e1251b";
        dian[index+1].style.backgroundColor="rgba(255, 103, 0,.3)";
        timer();
    }
}
/*右*/
right.onclick=function(){
    clearInterval(timere);
    if(index==4){
        index=0;
        listImg[index].style.opacity=1;
        listImg[4].style.opacity=0;
        dian[index].style.backgroundColor="#e1251b";
        dian[4].style.backgroundColor="rgba(255, 103, 0,.3)";
        timer();
    }else{
        index++;
        listImg[index].style.opacity=1;
        listImg[index-1].style.opacity=0;
        dian[index].style.backgroundColor="#e1251b";
        dian[index-1].style.backgroundColor="rgba(255, 103, 0,.3)";
        timer();
    }
}
/*轮播图下面的小点，点击切换图片*/
diana(0);
diana(1);
diana(2);
diana(3);
diana(4);
/*定时器function*/
var index=0;
var timere;
function timer(){
        timere=setInterval(function(){
        index++;
        if(index==5){
            index=0;
            listImg[index].style.opacity=1;
            listImg[4].style.opacity=0;
            dian[index].style.backgroundColor="#e1251b";
            dian[4].style.backgroundColor="rgba(255, 103, 0,.3)";
        }else{
            listImg[index].style.opacity=1;
            listImg[index-1].style.opacity=0;
            dian[index].style.backgroundColor="#e1251b";
            dian[index-1].style.backgroundColor="rgba(255, 103, 0,.3)";
        }
    },2000);
}
/*轮播图下面小点function*/
function diana(h){
    dian[h].onclick=function(){
        clearInterval(timere);
        for(var i=0;i<5;i++){
            listImg[i].style.opacity=0;
            dian[i].style.backgroundColor="rgba(255, 103, 0,.3)";
        }
        listImg[h].style.opacity=1;
        dian[h].style.backgroundColor="#e1251b";
        index=h;
        timer();
    }
}
