import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookingForm from "./components/BookingForm";
import Testimonials from "./components/Testimonials";
import Doctors from "./components/Doctors";
import Navbar from "./components/Navbar";

const App = () => {
  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    localStorage.setItem("isDarkMode", isDarkMode);
  };

  return (
    <Router>
      <div className="dark:bg-night">
        <Navbar toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<>
            <BookingForm />
            <Doctors />
            <Testimonials />
          </>} />
          <Route path="/*" element={<Doctors />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
