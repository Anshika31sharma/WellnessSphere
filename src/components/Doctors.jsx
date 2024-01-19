// src/components/Doctors.js
import React from 'react';

const Doctors = () => {
  const doctorsData = [
    {
      id: 1,
      name: 'Dr. Smith',
      expertise: 'Orthopedic',
      city: 'New York',
    },
    {
      id: 2,
      name: 'Dr. Johnson',
      expertise: 'Cardiologist',
      city: 'Los Angeles',
    },
    {
      id: 3,
      name: 'Dr. Williams',
      expertise: 'Dermatologist',
      city: 'Chicago',
    },
    {
      id: 4,
      name: 'Dr. Davis',
      expertise: 'Pediatrician',
      city: 'Houston',
    },
  ];

  return (
    <section className="bg-dark  p-8">
      <h2 className="text-2xl font-bold mb-4">Our Doctors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {doctorsData.map((doctor) => (
          <div key={doctor.id} className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">{doctor.name}</h3>
            <p className="text-sm mb-2">Expertise: {doctor.expertise}</p>
            <p className="text-sm">City: {doctor.city}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Doctors;
