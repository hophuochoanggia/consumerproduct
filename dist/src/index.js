"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumerProductApi = void 0;
const axios_1 = require("axios");
class ConsumerProductApi {
    constructor({ authorization, product_master_account, baseURL, }) {
        this.createFeedback = (formData) => {
            return this.client.post("/v1/feedback", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
        };
        if (!authorization) {
            throw "consumerproductapi_unauthorized";
        }
        if (!product_master_account) {
            throw "consumerproductapi_no_product_master_account";
        }
        this.client = axios_1.default.create({
            baseURL: `${baseURL}/api`,
            timeout: 15000,
            maxRedirects: 5,
            headers: {
                "Content-Type": "application/json",
                authorization,
            },
        });
    }
}
exports.ConsumerProductApi = ConsumerProductApi;
//# sourceMappingURL=index.js.map