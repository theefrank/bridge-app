import { useAuth } from "../../context/AuthContext";

export default function LogoutButton() {
  const { logout } = useAuth();

  async function handleLogout() {
    await logout();
  }

  return (
    <button
      onClick={handleLogout}
      className="btn-secondary"
    >
      Logout
    </button>
  );
}