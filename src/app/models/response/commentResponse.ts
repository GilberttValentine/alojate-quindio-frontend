import { UserResponse } from "./userResponse";

export interface CommentResponse {
  id: number;
  lodging_id: number;
  count: number;
  qualification: number;
  cleaning: number;
  created_at: string;
  description: string;
  quality: number;
  ubication: number;
  veracity: number;
  guest: UserResponse;
}