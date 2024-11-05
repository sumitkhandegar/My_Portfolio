import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, useScroll, useSpring } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 fixed w-full z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="text-white ml-2 md:text-2xl text-lg font-bold">
              SUMIT KHANDEGAR
            </span>
          </div>
          <div className="hidden sm:flex sm:items-center sm:justify-end">
            <div className="flex space-x-4">
              <button
                onClick={() => handleScroll("about")}
                className="rounded-md px-3 py-2 text-sm md:text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                About
              </button>
              <button
                onClick={() => handleScroll("skills")}
                className="rounded-md px-3 py-2 text-sm md:text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Skills
              </button>
              <button
                onClick={() => handleScroll("projects")}
                className="rounded-md px-3 py-2 text-sm md:text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Projects
              </button>
              <button
                onClick={() => handleScroll("contact")}
                className="rounded-md px-3 py-2 text-sm md:text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Contact
              </button>
            </div>
          </div>
          <div className="flex sm:hidden">
            <button
              className="text-gray-400 hover:text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Wide Scroll Progress Bar */}
      <motion.div
        className="fixed top-18 left-0 h-2 w-full bg-indigo-600 origin-left z-50"
        style={{ scaleX }}
      />
      {/* Mobile menu */}
      <div
        className={`${isOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <button
            onClick={() => handleScroll("about")}
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("skills")}
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Skills
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
