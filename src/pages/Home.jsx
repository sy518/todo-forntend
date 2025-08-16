import React from "react";
import Navbar from "../componenet/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Navbar />

      <header className="max-w-[800px] w-full  shadow-xl transition-transform duration-500 hover:-rotate-x-3 hover:-rotate-y-3 hover:scale-95  bg-white/60 rounded-2xl mx-auto mt-40 p-4">
        <div className="text-amber-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left side: Text */}
            <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left">
              <h2 className="text-2xl font-bold p-2">The PORTFOLIO APP</h2>
              <p className="text-lg px-4 md:px-0 max-w-md">
                Portfolio App – A personal portfolio website built with React,
                designed to showcase projects, skills, and experience in a clean
                and responsive layout. It highlights my journey as a developer
                and provides an easy way for others to explore my work.
              </p>
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md">
                <Link to="/Signup">Signup Now!</Link>
              </button>
            </div>

            {/* Right side: Image */}
            <div>
              <img
                src="./todo.png"
                alt="Todo Illustration"
                className="w-[250px] md:w-[300px]"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
