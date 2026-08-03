import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Login from "./routes/Login";
import Register from "./routes/Register";
import ProtectedRoute from "./routes/ProtectedRoute";
import ForgotPassword from "./routes/ForgotPassword";

import UserDashboard from "./pages/user/UserDashboard";
import MyRequests from "./pages/user/MyRequests";
import MyActivity from "./pages/user/MyActivity";
import Settings from "./pages/user/Settings";
import Profile from "./pages/user/Profile";
import EditProfile from "./pages/user/EditProfile";

import VolunteerDashboard from "./pages/volunteer/VolunteerDashboard";
import Opportunities from "./pages/volunteer/Opportunities";
import OpportunityDetails from "./pages/volunteer/OpportunityDetails";
import MyApplications from "./pages/volunteer/MyApplications";
import ApplicationHistory from "./pages/volunteer/ApplicationHistory";

import AdminDashboard from "./pages/admin/AdminDashboard";
import CategoriesManagement from "./pages/admin/CategoriesManagement";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageRequests from "./pages/admin/ManageRequests";
import ManageVolunteers from "./pages/admin/ManageVolunteers";
import Reports from "./pages/admin/Reports";
import AdminSettings from "./pages/admin/Settings";

import Requests from "./pages/requests/Requests";
import CreateRequest from "./pages/requests/CreateRequest";
import RequestDetails from "./pages/requests/RequestDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/requests" element={<Requests />} />
      <Route
        path="/requests/new"
        element={
          <ProtectedRoute>
            <CreateRequest />
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

      <Route path="/requests/:id" element={<RequestDetails />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <UserDashboard />
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
        path="/profile/edit"
        element={
          <ProtectedRoute>
            <EditProfile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/edit-profile"
        element={
          <ProtectedRoute>
            <EditProfile />
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

      <Route
        path="/my-activity"
        element={
          <ProtectedRoute>
            <MyActivity />
          </ProtectedRoute>
        }
      />

      <Route
        path="/volunteer-dashboard"
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

      <Route
        path="/opportunities/:id"
        element={
          <ProtectedRoute>
            <OpportunityDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/applications"
        element={
          <ProtectedRoute>
            <MyApplications />
          </ProtectedRoute>
        }
      />

      <Route
        path="/applications/history"
        element={
          <ProtectedRoute>
            <ApplicationHistory />
          </ProtectedRoute>
        }
      />

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
        path="/admin/categories"
        element={
          <ProtectedRoute>
            <CategoriesManagement />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
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

      <Route
        path="*"
        element={
          <h1 className="text-center text-3xl mt-20">404 - Page Not Found</h1>
        }
      />
    </Routes>
  );
}

export default App;
