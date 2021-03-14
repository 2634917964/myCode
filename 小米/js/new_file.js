/*最底部的最后一个小图片*/
var tesua = document.getElementsByClassName("tesu-a")[0];
var arrImg = ["img/flee1.png", "img/flee2.png"];
var i = 0;
setInterval(function() {
	i++;
	if(i >= arrImg.length) {
		i = 0;
	}
	tesua.src = arrImg[i];
}, 3000);
/*微信*/
var j_foll = document.getElementsByClassName("J_followWxImg")[0];
var move = document.getElementsByClassName("move")[0];
move.onmouseover = function() {
	j_foll.style.display = "block";
}
move.onmouseout = function() {
	j_foll.style.display = "none";
}
/*ajax*/
function loadXMLDoc() {
	var xmlhttp;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.open('GET', 'https://v1.hitokoto.cn/?c=f&encode=text', true);
	xmlhttp.send();
}
/*请输入信息*/
var search=document.getElementById("search");
var ziArry=["手机","【New】众筹新品一元抽","Redmi新品媒体评测","【老人机】首选 Redmi 9A","【New】K40来了","【新品】AirDots 超长续航","【新品】Redmi MAX 86","【换新】至高享3000元补贴","【爆款】智能除菌 加湿器"];
var zi=0;
setInterval(function(){
	zi++;
	search.placeholder=ziArry[zi];
	if(zi==9){
		zi=0;
		search.placeholder=ziArry[zi];
	}
},2000);
/*购物车*/
var topbarCart = document.getElementsByClassName("topbar-cart")[0];
var msgG = document.getElementsByClassName("msg-g")[0];
var msg = document.getElementById("msg");
topbarCart.onmouseover = function() {
	addClass(msg, "msg-g");
	msg.style.height = "100px";
}
topbarCart.onmouseout = function() {
	removeClass(msg, "msg-g");
	msg.style.height = "0";
}
/*下载app*/
var app = document.getElementsByClassName("app")[0];
var chatI=document.getElementById("chatI");
app.onmouseover = function() {
	addClass(chat, "chat-g");
	addClass(chatI, "chat-g2");
	addClass(chatS, "chat-g3");
}
app.onmouseout = function() {
	removeClass(chat, "chat-g");
	removeClass(chatI, "chat-g2");
	removeClass(chatS, "chat-g3");
}
chatI.onmouseover = function() {
	addClass(chat, "chat-g");
	addClass(chatI, "chat-g2");
	addClass(chatS, "chat-g3");
}
chatI.onmouseout = function() {
	removeClass(chat, "chat-g");
	removeClass(chatI, "chat-g2");
	removeClass(chatS, "chat-g3");
}
/*视频*/
var figurea = document.getElementsByClassName("figure-a")[0];
var figureb = document.getElementsByClassName("figure-b")[0];
var figurec = document.getElementsByClassName("figure-c")[0];
var figured = document.getElementsByClassName("figure-d")[0];
var bofanga = document.getElementsByClassName("bofang-a")[0];
var bofangb = document.getElementsByClassName("bofang-b")[0];
var bofangc = document.getElementsByClassName("bofang-c")[0];
var bofangd = document.getElementsByClassName("bofang-d")[0];

