import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";

function Navbar() {
  const [nav, setNav] = useState(false);
  const toggle = () => {
    setNav(!nav);
    console.log("toggle:");
  };
  return (
    <div className=" navbar rounded-3xl ">
      <nav className=" justify-between flex">
        <div className="flex">
          <h1 className="text-2xl text-amber-800 m-2 uppercase font-bold">
            My Portfolio
          </h1>
        </div>
        <div className="">
          <ul className=" gap-5 text-xl uppercase  navbar hidden md:flex ">
            <li>
              <Link
                to="/"
                className="relative text-[15px] hover:text-amber-600 mr-[30px] no-underline  "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Signup"
                className="relative text-[15px]  hover:text-amber-600 mr-[30px] no-underline  "
              >
                Signup
              </Link>
            </li>
            <li>
              <Link
                to="/Login"
                className="relative text-[15px]  hover:text-amber-600 mr-[30px] no-underline "
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="relative text-[15px]   hover:text-amber-600 mr-[30px] no-underline "
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="relative text-[15px]   hover:text-amber-600 mr-[30px] no-underline "
              >
                Portfolio
              </Link>
            </li>
          </ul>
          <button
            onClick={toggle}
            className="md:hidden block text-2xl text-amber-600 m-3"
          >
            <FiAlignJustify />
          </button>
        </div>
      </nav>
      {nav && (
        <div>
          <ul className="flex gap-3 flex-col text-xl uppercase text-amber-600  m-4 p-4  md:hidden">
            <li>
              <Link to="/" className=" ">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Signup"
                className="border-t border-gray-700 w-full  mb-3"
              >
                Signup
              </Link>
            </li>
            <li>
              <Link to="/Login" className="border-t border-gray-700 mb-3">
                Login
              </Link>
            </li>
            <li>
              <Link to="/profile" className="border-t border-gray-700 mb-3">
                profile
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="border-t border-gray-700 mb-3">
                portfolio
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
