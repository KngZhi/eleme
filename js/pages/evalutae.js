$(function(){
	//点击笑脸
	$('.img-box').on('tap click','i',function(){
		if(!$(this).hasClass('on')){
			$(this).addClass('on').siblings('i').removeClass('on');
		}
	})
	//点击标签框
	$('.mark-box').on('tap click','a',function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
		}else{
			$(this).addClass('on');
		}
	})
	//点击提交按钮
	$('#submitBtn').click(function(){
		alert('恭喜你评论成功，获得270积分');
		window.location.href='order.html';
	})
})
