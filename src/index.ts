import axios, { AxiosInstance } from "axios";
import { IFeedback } from "./interface";

export class ConsumerProductApi {
  private client: AxiosInstance;

  constructor({
    authorization,
    product_master_account,
    baseURL,
    timeout = 30000,
  }: {
    authorization: string;
    product_master_account: number;
    baseURL: string;
    timeout: number;
  }) {
    if (!authorization) {
      throw "consumerproductapi_unauthorized";
    }
    if (!product_master_account) {
      throw "consumerproductapi_no_product_master_account";
    }
    this.client = axios.create({
      baseURL: `${baseURL}/api`,
      timeout,
      maxRedirects: 5,
      headers: {
        "Content-Type": "application/json",
        authorization,
      },
    });
  }

  // getFeedback = () => {
  //   return this.client.get("/v1/feedback");
  // };

  createFeedback = ({ photos, ...payload }: IFeedback) => {
    const formData = new FormData();
    Object.keys(payload).map((key) => {
      formData.append(key, payload[key]);
    });
    photos.map((photo: any) => {
      formData.append("photos", photo);
    });

    return this.client.post("/v1/feedback", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };
}
