"use client";

import React from "react";
import { motion } from "motion/react";

const Card = () => {
  return (
    <motion.div
      whileHover="animate"
      initial="initial"
      className="flex items-center justify-center h-screen"
    >
      <motion.svg
        width="139"
        height="170"
        viewBox="0 0 139 170"
        fill="none"
        overflow="visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left face */}
        <rect
          width="89.307"
          height="56.3537"
          transform="matrix(0.775774 0.631011 0 1 0 56.3537)"
          fill="#93AAFC"
        />

        {/* Right face */}
        <motion.rect 
          
          width="89.307"
          height="56.3537"
          transform="matrix(0.775774 -0.631011 0 1 69.282 112.707)"
          fill="#6580E1"
        />

        {/* Lines */}
        <motion.line
         variants={{
            animate: { y: 50 },
            initial: { x: 0 },
          }}
          transition={{
            duration: 0.3,
          }}
          x1="19.3546"
          y1="40.5422"
          x2="90.3546"
          y2="95.5422"
          stroke="#93AAFC"
          strokeWidth="2"
        />

        <motion.line
          variants={{
            animate: { x: 10 },
            initial: { x: 0 },
          }}
          transition={{
            duration: 0.3,
          }}
          x1="68.6383"
          y1="131.548"
          x2="138.638"
          y2="75.5478"
          stroke="#93AAFC"
          strokeWidth="2"
        />

        <motion.line
          variants={{
            animate: { x: 10 },
            initial: { x: 0 },
          }}
          transition={{
            duration: 0.3,
          }}
          x1="68.6383"
          y1="154.548"
          x2="138.638"
          y2="98.5478"
          stroke="#93AAFC"
          strokeWidth="2"
        />

        <line
          x1="0.368804"
          y1="74.5536"
          x2="69.3688"
          y2="131.554"
          stroke="#4965C8"
          strokeWidth="2"
        />

        <line
          x1="0.368804"
          y1="97.5536"
          x2="69.3688"
          y2="154.554"
          stroke="#4965C8"
          strokeWidth="2"
        />

        <line
          x1="46.3617"
          y1="18.5478"
          x2="116.362"
          y2="74.5478"
          stroke="#93AAFC"
          strokeWidth="2"
        />

        {/* Top animated face */}
        <motion.g
          variants={{
            animate: { y: -10 },
            initial: { y: 0 },
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <rect
            width="89.307"
            height="89.307"
            transform="matrix(0.775774 0.631011 -0.775774 0.631011 69.282 0)"
            fill="#BDCBFD"
          />
        </motion.g>
      </motion.svg>
    </motion.div>
  );
};

export default Card;