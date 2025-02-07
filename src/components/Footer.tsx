"use client";
import { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const em = "business@pashangquinternationaltrade.com";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(em);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <div className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center md:text-left">
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            We specialize in advertising a diverse selection of premium
            products, including cosmetics that enhance your beauty, stationery
            that fuels your creativity, garments that define your style, and
            paper products crafted for every need.
          </p>
        </div>

        <div className="mx-auto text-center md:text-left">
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Cosmetics
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Garments
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Paper
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Stationary
              </a>
            </li>
          </ul>
        </div>
        <div className="mx-auto  md:text-left">
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <ul className="flex ">
            <li className="m-3">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 "
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li className="m-3">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <FaInstagramSquare />
              </a>
            </li>
            <li className="m-3">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>

        <div className="mx-auto text-center md:text-left">
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>
            Jinfuyuan commercial <br />
            building, China
          </p>

          <button onClick={copyToClipboard} className="mt-2">
            {copied ? "Copied!" : "Click to Copy our Email"}
          </button>

          {/* <p>business@pashangquinternationaltrade.com</p> */}
          {/* <p>Phone: (123) 456-7890</p> */}
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2025 Pashang Qu. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
