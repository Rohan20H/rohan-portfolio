import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => alert("Message Sent Successfully 🚀"),
        () => alert("Failed to send message ❌")
      );
    e.target.reset();
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-500">

        {/* Navbar */}
        <div className="flex justify-between p-6">
          <h1 className="text-2xl font-bold">Rohan H</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-blue-500 px-4 py-2 rounded-lg"
          >
            Toggle Theme
          </button>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mt-20"
        >
          <h2 className="text-4xl font-bold">
            I'm a{" "}
            <span className="text-blue-500">
              <Typewriter
                words={[
                  "Java Developer",
                  "Full Stack Developer",
                  "Spring Boot Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
              />
            </span>
          </h2>

          <p className="mt-6 max-w-xl mx-auto">
            Passionate about building scalable backend systems using Java,
            Spring Boot, REST APIs, and modern frontend technologies.
          </p>

          <div className="mt-6 space-x-4">
            <a
              href="/Rohan_H_Resume.pdf"
              download
              className="bg-green-500 px-6 py-2 rounded-lg"
            >
              Download Resume
            </a>

            <a href="https://github.com/Rohan20H">
              <FaGithub className="inline text-2xl" />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedin className="inline text-2xl ml-4" />
            </a>
          </div>
        </motion.div>

        {/* Skills Section */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Java",
              "Spring Boot",
              "Hibernate",
              "MySQL",
              "React",
              "REST APIs",
              "Git",
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-blue-500 px-4 py-2 rounded-lg"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-32 pb-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

          <form
            onSubmit={sendEmail}
            className="max-w-md mx-auto space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-gray-200 dark:bg-gray-700"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded bg-gray-200 dark:bg-gray-700"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded bg-gray-200 dark:bg-gray-700"
            />
            <button
              type="submit"
              className="bg-blue-500 px-6 py-2 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
