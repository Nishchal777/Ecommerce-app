import React from "react";
import OurPolicy from "../Components/OurPolicy";

function History() {
  return (
    <div className="px-3 sm:px-6 lg:px-12">
      {/* Heading */}
      <div className="text-center text-3xl sm:text-4xl mt-5 font-semibold">
        <h1>
          <span className="text-red-600">OUR</span> HISTORY
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mt-10">
        {/* Image */}
        <img
          src="https://img.freepik.com/free-photo/creative-composition-with-book_23-2147654595.jpg?t=st=1742101626~exp=1742105226~hmac=82c54e562d55ad1477fe0cb7743c462651a4f7649b01e325cd3add6690bfcbb5&w=1380"
          className="w-full md:w-1/2 rounded-md shadow-md"
          alt="About Us"
        />

        <div className="md:w-1/2 text-gray-700 leading-relaxed">
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in,
            eos, dicta neque laudantium quo obcaecati error accusamus nesciunt
            nostrum numquam quam iure, modi harum. Quasi officia deserunt
            perferendis quaerat! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aperiam in, eos, dicta neque laudantium quo
            obcaecati error accusamus nesciunt nostrum numquam quam iure, modi
            harum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam in, eos, dicta neque laudantium quo obcaecati error
            accusamus nesciunt nostrum numquam quam iure, modi harum. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Aperiam in, eos,
            dicta neque laudantium quo obcaecati error accusamus nesciunt
            nostrum numquam quam iure, modi harum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam in, eos, dicta neque
            laudantium quo obcaecati error accusamus nesciunt nostrum numquam
            quam iure, modi harum.
          </p>
        </div>
      </div>
      <h3 className="text-center text-3xl sm:text-4xl mt-16 font-semibold">
        OUR <span className="text-red-600">POLICY</span>
      </h3>

      <OurPolicy />
    </div>
  );
}

export default History;
