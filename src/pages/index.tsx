import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/lamp";
import Typewriter from "../components/Typewritter";
import NavBar from "src/components/navBar";

import Projects from "src/components/Projects";
import ScrollDown from "src/components/ScrollDown";

export default function LampDemo() {
  return (
    <>
      {" "}
      <NavBar />
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <Typewriter
            words={[
              {
                text: " Hello, I'm Ivan",
              },
              {
                text: "I develop websites and create",
                // className: "text-green-500",
              },
              {
                text: " software solutions.",
                // className: "text-yellow-500",
              },
            ]}
            typingSpeed={40}
            onDone={() => console.log("Typing finished!")}
          />
        </motion.h1>
      </LampContainer>
    </>
  );
}
