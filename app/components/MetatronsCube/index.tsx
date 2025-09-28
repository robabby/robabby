"use client";

import { motion } from "motion/react";
import { Box } from "@radix-ui/themes";
import { path } from "./path";
import "./style.css";

export default function MetatronsCube() {

  return (
    <motion.svg className="MetatronsCube" initial={false} width="100%" height="100%" viewBox="0 0 938 1047">
      <motion.path
        d={path}
        fill="none"
        initial={{
          opacity: 0,
          pathLength: 0,
          rotate: 0
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
          rotate: -360,
          transition: { 
            duration: 2.22
          }
        }}
        stroke="var(--blue-a12)"
        strokeWidth="3.33"
      />
    </motion.svg>
  );
}
