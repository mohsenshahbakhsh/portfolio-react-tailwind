import React from "react";

const Header = () => {
  return (
    <nav className="rounded shadow-sm border-b border-gray-700 px-8 py-4">
      <ul
        id="nav"
        className="h-full flex flex-row justify-end items-center space-x-8"
      >
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        <li>
          <a href="#Work">Work</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
        <li>
          <button className="bg-transparent border rounded border-green-400 px-4 py-2 text-green-400 text-sm tracking-tight">
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;