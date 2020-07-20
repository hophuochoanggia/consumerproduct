import { IFeedback } from "./interface";
export declare class ConsumerProductApi {
    private client;
    constructor({ authorization, product_master_account, baseURL, timeout, }: {
        authorization: string;
        product_master_account: number;
        baseURL: string;
        timeout: number;
    });
    createFeedback: ({ photos, ...payload }: IFeedback) => Promise<import("axios").AxiosResponse<any>>;
}
