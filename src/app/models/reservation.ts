export interface Reservation{
    id: number;
    user_id: number;
    lodging_id: number;
    start_date: Date;
    end_date: Date;
    night_value: number;
    actual_state: number;
}