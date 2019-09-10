//手机号验证
$('.phone').blur(function(){
	var re1 = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;//手机号正则验证
	if(re1.test($(this).val())){
		$(this).css('borderColor','#ccc');
		$('.tishi1').css('display','none');
	}else{
		$(this).focus().css('borderColor','red');
		$('.tishi1').css('display','block');
	}
})
//验证码   计时器
$('.validnum-btn').click(function(){
	$('.phone').css('borderColor','#ccc');
	var i = 10;
	if($(this).text() == '获取验证码'){
		// var b = random();
		// alert('验证码是:' + b);
		var timer = setInterval(()=>{
			if(i >= 0){
				$(this).text(`${i}s后重新获取`);
			}else{
				clearInterval(timer);
				$(this).text(`获取验证码`);
			}
			i --;
		},1000)
	}
	//失焦  验证码验证
	$('.validnum').blur(function(){
		if($('.validnum').val() != b){
			alert('验证码不正确');
			$('.validnum').val('');
		}
	})
})
//随机验证码
function random(){
	var str = 'abcdefghigklmnopqrstuvwsyz1234567890';
	var len = str.length;
	var newStr = '';
	for(var j = 0;j < 6;j ++){
		var i = Math.floor(Math.random()*len);
		newStr += str.charAt(i);
	}
	return newStr;
}
//确认密码
$('.pwd2').blur(function(){
	if($(this).val() != $('.pwd').val()){
		$(this).focus().css('borderColor','red');
		$('.tishi2').css('display','block');
		$(this).val('');
	}else{
		$(this).css('borderColor','#ccc');
		$('.tishi2').css('display','none');
	}
})
//选中协议
var on = true;
$('.reg-btn').click(function(){
	on = !on;
	if(on){
		$(this).attr('src','img/is_yesmin.png')
	}else{
		$(this).attr('src','img/is_yes_bgmin.png')
	}
});
//注册
$('.reg').click(function(){
	var uname = $('.phone').val();  //用户名
	var upwd = $('.pwd').val();   //密码
	var upwd2 = $('.pwd2').val();  //确认密码
	var validnum = $('.validnum').val();  //验证码
	if(!uname || !upwd){
		alert('用户名或密码不能为空');
		return;
	}
	if(!validnum){
		alert('请输入验证码');return;
	}
	if(!upwd2){
		alert('请确认密码');return;
	}
	if(!on){
		alert('请阅读协议');return;
	}
	let obj = {
		uname : uname,
		upwd : upwd
	}
	$.post('/user/reg',obj,(data)=>{
		alert(data.font);
		location.href = data.url;
	})
	return false;
})

