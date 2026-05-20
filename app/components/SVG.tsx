"use client";

import React from "react";
import { motion } from "motion/react";

const SVG = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <motion.svg
        className="w-20 overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
      >
        <style>{`
          .cls-0 {fill:#80807F;}
          .cls-1 {fill:#C4C4C4;}
          .cls-2 {fill:#B2B2B2;}
          .cls-3 {fill:#A8A8A8;}
          .cls-4 {fill:#B4B4B4;}
        `}</style>

        {/* headphone top + side cups drop from above */}
        <motion.g
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 140,
            damping: 14,
          }}
        >
          <motion.g
            initial={{ rotate: 0, scaleY: 1 }}
            animate={{
              rotate: [0, 1, 0],
              scaleY: [1, 0.86, 1.02, 1],
            }}
            transition={{
              delay: 0.92,
              duration: 0.5,
              ease: "easeInOut",
            }}
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
            }}
          >
            <path
              className="cls-0"
              d="m55.4 26.3c-2.1-7.4-9.2-17.3-23.4-17.8-13.5 0-21.1 9.7-23.3 17.6l3 0.3c1.8-5.6 7.1-14.8 20.3-14.8 10.2 0 17.2 6.6 20.2 14.7h3.2z"
            />
          </motion.g>

          <motion.g
            initial={{ x: 0 }}
            animate={{
              x: [0, 0.8, 0],
              scaleY: [1, 0.76, 1],
            }}
            transition={{
              delay: 0.95,
              duration: 0.45,
              ease: "easeInOut",
            }}
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
            }}
          >
            <path
              className="cls-2"
              d="m8.3 26.1h-2.1c-2.6 0-5.2 2.4-5.2 5.5v8.8c0 3.1 2.2 6.3 6.6 6.3h0.7v-20.6z"
            />
            <path
              className="cls-4"
              d="m8.3 26.1v20.6h2.7c1.3 0 2.4-1.1 2.4-2.4v-15.6c0-1.1-0.7-2.6-2.8-2.6h-2.3z"
            />
          </motion.g>

          <motion.g
            initial={{ x: 0 }}
            animate={{
              x: [0, -0.8, 0],
              scaleY: [1, 0.76, 1],
            }}
            transition={{
              delay: 0.95,
              duration: 0.45,
              ease: "easeInOut",
            }}
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
            }}
          >
            <path
              className="cls-3"
              d="m55.7 26.1h1.8c2.1 0 5.5 1.6 5.6 5.5v8.8c0 3.3-2.7 6.3-6 6.3h-1.3l-0.1-20.6z"
            />
            <path
              className="cls-2"
              d="m55.7 26.1h-2.6c-1.1 0-2.6 0.8-2.6 2.5v15.7c0.2 1.3 1.1 2.4 2.4 2.4h2.9l-0.1-20.6z"
            />
          </motion.g>
        </motion.g>

        {/* face stays in position */}
        <motion.g
          initial={{ scaleX: 1, scaleY: 1 }}
          animate={{
            scaleX: [1, 1.08, 0.97, 1],
            scaleY: [1, 0.82, 1.03, 1],
          }}
          transition={{
            delay: 0.95,
            duration: 0.55,
            ease: "easeInOut",
          }}
          style={{
            transformBox: "fill-box",
            transformOrigin: "center",
          }}
        >
          <path
            className="cls-1"
            d="m50.4 39.1v-5.4c-0.6-7.3-6.8-16.5-18.4-16.5-10.1 0-18.4 7.6-18.4 17.4v4.5c0.7 7.4 6.8 16.5 18.4 16.5 9.2 0 17.5-5.7 18.4-16.5z"
          />
        </motion.g>
      </motion.svg>
    </div>
  );
};

export default SVG;