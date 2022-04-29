import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 sticky top-0 rounded shadow-sm border-b border-gray-700 px-8 py-4 flex justify-end z-10">
      <ul className="hidden text-white md:inline-flex justify-end items-center space-x-8">
        <li>
          <span className="text-green-300 text-sm font-semibold pr-2">01.</span>
          <Link to="#About" className="hover:text-green-300 font-semibold">
            About
          </Link>
        </li>
        <li className="">
          <span className="text-green-300 text-sm font-semibold pr-2">02.</span>
          <Link to="#Experience" className="hover:text-green-300 font-semibold">
            Experience
          </Link>
        </li>
        {/*
        <li className="">
          <span className="text-green-300 text-sm font-semibold pr-2">03.</span>
          <Link to="#Work" className="hover:text-green-300 font-semibold">
            Work
          </Link>
        </li> */}
        <li className="">
          <span className="text-green-300 text-sm pr-2 font-semibold">03.</span>
          <Link to="#Contact" className="hover:text-green-300 font-semibold">
            Contact
          </Link>
        </li>
        <li>
          <button className="bg-transparent border rounded border-green-400 px-4 py-2 text-green-400 text-sm">
            Resume
          </button>
        </li>
      </ul>
      <div className="inline-flex items-start justify-between" id="nav">
        <div className="md:hidden flex items-center">
          <button
            className="outline-none"
            onClick={(e) => {
              const menu = document.getElementById("mobile-menu");
              const nav = document.getElementById("nav");
              menu.classList.toggle("hidden");
              nav.classList.toggle("w-full");
            }}
          >
            <svg
              className=" w-6 h-6 text-gray-500 hover:text-green-400 "
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className="hidden" id="mobile-menu">
          {" "}
          <ul className="flex flex-col space-y-2 text-white">
            <li
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                const nav = document.getElementById("nav");
                menu.classList.toggle("hidden");
                nav.classList.toggle("w-full");
              }}
            >
              <span className="text-green-300 text-sm pr-2 font-semibold">
                01.
              </span>
              <Link to="#About" className="hover:text-green-300 font-semibold">
                About
              </Link>
            </li>
            <li
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                const nav = document.getElementById("nav");
                menu.classList.toggle("hidden");
                nav.classList.toggle("w-full");
              }}
            >
              <span className="text-green-300 text-sm pr-2 font-semibold">
                03.
              </span>
              <Link
                to="#Experience"
                className="hover:text-green-300 font-semibold"
              >
                Experience
              </Link>
            </li>
            {/* <li
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                const nav = document.getElementById("nav");
                menu.classList.toggle("hidden");
                nav.classList.toggle("w-full");
              }}
            >
              <span className="text-green-300 text-sm pr-2 font-semibold">
                03.
              </span>
              <Link to="#Work" className="hover:text-green-300 font-semibold">
                Work
              </Link>
            </li> */}
            <li
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                const nav = document.getElementById("nav");
                menu.classList.toggle("hidden");
                nav.classList.toggle("w-full");
              }}
            >
              <span className="text-green-300 text-sm pr-2 font-semibold">
                03.
              </span>
              <Link
                to="#Contact"
                className="hover:text-green-300 font-semibold"
              >
                Contact
              </Link>
            </li>
            <li>
              <button className="bg-transparent border rounded border-green-400 px-4 py-2 text-green-400 text-sm tracking-tight">
                Resume
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