figurea.onmouseover = function() {
	bofanga.style.backgroundColor = "#FF6700";
	bofanga.style.border = "2px solid #FF6700";
}
figurea.onmouseout = function() {
	bofanga.style.backgroundColor = "rgba(225,225,225,0)";
	bofanga.style.border = " 2px solid #fff";
}
figureb.onmouseover = function() {
	bofangb.style.backgroundColor = "#FF6700";
	bofangb.style.border = "2px solid #FF6700";
}
figureb.onmouseout = function() {
	bofangb.style.backgroundColor = "rgba(225,225,225,0)";
	bofangb.style.border = " 2px solid #fff";
}
figurec.onmouseover = function() {
	bofangc.style.backgroundColor = "#FF6700";
	bofangc.style.border = "2px solid #FF6700";
}
figurec.onmouseout = function() {
	bofangc.style.backgroundColor = "rgba(225,225,225,0)";
	bofangc.style.border = " 2px solid #fff";
}
figured.onmouseover = function() {
	bofangd.style.backgroundColor = "#FF6700";
	bofangd.style.border = "2px solid #FF6700";
}
figured.onmouseout = function() {
	bofangd.style.backgroundColor = "rgba(225,225,225,0)";
	bofangd.style.border = " 2px solid #fff";
}
/*视频*/
var videoList1 = document.getElementsByClassName("video-list-1")[0];
var videoList2 = document.getElementsByClassName("video-list-2")[0];
var videoList3 = document.getElementsByClassName("video-list-3")[0];
var videoList4 = document.getElementsByClassName("video-list-4")[0];
var loop = document.getElementsByClassName("loop")[0];
var videoAC = document.getElementsByClassName("video-a-c")[0];
var font = document.getElementsByClassName("font")[0];
var line = document.getElementsByClassName("line")[0];
font.onclick = function() {
	videoAC.style.display = "none"
}
videoList1.onclick = function() {
	videoAC.style.display = "block"
	loop.src = "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11c70c96529b6e6938567ec1aa0910e0.mp4";
	line.innerHTML = "Redmi 10X系列发布会"
}
videoList2.onclick = function() {
	videoAC.style.display = "block"
	loop.src = "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cdabcaa763392c86b944eaf4e68d6a3.mp4";
	line.innerHTML = "小米10 青春版发布会";
}
videoList3.onclick = function() {
	videoAC.style.display = "block"
	loop.src = "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4";
	line.innerHTML = "小米10 8k手机拍大片";
}
videoList4.onclick = function() {
	videoAC.style.display = "block"
	loop.src = "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eadb8ddc86f1791154442a928b042e2f.mp4";
	line.innerHTML = "小米10发布会"
}
/*轮播图*/
var ImgListLi = document.getElementsByClassName("ImgListLi");
var leftBtn = document.getElementsByClassName("leftBtn")[0];
var rightBtn = document.getElementsByClassName("rightBtn")[0];
var imglistT = document.getElementsByClassName("imglistT");
var index = 0;
var timer = setInterval(function() {
	index++;
	if(index >= 5) {
		index = 0;
		ImgListLi[4].style.opacity = "0";
		ImgListLi[0].style.opacity = "1";
	} else {
		ImgListLi[index].style.opacity = "1";
		ImgListLi[index - 1].style.opacity = "0";
	}
	for(var i = 0; i < 5; i++) {
		imglistT[i].style.backgroundColor = "#4e6667";
	}
	imglistT[index].style.backgroundColor = "#dfdcd9";
}, 3000);
leftBtn.onclick = function() {
	clearInterval(timer);
	index--;
	if(index <= -1) {
		index = 4;
		ImgListLi[index].style.opacity = "1";
		ImgListLi[0].style.opacity = "0";
	} else {
		ImgListLi[index].style.opacity = "1";
		ImgListLi[index + 1].style.opacity = "0";
	}
	for(var i = 0; i < 5; i++) {
		imglistT[i].style.backgroundColor = "#4e6667";
	}
	imglistT[index].style.backgroundColor = "#dfdcd9";
	timer = setInterval(function() {
		index++;
		if(index >= 5) {
			index = 0;
			ImgListLi[4].style.opacity = "0";
			ImgListLi[0].style.opacity = "1";
		} else {
			ImgListLi[index].style.opacity = "1";
			ImgListLi[index - 1].style.opacity = "0";
		}
		for(var i = 0; i < 5; i++) {
			imglistT[i].style.backgroundColor = "#4e6667";
		}
		imglistT[index].style.backgroundColor = "#dfdcd9";
	}, 3000);
}
rightBtn.onclick = function() {
	clearInterval(timer);
	index++;
	if(index >= 5) {
		index = 0;
		ImgListLi[index].style.opacity = "1";
		ImgListLi[4].style.opacity = "0";
	} else {
		ImgListLi[index].style.opacity = "1";
		ImgListLi[index - 1].style.opacity = "0";
	}
	for(var i = 0; i < 5; i++) {
		imglistT[i].style.backgroundColor = "#4e6667";
	}
	imglistT[index].style.backgroundColor = "#dfdcd9";
	timer = setInterval(function() {
		index++;
		if(index >= 5) {
			index = 0;
			ImgListLi[4].style.opacity = "0";
			ImgListLi[0].style.opacity = "1";
		} else {
			ImgListLi[index].style.opacity = "1";
			ImgListLi[index - 1].style.opacity = "0";
		}
		for(var i = 0; i < 5; i++) {
			imglistT[i].style.backgroundColor = "#4e6667";
		}
		imglistT[index].style.backgroundColor = "#dfdcd9";
	}, 3000);
}
var inde;
for(var i = 0; i < 5; i++) {
	imglistT[i].num = i;
	imglistT[i].onclick = function() {
		clearInterval(timer);
		inde = this.num;
		for(var e = 0; e < 5; e++) {
			ImgListLi[e].style.opacity = "0";

		}
		ImgListLi[inde].style.opacity = "1";
		for(var i = 0; i < 5; i++) {
			imglistT[i].style.backgroundColor = "#4e6667";
		}
		imglistT[inde].style.backgroundColor = "#dfdcd9";
		timer = setInterval(function() {
			index++;
			if(index >= 5) {
				index = 0;
				ImgListLi[4].style.opacity = "0";
				ImgListLi[0].style.opacity = "1";
			} else {
				ImgListLi[index].style.opacity = "1";
				ImgListLi[index - 1].style.opacity = "0";
			}
			for(var i = 0; i < 5; i++) {
				imglistT[i].style.backgroundColor = "#4e6667";
			}
			imglistT[index].style.backgroundColor = "#dfdcd9";
		}, 3000);
	}
}
/*小米秒杀*/
var seckillR = document.getElementsByClassName("seckill-r")[0];
var anniu = document.getElementsByClassName("anniu");
var timer2;
var left = 0;
timer2 = setInterval(function() {
	left++;
	if(left >= 5) {
		left = 0;
	}

	seckillR.style.left = -(left * 992) + "px";

}, 3000);
anniu[0].onclick = function() {
	clearInterval(timer2);
	console.log(left);
	if(left >= 4) {
		seckillR.style.left = -(4 * 992) + "px";
	} else {
		left++;
		seckillR.style.left = -(left * 992) + "px";
	}
	timer2 = setInterval(function() {
		left++;
		if(left >= 5) {
			left = 0;
		}

		seckillR.style.left = -(left * 992) + "px";

	}, 3000);
}
anniu[1].onclick = function() {
	clearInterval(timer2);
	console.log(left);
	if(left <= 0) {
		seckillR.style.left = "0";
	} else {
		left--;
		seckillR.style.left = -(left * 992) + "px";
	}
	timer2 = setInterval(function() {
		left++;
		if(left >= 5) {
			left = 0;
		}

		seckillR.style.left = -(left * 992) + "px";

	}, 3000);
}
/*小米秒杀*/

