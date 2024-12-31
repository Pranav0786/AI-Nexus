import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaDiscord, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-950 to-black rounded-3xl text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-4">
          {/* Left Side: Main Content */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold font-[Roboto] text-red-400">WCE-MLSC</h3>
            <div className="flex space-x-4 ">
              <a
                href="https://www.linkedin.com/company/wce-mlsc/"
                className="text-gray-400 hover:text-red-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="h-7 w-7" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://discord.gg/UpDUhTH55A"
                className="text-gray-400 hover:text-red-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord className="h-7 w-7" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://www.youtube.com/@WCEMLSC"
                className="text-gray-400 hover:text-red-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-7 w-7" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://chat.whatsapp.com/FYOmgQpITOsCPtd84Eme0x"
                className="text-gray-400 hover:text-red-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="h-7 w-7" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Side: Contact Section */}
          <div className="space-y-4 ">
            <ul className=" flex space-x-3 lg:space-x-7 flex-wrap justify-evenly md:justify-start">
              <li className="flex items-center text-gray-400 ">
                <Mail className="h-5 w-5 mr-1 mt-1 text-red-400" />
                <a
                  href="mailto:mlsc@walchandsangli.ac.in"
                  className="hover:text-red-400 transition-colors  md:text-xl"
                >
                  mlsc@walchandsangli.ac.in
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-1 mt-1 text-red-400" />
                <a
                  href="tel:+91 92841 24132"
                  className="hover:text-red-400 transition-colors  md:text-xl"
                >
                  +91 92841 24132
                </a>
              </li>
              <li className="flex items-start text-gray-400 ">
                <MapPin className="h-5 w-5 mr-1 mt-1 text-red-400 " />
                <span className="hover:text-red-400 transition-colors   md:text-xl">
                  WCE Sangli, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4  pt-4 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Microsoft Learn Student Club.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}