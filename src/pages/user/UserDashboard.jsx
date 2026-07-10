import { useAuth } from "../../context/AuthContext";

export default function UserDashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-4">
        User Dashboard
      </h1>

      <p className="text-gray-600">
        Welcome, {user?.name}
      </p>
    </div>
  );
}