var blackBox = document.getElementsByClassName("blackBox");
/*setInterval(function() {
	var dater = new Date();
	var hours = dater.getHours();
	var minutes = dater.getMinutes();
	var seconds = dater.getSeconds();
	blackBox[1].innerHTML = 60 - minutes;
	blackBox[2].innerHTML = 60 - seconds;
	if(hours<=10){
		blackBox[0].innerHTML=9-hours;
	}else{
		blackBox[0].innerHTML=33-hours;
	}
}, 1000);*/
setInterval(function() {
	var dater = new Date();
	var hours = dater.getHours();
	var minutes = dater.getMinutes();
	var seconds = dater.getSeconds();
	if((60 - minutes) < 10) {
		blackBox[1].innerHTML = "0" + (60 - minutes);
	} else {
		blackBox[1].innerHTML = 60 - minutes;
	}
	if((60 - seconds) < 10) {
		blackBox[2].innerHTML = "0" + (60 - seconds);
	} else {
		blackBox[2].innerHTML = 60 - seconds;
	}
	if(hours < 10) {
		blackBox[0].innerHTML = "0" + (9 - hours);
	} else {
		blackBox[0].innerHTML = 33 - hours;
	}
	//    miao.innerHTML=60-seconds;
}, 1000);

/*logo*/
var logoc = document.getElementsByClassName("logo_c")[0];
var logoa = document.getElementsByClassName("logo_a")[0];
var headerlogo = document.getElementsByClassName("header-logo")[0];
headerlogo.onmousemove = function() {
	logoc.style.left = "55px";
	logoa.style.left = "0";
}
headerlogo.onmouseout = function() {
	logoc.style.left = "0";
	logoa.style.left = "-55px";
}
/*轮播图左侧*/
/*1*/
var bannerR1 = document.getElementsByClassName("banner-r-1")[0];
var bannerL1 = document.getElementById("banner-l-1");

