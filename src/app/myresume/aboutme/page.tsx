"use client";

import Sidebar from "@/components/Sidebar";
import MobileSidebar from "@/components/MobileSidebar";
import Image from "next/image";
import { useState } from "react";

const aboutUs = {
  description:
    "Passionate web developer with over one years of experience in building and maintaining web applications.",
  experience: "1+ years",
  nationality: "Nepalese",
  email: "pundipesh091@gmail.com",
  freelance: "Available",
  language: "English, Nepali",
};

export default function MyResume() {
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
        <div className="flex-grow p-8 lg:p-12 pb-20 lg:pb-28">
          <h1 className="text-4xl font-bold mb-8 title">My Resume</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="effect rounded-xl p-6 flex flex-col">
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                About Me
              </h2>
              <p className="text-gray-600 mb-3 leading-relaxed">
                {aboutUs.description}
              </p>
              <p className="text-gray-600 mb-6 font-semibold leading-relaxed">
                {aboutUs.email}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="space-y-2">
                  <div>
                    <strong className="title mr-3">Experience:</strong>
                    {aboutUs.experience}
                  </div>
                  <div>
                    <strong className="title mr-3">Nationality:</strong>
                    {aboutUs.nationality}
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <strong className="title mr-3">Freelance:</strong>
                    {aboutUs.freelance}
                  </div>
                  <div>
                    <strong className="title mr-3">Language:</strong>
                    {aboutUs.language}
                  </div>
                </div>
              </div>
            </div>

            <div className="effect-inner rounded-xl p-6 flex flex-col">
              <div className="relative w-full h-64 lg:h-96 border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/about-me.png"
                  alt="About Me"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
