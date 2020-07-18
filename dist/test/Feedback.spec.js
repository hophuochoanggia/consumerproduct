"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const util_1 = require("./util");
describe("Feedback", () => {
    let client;
    beforeAll(() => {
        client = new index_1.default({
            baseURL: util_1.baseURL,
            authorization: util_1.CRM_TOKEN,
            product_master_account: util_1.product_master_account,
        });
    });
    describe("Feedback", () => {
        it("should create feedback", async () => {
            try {
                const formData = new FormData();
                formData.append("rating", "5");
                formData.append("feedback_like", "Test");
                formData.append("feedback_improve", "test");
                formData.append("device", "125");
                formData.append("product_master_account", "5");
                const base64 = "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
                const buffer = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
                const blob = new Blob([buffer], { type: "image/gif" });
                formData.append("photos", blob);
                const result = await client.createFeedback(formData);
                expect(result.status).toBe(201);
            }
            catch (err) {
                console.log(err.request.headers);
            }
        }, 30000);
    });
});
//# sourceMappingURL=Feedback.spec.js.map