bannerL1.onmouseover = function() {
	bannerR1.style.display = "block";
}
bannerL1.onmouseout = function() {
	bannerR1.style.display = "none";
}
/*2*/
var bannerR2 = document.getElementsByClassName("banner-r-2")[0];
var bannerL2 = document.getElementById("banner-l-2");

bannerL2.onmouseover = function() {
	bannerR2.style.display = "block";
}
bannerL2.onmouseout = function() {
	bannerR2.style.display = "none";
}
/*3*/
var bannerR3 = document.getElementsByClassName("banner-r-3")[0];
var bannerL3 = document.getElementById("banner-l-3");

bannerL3.onmouseover = function() {
	bannerR3.style.display = "block";
}
bannerL3.onmouseout = function() {
	bannerR3.style.display = "none";
}
/*4*/
var bannerR4 = document.getElementsByClassName("banner-r-4")[0];
var bannerL4 = document.getElementById("banner-l-4");

bannerL4.onmouseover = function() {
	bannerR4.style.display = "block";
}
bannerL4.onmouseout = function() {
	bannerR4.style.display = "none";
}
/*5*/
var bannerR5 = document.getElementsByClassName("banner-r-5")[0];
var bannerL5 = document.getElementById("banner-l-5");

bannerL5.onmouseover = function() {
	bannerR5.style.display = "block";
}
bannerL5.onmouseout = function() {
	bannerR5.style.display = "none";
}
/*6*/
var bannerR6 = document.getElementsByClassName("banner-r-6")[0];
var bannerL6 = document.getElementById("banner-l-6");

bannerL6.onmouseover = function() {
	bannerR6.style.display = "block";
}
bannerL6.onmouseout = function() {
	bannerR6.style.display = "none";
}
/*7*/
var bannerR7 = document.getElementsByClassName("banner-r-7")[0];
var bannerL7 = document.getElementById("banner-l-7");

bannerL7.onmouseover = function() {
	bannerR7.style.display = "block";
}
bannerL7.onmouseout = function() {
	bannerR7.style.display = "none";
}
/*8*/
var bannerR8 = document.getElementsByClassName("banner-r-8")[0];
var bannerL8 = document.getElementById("banner-l-8");

bannerL8.onmouseover = function() {
	bannerR8.style.display = "block";
}
bannerL8.onmouseout = function() {
	bannerR8.style.display = "none";
}
/*9*/
var bannerR9 = document.getElementsByClassName("banner-r-9")[0];
var bannerL9 = document.getElementById("banner-l-9");

bannerL9.onmouseover = function() {
	bannerR9.style.display = "block";
}
bannerL9.onmouseout = function() {
	bannerR9.style.display = "none";
}
/*10*/
var bannerR10 = document.getElementsByClassName("banner-r-10")[0];
var bannerL10 = document.getElementById("banner-l-10");

