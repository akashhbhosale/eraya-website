"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaTwitter as FaXTwitter } from "react-icons/fa6"; // ✅ Fixed import
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import FallingStarsBackground from "../components/ui/falling-stars-background";

const socialLinks = [
  {
    icon: (
      <FaXTwitter className="hover:text-white transition-colors duration-300" />
    ),
    href: "#",
    label: "Twitter",
  },
  {
    icon: (
      <FaLinkedin className="hover:text-blue-500 transition-colors duration-300" />
    ),
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: (
      <FaFacebook className="hover:text-blue-500 transition-colors duration-300" />
    ),
    href: "#",
    label: "Facebook",
  },
  {
    icon: (
      <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />
    ),
    href: "#",
    label: "Instagram",
  },
];

export function Footer() {
  return (
    <footer className="bg-card w-full overflow-hidden">
      <FallingStarsBackground>
        <div className="relative w-full flex justify-center items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent blur-md" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-[4px] bg-gradient-to-r from-transparent via-gray-300 to-transparent blur-lg" />
          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
        </div>

        <div className="py-12 pt-10 px-6">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 text-center items-start">
            {/* Column 1: Brand */}
            <div>
              <h2 className="text-white text-2xl font-semibold mb-4 font-ailerons">
                ERAYA
              </h2>
              <p className="mb-4 text-md text-justify">
                Eraya excels in engineering, precision manufacturing and talent
                innovation, delivering cutting edge solutions with excellence
                and craftsmanship to global customers.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h2 className="text-white text-lg font-semibold mb-4">
                Quick Links
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors duration-300"
                  >
                    About
                  </Link>
                </li>

                {/* To unhide all clients and Team */}
                {/*
                <li>
                  <Link
                    href="/clients"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Clients
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Team
                  </Link>
  </li> */}

                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Social Media */}
            <div>
              <h2 className="text-white text-lg font-semibold mb-4">
                Follow Us
              </h2>
              <div className="flex space-x-4 text-2xl justify-center ">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} aria-label={link.label}>
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h2 className="text-white text-lg font-semibold mb-4">
                Contact Us
              </h2>
              <div className="flex items-center justify-center gap-2">
                <FaMapMarkerAlt className="text-white" />
                <p>Telford,UK</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <FaMapMarkerAlt className="text-white" />
                <p>TF1 6TH</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MdOutlineMail className="text-white" />
                <a
                  href="mailto:eraya@insturment.com"
                  className="text-blue-400 hover:underline"
                >
                  info@eraya.uk
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <FaPhoneAlt className="text-white" />
                <a
                  href="tel:+11234567890"
                  className="text-blue-400 hover:underline"
                >
                  07494306431
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} ERAYA. All rights reserved.</p>
          </div>
        </div>
      </FallingStarsBackground>
    </footer>
  );
}
