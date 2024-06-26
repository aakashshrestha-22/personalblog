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
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
export default function Sidebar() {
  const {
    formState: { isSubmitting },
  } = useForm();
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Log Out Successfull");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
      toast.error("error");
    }
  };
  return (
    <div className=" fixed z-40 min-h-screen md:w-60  w-40  ">
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
                href="/profile"
                className="flex items-center text-gray-300 hover:text-white"
                onClick={toggleSidebar}
              >
                <FaHome className="mr-2" />
                Home
              </Link>
            </li>
            <li className="mb-5">
              <Link
                href="/travels"
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
        <button
          className=" bg-red-500 px-2 py-2 rounded-md text-xl mt-10 "
          onClick={logout}
        >
          {isSubmitting ? "Logging Out.." : "Log Out"}
        </button>
      </div>
    </div>
  );
}
