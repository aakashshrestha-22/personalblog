"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaHome,
  FaUserAlt,
  FaCalendarAlt,
  FaCog,
  FaBars,
  FaTimes,
  FaBookReader,
  FaPlane,
  FaHotel,
  FaPizzaSlice,
} from "react-icons/fa";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className=" fixed min-h-screen md:w-60 w-40  ">
      <div className="md:hidden cursor-pointer" onClick={toggleSidebar}>
        {showSidebar ? (
          <FaTimes className="text-2xl text-gray-800" />
        ) : (
          <FaBars className="text-2xl text-gray-800" />
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`${
          showSidebar ? "block" : "hidden"
        } md:block bg-gray-800 text-white h-screen py-8 px-4 text-2xl`}
      >
        {/* <h2 className="text-2xl font-semibold mb-6">Sidebar</h2> */}
        <nav className="md:mt-5">
          <ul>
            <li className="mb-5">
              <Link
                href="/"
                className="flex items-center text-gray-300 hover:text-white"
                onClick={toggleSidebar}
              >
                <FaHome className="mr-2" />
                Home
              </Link>
            </li>
            <li className="mb-5">
              <Link
                href="/profile"
                className="flex items-center text-gray-300 hover:text-white"
                onClick={toggleSidebar}
              >
                <FaPlane className="mr-2" />
                Travels
              </Link>
            </li>
            <li className="mb-5">
              <Link
                href="/calendar"
                className="flex items-center text-gray-300 hover:text-white"
                onClick={toggleSidebar}
              >
                <FaHotel className="mr-2" />
                Interiors
              </Link>
            </li>
            <li className="mb-5">
              <Link
                href="/settings"
                className="flex items-center text-gray-300 hover:text-white"
                onClick={toggleSidebar}
              >
                <FaBookReader className="mr-2" />
                Poem
              </Link>
            </li>
            <li className="mb-5">
              <Link
                href="/settings"
                className="flex items-center text-gray-300 hover:text-white"
                onClick={toggleSidebar}
              >
                <FaPizzaSlice className="mr-2" />
                Food
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
