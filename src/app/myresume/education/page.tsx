"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MobileSidebar from "@/components/MobileSidebar";
import Image from "next/image";

const skills = [
  { src: "/svg/HTML5.svg", alt: "HTML", name: "HTML" },
  { src: "/svg/CSS3.svg", alt: "CSS", name: "CSS" },
  { src: "/svg/JavaScript.svg", alt: "JavaScript", name: "JavaScript" },
  { src: "/svg/React.svg", alt: "React", name: "React" },
  { src: "/svg/Next.js.svg", alt: "Next.js", name: "Next.js" },
  { src: "/svg/PHP.svg", alt: "PHP", name: "PHP" },
  { src: "/svg/Laravel.svg", alt: "Laravel", name: "Laravel" },
  { src: "/svg/MongoDB.svg", alt: "MongoDB", name: "MongoDB" },
  { src: "/svg/Figma.svg", alt: "Figma", name: "Figma" },
];

export default function EducationAndSkills() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <section className="flex min-h-screen relative pb-20">
      <div className="hidden lg:block">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      <div className="lg:hidden">
        <MobileSidebar />
      </div>

      <div
        className={`transition-all duration-300 ease-in-out ${
          collapsed ? "lg:ml-20" : "lg:ml-60"
        } w-full`}
      >
        <div className="flex-grow p-8 lg:p-12 pb-20">
          <h1 className="text-4xl font-semibold mb-8 title">My Resume</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-lg">
              <h2 className="text-3xl font-semibold mb-4 text-gray-700">
                Education
              </h2>

              <div className="p-6 rounded-lg mb-6 effect">
                <h3 className="text-xl font-semibold text-gray-800">
                  BSc (Hons) Computer Systems Engineering
                </h3>
                <p className="text-gray-600 font-bold">ISMT Collage</p>
                <p className="mt-2 text-gray-500 text-justify">
                  I am a BSc (Hons) Computer Systems Engineering student with a
                  strong foundation in web development and cybersecurity. My
                  studies have involved hands-on projects in software
                  engineering and AI-driven solutions, enhancing my technical
                  and problem-solving skills. This education has prepared me for
                  a dynamic career in software engineering, and technology
                  innovation.
                </p>
                <p className="mt-2 text-gray-500">
                  <strong className="text-gray-600">
                    Relevant Coursework:&nbsp;
                  </strong>
                  Data Structures, Algorithms, Web Development, Database Systems
                </p>
              </div>
            </div>

            <div className="rounded-lg">
              <h2 className="text-3xl font-semibold mb-4 text-gray-700">
                Skills
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center transition-transform transform hover:scale-105 p-4 effect"
                  >
                    <Image
                      src={skill.src}
                      alt={skill.alt}
                      height={40}
                      width={40}
                    />
                    <p className="text-gray-600 mt-2">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
