"use client";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import data from "../../../data";
import { Project } from "src/types";
import Image from "next/image";
import { IoCloseCircleOutline } from "react-icons/io5";
import { BackgroundBeams } from "src/components/BackgroundBeams";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { MdOutlineLaunch } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "src/components/Carousel";
import { ul } from "framer-motion/client";

const ProjectDetails = () => {
  const [index, setIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query);

  const [project, setProject] = useState<Project | null>(null);
  const [isAbout, setIsAbout] = useState<boolean>(true);

  console.log("isAbout:", isAbout);

  useEffect(() => {
    if (id) {
      const foundProject = data.projects.find(
        (project) => project.id === parseInt(id as string)
      );
      setProject(foundProject || null);
    }
  }, [id]);

  const motionDivVariants = {
    hidden: { x: "-50%", y: "100vh", opacity: 0 }, // Start from bottom
    visible: {
      x: "-50%",
      y: "180px", // Middle of the screen
      opacity: 1,
      transition: { duration: 1 },
    },
    closing: {
      x: "-50%",
      y: "100vh", // Move back down
      opacity: 0,
      transition: { duration: 1 },
    },
  };

  const handleClose = () => {
    setIsClosing(true); // Trigger closing animation
    setTimeout(() => {
      router.push("/projects"); // Navigate after animation ends
    }, 1000); // Match animation duration
  };

  if (!project) {
    return <div>Loading project details...</div>;
  }

  return (
    <div
      className="projectDetailPage "
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <BackgroundBeams />
      <motion.div
        className=" d-flex justify-between align-items-center bg-teal-200"
        style={{
          width: "1280px",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          height: "75vh",
          borderRadius: "15px",
          padding: "20px",
          display: "flex",
          gap: "20px",
        }}
        variants={motionDivVariants}
        initial="hidden"
        animate={isClosing ? "closing" : "visible"} // Toggle between opening and closing
      >
        {/* Left: Carousel */}
        <div className="relative flex-grow mt-4" style={{ maxWidth: "60%" }}>
          <Carousel index={index} onIndexChange={setIndex}>
            <CarouselContent className="relative">
              {project.allImages?.map((item) => (
                <CarouselItem key={item} className="p-4 m-0 mt-5">
                  <div className="flex items-center justify-center">
                    <Image
                      height={300}
                      width={740}
                      alt={project.title}
                      src={item}
                      style={{
                        objectFit: "contain",
                        borderRadius: "8px",
                        height: "400px",
                      }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex w-full justify-center space-x-3 px-4 mt-">
            {project.allImages &&
              project.allImages.map((item, index) => (
                <div
                  key={item}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setIndex(index)}
                  className="cursor-pointer  relative pt-5 mt-3"
                >
                  <Image
                    height={110}
                    width={150}
                    alt={project.title}
                    src={item}
                    style={{
                      objectFit: "contain",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              ))}
          </div>
        </div>

        {/* Right: Description */}
        <div className="flex-grow pt-6 me-8" style={{ maxWidth: "35%" }}>
          <p className="text-xl text-gray-600 flex items-center space-x-2">
            PROJECT
            <IoCloseCircleOutline
              className="text-5xl ms-auto hover:cursor-pointer hover:text-emerald-600"
              onClick={handleClose} // Trigger closing animation
            />
          </p>

          <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
          <button
            className={`text-l text-gray-600   items-center space-x-2 me-6 font-semibold py-1 px-2 hover:bg-emerald-400 rounded ${
              isAbout ? "bg-emerald-300" : ""
            }`}
            onClick={() => setIsAbout(true)}
          >
            About
          </button>
          <button
            className={`text-l  rounded  text-gray-600 items-center space-x-2  font-semibold py-1 px-2 hover:bg-emerald-400 ${
              !isAbout ? "bg-emerald-300" : ""
            }`}
            type="button"
            onClick={() => setIsAbout(false)}
          >
            Features & technologies
          </button>

          <p className="text-sm text-gray-500 mt-2">
            {isAbout ? (
              <>
                {" "}
                <p>{project.details}</p>
                <button
                  className="text-xl bg-teal-400 rounded  text-black items-center space-x-2  font-semibold py-1 px-2 hover:bg-teal-600 mt-5"
                  type="button"
                  onClick={() => window.open(project.url, "_blank")}
                >
                  Launch Application{" "}
                  <MdOutlineLaunch className="inline-block" />
                </button>
              </>
            ) : (
              <>
                <h4 className="text-xl text-black">Features:</h4>
                <ul className="list-disc ps-5">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div>
                  <h4 className="text-xl text-black">Technologies Used:</h4>
                  <ul className="list-disc ps-5">
                    {project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </p>
          <div
            className="flex w-fit float-end absolute items-center"
            style={{ bottom: "40px", right: "56px" }}
          >
            <span className="text-2xl text-gray-600 h-fit me-3">
              {router.query.id}/{data.projects.length}
            </span>
            <FaRegArrowAltCircleLeft
              className="text-5xl text-gray-600 hover:cursor-pointer hover:text-emerald-600 me-2"
              onClick={() => {
                if (router.query?.id && +router.query.id > 1) {
                  router.push(`/projects/${+router.query.id - 1}`);
                }
              }}
            />
            <FaRegArrowAltCircleRight
              className="text-5xl text-gray-600 hover:cursor-pointer hover:text-emerald-600"
              onClick={() => {
                if (router.query?.id) {
                  const currentId = +router.query.id; // Convert query id to a number
                  if (currentId < data.projects.length) {
                    // If the current project id is less than the total projects, navigate to the next project
                    router.push(`/projects/${currentId + 1}`);
                  }
                }
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
