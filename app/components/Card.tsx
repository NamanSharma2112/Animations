"use client"
import React from 'react'
import { motion } from "motion/react"
const Card = () => {
const card = [
  {
    title: "Working Knowledge",
    description: "A practical overview of core concepts, tools, and workflows used in everyday development.",
    skeleton: "https://via.placeholder.com/300x200",
    className: 'bg-orange-500',
    config: {
        x: 0,
        y: 0,
        Zindex: 0,
        rotate: 0,
    }
  },
  {
    title: "Practical Demonstration",
    description: "Hands-on examples that show how features work and how to apply them in real projects.",
    skeleton: "https://via.placeholder.com/300x200",
    className: 'bg-stone-200',
    config: {
        x: 0,
        y: 0,
        Zindex: 0,
        rotate: 0,
    }
  },
  {
    title: "Collaborate with AI",
    description: "A workflow for combining human judgment with AI support to improve speed and quality.",
    skeleton: "https://via.placeholder.com/300x200",
    className: 'bg-blue-500',
    config: {
        x: 0,
        y: 0,
        Zindex: 0,
        rotate: 0,
    }
  },
  {
    title: "Means and Methods",
    description: "An explanation of the techniques, patterns, and implementation methods used to solve tasks.",
    skeleton: "https://via.placeholder.com/300x200",
    className: 'bg-purple-500',
    config: {
        x: 0,
        y: 0,
        Zindex: 0,
        rotate: 0,
    }
  },
  {
    title: "Interface Kit",
    description: "Reusable UI building blocks designed to create clean, consistent, and scalable interfaces.",
    skeleton: "https://via.placeholder.com/300x200",
    className: 'bg-rose-500',
    config: {
        x: 0,
        y: 0,
        Zindex: 0,
        rotate: 0,
    }
  }
]
    return (
    <div className='max-w-5xl w-full h-160 mx-auto relative'>
        {card.map((card, index) => (
           <motion.div key={card.title}> </motion.div>
             
            </div>
        ))}

    
    </div>
  )
}

export default Card
