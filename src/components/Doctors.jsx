import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Doctors = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  const { city: urlParamCity } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://doctorsdata.free.beeceptor.com/list');
        const data = await response.json();
        setDoctorsData(data);
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      }
    };

    fetchData();
  }, []);
  const filterDoctorsByCity = (city) => {
    return doctorsData.filter((doctor) => doctor.city.toLowerCase() === city.toLowerCase());
  };
  if (!urlParamCity) {
    return (
      <section className="bg-dark p-8">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Please specify a city in the URL parameter.</h2>
      </section>
    );
  }

  const filteredDoctors = filterDoctorsByCity(urlParamCity);

  return (
    <section className="bg-dark p-8">
      <h2 className="text-3xl font-bold mb-4 dark:text-white">Our Doctors in {urlParamCity}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="bg-white dark:bg-slate-300 p-4 rounded-lg">
            <img
              src={doctor.photo}
              alt={`Dr. ${doctor.name}`}
              className=" h-72 w-80 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-extrabold mb-2">{doctor.name}</h3>
            <p className="text-lg mb-2 font-bold">Expertise: {doctor.expertise}</p>
            <p className="text-md font-semibold">City: {doctor.city}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;