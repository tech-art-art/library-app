import { jwtDecode } from "jwt-decode";
import { User } from "../types/auth";

export const decodeToken = (token: string): User | null => {
  try {
    return jwtDecode<User>(token);
  } catch {
    return null;
  }
};