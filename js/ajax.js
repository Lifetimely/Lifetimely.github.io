function isPhone(phone) {
	var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
	if(!myreg.test(phone)) {
		return false;
	} else {
		return true;
	}

}

function isture() {
	var callphone = document.getElementById("Phone").value;
	if(isPhone(callphone)) {
		document.getElementById('vnumber').style.display = "block";
		document.getElementById('verification').style.display = "none";
	} else {
		alert("手机号格式不正确，请重新输入")
	}
}

var TurnToLogin = () => {
	document.getElementById('input2').style.display = "block";
	document.getElementById('input').style.display = "none";

}
var TurnToLogin1 = () => {
	document.getElementById('success').style.display = "block";
	document.getElementById('input2').style.display = "none";
}

function createCode() {
	code = "";
	var codeLength = 4; //验证码的长度    
	var checkCode = document.getElementById("code");
	var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
		'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数    
	for(var i = 0; i < codeLength; i++) { //循环操作    
		var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）    
		code += random[index]; //根据索引取得随机数加到code上    
	}
	alert(code);
	window.localStorage.setItem("ispass", code);
}

function isCease() {
	var rePhone = window.localStorage.getItem("ispass");
	var re = document.getElementById("sub").value;
	if(rePhone == re) {
		alert("验证码输入正确！");
	} else {
		alert("验证码输入错误！");
	}

}

function go() {
	window.location = "register.html"
}
var TurnToLogin3 = () => {
	document.getElementById('land').style.display = "block";
	document.getElementById('landing').style.display = "none";
}
var TurnToLogin4 = () => {
	document.getElementById('landing').style.display = "block";
	document.getElementById('land').style.display = "none";
}

