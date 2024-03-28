"use client";
import { Fragment, useState, useRef } from "react";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";
const navigation = [
  { name: "Home", href: "/", current: true },
  {
    name: "Categories",
    href: "#",
    current: false,
    subMenu: [
      { name: "Travels", href: "#" },
      { name: "Interiors", href: "#" },
      { name: "Personal", href: "#" },
      { name: "Food", href: "#" },
    ],
  },
  { name: "Gallery", href: "#", current: false },
  { name: "About Me", href: "/aboutme", current: false },
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
  const handleMouseLeave = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.relatedTarget)
    ) {
      setShowDropdown(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 riht-0 z-10 w-full">
      <div className=" ">
        <div className="flex justify-between bg-white shadow-md py-7 text-2xl  px-10">
          <div>LOGO</div>
          <ul className="hidden md:flex gap-10  text-[#658265]">
            {navigation?.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer pl-10 relative"
                onMouseEnter={
                  item.name === "Categories" ? handleDropdownToggle : null
                }
                onMouseLeave={
                  item.name === "Categories" ? handleMouseLeave : null
                }
              >
                <Link href={item.href}>{item?.name}</Link>

                {item.name === "Categories" && showDropdown && (
                  <div className="absolute left-0 mt-2 bg-white shadow-md p-4 rounded">
                    {item.subMenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="block hover:bg-gray-200 px-4 py-2 rounded"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div></div>
          <CiMenuBurger
            className="text-xl md:hidden cursor-pointer"
            onClick={handleShowMenu}
          />
        </div>
        {showMenu && (
          <div className="md:hidden bg-white">
            <div className="flex  justify-end px-4 shadow-md  ">
              <ul className="grid  gap-4 text-[#658265] mt-4  ">
                {navigation?.map((item, index) => (
                  <li key={index} className="cursor-pointer ">
                    {item?.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
