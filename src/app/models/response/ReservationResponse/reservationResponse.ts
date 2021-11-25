import { ReservationGuestResponse } from "./guestResponse";
import { ReservationHostResponse } from "./hostResponse";
import { ReservationLodgingResponse } from "./lodgingResponse";

export interface ReservationResponse {
  id: number;
  actual_state: number;
  end_date: number;
  guest: ReservationGuestResponse;
  host: ReservationHostResponse;
  lodging: ReservationLodgingResponse;
  night_value: number;
  start_date: Date;
}