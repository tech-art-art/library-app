import { useState } from "react";
import { Container, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";

export default function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = async () => {
        try {
            const token = await login(email, password);

            dispatch(loginSuccess(token));
            navigate("/dashboard");
        } catch {
            alert("Login failed");
        }
    };

    return (
        <Container maxWidth="xs">
            <h2>Login</h2>

            <TextField
                fullWidth
                label="Email"
                margin="normal"
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
                fullWidth
                type="password"
                label="Password"
                margin="normal"
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button fullWidth variant="contained" onClick={handleLogin}>
                Login
            </Button>
        </Container>
    );
}