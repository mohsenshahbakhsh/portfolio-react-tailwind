import React from "react";
const Experience = () => {
  return (
    <div className="w-1/2 m-auto space-y-8" id="Experience">
      <div className="space-x-4">
        <span className="text-green-300 text-xl font-semibold">02.</span>
        <span className="font-bold text-2xl text-white">Experience</span>
      </div>
      {/* experience */}
      <div className="flex flex-col md:flex-row md:space-x-32 md:space-y-0 space-y-8">
        {/* positions */}
        <ul className="flex flex-wrap flex-col space-y-2">
          <li className="mr-2">
            <button
              id="btn_full"
              onClick={(e) => {
                if (!e.currentTarget.classList.contains("border")) {
                  e.currentTarget.classList.toggle("border");
                  e.currentTarget.classList.toggle("border-green-500");
                  e.currentTarget.classList.toggle("text-white");
                  e.currentTarget.classList.toggle("text-green-300");
                  const ul = document.getElementById("ul_full");
                  ul.classList.toggle("flex");
                  ul.classList.toggle("hidden");
                }
                const btn_dev = document.getElementById("btn_dev");
                if (btn_dev.classList.contains("border")) {
                  btn_dev.classList.toggle("border");
                  btn_dev.classList.toggle("border-green-500");
                  btn_dev.classList.toggle("text-green-300");
                  const ul = document.getElementById("ul_dev");
                  ul.classList.toggle("flex");
                  ul.classList.toggle("hidden");
                }
              }}
              className="w-28 inline-block py-2.5 px-4 font-semibold hover:bg-gray-900 rounded text-left border border-green-500 text-green-300"
            >
              Full-Stack
            </button>
          </li>
          <li className="mr-2">
            <button
              id="btn_dev"
              onClick={(e) => {
                if (!e.currentTarget.classList.contains("border")) {
                  e.currentTarget.classList.toggle("border");
                  e.currentTarget.classList.toggle("border-green-500");
                  e.currentTarget.classList.toggle("text-green-300");
                  const ul = document.getElementById("ul_dev");
                  ul.classList.toggle("flex");
                  ul.classList.toggle("hidden");
                }
                const btn_full = document.getElementById("btn_full");
                if (btn_full.classList.contains("border")) {
                  btn_full.classList.toggle("border");
                  btn_full.classList.toggle("border-green-500");
                  btn_full.classList.toggle("text-green-300");
                  btn_full.classList.toggle("text-white");
                  const ul = document.getElementById("ul_full");
                  ul.classList.toggle("flex");
                  ul.classList.toggle("hidden");
                }
              }}
              className="w-28 inline-block py-2.5 px-4 font-semibold text-white hover:bg-gray-900 rounded text-left"
            >
              DevOps
            </button>
          </li>
        </ul>
        <ul
          id="ul_full"
          className="flex flex-col space-y-2.5 text-gray-400 leading-relaxed font-semibold"
        >
          <li className="w-full flex flex-row space-x-4 items-center">
            <span className="text-sm text-green-300">ᐅ</span>
            <span className="tracking-tight">
              Design and implemented RESTful web services based on microservices
              architecture.
            </span>
          </li>
          <li className="w-full flex flex-row items-center space-x-4">
            <span className="text-sm text-green-300">ᐅ</span>
            <span className="tracking-tight">
              Troubleshoot and fix the bugs to ensure highest level of quality.
            </span>
          </li>
          <li className="w-full flex flex-row items-center space-x-4">
            <span className="text-sm text-green-300">ᐅ</span>
            <span className="tracking-tight">
              Provided prompt solutions for subtle issues in inter-service
              communication.
            </span>
          </li>
          <li className="w-full flex flex-row space-x-4 items-center">
            <span className="text-sm text-green-300">ᐅ</span>
            <span className="tracking-tight">
              {" "}
              Incorporated in-memory database to store and organize dynamic data
              structures.
            </span>
          </li>
          <li className="w-full flex flex-row items-center space-x-4">
            <span className="text-sm text-green-300">ᐅ</span>
            <span className="tracking-tight">
              Scheduled cron-jobs to complete repetitive tasks automatically.
            </span>
          </li>
        </ul>
        <ul
          id="ul_dev"
          className="hidden flex-col space-y-2.5 text-gray-400 leading-relaxed font-semibold"
        >
          <li className="w-full flex flex-row space-x-4 items-center">
            <span className="text-sm text-green-300">ᐅ</span>
            <span className="tracking-tight">
              Configured a nginx reverse proxy to forward requests to back-end
              servers.
            </span>
          </li>
          <li className="w-full flex flex-row items-center space-x-4">
            <span className="text-sm text-green-300">ᐅ</span>
            <span className="tracking-tight">
              Setup a monitoring system to trace requests and record real-time
              metrics to facilitate troubleshooting.
            </span>
          </li>
          <li className="w-full flex flex-row items-center space-x-4">
            <span className="text-sm text-green-300">ᐅ</span>
            <span className="tracking-tight">
              Utilized jenkins server to build a pipeline and automate the
              delivery phase.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
