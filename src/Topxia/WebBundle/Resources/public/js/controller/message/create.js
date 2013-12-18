define(function(require, exports, module) {

    var Validator = require('bootstrap.validator');
    require('common/validator-rules').inject(Validator);

    var Notify = require('common/bootstrap-notify');

    exports.run = function() {

        var validator = new Validator({
            element: '#message-create-form'
        });

        validator.addItem({
            element: '[name="message[receiver]"]',
            required: true,
            rule: 'remote'
        });

        validator.addItem({
            element: '[name="message[content]"]',
            required: true,
            rule: 'maxlength{max:500}',
            errormessageMaxlength: '想要说的话不能大于500个字'
        });

        $('#message-create-btn').on('click','',function(){
            var $self = $(this);
            $self.addClass('disabled');
        });


    };

});