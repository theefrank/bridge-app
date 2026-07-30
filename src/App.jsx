import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Login from "./routes/Login";
import Register from "./routes/Register";
import ProtectedRoute from "./routes/ProtectedRoute";

import ForgotPassword from "./routes/ForgotPassword";
import UserDashboard from "./pages/user/UserDashboard";
import VolunteerDashboard from "./pages/volunteer/VolunteerDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Opportunities from "./pages/volunteer/Opportunities";
import OpportunityDetails from "./pages/volunteer/OpportunityDetails";
import MyApplications from "./pages/volunteer/MyApplications";
import ApplicationHistory from "./pages/volunteer/ApplicationHistory";
import Profile from "./pages/user/Profile";
import EditProfile from "./pages/user/EditProfile";
import Settings from "./pages/user/Settings";
import MyActivity from "./pages/user/MyActivity";
import Requests from "./pages/requests/Requests";
import CreateRequest from "./pages/requests/CreateRequest";
import RequestDetails from "./pages/requests/RequestDetails";
import UsersManagement from "./pages/admin/UsersManagement";
import CategoriesManagement from "./pages/admin/CategoriesManagement";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route
        path="/admin/users"
        element={
          <ProtectedRoute>
            <UsersManagement />
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
        path="/dashboard"
        element={
          <ProtectedRoute>
            <UserDashboard />
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
        path="/admin-dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
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

      <Route path="/requests" element={<Requests />} />
      <Route path="/requests/new" element={<CreateRequest />} />
      <Route path="/requests/:id" element={<RequestDetails />} />

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
