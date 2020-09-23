module.exports = {

    session: {
        errorCode: 401,
        failCondition: '!token',
        failAction: { type: 'SHOW_FORM', form: 'login', message: 'NOT AUTHENTICATED' },
    }

}