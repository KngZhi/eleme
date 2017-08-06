<<<<<<< HEAD
/**
 * Created by KZhi on 04/08/2017.
 */
// 获取所有标签的值并以 id 和 val 或 txt 作为键值对
function $tagsVal (tag, callback) {
	var res = {}
	$.each($(tag), function (index, val) {
		if (tag === 'input') {
			res[this.id] = this.value.trim()
		} else {
			res[this.id] = this.innerText.trim()
		}
//          que: 为什么 {this.id : this.name}
	})
	return callback ? callback(res) : res;
}

function setValToSession (key, val) {
	if (typeof val !== 'string') {
		var res = JSON.stringify(val)
	}
	localStorage.setItem(key, res)
}

// Revised, cooler.
function getParamByName(name) {

	var match = RegExp('[?&]' + name + '=([^&]*)')
		.exec(window.location.search);

	return match ?
		decodeURIComponent(match[1].replace(/\+/g, ' '))
		: null;

}

function autoFillAdd (time) {
	var add = localStorage.getItem('add'+time)
	console.log(add)
	if(add) {
		var specAdd = JSON.parse(add)
		$('#addName').val(specAdd.name)
		$('#address').val(specAdd.address)
	}
}

// 给所有的 hd-left 添加回退的标签
(function () {
	var backBtn = document.getElementsByClassName('hd-left')[0]
	backBtn.onclick = function () {
		window.history.back()
	}
})()
=======
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
	console.log(222);
	window.history.back();  
}
>>>>>>> 993d9bfa026ac0c9018da52632319b899efa10e2
