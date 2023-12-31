import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import c1 from "../assets/ServiceType/c1.jpeg";
import c4 from "../assets/ServiceType/c4.jpeg";
import c2 from "../assets/ServiceType/c2.jpeg";
import c6 from "../assets/ServiceType/c6.png";
import c5 from "../assets/ServiceType/c5.avif";

function Client() {
  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Our Valued Clients
        </h1>

        {/* Use carousel for small screens and grid for larger screens */}
        <div className="md:hidden">
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000} // Adjust the slide interval as needed
          >
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <img
                src={c1}
                alt="Client 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-lg font-semibold">Goderaj Infinity</p>
              <p className="text-gray-600">Anual maintace for general pest control for goderaj premises</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <img
                src={c4}
                alt="Client 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-lg font-semibold">Goderaj Rejue</p>
              <p className="text-gray-600">Anual maintace for general pest control for goderaj premises</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <img
                src={c2}
                alt="Client 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-lg font-semibold">Water purification factory</p>
              <p className="text-gray-600">Anual maintace for general pest control for Factory premises</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <img
                src={c6}
                alt="Client 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-lg font-semibold">Bank Of Maharastra </p>
              <p className="text-gray-600">Good customer with Yearly contract with pestokiller</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <img
                src={c5}
                alt="Client 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-lg font-semibold">State bank of India</p>
              <p className="text-gray-600">Provided good quality service to SBI </p>
            </div>

            {/* Repeat the above card structure for more clients */}
          </Carousel>
        </div>

        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <img
                src={c1}
                alt="Client 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-lg font-semibold">Goderaj Infinity</p>
              <p className="text-gray-600">Anual maintace for general pest control for Goderaj Infinity premises</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <img
                src={c4}
                alt="Client 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-lg font-semibold">Goderaj Rejue</p>
              <p className="text-gray-600">Anual maintace for general pest control for goderaj premises</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <img
                src={c2}
                alt="Client 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-lg font-semibold">Water purification factory</p>
              <p className="text-gray-600">Anual maintace for general pest control for Factory premises</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <img
                src={c6}
                alt="Client 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-lg font-semibold">Bank Of Maharastra </p>
              <p className="text-gray-600">Good customer with Yearly contract with pestokiller</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <img
                src={c5}
                alt="Client 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-lg font-semibold">State bank of India</p>
              <p className="text-gray-600">Provided good quality service to SBI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;