import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import logo from "./assets/images/favicon.ico";
const Header = () => {
  return (
    <nav className="bg-gray-800 sticky top-0 rounded shadow-sm border-b border-gray-700 px-8 py-4 flex justify-end">
      <ul className="hidden text-white md:inline-flex justify-end items-center space-x-8">
        <li>
          <Link to="#About">About</Link>
        </li>
        <li className="">
          <a href="#Experience">Experience</a>
        </li>
        <li className="">
          <a href="#Work">Work</a>
        </li>
        <li className="">
          <a href="#Contact">Contact</a>
        </li>
        <li>
          <button className="bg-transparent border rounded border-green-400 px-4 py-2 text-green-400 text-sm tracking-tight">
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
              className="focus:text-green-400"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                const nav = document.getElementById("nav");
                menu.classList.toggle("hidden");
                nav.classList.toggle("w-full");
              }}
            >
              <Link to="#About">About</Link>
            </li>
            <li
              className="focus:text-green-400"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                const nav = document.getElementById("nav");
                menu.classList.toggle("hidden");
                nav.classList.toggle("w-full");
              }}
            >
              <Link to="#Experience">Experience</Link>
            </li>
            <li
              className="focus:text-green-400"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                const nav = document.getElementById("nav");
                menu.classList.toggle("hidden");
                nav.classList.toggle("w-full");
              }}
            >
              <Link to="#Work">Work</Link>
            </li>
            <li
              className="focus:text-green-400"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                const nav = document.getElementById("nav");
                menu.classList.toggle("hidden");
                nav.classList.toggle("w-full");
              }}
            >
              <Link to="#Contact">Contact</Link>
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

export default Header;
