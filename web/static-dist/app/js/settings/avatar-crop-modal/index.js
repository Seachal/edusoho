webpackJsonp(["app/js/settings/avatar-crop-modal/index"],{0:function(a,t){a.exports=jQuery},ad2b3413e41e07a46845:function(a,t,e){"use strict";function r(a){return a&&a.__esModule?a:{default:a}}function n(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function a(a,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}return function(t,e,r){return e&&a(t.prototype,e),r&&a(t,r),t}}(),i=e("12695715cd021610570e"),s=r(i),u=e("b334fd7e4c5a19234db2"),c=r(u);new(function(){function a(t){n(this,a),this.element=t.element,this.avatarCrop=t.avatarCrop,this.saveBtn=t.saveBtn,this.init()}return o(a,[{key:"init",value:function(){var a=this.imageCrop();this.initEvent(a)}},{key:"initEvent",value:function(a){$(this.saveBtn).on("click",function(t){t.stopPropagation();var e=$(t.currentTarget);a.crop({imgs:{large:[200,200],medium:[120,120],small:[48,48]}}),e.button("loading")})}},{key:"imageCrop",value:function(){var a=this,t=new s.default({element:this.avatarCrop,cropedWidth:200,cropedHeight:200});return t.afterCrop=function(t){var e=$(a.saveBtn),r=e.data("url");$.post(r,{images:t},function(a){"success"===a.status?($("#profile_avatar").val(a.avatar),$("#user-profile-form img").attr("src",a.avatar),$("#profile_avatar").blur(),$("#modal").modal("hide"),(0,c.default)("success",Translator.trans("上传成功"))):((0,c.default)("danger",Translator.trans("上传失败,请重试")),e.button("reset"))})},t}}]),a}())({element:"#avatar-crop-form",avatarCrop:"#avatar-crop",saveBtn:"#upload-avatar-btn"})}},["ad2b3413e41e07a46845"]);