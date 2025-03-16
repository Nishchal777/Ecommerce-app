import React from "react";
import Sections from "../Components/Sections";


function About() {
  return (
    <div className="px-3 sm:px-6 lg:px-12">
      {/* Heading */}
      <div className="text-center text-3xl sm:text-4xl mt-5 font-semibold">
        <h1>
          <span className="text-red-600">ABOUT</span> US
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mt-10">
        {/* Image */}
        <img
          src="https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448751.jpg?t=st=1741964595~exp=1741968195~hmac=796b3f27e8095592b1892b8fe0be9dbf90fbb51f664d805327bfb6b5a2237dd1&w=1380"
          className="w-full md:w-1/2 rounded-md shadow-md"
          alt="About Us"
        />

        <div className="md:w-1/2 text-gray-700 leading-relaxed">
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in,
            eos, dicta neque laudantium quo obcaecati error accusamus nesciunt
            nostrum numquam quam iure, modi harum. Quasi officia deserunt
            perferendis quaerat!
          
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in,
            eos, dicta neque laudantium quo obcaecati error accusamus nesciunt
            nostrum numquam quam iure, modi harum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam in, eos, dicta neque
            laudantium quo obcaecati error accusamus nesciunt nostrum numquam
            quam iure, modi harum.
          </p>
          <h3 className="text-lg font-bold">Our Mission:</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in,
            eos, dicta neque laudantium quo obcaecati error accusamus nesciunt
            nostrum numquam quam iure, modi harum.
          </p>
        </div>
      </div>
   
     <Sections/>
    </div>
  );
}

export default About;
