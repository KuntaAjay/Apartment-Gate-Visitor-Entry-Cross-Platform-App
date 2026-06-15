import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"; // global styles

// Components
import Navbar from "./Components/Navbar/Navbar";

// Pages
import Home from "./Components/Home_Page/Home";
import Features from "./Components/FeauturesPage/Feautures";
import HowItWorks from "./Components/HowItWorksPage/HowItWorks";
import UserRoles from "./Components/UserRolePage/UserRoles";

import Benefits from "./Components/BenefitsPage/Benefits";

import ContactDemo from "./Components/ContactDemoPage/ContactDemo";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/user-roles" element={<UserRoles />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/contact" element={<ContactDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
