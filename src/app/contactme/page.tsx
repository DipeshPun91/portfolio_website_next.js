"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";
import { FaEnvelope, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setToast({ message: "All fields are required", type: "error" });
      return false;
    }

    if (!emailRegex.test(email)) {
      setToast({ message: "Invalid email format", type: "error" });
      return false;
    }

    if (message.length > 500) {
      setToast({
        message: "Message too long (max 500 characters)",
        type: "error",
      });
      return false;
    }

    return true;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setToast(null);

    try {
      const res = await fetch("/api/contactme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setToast({ message: "Message sent successfully!", type: "success" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setToast({
          message: data.error || "Something went wrong",
          type: "error",
        });
      }
    } catch {
      setToast({ message: "Something went wrong", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <section>
        <div className="container mx-auto flex flex-col lg:flex-row px-6 py-10 items-stretch gap-36">
          <div className="effect rounded-xl p-6 flex flex-col">
            <h2 className="text-3xl font-semibold mb-4 uppercase title">
              Get in Touch
            </h2>
            <form
              className="flex-grow flex flex-col space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-2 bg-primary border-b-2 border-gray-300 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-75 ease-in-out"
                    maxLength={50}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-2 bg-primary border-b-2 border-gray-300 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-75 ease-in-out"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter the subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 bg-primary border-b-2 border-gray-300 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-75 ease-in-out"
                  maxLength={100}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 bg-primary border-b-2 border-gray-300 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-75 ease-in-out"
                  maxLength={500}
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2 effect bg-accent font-semibold text-black rounded-lg hover:bg-accent transition"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center gap-6 text-white w-full max-w-md">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent rounded-full">
                <FaMapMarkerAlt className="text-gray-900" size={24} />
              </div>
              <div>
                <h3 className="title text-2xl font-semibold">Address</h3>
                <p className="text-black">Nepal</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent rounded-full">
                <FaGithub className="text-gray-900" size={24} />
              </div>
              <div>
                <h3 className="title text-2xl font-semibold">Github</h3>
                <a
                  href="https://github.com/DipeshPun91"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline hover:text-cyan-400"
                >
                  Github Profile
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent rounded-full">
                <FaEnvelope className="text-gray-900" size={24} />
              </div>
              <div>
                <h3 className="title text-2xl font-semibold">Email</h3>
                <p className="text-black">pundipesh091@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}
