import {Routes, Route } from "react-router-dom";
import Home from "./pages/public/Home";
import Requests from "./pages/requests/Requests";
import CreateRequest from "./pages/requests/CreateRequest";
import RequestDetails from "./pages/requests/RequestDetails";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
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
