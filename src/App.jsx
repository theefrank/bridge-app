import { Routes, Route } from "react-router-dom";

// Public Pages
import Home from "./routes/Home";
import About from "./routes/About";
import Login from "./routes/Login";
import Register from "./routes/Register";
import ForgotPassword from "./routes/ForgotPassword";

// Requests
import Requests from "./pages/requests/Requests";
import CreateRequest from "./pages/requests/CreateRequest";
import RequestDetails from "./pages/requests/RequestDetails";

// User Pages
import UserDashboard from "./pages/user/UserDashboard";
import MyRequests from "./pages/user/MyRequests";
import MyActivity from "./pages/user/MyActivity";
import Settings from "./pages/user/Settings";

// Volunteer Pages
import VolunteerDashboard from "./pages/volunteer/VolunteerDashboard";
import Opportunities from "./pages/volunteer/Opportunities";

// Shared Pages
import Profile from "./pages/profile/Profile";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageRequests from "./pages/admin/ManageRequests";
import ManageVolunteers from "./pages/admin/ManageVolunteers";
import Reports from "./pages/admin/Reports";
import AdminSettings from "./pages/admin/Settings";

// Route Protection
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Public Routes             */}

      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      <Route
        path="/requests"
        element={<Requests />}
      />

      <Route
        path="/requests/:id"
        element={<RequestDetails />}
      />

      {/* User Routes               */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-requests"
        element={
          <ProtectedRoute>
            <MyRequests />
          </ProtectedRoute>
        }
      />

      <Route
        path="/requests/new"
        element={
          <ProtectedRoute>
            <CreateRequest />
          </ProtectedRoute>
        }
      />

      <Route
        path="/activity"
        element={
          <ProtectedRoute>
            <MyActivity />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

      {/* Volunteer Routes          */}

      <Route
        path="/volunteer/dashboard"
        element={
          <ProtectedRoute>
            <VolunteerDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/opportunities"
        element={
          <ProtectedRoute>
            <Opportunities />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes              */}

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/users"
        element={
          <ProtectedRoute>
            <ManageUsers />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/requests"
        element={
          <ProtectedRoute>
            <ManageRequests />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/volunteers"
        element={
          <ProtectedRoute>
            <ManageVolunteers />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/reports"
        element={
          <ProtectedRoute>
            <Reports />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/settings"
        element={
          <ProtectedRoute>
            <AdminSettings />
          </ProtectedRoute>
        }
      />

      {/* 404                       */}

      <Route
        path="*"
        element={
          <h1 className="text-center text-3xl mt-20">
            404 - Page Not Found
          </h1>
        }
      />

    </Routes>
  );
}

export default App;