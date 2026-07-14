import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Requests from "./pages/requests/Requests";
import CreateRequest from "./pages/requests/CreateRequest";
import RequestDetails from "./pages/requests/RequestDetails";

// Dashboards
import UserDashboard from "./pages/user/UserDashboard";
import VolunteerDashboard from "./pages/volunteer/VolunteerDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

import Opportunities from "./pages/volunteer/Opportunities";
import Profile from "./pages/profile/Profile";
import MyRequests from "./pages/user/MyRequests";
import MyActivity from "./pages/user/MyActivity";
import Settings from "./pages/user/Settings";
// Protected Route
import ProtectedRoute from "./routes/ProtectedRoute";



function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

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
       path="/profile"
       element={
         <ProtectedRoute>
          <Profile />
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
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
      
      {/* 404 Route */}
      <Route
        path="*"
        element={
          <h1 className="text-center text-3xl mt-20">404 - Page Not Found</h1>
        }
      />

      
      <Route path="/requests" element={<Requests />} />

      <Route path="/requests/new" element={<CreateRequest />} />

      <Route path="/requests/:id" element={<RequestDetails />} />
    </Routes>
  );
}
export default App;
