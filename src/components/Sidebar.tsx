"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", src: "/svg/Home.svg", alt: "Home", label: "Home" },
  {
    href: "/myresume/education",
    src: "/svg/Education.svg",
    alt: "Education",
    label: "Education",
  },
  {
    href: "/myresume/experience",
    src: "/svg/Experience.svg",
    alt: "Experience",
    label: "Experience",
  },
  {
    href: "/myresume/aboutme",
    src: "/svg/AboutMe.svg",
    alt: "About Me",
    label: "About Me",
  },
];

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const pathname = usePathname();

  return (
    <aside
      className={`h-screen p-4 fixed top-0 left-0 effect transition-all ease-in-out ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <ul className="flex flex-col h-full">
        <li className="flex justify-between items-center mb-6">
          <div className="flex items-center text-black gap-2">
            <h1
              className={`${
                collapsed
                  ? "hidden"
                  : "font-semibold text-3xl mr-4 title justify-center"
              }`}
            >
              Dipesh <span className="text-accent">.</span>
            </h1>
          </div>
          <button
            onClick={handleToggle}
            className="w-12 h-12 flex items-center justify-center effect bg-accent text-black rounded-lg hover:bg-accent-HOVER transition ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 30 30"
              className={`transform transition-transform duration-300 ${
                collapsed ? "rotate-180" : ""
              }`}
            >
              <path d="M3 7H27C27.5523 7 28 7.44772 28 8C28 8.55228 27.5523 9 27 9H3C2.44772 9 2 8.55228 2 8C2 7.44772 2.44772 7 3 7ZM3 14H27C27.5523 14 28 14.4477 28 15C28 15.5523 27.5523 16 27 16H3C2.44772 16 2 15.5523 2 15C2 14.4477 2.44772 14 3 14ZM3 21H27C27.5523 21 28 21.4477 28 22C28 22.5523 27.5523 23 27 23H3C2.44772 23 2 22.5523 2 22C2 21.4477 2.44772 21 3 21Z" />
            </svg>
          </button>
        </li>

        <div
          className={`${
            collapsed ? "hidden" : "rounded-lg p-3 text-black mt-6 mb-6"
          }`}
        >
          <p
            className={`${collapsed ? "hidden" : "font-semibold text-lg mb-2"}`}
          >
            Why hire me?
          </p>
          <p className={`${collapsed ? "hidden" : "text-sm text-gray-500"}`}>
            I’m a versatile developer skilled in both front-end and back-end,
            ready to deliver efficient, scalable solutions.
          </p>
        </div>

        <div
          className={`flex flex-col ${
            collapsed ? "justify-center items-center" : "justify-start"
          } h-full`}
        >
          {links.map((link, index) => (
            <li className="mb-4" key={index}>
              <Link
                href={link.href}
                className={`flex items-center effect gap-6 text-black p-3 rounded-lg font-semibold hover:bg-accent hover:text-black border-2 transition ease-in-out ${
                  pathname === link.href ? "effect-inner" : ""
                }`}
              >
                <Image src={link.src} alt={link.alt} height={20} width={20} />
                <span className={`${collapsed ? "hidden" : "font-semibold"}`}>
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
