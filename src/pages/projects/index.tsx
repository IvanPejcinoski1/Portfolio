"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";

import data from "/data"; // Import your data file
import { Project } from "src/types";
import { BackgroundBeams } from "src/components/BackgroundBeams";

const Projects = () => {
  const [clicked, setClicked] = useState(false); // State to track if a card is clicked
  const router = useRouter(); // Initialize the useRouter hook

  // Animation variants
  const cardVariants = {
    leftBottom: {
      hidden: { opacity: 0, x: -50, y: 50 },
      visible: (index: number) => ({
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          delay: index * 0.1,
          duration: 0.8,
          ease: "easeInOut",
        },
      }),
      exit: { opacity: 0, y: -150, x: -100, transition: { duration: 0.5 } },
    },
    bottom: {
      hidden: { opacity: 0, y: 100 },
      visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: index * 0.1,
          duration: 0.8,
          ease: "easeInOut",
        },
      }),
      exit: { opacity: 0, y: -150, x: 50, transition: { duration: 0.5 } },
    },
    rightBottom: {
      hidden: { opacity: 0, x: 50, y: 50 },
      visible: (index: number) => ({
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          delay: index * 0.1,
          duration: 0.8,
          ease: "easeInOut",
        },
      }),
      exit: { opacity: 0, y: -150, x: 100, transition: { duration: 0.8 } },
    },
  };

  // Function to determine animation type based on card index
  const getAnimationType = (index: number) => {
    if ([0, 1, 5, 6, 10].includes(index)) return "leftBottom"; // Cards 1, 2, 6, 7, 11
    if ([2, 7].includes(index)) return "bottom"; // Cards 3 and 8
    return "rightBottom"; // All other cards
  };

  // Function to handle card click and navigate to the project page
  const handleCardClick = (id: number) => {
    setClicked(true); // Trigger exit animation
    setTimeout(() => {
      router.push(`/projects/${id}`); // Navigate to the project details page
    }, 1000);
  };

  return (
    <div className="projectsSection overflow-hidden">
      <div className="mx-auto py-8 max-w-7xl pt-48">
        <div className="flex flex-wrap justify-center gap-6">
          {data.projects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              className="bg-white shadow-md rounded-lg overflow-hidden w-[calc(20%-1.5rem)] cursor-pointer"
              custom={index} // Pass index for staggered animation
              initial="hidden"
              animate={clicked ? "exit" : "visible"} // Trigger exit animation when clicked
              variants={cardVariants[getAnimationType(index)]}
              onClick={() => handleCardClick(project.id)} // Add the onClick event
              exit="exit" // Apply exit animation when card is clicked
            >
              <div className="relative w-full h-40">
                {" "}
                {/* Add a wrapper for layout */}
                <Image
                  alt={project.title}
                  layout="fill" // Makes the image fill the wrapper
                  objectFit="cover" // Ensures the image maintains aspect ratio
                  className="rounded-t-lg" // Optional additional styling
                  src="/images/HangmanGame/MainMenu.png"
                />
              </div>

              <div className=" text-center">
                <p className="text-lg font-medium text-gray-700">
                  {project.title}
                </p>
                <p className="text-sm text-gray-500 pb-0">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
