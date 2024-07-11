import React from 'react';
import { Link } from 'react-router-dom';
import './animations.css';

const Home = () => {
  return (
    <div className="min-h-screen">
      
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 z-[-1]">
         
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 opacity-50 animate-gradient"></div>
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Restaurant"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative text-center z-10">
          <h1 className="mb-4 animate-typing py-2 overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">Welcome to Our Restaurant</h1>
          <p className="mb-16 animate-delay-2 py-4 overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">Enjoy the finest dining experience with us</p>
          <Link
            to="/feed"
            className="px-8 py-4 bg-white mt-4 text-gray-800 font-semibold rounded-full shadow-md hover:bg-gray-200 transition duration-300"
          >
            View Menu
          </Link>
        </div>
      </section>

      
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Story</h3>
              <p className="text-gray-700 leading-relaxed">
                Our restaurant started with a simple idea: to bring people together through the joy of food. From our humble beginnings as a small bistro, we've grown into a beloved destination for food lovers. Our commitment to using fresh, locally-sourced ingredients and creating memorable dining experiences has remained steadfast. Join us on this journey as we continue to celebrate the rich culinary traditions and innovate new flavors.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to become a cornerstone in our community, where guests can gather and create lasting memories. We aspire to lead the way in sustainable dining practices, ensuring that every dish we serve not only delights the palate but also respects the environment. As we look to the future, we remain dedicated to excellence in service, innovation in our menu offerings, and fostering a warm, welcoming atmosphere for all who walk through our doors.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
        <div className="max-w-6xl mx-auto text-gray-900">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Contact Us</h2>
          <p className="text-center text-xl mb-8 text-white">For reservations and inquiries</p>
          <div className="flex justify-center">
            <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-gray-500 text-gray-900"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-gray-500 text-gray-900"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-gray-500 text-gray-900"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white font-semibold rounded-full shadow-md hover:opacity-80 transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
