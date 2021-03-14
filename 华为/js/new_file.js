/*白色导航条*/
var whiteContain = document.getElementById("white-contain");
var whiteContainCenter = document.getElementById("white-contain-center");
document.onscroll = function() {
	var topJuLi = document.documentElement.scrollTop;
	if(topJuLi > 0) {
		whiteContainCenter.style.top = 0 + "px";
	}
};
/*黑色*/
//取消black-curtain
var blackCurtain = document.getElementsByClassName("black-curtain")[0];


		//一
		var blackC1X = document.getElementById("black-c-1-x");
		var blackC1 = document.getElementById("black-c-1");
		var imgImg1 = document.getElementById("img-img1");
		blackC1X.onmousemove = function() {
			blackC1.style.opacity = 0.3;
			blackC1X.style.bottom = "10px";
			imgImg1.style.transform = "scale(1.1)";
			imgImg1.style.transition = "1s";
			blackC1X.style.transition = "1s";
		};
		blackC1X.onmouseout = function() {
			blackC1.style.opacity = 0;
			blackC1X.style.bottom = "-30px";
			blackC1X.style.transition = "1s";
			imgImg1.style.transform = "scale(1)";
		};
		blackC1.onmousemove = function() {
			blackC1.style.opacity = 0.3;
			blackC1X.style.bottom = "10px";
			imgImg1.style.transform = "scale(1.1)";
			imgImg1.style.transition = "1s";
			blackC1X.style.transition = "1s";
		};
		blackC1.onmouseout = function() {
			blackC1.style.opacity = 0;
			blackC1X.style.bottom = "-30px";
			blackC1X.style.transition = "1s";
			imgImg1.style.transform = "scale(1)";
		};
		//二
		var blackC2X = document.getElementById("black-c-2-x");
		var blackC2 = document.getElementById("black-c-2");
		var imgImg2 = document.getElementById("img-img2");
		blackC2X.onmousemove = function() {
			blackC2.style.opacity = 0.3;
			blackC2X.style.bottom = "10px";
			imgImg2.style.transform = "scale(1.1)";
			imgImg2.style.transition = "1s";
			blackC2X.style.transition = "1s";
		};
		blackC2X.onmouseout = function() {
			blackC2.style.opacity = 0;
			blackC2X.style.bottom = "-30px";
			blackC2X.style.transition = "1s";
			imgImg2.style.transform = "scale(1)";
		};
		blackC2.onmousemove = function() {
			blackC2.style.opacity = 0.3;
			blackC2X.style.bottom = "10px";
			blackC2X.style.transition = "1s";
			imgImg2.style.transform = "scale(1.1)";
			imgImg2.style.transition = "1s";
		};
		blackC2.onmouseout = function() {
			blackC2.style.opacity = 0;
			blackC2X.style.bottom = "-30px";
			blackC2X.style.transition = "1s";
			imgImg2.style.transform = "scale(1)";
		};
		//三
		var blackC3X = document.getElementById("black-c-3-x");
		var blackC3 = document.getElementById("black-c-3");
		var imgImg3 = document.getElementById("img-img3");
		blackC3X.onmousemove = function() {
			blackC3.style.opacity = 0.3;
			blackC3X.style.bottom = "10px";
			imgImg3.style.transform = "scale(1.1)";
			imgImg3.style.transition = "1s";
			blackC3X.style.transition = "1s";
		};
		blackC3X.onmouseout = function() {
			blackC3.style.opacity = 0;
			blackC3X.style.bottom = "-30px";
			blackC3X.style.transition = "1s";
			imgImg3.style.transform = "scale(1)";
		};
		blackC3.onmousemove = function() {
			blackC3.style.opacity = 0.3;
			blackC3X.style.bottom = "10px";
			blackC3X.style.transition = "1s";
			imgImg3.style.transform = "scale(1.1)";
			imgImg3.style.transition = "1s";
		};
		blackC3.onmouseout = function() {
			blackC3.style.opacity = 0;
			blackC3X.style.bottom = "-30px";
			blackC3X.style.transition = "1s";
			imgImg3.style.transform = "scale(1)";
		};
		//四
		var blackC4X = document.getElementById("black-c-4-x");
		var blackC4 = document.getElementById("black-c-4");
		var imgImg4 = document.getElementById("img-img4");
		blackC4X.onmousemove = function() {
			var w = document.body.offsetWidth;
			if(w > 992) {
				blackC4.style.opacity = 0.3;
				blackC4X.style.bottom = "10px";
				imgImg4.style.transform = "scale(1.1)";
				imgImg4.style.transition = "1s";
				blackC4X.style.transition = "1s";
			}
		};
		blackC4X.onmouseout = function() {
			blackC4.style.opacity = 0;
			blackC4X.style.bottom = "-30px";
			blackC4X.style.transition = "1s";
			imgImg4.style.transform = "scale(1)";
		};
		blackC4.onmousemove = function() {
			blackC4.style.opacity = 0.3;
			blackC4X.style.bottom = "10px";
			blackC4X.style.transition = "1s";
			imgImg4.style.transform = "scale(1.1)";
			imgImg4.style.transition = "1s";
		};
		blackC4.onmouseout = function() {
			blackC4.style.opacity = 0;
			blackC4X.style.bottom = "-30px";
			blackC4X.style.transition = "1s";
			imgImg4.style.transform = "scale(1)";
		};
		//五
		var blackC5X = document.getElementById("black-c-5-x");
		var blackC5 = document.getElementById("black-c-5");
		var imgImg5 = document.getElementById("img-img5");
		blackC5X.onmousemove = function() {
			blackC5.style.opacity = 0.3;
			blackC5X.style.bottom = "10px";
			imgImg5.style.transform = "scale(1.1)";
			imgImg5.style.transition = "1s";
			blackC5X.style.transition = "1s";
		};
		blackC5X.onmouseout = function() {
			blackC5.style.opacity = 0;
			blackC5X.style.bottom = "-30px";
			blackC5X.style.transition = "1s";
			imgImg5.style.transform = "scale(1)";
		};
		blackC5.onmousemove = function() {
			blackC5.style.opacity = 0.3;
			blackC5X.style.bottom = "10px";
			blackC5X.style.transition = "1s";
			imgImg5.style.transform = "scale(1.1)";
			imgImg5.style.transition = "1s";
		};
		blackC5.onmouseout = function() {
			blackC5.style.opacity = 0;
			blackC5X.style.bottom = "-30px";
			blackC5X.style.transition = "1s";
			imgImg5.style.transform = "scale(1)";
		};
		//六
		var blackC6X = document.getElementById("black-c-6-x");
		var blackC6 = document.getElementById("black-c-6");
		var imgImg6 = document.getElementById("img-img6");
		blackC6X.onmousemove = function() {
			blackC6.style.opacity = 0.3;
			blackC6X.style.bottom = "10px";
			imgImg6.style.transform = "scale(1.1)";
			imgImg6.style.transition = "1s";
			blackC6X.style.transition = "1s";
		};
		blackC6X.onmouseout = function() {
			blackC6.style.opacity = 0;
			blackC6X.style.bottom = "-30px";
			blackC6X.style.transition = "1s";
			imgImg6.style.transform = "scale(1)";
		};
		blackC6.onmousemove = function() {
			blackC6.style.opacity = 0.3;
			blackC6X.style.bottom = "10px";
			blackC6X.style.transition = "1s";
			imgImg6.style.transform = "scale(1.1)";
			imgImg6.style.transition = "1s";
		};
		blackC6.onmouseout = function() {
			blackC6.style.opacity = 0;
			blackC6X.style.bottom = "-30px";
			blackC6X.style.transition = "1s";
			imgImg6.style.transform = "scale(1)";
		};
		//七
		var blackC7X = document.getElementById("black-c-7-x");
		var blackC7 = document.getElementById("black-c-7");
		var imgImg7 = document.getElementById("img-img7");
		blackC7X.onmousemove = function() {
			var w = document.body.offsetWidth;

			blackC7.style.opacity = 0.3;
			blackC7X.style.bottom = "10px";
			imgImg7.style.transform = "scale(1.1)";
			imgImg7.style.transition = "1s";
			blackC7X.style.transition = "1s";

		};
		blackC7X.onmouseout = function() {
			blackC7.style.opacity = 0;
			blackC7X.style.bottom = "-30px";
			blackC7X.style.transition = "1s";
			imgImg7.style.transform = "scale(1)";
		};
		blackC7.onmousemove = function() {
			blackC7.style.opacity = 0.3;
			blackC7X.style.bottom = "10px";
			blackC7X.style.transition = "1s";
			imgImg7.style.transform = "scale(1.1)";
			imgImg7.style.transition = "1s";
		};
		blackC7.onmouseout = function() {
			blackC7.style.opacity = 0;
			blackC7X.style.bottom = "-30px";
			blackC7X.style.transition = "1s";
			imgImg7.style.transform = "scale(1)";
		};


