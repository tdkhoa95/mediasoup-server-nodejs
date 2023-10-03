const HttpSatusCode = {
    // Client side code
    httpCodeBadRequest: 400,
    httpCodeUnauthorized: 401,
    httpCodeNotFound: 404,
    httpCodeForbidden: 403,
    // Server side code
    httpCodeSeverError: 500,
    httpCodeDbError: 502,
    httpCodeAuthError: 503,
    // success code
    httpCodeSucceed: 200
};

export default httpSatusCode;