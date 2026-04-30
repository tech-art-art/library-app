import api from "./api";

export const login = async (
  email: string,
  password: string
): Promise<string> => {
  const res = await api.post<{ token: string }>("/auth/login", {
    email,
    password,
  });

  return res.data.token;
};