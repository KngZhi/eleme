/**
 * Created by KZhi on 06/08/2017.
 */
$(function () {
	var $aside = $('.aside')
	var $wrap = $('.wrap')
	var $tabBar = $('.tab_bar')
	var $header = $('.kfc_header')
	var wrapScroll, sideScroll
	var $minus = $('<i class="icon-cal icon-minus">-</i>')
	var $plus = $('.icon-plus')
	// var $num = $('<span class="cal-num">0</span>')
	$.ajax({
		type: 'get',
		url: './data/shop-goods.json',
		async: true,
		dataType: 'json',
		success: function (data) {
			// 字符串拼接成卡片
			var num = 0
			var $count = $('<i class="icon-count icon-side">0</i>')
			$.each(data, function (index) {
				num++
				var $asideNum = $('<i class="icon-count icon-side">0</i>')
				var $menu = $('<li><span>' + data[index].typeName + '</span></li>')

				// 将数量标记加入到 aside 列表
				$menu.append($asideNum)
				$aside.append($menu)
				var $item = $('<div class="item"></div>')
				var $title = $('<h3 class="title" index="'+index+'"><span>' + data[index].typeName + '</span>' + data[index].typeDes + '</h3>')
				$item.append($title)
				var goodsArr = data[index].goods
				$.each(goodsArr, function (index) {
					var $card = $('<div class="card"></div>')
					var $thisImg = $('<div class="imgs"><img src="' + goodsArr[index].img_url + '"/></div>')
					var $content = $('<div class="content"><h3 class="shopname">' + goodsArr[index].name + '</h3><p class="over">' + goodsArr[index].des + '</p><p><span class="sale">月售<i class="saleCount">' + goodsArr[index].num + '</i>份</span><span class="grade">　好评率<i>100%</i></span></p><p>¥<i>' + goodsArr[index].price + '</i></p></div>')
					var $car = $('<div class="cal-box"><span class="icon-minus icon-cal">-</span><span class="cal-num">0</span><span class="icon-cal icon-plus">+</span></div>')

					$card.append($thisImg)
					$card.append($content)
					$card.append($car)
					$item.append($card)
				})
				$wrap.append($item)
			})

			var totalPrice = 0
			// var session = 0;
			$('.icon-plus').on('tap', function () {
				var $numItem = $(this).siblings('.cal-num')
				var itemNum = parseInt($numItem.text())
				++itemNum
				$numItem.text(itemNum)
				$(this).siblings('.icon-minus').css('visibility', 'visible')
				$numItem.css('visibility', 'visible');

				// var itemTotal = calItemPrice($(this)) * itemNum
				totalPrice += parseInt(calItemPrice($(this)));

				$('.carriage').text('总价：¥' + totalPrice)

				findCurSlide($(this), function ($res) {
					var $numBox = $res.find('.icon-side')
					var num = $numBox.text()
					num++
					$numBox.css('visibility', 'visible')
					$numBox.text(num)
				})
				calcAll()
			})
			$('.icon-minus').tap(function () {
				var $calNum = $(this).siblings('.cal-num')
				var account = $calNum.text()
				account --;
				console.log(account)
				if (account <= 0) {
					$calNum.css('visibility', 'hidden');
					$(this).css('visibility', 'hidden');
				}
				$calNum.text(account)

				totalPrice -= parseInt(calItemPrice($(this)))
				$('.carriage').html('总价：¥&nbsp;'+  + totalPrice)


				findCurSlide($(this), function ($res) {
						var $numBox = $res.find('.icon-side')
						var num = $numBox.text()
						num--;
						if (num <= 0) {
							$numBox.css('visibility', 'hidden')
						}
					  $numBox.text(num)
				})
				calcAll()

			})

			function findCurSlide ($ele, callback) {
				var $title = $ele.parents('.item').find('.title')
				var $index = $title.attr('index')
				var $slide = $('.aside li').eq($index)
				return callback($slide);
			}

			function calcAll () {
				var $total = $('.count')
				var temp = 0;
				$('.icon-side').each(function (index, val) {
					var curNum = parseInt($(this).text())
					temp += curNum
				})
				if (temp <= 0) {
					$total.css('visibility', 'hidden')
				} else {
					$total.css('visibility', 'visible')
				}
				$total.text(temp)
			}

			function calItemPrice ($this) {
				var price = $this.parents('.card').find('.content i').eq(2).text()
				return price;
			}
		},

		complete: function () {
			$(window).scroll(function () {
				var dis = $getEleDistance($header, $tabBar)
				if (dis <= 0) {
					document.body.style.overflow = 'hidden'
				}
				$('.wrap').scroll(function () {
				})
			})

			wrapScroll = new IScroll('#container')
			sideScroll = new IScroll('#aside')
			$('.aside li').on('tap', function (e) {
				$(this).attr('class', 'asideOn').siblings().removeClass('asideOn')
				var curIndex = $(this).index()
				var $asideTitle = $wrap.find('h3.title').eq(curIndex)
				$getEleDistance($tabBar, $asideTitle)
				wrapScroll.scrollToElement($asideTitle[0], 500)
			})
		}
	})

	function $getEleDistance ($eleOne, $eleTwo) {
		var distance = null
		return distance = $eleTwo.offset().top - $eleOne.offset().top - $eleOne.height()
	}
})



