"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router"; // Import the useRouter hook
import { div } from "framer-motion/client";

const Projects = () => {
  // Array of 12 cards
  const cards = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    image: `/path-to-image${i + 1}.jpg`,
    text: `Card ${i + 1} Text`,
  }));

  const [clicked, setClicked] = useState(false); // State to track if a card is clicked

  // Animation variants
  const cardVariants = {
    leftBottom: {
      hidden: { opacity: 0, x: -50, y: 50 },
      visible: (index: number) => ({
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        transition: {
          delay: index * 0.1,
          duration: 0.8,
          ease: "easeInOut",
        },
      }),
      exit: {
        opacity: 0,
        y: -150,
        x: -100,

        transition: { duration: 0.5 },
      }, // Exit animation
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
      exit: {
        opacity: 0,
        y: -150,
        x: 50,

        transition: { duration: 0.5 },
      }, // Exit animation
    },
    rightBottom: {
      hidden: { opacity: 0, x: 50, y: 50 },
      visible: (index: number) => ({
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        transition: {
          delay: index * 0.1,
          duration: 0.8,
          ease: "easeInOut",
        },
      }),
      exit: {
        opacity: 0,
        y: -150,
        x: 100,

        transition: { duration: 0.8 },
      }, // Exit animation
    },
  };

  // Function to determine animation type based on card index
  const getAnimationType = (index: number) => {
    if ([0, 1, 5, 6, 10].includes(index)) return "leftBottom"; // Cards 1, 2, 6, 7, 11
    if ([2, 7].includes(index)) return "bottom"; // Cards 3 and 8
    return "rightBottom"; // All other cards
  };

  const router = useRouter(); // Initialize the useRouter hook

  // Function to handle card click and navigate to the project page
  const handleCardClick = (id: number) => {
    setClicked(true); // Trigger exit animation
    // router.push(`/project/${id}`); // Uncomment to navigate
  };

  return (
    <div className="projectsSection">
      <div className=" mx-auto py-8 max-w-7xl">
        <div className="flex flex-wrap justify-center gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="bg-white shadow-md rounded-lg overflow-hidden w-[calc(20%-1.5rem)] cursor-pointer"
              custom={index} // Pass index for staggered animation
              initial="hidden"
              animate={clicked ? "exit" : "visible"} // Trigger exit animation when clicked
              variants={cardVariants[getAnimationType(index)]}
              onClick={() => handleCardClick(card.id)} // Add the onClick event
              exit="exit" // Apply exit animation when card is clicked
            >
              <img
                src={card.image}
                alt={`Card ${card.id}`}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-lg font-medium text-gray-700">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
