"use client";
import React from "react";
import { motion } from "motion/react";

const Cat = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <svg className="w-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 144">
        <style>{`
          .cls-0 { fill:#F2F2F2; }
          .cls-1 { fill:#D8D8D8; }
          .cls-2 { fill:#AEAEAE; }
          .cls-3 { fill:#E9E9E9; }
          .cls-4 { fill:#EFEFEF; }
          .cls-5 { fill:#E6E6E6; }
          .cls-6 { fill:#EFEFEF; }
          .cls-7 { fill:#E6E6E6; }
          .cls-8 {
            fill:none;
            stroke:#E6E6E6;
            stroke-width:5.1937;
            stroke-linecap:round;
            stroke-miterlimit:10;
          }
        `}</style>

     {/* background base */}
<motion.g
  animate={{
    rotate: [-8, 8, -8],
    y: [0, 6, 0],
  }}
  transition={{
    duration: 2.4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  style={{
    transformOrigin: "50% 0%",
    transformBox: "fill-box",
  }}
>
  {/* background base */}
  <rect className="cls-0" y="1.8" width="120" height="142.2" />

  {/* swing ropes / side supports */}
  <polygon className="cls-1" points="7.6 1.3 12.6 1.3 20.1 125.1 14.6 125.1" />
  <polygon className="cls-1" points="95.5 1.3 101.1 1.3 108.6 119.1 102.5 119.1" />

  {/* ALL CAT PARTS HERE */}
</motion.g>

        {/* cat body */}
        <path
          className="cls-2"
          d="m85.8 75.2c-1.5-7.2-2.9-17.5-7.2-22.4-4.2-3.1-13.6 4.6-19 11.6-2.3-0.4-4.6-0.4-6.6-0.2l-2.2-0.1c-3.6-4.1-9.7-11.4-15.3-12.2-2.1 0-4.1 2.2-4.9 4.5-1.9 4.7-3 8.8-3.4 15-8.1 4.7-17.2 14.4-17.4 28.4-0.2 17.6 14.6 23.6 30.8 24.2l29.3-2c6-0.1 12-2.6 16.7-6.1 4 1.5 11.2 2 16.2-0.9l-0.7-7.4c-2.2 2.3-5.3 2.8-10.2 2.8 2-1.4 3.5-6.6 3.2-12.3-0.5-8.9-4.3-17.7-9.3-22.9z"
        />

        {/* tail */}
        <path className="cls-2" d="m107.6 102.6 2.5 1.3c1.3 1 1.5 3 0.5 4.1l-2.7 3.9-0.3-9.3z" />

        {/* swing seat / base */}
        <path
          className="cls-2"
          d="m15.4 124.6 92.6-5.7c2.5-0.1 4.8 1.5 4.9 4l0.2 4.7c0.1 2.3-1.7 4.3-4.1 4.4l-93.4 5.2c-2.4 0-4.5-1.6-4.5-4l-0.1-4.3c0-2.3 1.8-4.3 4.4-4.3z"
        />

        {/* left ear */}
        <path className="cls-3" d="m36 57.8c-1.1 2.3-2.6 7.6-3.1 11.1 3-1.3 6-2.8 11.6-3.9-1.4-1.5-6-6-8.5-7.2z" />

        {/* right ear */}
        <path className="cls-3" d="m65.8 65.4c2.2 0.7 5.3 1.1 7.7 2.4l5.9 3.2c-0.3-4.1-2.3-10.2-3.6-12.6-2.7 1-7.9 5.1-10 7z" />

        {/* face details / eyes area */}
        <path className="cls-4" d="m55.4 82.1 10.2-0.7c1.2-0.2 2.3 0.7 2.4 2.1v0.5c0 1.1-0.9 2.1-2 2.1l-10.4 0.5c-1.1 0-2.2-0.8-2.4-2v-0.2c0-1.2 0.9-2.3 2.2-2.3z" />
        <path className="cls-5" d="m32.1 83.5 10.8-0.7c1.2-0.2 2.3 0.8 2.3 2v0.6c0 1.1-0.8 2.1-2 2.2l-10.8 0.4c-1.2 0.1-2.3-0.9-2.4-2v-0.4c0-1.1 1-2.1 2.1-2.1z" />

        {/* small body detail */}
        <path className="cls-6" d="m0.4 66.4-0.4 10.5c1.9 0.2 4.4-5.5 0.4-10.5z" />

        {/* lower body details */}
        <path className="cls-7" d="m2.6 114.8 5.4-3.7-5.5 6.7 0.1-3z" />
        <path className="cls-7" d="m2.1 128.6 4-3.7-4.1 6.7 0.1-3z" />

        {/* whiskers / mouth lines */}
        <path className="cls-8" d="m55.6 84.4 10-0.6" />
        <path className="cls-8" d="m32.1 85.8 10.8-0.7" />
      </svg>
    </div>
  );
};

export default Cat;