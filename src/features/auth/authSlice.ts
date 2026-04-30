import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../types/auth";
import { decodeToken } from "../../utils/jwt";

const token = localStorage.getItem("token");

const initialState: AuthState = {
    token: token || null,
    user: token ? decodeToken(token) : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<string>) => {
            const token = action.payload;
            const user = decodeToken(token);

            state.token = token;
            state.user = user;

            localStorage.setItem("token", token);
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
            localStorage.removeItem("token");
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;