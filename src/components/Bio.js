import React from "react";

const Bio = () => {
  return (
    <div className="w-1/2">
      <span className="text-green-300 text-lg leading-relaxed">
        Hi, my name is
      </span>{" "}
      <br />
      <span className="text-white font-bold text-3xl leading-relaxed">
        Mohsen Shahbakhsh.
      </span>
      <br />
      <br />
      <div className="w-3/4 text-xl font-semibold text-gray-300 leading-relaxed">
        I'm a software engineer specializing in SaaS development, Intrested in
        system architecture and devops practices.
      </div>
    </div>
  );
};

export default Bio;
