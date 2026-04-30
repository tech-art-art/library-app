import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Navigate } from "react-router-dom";

interface Props {
    children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
    const token = useSelector((state: RootState) => state.auth.token);

    if (!token) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
}