import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const NavBar = () => {
  const blurRevealVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" }, // Fully hidden and blurry
    visible: { opacity: 1, filter: "blur(0)" }, // Fully visible and clear
  };

  const router = useRouter();

  return (
    <nav
      className="flex items-center justify-between px-60 py-4 text-yellow-300"
      style={{
        position: "absolute",
        zIndex: "5",
        width: "100% ", // Add dynamic margin
        marginTop: "30px",
      }}
    >
      {/* Logo Section */}
      <motion.div
        className="logo-container flex items-center ps-10"
        initial="hidden"
        animate="visible"
        variants={blurRevealVariants}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/LogoC.png" // Path to your image
          width={100} // Set width of the image
          height={100} // Set height of the image
          alt="Logo"
          className="p-0"
          onClick={() => {
            router.push("/");
          }}
        />
      </motion.div>

      {/* Navigation Links */}
      <div className="nav-links flex gap-6">
        {["About", "Recent Work", "Contact"].map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={blurRevealVariants}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: index * 0.3, // Staggered reveal
            }}
            className={` ${index == 2 ? "" : "me-12"}`}
          >
            <Link
              href={`/projects`}
              className="text-lg font-bold uppercase text-yellow-300 hover:text-cyan-400 transition duration-300"
            >
              {item}
            </Link>
          </motion.div>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