/*客服*/
var customerService = document.getElementById("customerService");

var clickCustomerService = document.getElementById("clickCustomerService");
var sanChu = document.getElementById("sanChu");
customerService.onclick = function() {
	clickCustomerService.style.display = "block";
};
sanChu.onclick = function() {
	clickCustomerService.style.display = "none";
};

/*返回顶部*/
var returnToop = document.getElementById("returnToop");
document.onscroll = function() {
	var topJuLi = document.documentElement.scrollTop;
	if(topJuLi > 300) {
		returnToop.style.display = "block";
	} else {
		returnToop.style.display = "none";
	}
};

/*黑色导航条*/
//获取active-one
var Active = document.getElementById("active-one");
//获取active-two和h3
var Active2 = document.getElementById("active-two");
var ActiveBH3 = document.getElementById("T-B-H3");
var groupWebsite = document.getElementById("groupWebsite");
var choiceLanguage = document.getElementById("choiceLanguage");
var Login = document.getElementById("Login");

groupWebsite.onclick = function() {
	toggleClass(groupWebsite, "gongyong2");
	toggleClass(Active, "gongyong1");
	toggleClass(groupWebsite, "gongyong5");
	removeClass(choiceLanguage, "gongyong5");

	removeClass(choiceLanguage, "gongyong2")
	removeClass(Active2, "gongyong3");
	removeClass(ActiveBH3, "gongyong4");

};
choiceLanguage.onclick = function() {

	toggleClass(choiceLanguage, "gongyong2")
	toggleClass(Active2, "gongyong3");
	toggleClass(ActiveBH3, "gongyong4");
	toggleClass(choiceLanguage, "gongyong5");
	removeClass(groupWebsite, "gongyong5");

	removeClass(groupWebsite, "gongyong2");
	removeClass(Active, "gongyong1");
};
var wangYeK = document.body.clientWidth;

