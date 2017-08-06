
//根字号初始化
initSize();
function initSize(){
	var  screenW = document.documentElement.clientWidth || document.body.clientWidth;
	var oHtml = document.getElementsByTagName('html')[0]
	var size = 100 * screenW / 640 + 'px'
	oHtml.style.fontSize = size;
}

//点击返回页面事件
function returnPages(){
	window.history.back();  
}
