import { Language } from "../language";

export interface UserResponse {
  id:number;
  name: string;
  email: string;
  photo: string;
  languages: Array<Language>;
  created_at: string;
}