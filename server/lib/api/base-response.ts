import { Response } from 'express';

import ResponseBaseModel from './models/response-base-model';
import HttpSatusCode from './http-status-code';

const BaseResponse = {
    // Send error response
    errorResponse(res: Response, code: number, message?: string) {
        const _res = new ResponseBaseModel();
        _res.code = code;
        if (message) _res.message = message;

        return res.status(_res.code).json(_res);
    },

    // Send success response
    successResponse<T>(res: Response, data: T) {
        const _res = new ResponseBaseModel<T>();
        _res.code = HttpSatusCode.httpCodeSucceed;
        _res.data = data;

        return res.status(_res.code).json(_res);
    },

    /**
     * This function returns a response object with a status code of 200 and a message of 'Success' if
     * the response object is passed in as a parameter.
     * @param {Response} res - Response - this is the response object that is passed to the function
     * @param {string} msg - The message you want to send back to the client
     * @returns A response object with a status code of 200 and a message of "Success"
     */
    successWithMessageReponse(res: Response, msg: string) {
        const _res = new ResponseBaseModel();
        _res.code = HttpSatusCode.httpCodeSucceed;
        _res.message = msg;

        return res.status(_res.code).json(_res);
    }
};

export default BaseResponse;
