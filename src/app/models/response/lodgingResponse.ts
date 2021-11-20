import { Municipality } from "../municipality";
import { Service } from "../service";
import { TypeLodging } from "../typeLodging";
import { CommentResponse } from "./commentResponse";
import { UserResponse } from "./userResponse";

export interface LodgingResponse {
  id: number;
  name: string;
  user: UserResponse;
  municipality: Municipality;
  type: TypeLodging;
  persons_amount: number;
  accesibility: string;
  direction: string;
  description: string;
  room_quantity: number;
  bed_quantity: number;
  bathroom_quantity: number;
  night_value: number;
  services: Array<Service>;
  url_pictures: string;
  actual_state: boolean;
  comments: CommentResponse;
  created_at: string;
}