bannerL10.onmouseover = function() {
	bannerR10.style.display = "block";
}
bannerL10.onmouseout = function() {
	bannerR10.style.display = "none";
}
/*热门和电视影音*/
var new1 = document.getElementsByClassName("new1")[0];
var new2 = document.getElementsByClassName("new2")[0];
var posi = document.getElementsByClassName("posi")[0];
var posi2 = document.getElementsByClassName("posi-2")[0];
var posi3 = document.getElementsByClassName("posi-3")[0];
var posi4 = document.getElementsByClassName("posi-4")[0];
new1.onmousemove = function() {
	posi3.style.display = "block";
	posi4.style.display = "block";
	posi.style.display = "none";
	posi2.style.display = "none";
	new1.style.color = "#FF6700";
	new1.style.borderBottom = "2px solid #FF6700";
	new2.style.borderBottom = "0";
	new2.style.color = "#424242";
}

new2.onmousemove = function() {
	posi3.style.display = "none";
	posi4.style.display = "none";
	posi.style.display = "block";
	posi2.style.display = "block";
	new2.style.color = "#FF6700";
	new2.style.borderBottom = "2px solid #FF6700";
	new1.style.borderBottom = "0";
	new1.style.color = "#424242";
}
/*搭配*/
var new11 = document.getElementsByClassName("new1-1")[0];
var new21 = document.getElementsByClassName("new2-1")[0];
var posi1 = document.getElementsByClassName("posi-1")[0];
var posi21 = document.getElementsByClassName("posi-2-1")[0];
var posi31 = document.getElementsByClassName("posi-3-1")[0];
var posi41 = document.getElementsByClassName("posi-4-1")[0];
new11.onmousemove = function() {
	posi31.style.display = "block";
	posi41.style.display = "block";
	posi1.style.display = "none";
	posi21.style.display = "none";
	new11.style.color = "#FF6700";
	new11.style.borderBottom = "2px solid #FF6700";
	new21.style.borderBottom = "0";
	new21.style.color = "#424242";
}

new21.onmousemove = function() {
	posi31.style.display = "none";
	posi41.style.display = "none";
	posi1.style.display = "block";
	posi21.style.display = "block";
	new21.style.color = "#FF6700";
	new21.style.borderBottom = "2px solid #FF6700";
	new11.style.borderBottom = "0";
	new11.style.color = "#424242";
}

/*配件*/
var new12 = document.getElementsByClassName("new1-2")[0];
var new22 = document.getElementsByClassName("new2-2")[0];
var posi102 = document.getElementsByClassName("posi-102")[0];
var posi22 = document.getElementsByClassName("posi-2-2")[0];
var posi32 = document.getElementsByClassName("posi-3-2")[0];
var posi42 = document.getElementsByClassName("posi-4-2")[0];
new12.onmousemove = function() {
	posi32.style.display = "block";
	posi42.style.display = "block";
	posi102.style.display = "none";
	posi22.style.display = "none";
	new12.style.color = "#FF6700";
	new12.style.borderBottom = "2px solid #FF6700";
	new22.style.borderBottom = "0";
	new22.style.color = "#424242";
}

new22.onmousemove = function() {
	posi32.style.display = "none";
	posi42.style.display = "none";
	posi102.style.display = "block";
	posi22.style.display = "block";
	new22.style.color = "#FF6700";
	new22.style.borderBottom = "2px solid #FF6700";
	new12.style.borderBottom = "0";
	new12.style.color = "#424242";
}
/*周边*/
var new13 = document.getElementsByClassName("new1-3")[0];
var new23 = document.getElementsByClassName("new2-3")[0];
var posi103 = document.getElementsByClassName("posi-103")[0];
var posi23 = document.getElementsByClassName("posi-2-3")[0];
var posi33 = document.getElementsByClassName("posi-3-3")[0];
var posi43 = document.getElementsByClassName("posi-4-3")[0];
new13.onmousemove = function() {
	posi33.style.display = "block";
	posi43.style.display = "block";
	posi103.style.display = "none";
	posi23.style.display = "none";
	new13.style.color = "#FF6700";
	new13.style.borderBottom = "2px solid #FF6700";
	new23.style.borderBottom = "0";
	new23.style.color = "#424242";
}

