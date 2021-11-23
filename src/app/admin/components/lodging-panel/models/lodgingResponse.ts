import { Municipality } from "../../../../models/municipality";
import { ServiceResponse } from "../../../../models/response/service";
import { TypeLodging } from "../../../../models/typeLodging";
import { CommentResponse } from "../../../../models/response/commentResponse";
import { UserResponse } from "../../../../models/response/userResponse";

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
    services: Array<ServiceResponse>;
    url_pictures: string;
    actual_state: boolean;
    comments: CommentResponse;
    created_at: string;
}
