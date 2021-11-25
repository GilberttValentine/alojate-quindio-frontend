import { ReservationHostResponse } from "./hostResponse";
import { ReservationLodgingResponse } from "./lodgingResponse";

export interface UserReservationResponse {
  id: number;
  actual_state: number;
  end_date: number;
  guest: number;
  host: ReservationHostResponse;
  lodging: ReservationLodgingResponse;
  night_value: number;
  start_date: Date;
}