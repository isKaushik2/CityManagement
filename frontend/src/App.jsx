import "./App.css";
import Navbar from "./NavBar/Navbar";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import ReportPage from "./Pages/ReportPage/ReportPage";
import VolunteerPage from "./Pages/Volunteers/VolunteerPage";
import VolunteerForm from "./Pages/Volunteers/VolunteerForm";
import BloodDonation from "./Pages/BloodDonation/BloodDonation";
import Login from "./Pages/Login/login";
import Signup from "./Pages/SignUp/signUp";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <main className="main-content">
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/ReportPage" element={<ReportPage />} />
          <Route path="/BloodDonation" element={<BloodDonation />} />
          <Route path="/VolunteerPage" element={<VolunteerPage />} />
          <Route path="/VolunteerForm" element={<VolunteerForm />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
      <Toaster position="bottom-right" />
    </main>
  );
}

export default App;
