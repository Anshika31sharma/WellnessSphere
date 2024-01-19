import React from 'react';

function Testimonials() {
  return ( 
    <div>
      <h2 className="text-2xl font-bold mb-4 ml-8">What Our Patients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        <div className="h-96 bg-white w-full md:w-96 shadow-lg mt-10 mx-auto">
          <img
            src="https://images.unsplash.com/photo-1616286608358-0e1b143f7d2f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Card Image"
            className="w-full h-3/4 object-cover object-center"
          />
          <h1 className="text-center font-extrabold  text-3xl mt-5">Ms. Tiara</h1>
          <p className='text-center text-slate-500 mt-3 font-serif text-lg'>Got consulted through fix health</p>
        </div>
        <div className="h-96 bg-white w-full md:w-96 shadow-lg mt-10 mx-auto">
          <img
            src="https://images.unsplash.com/photo-1633367583895-08545d733dfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtaWxpbmclMjBmYWNlfGVufDB8fDB8fHww"
            alt="Card Image"
            className="w-full h-3/4 object-cover object-center"
          />
          <h1 className="text-center font-extrabold text-3xl mt-5">Mr. Danial</h1>
          <p className='text-center text-slate-500 mt-3 font-serif text-lg'>Book lab test through fix health</p>
        </div>
        <div className="h-96 bg-white w-full md:w-96 shadow-lg mt-10 mx-auto">
          <img
            src="https://images.unsplash.com/photo-1562012962-5da0c554dac3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Card Image"
            className="w-full h-3/4 object-cover object-center"
          />
          <h1 className="text-center font-extrabold text-3xl mt-5">Ms. Peri</h1>
          <p className='text-center text-slate-500 mt-3 font-serif text-lg '>Ordered medicine through fix health</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
