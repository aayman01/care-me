import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#5E0523] text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-2">Care Me</h2>
          <p className="mb-4">
            Sell your products to crores of customers on Meesho at 0% commission
          </p>
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded">
            Start Selling
          </button>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-5">Sell on Care Me</h3>
          <ul className="space-y-2 text-sm text-white">
            <li>
              <a href="#">Sell Online</a>
            </li>
            <li>
              <a href="#">Pricing & Commission</a>
            </li>
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">Shipping & Returns</a>
            </li>
            <li>
              <a href="#">Grow Your Business</a>
            </li>
            <li>
              <a href="#">Learning Hub</a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Sell on Care Me</h3>
          <p className="text-sm mb-4">Support@caremebd.com</p>
          <div className="flex gap-3">
            <button className="bg-white text-primary px-3 py-1 rounded font-bold text-sm">
              F
            </button>
            <button className="bg-white text-primary px-3 py-1 rounded font-bold text-sm">
              I
            </button>
            <button className="bg-white text-primary px-3 py-1 rounded font-bold text-sm">
              Y
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-white/50 pt-4 text-center text-sm text-white">
        © 2015 Care Me. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
