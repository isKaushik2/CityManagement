import "./App.css";

import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import ReportPage from "./Pages/ReportPage/ReportPage";
import VolunteerPage from "./Pages/Volunteers/VolunteerPage";
import BloodDonation from "./Pages/BloodDonation/BloodDonation";
import Login from "./Pages/Login/login";
import Signup from "./Pages/SignUp/signUp";

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ReportPage" element={<ReportPage />} />
        <Route path="/BloodDonation" element={<BloodDonation />} />
        <Route path="/VolunteerPage" element={<VolunteerPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </main>
  );
}

export default App;
