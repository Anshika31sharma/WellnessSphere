import React from 'react';

function BookingForm() {
  return (
    <div className="flex flex-col md:flex-row">
    <section className="bg-white text-black p-4 md:p-10 ml-4 md:ml-8 rounded-lg shadow-lg max-w-xl mx-auto md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Book a Consultation</h2>
        <form>
        <div className="mb-4 ">
          <label htmlFor="name" className="block text-sm  font-bold mb-2 text-black">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border rounded "
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-bold mb-2 text-black">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-bold mb-2 text-black">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-bold mb-2 text-black">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="company" className="block text-sm font-bold mb-2 text-black">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="chiefComplaints" className="block text-sm font-bold mb-2 text-black">Chief Complaints:</label>
          <textarea
            id="chiefComplaints"
            name="chiefComplaints"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="experienceWithPhysiotherapy" className="flex items-center">
            <input
              type="checkbox"
              id="experienceWithPhysiotherapy"
              name="experienceWithPhysiotherapy"
              className="mr-2"
            />
            <span className="text-sm text-black">Any previous experience with physiotherapy?</span>
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="selectedCity" className="block text-sm font-bold mb-2 text-black">Select City:</label>
          <input
            type="text"
            id="selectedCity"
            name="selectedCity"
            className="w-full p-2 border rounded"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-black px-4 py-2 mt-4">
          Submit
        </button>
      </form>
    </section>
    <img
  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1491&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  
  alt="Consultation Image"
  className="w-full md:w-1/2 h-auto object-cover object-center md:mt-0"
/>

    </div>
  );
}

export default BookingForm;
 