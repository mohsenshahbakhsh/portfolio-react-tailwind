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
            Hello! My name is Mohsen, I'm a software developer specializing in web development.
            I'm enthusiastic, compassionate, spiritual, And like to swim, read and meditate.
          </div>
          <br />
          {/* technologies */}
          <div className="flex flex-col justify-start space-y-4">
            <span className="flex-wrap leading-relaxed text-gray-400 font-semibold">
              Here are a few technologies I've been working with recently:
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
              <div className="flex flex-row items-center space-x-2">
                <span className="text-sm text-green-300 font-semibold">ᐅ</span>
                <span className="tracking-tight font-semibold">Docker</span>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <span className="text-sm text-green-300 font-semibold">ᐅ</span>
                <span className="tracking-tight font-semibold">
                  SQL(postgresql), MongoDB
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* w-64 h-32 */}
        <img
          className="pt-4 md:w-1/3 md:h-1/3 rounded opacity-60 hover:opacity-90"
          src={profile}
          alt="profile_img"
        />
      </div>
    </div>
  );
};

export default About;
