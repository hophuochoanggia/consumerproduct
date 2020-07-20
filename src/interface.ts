export interface IImage {
  uri: string;
  type: string;
  name: string;
}
export interface IFeedback {
  feedback_like: string;
  feedback_improve: string;
  rating: number;
  photos: IImage[];
  device: any;
  customerId: string;
}
