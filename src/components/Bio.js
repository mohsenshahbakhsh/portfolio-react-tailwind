import React from "react";

const Bio = () => {
  return (
    <div className="w-1/2 font-OpenSansRegular">
      <span className="text-green-300 text-lg leading-relaxed">
        Hi, my name is
      </span>{" "}
      <br />
      <span className="text-white font-bold text-3xl leading-relaxed">
        Mohsen Shahbakhsh.
      </span>
      <br />
      <br />
      <span className="text-xl font-semibold text-gray-300 leading-relaxed">
        I'm a software engineer intrested in system architecture and devops
        practices.
      </span>
      <br />
      <br />
      <span className="flex-wrap text-lg text-gray-400 leading-relaxed">
        Able to deliver decent work, Committed to learning and self-development
        and flexible to learn new technologies. Offering productive
        communication and good judgment.
      </span>
    </div>
  );
};

export default Bio;
