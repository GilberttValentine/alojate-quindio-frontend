import { ReservationCommentResponse } from "./commentResponse";

export interface ReservationLodgingResponse {
  id: number;
  name: string;
  type: string;
  comments: ReservationCommentResponse;
  url_pictures: string;
}