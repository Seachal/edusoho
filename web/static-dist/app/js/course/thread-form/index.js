webpackJsonp(["app/js/course/thread-form/index"],{ff55eaf239b7227fa842:function(t,e,a){"use strict";var r=$("#thread-form"),n=r.validate({rules:{"thread[title]":{required:!0,trim:!0},"thread[content]":{required:!0}}});$(".js-btn-thread-save").click(function(){$(".js-btn-thread-save").button("loading"),n.form()&&r.submit()});var o=CKEDITOR.replace("thread_content",{toolbar:"Thread",filebrowserImageUploadUrl:$("#thread_content").data("imageUploadUrl")});o.on("change",function(){$("#thread_content").val(o.getData())}),o.on("blur",function(){$("#thread_content").val(o.getData())})}},["ff55eaf239b7227fa842"]);