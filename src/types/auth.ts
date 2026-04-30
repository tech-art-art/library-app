export interface User {
  username: string;
  role: string;
  exp: number;
}

export interface AuthState {
  token: string | null;
  user: User | null;
}