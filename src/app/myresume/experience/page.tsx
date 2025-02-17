"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import MobileSidebar from "@/components/MobileSidebar";
import { useState } from "react";

const experiences = [
  {
    title: "Job Vacancy Portal",
    company: "Personal Project",
    description:
      "Created a robust Job Vacancy Portal using Laravel, showcasing proficiency in full-stack web development and efficient, scalable solutions for job seekers and employers. It enables administrators to manage job vacancy and job seekers to apply for job.",
  },
  {
    title: "Live Streaming Platform",
    company: "Personal Project",
    description:
      "Created a Live Streaming Platform using Laravel. It enables administrators to manage content efficiently, add highlights, embed YouTube links, schedule games, and update galleries. The user-friendly interface showcases expertise in full-stack web development.",
  },
  {
    title: "Service Inquiry Portal",
    company: "Personal Project",
    description:
      "Created a user-friendly Service Inquiry Portal using Laravel. It allows visitors to inquire about services, pricing, related queries, administrator have CRUD functionality for managing solutions, galleries, and sending inquiry feedback, showcasing proficiency in full-stack web development.",
  },
  {
    title: "To-Do App",
    company: "Personal Project",
    description:
      "Created a dynamic To-Do App using Next.js, a React framework, for efficient task management. It features a clean interface, tracking progress, and organization. This project showcases front-end development skills and modern web technologies' ability to create interactive, responsive web applications.",
  },
  {
    title: "Expense Tracker",
    company: "Personal Project",
    description:
      "Created an Expense Tracker using Next.js, a React framework, allowing users to track income and expenses, visualize spending patterns, and generate reports. The user-friendly interface and real-time updates make budgeting and financial planning efficient.",
  },
  {
    title: "Portfolio Website",
    company: "Personal Project",
    description:
      "A professional Portfolio Website using Next.js, a React framework, to showcases my web development expertise, featuring detailed project descriptions, personal biography, and contact information. The website emphasizes performance and aesthetics, showcasing my ability to create engaging web experiences.",
  },
];

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
        <div className="flex-grow p-8 lg:p-12">
          <h1 className="text-4xl font-bold mb-8 title">My Resume</h1>

          <div id="work-experience" className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-gray-700">
              Work Experience
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg transition-transform transform hover:scale-105 effect"
                >
                  <p className="text-xl font-semibold text-gray-800">
                    {experience.title}
                  </p>
                  <p className="text-gray-600">{experience.company}</p>
                  <p className="mt-2 text-gray-500">{experience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
