import { Lodging } from "../lodging";
import { ServiceResponse } from "./service";

export interface CreateLodgingResponse {
  lodging: Lodging;
  services: Array<ServiceResponse>;
}