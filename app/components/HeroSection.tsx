'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute w-full h-full object-cover"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 text-center text-white">
        <motion.h1 
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Civil Engineering Insights
        </motion.h1>
        <motion.p 
          className="text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Exploring the future of construction and urban development
        </motion.p>
      </div>
    </section>
  )
}

