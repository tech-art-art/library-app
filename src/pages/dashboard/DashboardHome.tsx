import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export default function DashboardHome() {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <>
      <h2>Welcome {user?.username}</h2>
      <p>Role: {user?.role}</p>
    </>
  );
}