"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class ConsumerProductApi {
    constructor({ authorization, product_master_account, baseURL, }) {
        this.createFeedback = (_a) => {
            var { photos } = _a, payload = __rest(_a, ["photos"]);
            const formData = new FormData();
            Object.keys(payload).map((key) => {
                formData.append(key, payload[key]);
            });
            photos.map((photo) => {
                formData.append("photos", photo);
            });
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