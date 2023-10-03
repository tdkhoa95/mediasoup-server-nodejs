class ResponseBaseModel<T> {
    isSuccess?: boolean;
    code?: number;
    data?: T;
    message?: string;
}

export default ResponseBaseModel;
