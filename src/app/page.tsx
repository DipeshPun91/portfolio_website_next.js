"use client";

import Sidebar from "@/components/Sidebar";
import MobileSidebar from "@/components/MobileSidebar";
import { useState } from "react";

export default function Home() {
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
          <div className="container mx-auto flex flex-col lg:flex-row px-6 py-12 items-stretch gap-6">
            <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left p-6">
              <h1 className="text-4xl sm:text-5xl mb-4 font-bold uppercase title">
                Dipesh Pun
              </h1>
              <h2 className="text-2xl sm:text-3xl mb-4 font-semibold uppercase typing">
                Full Stack Developer
              </h2>
              <p className="mb-8 text-base sm:text-lg leading-relaxed text-gray-700">
                Full Stack Developer with expertise in building dynamic
                front-end interfaces and robust back-end systems. Committed to
                seamless integration, optimal performance, and delivering
                scalable solutions.
              </p>

              <div className="flex gap-4">
                <button className="effect px-3 py-2 rounded-lg text-black bg-accent hover:bg-accent-HOVER dark:text-dark dark:bg-accent font-semibold transition-all">
                  Download CV
                </button>
                <button className="effect px-3 py-2 rounded-full bg-accent hover:bg-accent-HOVER dark:text-dark dark:bg-accent font-semibold transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5c-6.628 0-12 5.373-12 12 0 5.301 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.728-4.042-1.61-4.042-1.61-.546-1.385-1.334-1.754-1.334-1.754-1.091-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.774.418-1.305.76-1.605-2.665-.303-5.467-1.333-5.467-5.931 0-1.31.469-2.382 1.235-3.221-.123-.304-.536-1.524.117-3.176 0 0 1.008-.323 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.298-1.23 3.298-1.23.654 1.652.242 2.872.119 3.176.769.839 1.234 1.911 1.234 3.221 0 4.61-2.805 5.625-5.475 5.92.43.372.814 1.104.814 2.226 0 1.606-.015 2.902-.015 3.297 0 .321.217.694.825.575 4.765-1.585 8.2-6.083 8.2-11.382 0-6.627-5.373-12-12-12z" />
                  </svg>
                </button>
                <button className="effect px-3 py-2 rounded-full bg-accent hover:bg-accent-HOVER dark:text-dark dark:bg-accent font-semibold transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-1 flex justify-center items-end flex-wrap py-6 gap-6">
              {[
                { label: "Experience", value: "1", h: "h-24", h1: "h-36" },
                { label: "Technology", value: "7", h: "h-44", h1: "h-52" },
                { label: "Projects", value: "10", h: "h-16", h1: "h-40" },
                { label: "Commits", value: "100", h: "h-24", h1: "h-44" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`${item.h1} w-8 flex flex-col justify-end items-center rounded-3xl effect-inner overflow-hidden`}
                  >
                    <div
                      className={`app-bg-teal w-full animate-progress rounded-3xl ${item.h} flex items-center justify-center`}
                    >
                      <span className="text-sm font-medium text-gray-700">
                        {item.value}
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 effect w-8 h-8 rounded-full flex justify-center items-center">
                    <div className="w-5 h-5 rounded-full app-bg-teal"></div>
                  </div>

                  <span className="text-sm font-medium text-gray-600 mt-2">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
