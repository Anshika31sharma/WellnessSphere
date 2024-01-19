import React, {useEffect} from "react";
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
    <div className=" dark:bg-night">
       <Navbar toggleDarkMode={toggleDarkMode} />
      <BookingForm />
      <Doctors/>
      <Testimonials />
    </div>
  );
};

export default App;
