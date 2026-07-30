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
import MyApplications from "./pages/volunteer/MyApplications";
import ApplicationHistory from "./pages/volunteer/ApplicationHistory";
import OpportunityDetails from "./pages/volunteer/OpportunityDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
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
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
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
      </Routes>
    </BrowserRouter>
  );
}
export default App;
