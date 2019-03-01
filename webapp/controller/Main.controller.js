sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
], function (Controller,MessageToast) {
	"use strict";

	return Controller.extend("com.fio.captcha.ZFIO_CAPTCHA.controller.Main", {
		onInit: function () {

		},
		onAfterRendering:function(){
             var tht= this;
            setTimeout(function(){
				 tht.createCaptcha();
            },2000);
		 	
		},
		 createCaptcha:function(){
			  var charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!$&";
			  var lengthOtp = 6;
			  var captcha = [];
			  for (var i = 0; i < lengthOtp; i++) {
			    var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
			    if (captcha.indexOf(charsArray[index]) == -1)
			      captcha.push(charsArray[index]);
			    else i--;
			  }
		 
			  try {
			 
				var canvas = document.getElementById("myCanvas");
				canvas.width = 150;
				canvas.height = 50;
				var ctx = canvas.getContext("2d");
				ctx.font = "25px Georgia";
				ctx.strokeText(captcha.join(""), 0, 30);
				this.code = captcha.join("");

			  } catch (err) {
			  }
		 },
		 	onSearch: function() {
			if(this.code === this.getView().byId("captchaInpt").getValue() ){
					MessageToast.show(' İşlem Başarılı.');
			}else{
					this.codeCount = this.codeCount + 1;
					MessageToast.show(' Güvenlik Kodu doğrulaması hatalı kontrol ederek tekrar deneyiniz.');
					if(this.codeCount>2)
						this.createCaptcha();
			} 
		}
	});
});