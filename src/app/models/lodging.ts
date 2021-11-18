export class Lodging{
    id?: number;
    name?: string;
    user_id?: number;
    municipality_id?: number;
    type_id?: number;
    persons_amount?: number;
    accesibility?: string;
    direction?: string;
    room_quantity?: number;
    bed_quantity?: number;
    bathroom_quantity?: number;
    description?: string;
    actual_state?: boolean;
    night_value?: number;
    qualification?: number;
    services?: Array<number>;
}