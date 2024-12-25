import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-950 to-black rounded-3xl text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-4">
          {/* Left Side: Main Content */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold font-[Roboto] text-green-400">WCE-MLSC</h3>
            <div className="flex space-x-4 ">
              <a
                href="https://facebook.com"
                className="text-gray-400  hover:text-green-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-7 w-7" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-green-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-7 w-7" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-green-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-7 w-7" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-green-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-7 w-7" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Side: Contact Section */}
          <div className="space-y-4 ">
            <ul className=" flex space-x-3 lg:space-x-7 flex-wrap justify-evenly md:justify-start">
              <li className="flex items-center text-gray-400 ">
                <Mail className="h-5 w-5 mr-1 mt-1 text-green-400" />
                <a
                  href="mailto:contact@mlsc.com"
                  className="hover:text-green-400 transition-colors  md:text-xl"
                >
                  contact@mlsc.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-1 mt-1 text-green-400" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-green-400 transition-colors  md:text-xl"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start text-gray-400 ">
                <MapPin className="h-5 w-5 mr-1 mt-1 text-green-400 " />
                <span className="hover:text-green-400 transition-colors   md:text-xl">
                  Sangli, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4  pt-4 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center  md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Microsoft Learn Student Chapter.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}