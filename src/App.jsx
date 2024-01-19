import React from "react";
import Image from "./components/Image";
import BookingForm from "./components/BookingForm";
import Testimonials from "./components/Testimonials";
import Doctors from "./components/Doctors";

const App = () => {
  return (
    <div>
      <Image />
      
      <BookingForm />
      <Doctors/>
      <Testimonials />
    </div>
  );
};

export default App;
