"use client";

import MobileNav from "./MobileNav";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/myservice", label: "Service" },
  { href: "/myresume/education", label: "Resume" },
  { href: "/mywork", label: "Work" },
  { href: "/contactme", label: "Contact Me" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="container mx-auto flex p-5 items-center justify-between">
        <a className="flex title-font font-medium items-center text-black">
          <svg
            fill="#000000"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 p-2 bg-accent rounded-full"
          >
            <path d="M112.31,268l40.36-68.69,34.65,59-67.54,115h135L289.31,432H16Zm58.57-99.76,33.27-56.67L392.44,432H325.76ZM222.67,80h66.59L496,432H429.32Z"></path>
          </svg>
          <h1 className="ml-3 text-4xl font-primary title">
            Dipesh
            <span className="text-accent">.</span>
          </h1>
        </a>

        <div className="hidden md:flex items-center md:ml-auto">
          <nav className="flex flex-wrap items-center text-base justify-center">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`mr-5 relative hover:text-accent after:content-[''] after:block after:w-full after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 ${
                  pathname === link.href
                    ? "text-accent font-semibold text-lg"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button className="effect px-6 py-2 rounded-full bg-[#21E6C1] hover:bg-accent-HOVER dark:text-dark dark:bg-accent text-black font-semibold transition-all">
            <Link href="/contactme">Hire Me</Link>
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
