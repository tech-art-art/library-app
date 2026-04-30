import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            cursor: "pointer",
            userSelect: "none",
          }}
          onClick={() => navigate("/dashboard")}
        >
          Library App
        </Typography>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Typography variant="body1">
            {user?.username} ({user?.role})
          </Typography>

          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}