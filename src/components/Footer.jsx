import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-6 md:flex md:justify-between md:items-center">
        {/* Left Section: Brand & Description */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-white">
            🌿 Eco-Adventures 
          </h2>
          <p className="mt-2 text-sm">
            Explore the world sustainably with our eco-friendly travel
            adventures. <br /> Mountain Treks 🌄 Ocean Dives <br /> 🌊 Wildlife Safaris 🐾
            Camping Retreats ⛺ River Adventures 🚣
          </p>
        </div>

        {/* Middle Section: Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#home" className="hover:text-green-500">
                Home
              </a>
            </li>
            <li>
              <a href="#adventures" className="hover:text-green-500">
                Adventures
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-green-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="mt-2 flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebook className="text-lg mr-2" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaTwitter className="text-lg mr-2"></FaTwitter>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram className="text-lg mr-2"></FaInstagram>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaLinkedin className="text-lg mr-2"></FaLinkedin>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
        <p>© 2024 Eco-Adventures. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
