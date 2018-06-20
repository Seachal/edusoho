<?php

namespace Biz\User;

use AppBundle\Common\Exception\AbstractException;

class UserException extends AbstractException
{
    const EXCEPTION_MODUAL = 01;

    const UN_LOGIN = 4040101;

    const LIMIT_LOGIN = 4030102;

    const FORBIDDEN_REGISTER = 4030103;

    const NOTFOUND_USER = 4040104;

    const ERROR_RESET_PASSWORD_EMAIL = 5000105;

    const FORBIDDEN_DISCUZ_USER_RESET_PASSWORD = 4030106;

    const FORBIDDEN_SEND_MESSAGE = 4030110;

    public $messages = array(
        4040101 => 'exception.user.unlogin',
        4030102 => 'exception.user.unlogin',
        4030103 => 'exception.user.register_error',
        4040104 => 'exception.user.not_found',
        5000105 => 'exception.user.reset_password_email_send',
        4030110 => 'exception.user.message_forbidden',
    );
}
