import { Language } from "./language";

export interface User {
    id: number;
    first_name: string;
    second_name: string;
    first_lastname: string;
    second_lastname: string;
    direction: string;
    email: string;
    password: string;
    url_picture: string;
    actual_state: boolean;
    stratum: number;
    civil_status_id: number;
    study_level_id: number;
    role_id: number;
    langugages: Array<Language>;
}