new23.onmousemove = function() {
	posi33.style.display = "none";
	posi43.style.display = "none";
	posi103.style.display = "block";
	posi23.style.display = "block";
	new23.style.color = "#FF6700";
	new23.style.borderBottom = "2px solid #FF6700";
	new13.style.borderBottom = "0";
	new13.style.color = "#424242";
}
/*智能*/
var new14 = document.getElementsByClassName("new1-4")[0]; /*出行*/
var new24 = document.getElementsByClassName("new2-4")[0]; /*安防*/
var new34 = document.getElementsByClassName("new3-4")[0]; /*热门*/
var posi105 = document.getElementsByClassName("posi-105")[0];
var posi25 = document.getElementsByClassName("posi-2-5")[0];
new34.onmousemove = function() { /*出行*/
	posi105.style.display = "block";
	posi25.style.display = "block";
	posi104.style.display = "none";
	posi24.style.display = "none";
	posi34.style.display = "none";
	posi44.style.display = "none";
	new34.style.color = "#FF6700";
	new34.style.borderBottom = "2px solid #FF6700";
	new24.style.borderBottom = "0";
	new24.style.color = "#424242";
	new14.style.borderBottom = "0";
	new14.style.color = "#424242";
}
var posi104 = document.getElementsByClassName("posi-104")[0];
var posi24 = document.getElementsByClassName("posi-2-4")[0];
new24.onmousemove = function() {
	posi104.style.display = "block";
	posi24.style.display = "block";
	posi105.style.display = "none";
	posi25.style.display = "none";
	posi34.style.display = "none";
	posi44.style.display = "none";
	new24.style.color = "#FF6700";
	new24.style.borderBottom = "2px solid #FF6700";
	new34.style.borderBottom = "0";
	new34.style.color = "#424242";
	new14.style.borderBottom = "0";
	new14.style.color = "#424242";
}
var posi34 = document.getElementsByClassName("posi-3-4")[0];
var posi44 = document.getElementsByClassName("posi-4-4")[0];
new14.onmousemove = function() {
	posi34.style.display = "block";
	posi44.style.display = "block";
	posi105.style.display = "none";
	posi25.style.display = "none";
	posi104.style.display = "none";
	posi24.style.display = "none";
	new14.style.color = "#FF6700";
	new14.style.borderBottom = "2px solid #FF6700";
	new34.style.borderBottom = "0";
	new34.style.color = "#424242";
	new24.style.borderBottom = "0";
	new24.style.color = "#424242";
}
/*白色导航条 鼠标悬停显示*/
/*1*/
var siteHeader2 = document.getElementsByClassName("site-header-2")[0];
var shil2 = document.getElementsByClassName("shil-2");
var siteH = document.getElementsByClassName("site-h");

