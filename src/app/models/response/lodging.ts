import { Municipality } from "../municipality";
import { Service } from "../service";
import { TypeLodging } from "../typeLodging";
import { CommentResponse } from "./comment";
import { UserResponse } from "./user";

export interface LodgingResponse {
  id: number;
  name: string;
  user: UserResponse;
  municipality: Municipality;
  type: TypeLodging;
  persons_amount: number;
  accesibility: string;
  direction: string;
  room_quantity: number;
  bed_quantity: number;
  bathroom_quantity: number;
  nigth_value: number;
  services: Array<Service>;
  url_pictures: string;
  actual_state: boolean;
  comments: CommentResponse;
}
