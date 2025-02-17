"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", src: "/svg/Home.svg", alt: "Home" },
  {
    href: "/myresume/education",
    src: "/svg/Education.svg",
    alt: "Education",
  },
  {
    href: "/myresume/experience",
    src: "/svg/Experience.svg",
    alt: "Experience",
  },
  {
    href: "/myresume/aboutme",
    src: "/svg/AboutMe.svg",
    alt: "About Me",
  },
];

const MobileSidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed z-50 bottom-0 w-full transition-all ease-in-out">
      <ul className="flex justify-around w-full p-4 items-center rounded-lg bg-primary">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} passHref>
              <button
                className={`flex items-center gap-2 effect text-black p-3 rounded-full bg-transparent transition ease-in-out transform hover:translate-y-[-3px] cursor-pointer ${
                  pathname === link.href ? "effect-inner border-accent" : ""
                }`}
              >
                <Image src={link.src} alt={link.alt} height={20} width={20} />
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileSidebar;
