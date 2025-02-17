"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "01.",
    title: "Job Vacancy Portal",
    description:
      "A job portal web application that allows users to apply for vacancy and manage job vacancy effectively.",
    technologies: ["Laravel", "XAMPP", "MySQL", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/DipeshPun91/job_portal_website_laravel_10",
    image: "/images/project.jpg",
  },
  {
    id: "02.",
    title: "Live Streaming Platform",
    description:
      "A live streaming website that allows user to view live stream, match highlight, and schedule, also administrator have CRUD funtionality to manage content.",
    technologies: ["Laravel", "XAMPP", "MySQL", "HTML", "CSS", "JavaScript"],
    githubLink:
      "https://github.com/DipeshPun91/live_streaming_website_laravel_10",
    image: "/images/project.jpg",
  },
  {
    id: "03.",
    title: "Service Inquiry Portal",
    description:
      "A service inquiry web application with chat bot and inquiry fulctionality for users and CRUD functionality for managing content and sending inquiry feedback",
    technologies: ["Laravel", "XAMPP", "MySQL", "HTML", "CSS", "JavaScript"],
    githubLink: "",
    image: "/images/project.jpg",
  },
  {
    id: "04.",
    title: "To-Do App",
    description:
      "A web application that allows users to create and manage tasks effectively.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    githubLink:
      "https://github.com/DipeshPun91/todo_app_using_next.js_and_tailwind_css",
    image: "/images/project.jpg",
  },
  {
    id: "05.",
    title: "Portfolio Website",
    description:
      "A portfolio website showcasing personal projects and achievements.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Nodemailer"],
    githubLink: "",
    image: "/images/project.jpg",
  },
  {
    id: "06.",
    title: "Expense Tracker",
    description:
      "A espense tracker web application that allows users to track income and expenses, visualize spending patterns, and generate reports.",
    technologies: ["Node.js", "Socket.IO", "Express"],
    githubLink: "",
    image: "/images/project.jpg",
  },
];

export default function MyWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <Header />
      <section>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="p-4 md:w-1/3 cursor-pointer"
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 1,
                    duration: 1,
                    ease: "easeInOut",
                  },
                }}
              >
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden effect">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={project.image}
                    alt={project.title}
                    width={720}
                    height={400}
                    priority
                  />
                  <div className="p-6 flex flex-row items-center">
                    <h1 className="text-2xl sm:text-3xl mr-3 font-bold uppercase title">
                      {project.id}
                    </h1>
                    <h2 className="text-2xl sm:text-3xl font-semibold">
                      {project.title}
                    </h2>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-primary bg-opacity-70 flex justify-center items-center">
          <div className="bg-[#e0e4e7] rounded-lg p-8 relative max-w-4xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  opacity: {
                    delay: 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  },
                  y: {
                    delay: 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <div className="lg:flex lg:space-x-6">
                <Image
                  alt={selectedProject.title}
                  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                  src={selectedProject.image}
                  width={400}
                  height={400}
                  priority
                />
                <div className="lg:w-1/2 mt-6 lg:mt-0 p-6 effect">
                  <h1 className="text-4xl sm:text-5xl mb-2 font-bold uppercase title">
                    {selectedProject.id}
                  </h1>
                  <h2 className="text-2xl sm:text-3xl font-semibold uppercase">
                    {selectedProject.title}
                  </h2>
                  <p className="leading-relaxed mt-4 text-gray-500">
                    {selectedProject.description}
                  </p>
                  <ul className="mt-4">
                    {selectedProject.technologies.map((tech, index) => (
                      <li key={index} className="text-sm text-gray-700">
                        ➤ {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-row justify-between items-center mt-4">
                    <Link
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="effect px-6 py-2 rounded-full hover:bg-accent-HOVER text-dark bg-accent font-semibold transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .5c-6.628 0-12 5.373-12 12 0 5.301 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.728-4.042-1.61-4.042-1.61-.546-1.385-1.334-1.754-1.334-1.754-1.091-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.774.418-1.305.76-1.605-2.665-.303-5.467-1.333-5.467-5.931 0-1.31.469-2.382 1.235-3.221-.123-.304-.536-1.524.117-3.176 0 0 1.008-.323 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.298-1.23 3.298-1.23.654 1.652.242 2.872.119 3.176.769.839 1.234 1.911 1.234 3.221 0 4.61-2.805 5.625-5.475 5.92.43.372.814 1.104.814 2.226 0 1.606-.015 2.902-.015 3.297 0 .321.217.694.825.575 4.765-1.585 8.2-6.083 8.2-11.382 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </Link>

                    <Link
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="effect px-6 py-2 rounded-full hover:bg-accent-HOVER text-dark bg-accent font-semibold transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"></path>
                      </svg>
                    </Link>

                    <button
                      className="effect px-6 py-2 rounded-full hover:bg-accent-HOVER text-dark bg-accent font-semibold transition-all"
                      onClick={() => setSelectedProject(null)}
                    >
                      ✖
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
