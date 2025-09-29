"use client";

import { motion } from "motion/react";
import "./style.css";

export default function MetatronsCube() {

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      className="MetatronsCube"
      id="svg2"
      viewBox="0 0 435 482"
    >
    <motion.g id="layer1">
      <motion.g id="circles">
        <motion.path
          stroke="var(--blue-a10)"
          d="M 262.5 241.5 A 47 47 0 1 1  168.5,241.5 A 47 47 0 1 1  262.5 241.5 z"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: .250 }
          }}
          style={{ fill:"none" }}
          id="center-circle" 
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 262.5 335.5 A 47 47 0 1 1  168.5,335.5 A 47 47 0 1 1  262.5 335.5 z"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: .250, delay: .250 }
          }}
          style={{ fill:"none" }}
          id="second-ring-bottom-circle"
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 262.5 147.5 A 47 47 0 1 1  168.5,147.5 A 47 47 0 1 1  262.5 147.5 z"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: .250, delay: .250 }
          }}
          style={{ fill:"none" }}
          id="second-ring-top-circle" 
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 180.5 194.5 A 47 47 0 1 1  86.5,194.5 A 47 47 0 1 1  180.5 194.5 z"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: .250, delay: .250 }
          }}
          style={{ fill:"none" }}
          id="second-ring-top-left-circle"
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 344.5 194.5 A 47 47 0 1 1  250.5,194.5 A 47 47 0 1 1  344.5 194.5 z"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: .250, delay: .250 }
          }}
          style={{ fill:"none" }}
          id="second-ring-top-right-circle"
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 180.5 288.5 A 47 47 0 1 1  86.5,288.5 A 47 47 0 1 1  180.5 288.5 z"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: .250, delay: .250 }
          }}
          style={{ fill:"none" }}
          id="second-ring-bottom-left-circle"
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 344.5 288.5 A 47 47 0 1 1  250.5,288.5 A 47 47 0 1 1  344.5 288.5 z"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: .250, delay: .250 }
          }}
          style={{ fill:"none" }}
          id="second-ring-bottom-right-circle"
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 262.5 429.5 A 47 47 0 1 1  168.5,429.5 A 47 47 0 1 1  262.5 429.5 z"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: .250, delay: .500 }
          }}
          style={{ fill:"none" }}
          id="outer-ring-bottom-circle"
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 262.5 53.5 A 47 47 0 1 1  168.5,53.5 A 47 47 0 1 1  262.5 53.5 z"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: .250, delay: .500 }
          }}
          style={{ fill:"none" }}
          id="outer-ring-top-circle"
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 98.5 147.5 A 47 47 0 1 1  4.5,147.5 A 47 47 0 1 1  98.5 147.5 z"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: .250, delay: .500 }
          }}
          style={{ fill:"none" }}
          id="outer-ring-top-left-circle"
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 426.5 147.5 A 47 47 0 1 1  332.5,147.5 A 47 47 0 1 1  426.5 147.5 z"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: .250, delay: .500 }
          }}
          style={{ fill:"none" }}
          id="outer-ring-top-right-circle"
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 98.5 335.5 A 47 47 0 1 1  4.5,335.5 A 47 47 0 1 1  98.5 335.5 z"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: .250, delay: .500 }
          }}
          style={{ fill:"none" }}
          id="outer-ring-bottom-left-circle"
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 426.5 335.5 A 47 47 0 1 1  332.5,335.5 A 47 47 0 1 1  426.5 335.5 z"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: .250, delay: .500 }
          }}
          style={{ fill:"none" }}
          id="outer-ring-bottom-right-circle"
        />
      </motion.g>
      <motion.g id="lines">
        <motion.path
          stroke="var(--blue-a10)"
          d="M 215.5,53.5 L 379.5,147.5 L 379.5,335.5 L 215.5,429.5 L 51.5,335.5 L 51.5,147.5 L 215.5,53.5 z "
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
            transition: { duration: 2.22, delay: 1 }
          }}
          style={{ fill:"none" }}
          id="path2886" 
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 215.5,53.5 L 51.5,335.5 L 379.5,335.5 L 215.5,53.5 z "
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
            transition: { duration: 2.22, delay: 1 }
          }}
          style={{ fill:"none" }}
          id="path2888" 
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 51.5,147.5 L 215.5,429.5 L 379.5,147.5 L 51.5,147.5 z "
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
            transition: { duration: 2.22, delay: 1 }
          }}
          style={{ fill:"none" }}
          id="path2890" 
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 215.5,147.5 L 133.5,194.5 L 133.5,288.5 L 215.5,335.5 L 297.5,288.5 L 297.5,194.5 L 215.5,147.5 z "
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
            transition: { duration: 2.22, delay: 1 }
          }}
          style={{ fill:"none" }}
          id="path2892" 
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 133.5,288.5 L 215.5,53.5 L 297.5,288.5 L 133.5,288.5 z "
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
            transition: { duration: 2.22, delay: 1 }
          }}
          style={{ fill:"none" }}
          id="path2894" 
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 215.5,429.5 L 133.5,194.5 L 297.5,194.5 L 215.5,429.5 z "
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
            transition: { duration: 2.22, delay: 1 }
          }}
          style={{ fill:"none" }}
          id="path2896" 
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 51.5,147.5 L 379.5,335.5"
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
            transition: { duration: 2.22, delay: 1 }
          }}
          style={{ fill:"none" }}
          id="path2898" 
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 51.5,335.5 L 379.5,147.5"
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
            transition: { duration: 2.22, delay: 1 }
          }}
          style={{ fill:"none" }}
          id="path2900" 
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 215.5,53.5 L 215.5,429.5"
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
            transition: { duration: 2.22, delay: 1 }
          }}
          style={{ fill:"none" }}
          id="path2902" 
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 51.5,335.5 L 215.5,147.5 L 297.5,288.5 L 51.5,335.5 z "
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
            transition: { duration: 2.22, delay: 1 }
          }}
          style={{ fill:"none" }}
          id="path2904" 
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 379.5,335.5 L 215.5,147.5 L 133.5,288.5 L 379.5,335.5 z "
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
            transition: { duration: 2.22, delay: 1 }
          }}
          style={{ fill:"none" }}
          id="path2906" 
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 379.5,147.5 L 133.5,194.5 L 215.5,335.5 L 379.5,147.5 z "
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
            transition: { duration: 2.22, delay: 1 }
          }}
          style={{ fill:"none" }}
          id="path2908" 
        />
        <motion.path
          stroke="var(--blue-a10)"
          d="M 51.5,147.5 L 215.5,335.5 L 297.5,194.5 L 51.5,147.5 z "
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
            transition: { duration: 2.22, delay: 1 }
          }}
          style={{ fill:"none" }}
          id="path2910" 
        />
      </motion.g>
    </motion.g>
   </motion.svg>
    // <motion.svg 
    //   className="MetatronsCube" 
    //   initial={false} 
    //   width="100%" 
    //   height="100%" 
    //   viewBox="0 0 938 1047"
    // >
    //   <motion.path
    //     d={path}
    //     fill="none"
    //     initial={{
    //       opacity: 0,
    //       pathLength: 0,
    //       rotate: 0
    //     }}
    //     animate={{
    //       opacity: 1,
    //       pathLength: 1,
    //       rotate: -360,
    //       transition: { 
    //         duration: 2.22
    //       }
    //     }}
    //     stroke="var(--blue-a11)"
    //     strokeWidth="3.33"
    //   />
    // </motion.svg>
  );
}
