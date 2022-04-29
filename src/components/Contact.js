import React from "react";

const Contacts = () => {
  return (
    <div className="w-1/2 m-auto space-y-8" id="Contact">
      <div className="space-x-4">
        <span className="text-green-300 text-xl font-semibold">03.</span>
        <span className="font-bold text-2xl text-white">Get In Touch</span>
      </div>
      <div className="flex flex-col items-start space-y-4">
        <span className="flex-wrap leading-relaxed text-gray-500">
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </span>
        <a
          href="mailto:mohsen.r.shahbakhsh@gmail.com?Subject=Hello%20User"
          className="px-4 py-2.5 border rounded border-green-500 text-green-300"
        >
          Say Hello
        </a>
      </div>
    </div>
  );
};

export default Contacts;