/*----------------------------------*/
/*首页*/
var inutpWeichu = document.getElementById("inutp-weichu");
var homePageCollectionBC = document.getElementById("homePage-Collection-B-C");
var inputDelete = document.getElementById("input-delete");
var homePageCollectionBH = document.getElementById("homePage-Collection-B-H");

inutpWeichu.onclick = function() {
	homePageCollectionBC.style.display = "block";
	inutpWeichu.style.display = "none";
};

inputDelete.onclick = function() {
	homePageCollectionBC.style.display = "none";
	inutpWeichu.style.display = "block";
};

/*---------------------------------*/

//获取点击的a标签
var aAll = document.getElementsByClassName("move-float");
var moveCotian = document.getElementById("first-three-picture");
var index = 0;
aAll[index].style.backgroundColor = "white";
for(var i = 0; i < aAll.length; i++) {
	//获取点击超链接的索引
	//为每一个超链接添加标签
	aAll[i].num = i;
	aAll[i].onclick = function() {
		//获取点击超链接的索引,并将其设置为index
		index = this.num;

		moveCotian.style.left = index * (-100) + "%";
		//设置选种a
		setA2();

	};
}

//自动切换
autoChange2();

function setA2() {

	//遍历所有的a并设置背景颜色
	for(var i = 0; i < allA.length; i++) {
		aAll[i].style.backgroundColor = "";
	}
	//为选中的a设置颜色
	aAll[index].style.backgroundColor = "white";
};

//创建一个函数来自动切换图片
function autoChange2() {
	//开启一个定时器
	setInterval(function() {
		//使索引自增
		index++;
		if(index >= aAll.length) {
			index = 0;
		}
		//执行动画
		moveCotian.style.left = index * (-100) + "%";
		for(var i = 0; i < aAll.length; i++) {
			aAll[i].style.backgroundColor = "";
			//为选中的a设置颜色
			aAll[index].style.backgroundColor = "";
		}

	}, 5000);
}
var menuH31 = document.querySelectorAll(".menuH31");
var xuanza=document.querySelectorAll(".xuanza");
var kK1 = document.getElementById("kK1");
var kK2 = document.getElementById("kK2");
var kkk1=document.getElementById("kkk1");

for(var i = 0; i < menuH31.length; i++) {
	menuH31[i].onclick = function() {
		toggleClass(kK1, "collapsed");
		toggleClass(kK2, "collapsed");
		toggleClass(xuanza, "xuanz1");
		
	};
}

var menuH32 = document.querySelectorAll(".menuH32");
var kK3 = document.getElementById("kK3");
for(var i = 0; i < menuH32.length; i++) {
	menuH32[i].onclick = function() {
		toggleClass(kK3, "collapsed");

	};
}

var menuH33 = document.querySelectorAll(".menuH33");
var kK4 = document.getElementById("kK4");
for(var i = 0; i < menuH33.length; i++) {
	menuH33[i].onclick = function() {
		toggleClass(kK4, "collapsed");

	};
}

var menuH34 = document.querySelectorAll(".menuH34");
var kK5 = document.getElementById("kK5");
for(var i = 0; i < menuH34.length; i++) {
	menuH34[i].onclick = function() {
		toggleClass(kK5, "collapsed");

	};
}

var menuH35 = document.querySelectorAll(".menuH35");
var kK6 = document.getElementById("kK6");
for(var i = 0; i < menuH35.length; i++) {
	menuH35[i].onclick = function() {
		toggleClass(kK6, "collapsed");

	};
}