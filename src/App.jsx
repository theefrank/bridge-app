import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/public/Home";
import VolunteerDashboard from "./pages/volunteer/VolunteerDashboard";
import Opportunities from "./pages/volunteer/Opportunities";
import Profile from "./pages/profile/Profile";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
