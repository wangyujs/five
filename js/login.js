// "use strict";$("#lt-log #img2").hover(function(){$("#lt-log #img2 img").eq(0).css("marginRight",20),$(this).animate({width:"340px"},500,"linear"),$("#lt-log #img2 .img2").animate({width:160},500,"linear")},function(){$(this).animate({width:180},500,"linear"),$("#lt-log #img2 .img2").animate({width:0},500,"linear",function(){$("#lt-log #img2 img").eq(0).css("marginRight",0)})}),$(".log-nav").each(function(){$(this).click(function(){$(".log-nav").each(function(){$(this).css({color:"#ccc"}),$(".logdiv").eq($(this).index()).css("display","none")}),$(this).css({color:"#000"}),$(".logdiv").eq($(this).index()).css("display","block")})});var on=!0;$(".log-btn").click(function(){(on=!on)?$(this).attr("src","img/is_yesmin.png"):$(this).attr("src","img/is_yes_bgmin.png")}),$(".log").click(function(){var i=$(".phone").val(),n=$(".pwd").val();if(i&&n){var e=$.cookie("user")?$.parseJSON($.cookie("user")):{};i in e?n==e[i]?(alert("登陆成功"),$.cookie("userlog",encodeURIComponent(i)),on&&($.cookie("uname",encodeURIComponent(i),{path:"/",expires:7}),$.cookie("upwd",encodeURIComponent(n),{path:"/",expires:7})),location.href="index.html"):alert("密码错误"):alert("用户名不存在")}else alert("用户名或密码不能为空")});

//图片翻转   二维码    手机
$('#lt-log #img2').hover(function(){
	$('#lt-log #img2 img').eq(0).css('marginRight',20);
	$(this).animate({width:'340px'},500,'linear');				
	$('#lt-log #img2 .img2').animate({width:160},500,'linear');					
},function(){					
	$(this).animate({width:180},500,'linear');					
	$('#lt-log #img2 .img2').animate({width:0},500,'linear',function(){
		$('#lt-log #img2 img').eq(0).css('marginRight',0);
	});	
})
//页面切换
$('.log-nav').each(function(){
	$(this).click(function(){
		$('.log-nav').each(function(){
			$(this).css({color:'#ccc'});
			$('.logdiv').eq($(this).index()).css('display','none');
		})
		$(this).css({color:'#000'});
		$('.logdiv').eq($(this).index()).css('display','block');					
	})
})
//是否自动登录
var on = true;
$('.log-btn').click(function(){
	on = !on;
	if(on){
		$(this).attr('src','img/is_yesmin.png')
	}else{
		$(this).attr('src','img/is_yes_bgmin.png')
	}
});
//登录
$('.log').click(function(){
	var uname = $('.phone').val();
	var upwd = $('.pwd').val();
	if(!uname || !upwd){
		alert('用户名或密码不能为空');return
	}
	let obj = {
		uname : uname,
		upwd : upwd
	}
	$.post('/user/login',obj,(data)=>{
		alert(data.font);
		if(data.url){
			$.cookie('userlog',encodeURIComponent(data.user.uname));
			if(on){  //自动登录记住密码
				$.cookie('uname',encodeURIComponent(data.user.uname),{path:'/',expires:7});
				$.cookie('upwd',encodeURIComponent(data.user.upwd),{path:'/',expires:7});
			}
			location.href = data.url;
		}
	})
	return false;
})
