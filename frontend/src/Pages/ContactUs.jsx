import React from "react";
import Newsletter from "../Components/Newsletter";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function ContactUs() {
  const handleMail = () => {
    window.location.href = "mailto:nepalnischal7@gmail.com";
  };
  return (
    <div>
      <div className="text-center text-4xl mt-6">
        <h1>
          <span className="text-red-600">CONTACT</span> US
        </h1>
      </div>
      <div className="my-10 flex flex-col justify-center  md:flex-row gap-20 mb-20">
        <img
          src="https://img.freepik.com/free-photo/contact-helpdesk-customer-service-spaceship-graphic-concept_53876-125032.jpg?t=st=1741965836~exp=1741969436~hmac=c7423b8622734d14c52b82625a4e2646974442f8fbd5fbfd6cb2cbeb97c132f5&w=1380"
          className="w-full md:w-1/2 rounded-md shadow-md"
          alt="img"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-2xl ">
            Locate <span className="text-red-600">Our Store</span>
          </p>
          <Link
            to="https://maps.app.goo.gl/irBNRaEVVndgTpUx9"
            className="pb-2 flex items-center gap-2 text-gray-700 hover:text-red-500"
          >
            <FaMapMarkerAlt className="text-red-600" />
            <span>Kathmandu, Nepal</span>
          </Link>
          <p className="pb-2 flex items-center gap-2 text-gray-700">
            <IoMdCall className="text-green-600" />
            +977 9864832535
          </p>
          <button
            onClick={handleMail}
            className=" pb-2 flex items-center gap-2 text-gray-700 hover:text-red-600"
          >
            <MdEmail className=" text-blue-600" />
            <span>nepalnischal7@gmail.com</span>{" "}
          </button>

          <hr />

          <p className="font-semibold  text-2xl">
            <span className="text-red-600">Careers</span> at Himalayan Attrie
          </p>
          <p className=" text-gray-600">
            Do you want to be the part of our team?
          </p>
          <button className="border border-red-600 bg-red-600 text-white px-5 py-2 rounded-lg  hover:bg-red-700 transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}

export default ContactUs;

// import { useState } from "react";
// import React from "react";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { IoMdCall } from "react-icons/io";
// import { MdEmail } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { Field, Label, Switch } from "@headlessui/react";

// function ContactUs() {
//   const handleMail = () => {
//     window.location.href = "mailto:nepalnischal7@gmail.com";
//   };
//   const [agreed, setAgreed] = useState(false);

//   return (
//     <div className=" container mx-auto px-24 py-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-6">
//         {/* Left Section - Contact Info */}
//         <div className="px-5 py-10 border border-gray-300 rounded-lg shadow-md">
//           <h1 className="text-3xl font-bold pb-6">
//             Get in <span className="text-red-600">Touch</span>
//           </h1>
//           <div className="space-y-3">
//             <Link
//               to="https://maps.app.goo.gl/irBNRaEVVndgTpUx9"
//               className="pb-2 flex items-center gap-2 text-gray-700 hover:text-red-500"
//             >
//               <FaMapMarkerAlt className="text-red-600" />
//               <span>Kathmandu, Nepal</span>
//             </Link>
//             <p className="pb-2 flex items-center gap-2 text-gray-700">
//               <IoMdCall className="text-green-600" />
//               +977 9864832535
//             </p>
//             <button
//               onClick={handleMail}
//               className=" pb-2 flex items-center gap-2 text-gray-700 hover:text-blue-500"
//             >
//               <MdEmail className=" text-blue-600" />
//               <span>nepalnischal7@gmail.com</span>
//             </button>
//           </div>
//         </div>

//         {/* Right Section - Contact Form */}
//         <div className="p-4 ">
//           <form className="space-y-4 ">
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 className="w-64 border border-gray-400 p-2 rounded-md focus:ring-2 focus:ring-red-400 outline-none"
//               />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className="w-64 border border-gray-400 p-2 rounded-md focus:ring-2 focus:ring-red-400 outline-none"
//               />
//             </div>
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full border border-gray-400 p-2 rounded-md focus:ring-2 focus:ring-red-400 outline-none"
//             />
//             <input
//               type="number"
//               placeholder="Phone Number"
//               className="w-full border border-gray-400 p-2 rounded-md focus:ring-2 focus:ring-red-400 outline-none"
//             />
//             <Field className="flex gap-x-4 sm:col-span-2">
//               <div className="flex h-6 items-center">
//                 <Switch
//                   checked={agreed}
//                   onChange={setAgreed}
//                   className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 data-[checked]:bg-red-600"
//                 >
//                   <span className="sr-only">Agree to policies</span>
//                   <span
//                     aria-hidden="true"
//                     className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
//                   />
//                 </Switch>
//               </div>
//               <Label className="text-sm/6 text-gray-600">
//                 By selecting this, you agree to our{" "}
//                 <a href="#" className="font-semibold text-red-600">
//                   privacy&nbsp;policy
//                 </a>
//                 .
//               </Label>
//             </Field>
//             <button
//               type="submit"
//               className="px-3 bg-red-600 text-white py-1 rounded-md hover:bg-red-700 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactUs;
