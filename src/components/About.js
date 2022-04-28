import React from "react";
import profile from "../assets/images/profile.png";

const About = () => {
  return (
    <div className="w-1/2 m-auto space-y-4" id="About">
      <div className="space-x-4">
        <span className="text-green-300 text-xl font-semibold">01.</span>
        <span className="font-bold text-3xl text-white">About Me</span>
      </div>
      {/* about me */}
      <div className="flex flex-col md:flex-row">
        <div>
          <div className="flex-wrap leading-relaxed w-3/4 text-gray-400">
            Hello! My name is Mohsen and I enjoy creating things that live on
            the internet. Able to deliver decent work, Committed to learning and
            self-development and flexible to learn new technologies. Offering
            productive communication and good judgment.
          </div>
          <br />
          {/* technologies */}
          <div className="flex flex-col justify-start space-y-4">
            <span className="flex-wrap leading-relaxed text-gray-400">
              Here are a few technologies i've been working with recently:
            </span>
            <div className="md:w-1/2 gap-2 grid grid-cols-2 grid-rows-4 text-white">
              <div className="w-full flex flex-row space-x-2">
                <span className="text-green-300">ᐅ</span>
                <span className="tracking-tight">Node.js</span>
              </div>
              <div className="w-full flex flex-row space-x-2">
                <span className="text-green-300">ᐅ</span>
                <span className="tracking-tight">JavaScript</span>
              </div>
              <div className="w-full flex flex-row space-x-2">
                <span className="text-green-300">ᐅ</span>
                <span className="tracking-tight">TypeScript</span>
              </div>
              <div className="flex flex-row space-x-2">
                <span className="text-green-300">ᐅ</span>
                <span className="tracking-tight">Python</span>
              </div>
              <div className="flex flex-row space-x-2">
                <span className="text-green-300">ᐅ</span>
                <span className="tracking-tight">NestJs</span>
              </div>
              <div className="flex flex-row space-x-2">
                <span className="text-green-300">ᐅ</span>
                <span className="tracking-tight">React</span>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-64 h-32 md:w-full md:h-64 rounded"
          src={profile}
          alt="profile_img"
        />
      </div>
    </div>
  );
};

export default About;
