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

function searchSession(name) {
	var len = localStorage.length,
        i =0,
        orgList = []
    for (i; i< len; i++) {
        orgList.push(localStorage.key(i))
    }
    var tarList = orgList.filter(function (ele) {
    	// 如果 Key ^ 是name 则返回它的键值
          if (ele.indexOf(name) === 0) {
              return ele
          }
        })
    console.log(tarList)
    return tarList;
}