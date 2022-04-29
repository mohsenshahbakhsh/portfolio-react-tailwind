import React from "react";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import About from "./components/About";
import Bio from "./components/Bio";
import Experience from "./components/Experience";

import Navbar from "./Navbar";

function App() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("mohsen.r.shahbakhsh@gmail.com");
  return (
    <div className="inset-0 bg-gray-800 font-OpenSansRegular">
      {/* header */}
      <Navbar />
      {/* content */}
      <div className="flex flex-col items-center justify-center space-y-64 py-48">
        <Bio />
        <About />
        <Experience />
      </div>
      {/* footer */}
      {/* email */}
      <div className="fixed bottom-0 right-8">
        <div className="flex flex-col justify-center items-center transform-gpu translate-x-24">
          <a
            href="mailto:mohsen.r.shahbakhsh@gmail.com?Subject=Hello%20User"
            className="text-sm text-green-400 origin-bot transform-gpu -translate-y-28 rotate-90"
          >
            {email}
          </a>
          <div className="h-20 border-l border-green-500" />
        </div>
      </div>
      {/* social */}
      <div className="fixed bottom-0 left-8">
        <div className="flex flex-col justify-center items-center space-y-4">
          <a href="https://github.com/mohsenshahbakhsh">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 hover:text-green-300 text-white"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/mohsen-shahbakhsh-32ab761a4/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 hover:text-green-300 text-white"
            >
              <title>LinkedIn</title>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <div className="h-20 border-l border-green-500" />
        </div>
      </div>
    </div>
  );
}

export default App;
