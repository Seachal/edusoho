webpackJsonp(["app/js/settings/setup/index"],{0:function(e,t){e.exports=jQuery},"9c2d1572c2ca385dc301":function(e,t,n){"use strict";var a=n("b334fd7e4c5a19234db2"),r=function(e){return e&&e.__esModule?e:{default:e}}(a),i=$("#setup-form"),c=$(".js-submit-setup-form");if(i.length){var o=i.validate({email:{required:!0,es_email:!0,es_remote:{type:"POST"}},nickname:{required:!0,minlength:4,maxlength:18,nickname:!0,chinese_alphanumeric:!0,es_remote:{type:"get"}}});c.click(function(){o.form()&&(c.button("loadding"),$.post(i.attr("action"),i.serialize(),function(){(0,r.default)("success",Translator.trans("设置帐号成功，正在跳转")),window.location.href=c.data("goto")}).error(function(){c.button("reset"),(0,r.default)("danger",Translator.trans("设置帐号失败，请重试"))}))})}}},["9c2d1572c2ca385dc301"]);