export declare class ConsumerProductApi {
    private client;
    constructor({ authorization, product_master_account, baseURL, }: {
        authorization: string;
        product_master_account: number;
        baseURL: string;
    });
    createFeedback: (formData: any) => Promise<import("axios").AxiosResponse<any>>;
}
