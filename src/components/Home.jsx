import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaSquareJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";
import pic from "../../public/photo.avif";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl"> Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span className="text-red-700 font-bold">devloper</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Devloper", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              omnis ut. Culpa velit accusamus voluptatum, repellat sint
              reprehenderit maxime aliquid.
            </p>
            <br />

            {/* social media icons */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.facebook.com/SAJiD23.0?mibextid=ZbWKwL"
                      target="blank"
                    >
                      <FaFacebookSquare className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="http://www.linkedin.com" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/SAJID-MUHAMMAD" target="_blank">
                      <FaSquareGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="http://www.whatsapp.com" target="_blank">
                      <FaWhatsappSquare className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold ">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiHtml5 className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiCss3 className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaSquareJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiNextdotjs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              alt=""
              className="rounded-full md:h-[450px] md:w-[450px]"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
