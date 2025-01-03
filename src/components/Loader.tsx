'use client';

import { motion } from 'motion/react';
import {CSSProperties} from 'react';

const image: React.CSSProperties = {
  maxWidth: "80vw",
  border: '1px dashed orange',
}

const shape: CSSProperties = {
  strokeWidth: 16,
  // strokeLinecap: "round",
  // strokeLinejoin: 'round',
  fill: "transparent",
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.5
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    }
  },
}

export const Loader = () => {
  const a = '';

  return (
    <div className="relative h-screen flex justify-center items-center border-4">
      <motion.svg
        width="800"
        height="800"
        viewBox="0 0 800 800"
        initial="visible"
        animate="visible"
        style={image}
      >
        <motion.circle
          // className="circle-path"
          cx="400"
          cy="80"
          r="60"
          stroke="#ffffff"
          custom={2}
          variants={draw}
          style={shape}
        />

        {/* Triangle */}
        <motion.line
          x1="400"
          y1="80"
          x2="240"
          y2="370"
          stroke="#ffffff"
          // custom={2}
          variants={draw}
          style={shape}
        />

        <motion.line
          x1="220"
          y1="370"
          x2="580"
          y2="370"
          stroke="orange"
          // custom={2}
          variants={draw}
          style={shape}
        />


        <motion.line
          x1="200"
          y1="700"
          x2="200"
          y2="400"
          stroke="green"
          // custom={2}
          variants={draw}
          style={shape}
        />

        <motion.line
          x1="220"
          y1="400"
          x2="580"
          y2="400"
          stroke="red"
          // custom={2}
          variants={draw}
          style={shape}
        />

        {/*reference line -- middle*/}
        <motion.line
          x1="220"
          y1="400"
          x2="580"
          y2="400"
          stroke="blue"
          // custom={2}
          variants={draw}
          style={shape}
        />

        <motion.line
          x1="220"
          y1="720"
          x2="580"
          y2="720"
          stroke="red"
          // custom={2}
          variants={draw}
          style={shape}
        />


        {/*<motion.rect*/}
        {/*  width="140"*/}
        {/*  height="140"*/}
        {/*  x="20"*/}
        {/*  y="20"*/}
        {/*  rx="20"*/}
        {/*  stroke="#0d63f8"*/}
        {/*  variants={draw}*/}
        {/*  custom={1}*/}
        {/*  style={shape}*/}
        {/*/>*/}

        {/*<motion.circle*/}
        {/*  className="circle-path"*/}
        {/*  cx="200"*/}
        {/*  cy="100"*/}
        {/*  r="80"*/}
        {/*  stroke="#ff0088"*/}
        {/*  custom={2}*/}
        {/*  variants={draw}*/}
        {/*  style={shape}*/}
        {/*/>*/}

        {/*<motion.polygon*/}
        {/*  cx="500"*/}
        {/*  cy="100"*/}
        {/*  // r="80"*/}
        {/*  stroke="#ff0088"*/}
        {/*  points="60, 110 65, 120 70, 115 75"*/}
        {/*  custom={2}*/}
        {/*  variants={draw}*/}
        {/*  style={shape}*/}
        {/*/>*/}


        <motion.circle
          // className="circle-path"
          cx="400"
          cy="720"
          r="60"
          stroke="#ffffff"
          custom={2}
          variants={draw}
          style={shape}
        />
      </motion.svg>

    </div>
  );
}