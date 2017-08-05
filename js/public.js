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