siteHeader2.onmouseover = function() {
	siteHeader2.style.height = "229px";
	siteHeader2.style.paddingTop = "30px";
}
siteHeader2.onmouseout = function() {
	siteHeader2.style.height = "0";
	siteHeader2.style.paddingTop = "0";
}
/*1*/
shil2[0].onmouseover = function() {
	siteHeader2.style.height = "229px";
	siteHeader2.style.paddingTop = "30px";
	siteH[0].style.display = "block";
}
siteH[0].onmouseover = function() {
	siteH[0].style.display = "block";
}
siteH[0].onmouseout = function() {
	siteH[0].style.display = "none";
}
shil2[0].onmouseout = function() {
	siteH[0].style.display = "none";
	siteHeader2.style.height = "0";
	siteHeader2.style.paddingTop = "0";
}
/*2*/
shil2[1].onmouseover = function() {
	siteHeader2.style.height = "229px";
	siteHeader2.style.paddingTop = "30px";
	siteH[1].style.display = "block";
}
siteH[1].onmouseover = function() {
	siteH[1].style.display = "block";
}
siteH[1].onmouseout = function() {
	siteH[1].style.display = "none";
}
shil2[1].onmouseout = function() {
	siteH[1].style.display = "none";
	siteHeader2.style.height = "0";
	siteHeader2.style.paddingTop = "0";
}
/*3*/
shil2[2].onmouseover = function() {
	siteHeader2.style.height = "229px";
	siteHeader2.style.paddingTop = "30px";
	siteH[2].style.display = "block";
}
siteH[2].onmouseover = function() {
	siteH[2].style.display = "block";
}
siteH[2].onmouseout = function() {
	siteH[2].style.display = "none";
}
shil2[2].onmouseout = function() {
	siteH[2].style.display = "none";
	siteHeader2.style.height = "0";
	siteHeader2.style.paddingTop = "0";
}
/*4*/
shil2[3].onmouseover = function() {
	siteHeader2.style.height = "229px";
	siteHeader2.style.paddingTop = "30px";
	siteH[3].style.display = "block";
}
siteH[3].onmouseover = function() {
	siteH[3].style.display = "block";
}
siteH[3].onmouseout = function() {
	siteH[3].style.display = "none";
}
shil2[3].onmouseout = function() {
	siteH[3].style.display = "none";
	siteHeader2.style.height = "0";
	siteHeader2.style.paddingTop = "0";
}
/*5*/
shil2[4].onmouseover = function() {
	siteHeader2.style.height = "229px";
	siteHeader2.style.paddingTop = "30px";
	siteH[4].style.display = "block";
}
siteH[4].onmouseover = function() {
	siteH[4].style.display = "block";
}
siteH[4].onmouseout = function() {
	siteH[4].style.display = "none";
}
shil2[4].onmouseout = function() {
	siteH[4].style.display = "none";
	siteHeader2.style.height = "0";
	siteHeader2.style.paddingTop = "0";
}
/*6*/
shil2[5].onmouseover = function() {
	siteHeader2.style.height = "229px";
	siteHeader2.style.paddingTop = "30px";
	siteH[5].style.display = "block";
}
siteH[5].onmouseover = function() {
	siteH[5].style.display = "block";
}
siteH[5].onmouseout = function() {
	siteH[5].style.display = "none";
}
shil2[5].onmouseout = function() {
	siteH[5].style.display = "none";
	siteHeader2.style.height = "0";
	siteHeader2.style.paddingTop = "0";
}
/*7*/
shil2[6].onmouseover = function() {
	siteHeader2.style.height = "229px";
	siteHeader2.style.paddingTop = "30px";
	siteH[6].style.display = "block";
}
siteH[6].onmouseover = function() {
	siteH[6].style.display = "block";
}
siteH[6].onmouseout = function() {
	siteH[6].style.display = "none";
}
shil2[6].onmouseout = function() {
	siteH[6].style.display = "none";
	siteHeader2.style.height = "0";
	siteHeader2.style.paddingTop = "0";
}
/*返回顶部*/
var returnToop = document.getElementsByClassName("turntop")[0];
document.onscroll = function() {
	var topJuLi = document.documentElement.scrollTop;
	if(topJuLi > 300) {
		returnToop.style.display = "block";
	} else {
		returnToop.style.display = "none";
	}
}

function truntoop() {
	var backTopTimer = setInterval(function() {
		var topH = document.documentElement.scrollTop || document.body.scrollTop;
		var backTopSpeed = Math.floor(-topH / 8);
		if(topH > 0) {
			document.documentElement.scrollTop = document.body.scrollTop = topH + backTopSpeed;
		} else {
			clearInterval(backTopTimer);
		}
	}, 10);
}
/*手机APP*/
var phoneAPP = document.getElementsByClassName("phoneAPP")[0];
var weixin = document.getElementsByClassName("weixin")[0];
phoneAPP.onmouseover = function() {
	weixin.style.display = "block";
}
phoneAPP.onmouseout = function() {
	weixin.style.display = "none";
}