import React from "react";
import profile from "../assets/images/profile.png";

const About = () => {
  return (
    <div className="w-1/2 m-auto space-y-8" id="About">
      <div className="space-x-4">
        <span className="text-green-300 text-xl font-semibold">01.</span>
        <span className="font-bold text-2xl text-white">About Me</span>
      </div>
      {/* about me */}
      <div className="flex flex-col md:flex-row">
        <div className="w-full">
          <div className="flex-wrap leading-relaxed w-3/4 text-gray-400 font-semibold">
            Hello! My name is Mohsen and i'm intrested in web development. My
            primary focus is Back-End, Occasionally I build things with react.
            I'm Curious, Have a spirit of learning and responsibility, And like
            experimenting with new technologies and techniques.
          </div>
          <br />
          {/* technologies */}
          <div className="flex flex-col justify-start space-y-4">
            <span className="flex-wrap leading-relaxed text-gray-400 font-semibold">
              Here are a few technologies i've been working with recently:
            </span>
            <div className="md:w-1/2 gap-2 grid grid-cols-2 grid-rows-4 text-gray-400 font-semibold">
              <div className="w-full flex flex-row items-center space-x-2">
                <span className="text-sm text-green-300 font-semibold">ᐅ</span>
                <span className="tracking-tight font-semibold">Node.js</span>
              </div>
              <div className="w-full flex flex-row items-center space-x-2">
                <span className="text-sm text-green-300 font-semibold">ᐅ</span>
                <span className="tracking-tight">JavaScript</span>
              </div>
              <div className="w-full flex flex-row items-center space-x-2">
                <span className="text-sm text-green-300 font-semibold">ᐅ</span>
                <span className="tracking-tight font-semibold">TypeScript</span>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <span className="text-sm text-green-300 font-semibold">ᐅ</span>
                <span className="tracking-tight font-semibold">Python</span>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <span className="text-sm text-green-300 font-semibold">ᐅ</span>
                <span className="tracking-tight font-semibold">NestJs</span>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <span className="text-sm text-green-300 font-semibold">ᐅ</span>
                <span className="tracking-tight font-semibold">React</span>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-64 h-32 md:w-1/2 md:h-64 rounded opacity-50 hover:opacity-90"
          src={profile}
          alt="profile_img"
        />
      </div>
    </div>
  );
};

export default About;
