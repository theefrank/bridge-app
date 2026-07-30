import { Routes, Route } from "react-router-dom";

// Public Pages
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import ForgotPassword from "./pages/user/ForgotPassword";

// Dashboards
import UserDashboard from "./pages/user/UserDashboard";
import VolunteerDashboard from "./pages/volunteer/VolunteerDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

// Protected Route
import ProtectedRoute from "./routes/ProtectedRoute";

import Opportunities from "./pages/volunteer/Opportunities";
import Profile from "./pages/user/Profile";
import EditProfile from "./pages/user/EditProfile";
import Settings from "./pages/user/Settings";
import MyActivity from "./pages/user/MyActivity";
import Requests from "./pages/requests/Requests";
import CreateRequest from "./pages/requests/CreateRequest";
import RequestDetails from "./pages/requests/RequestDetails";

import EditProfile from "./pages/user/EditProfile";

import ForgotPassword from "./pages/auth/ForgotPassword";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />
        
      <Route path="/forgot-password" element={<ForgotPassword />} /> 
        
        
      {/* Protected Routes */}
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
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
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

      {/* 404 Route */}
      <Route
        path="*"
        element={
          <h1 className="text-center text-3xl mt-20">
            404 - Page Not Found
          </h1>
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
         path="/forgot-password"
          element={
           <ForgotPassword />
          }
      />

          
        <Route path="/requests" element={<Requests />} />

        <Route
        path="/requests/new"
        element={<CreateRequest />}
        />

        <Route
        path="/requests/:id"
        element={<RequestDetails />}
        />
    </Routes>
     
  );
}
export default App;
