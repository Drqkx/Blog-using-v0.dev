'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AnimatedPostContent({ post, Icon }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex justify-center items-center mb-4 text-gray-600 dark:text-gray-400">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
        </div>
        <Icon className="w-12 h-12 mx-auto text-blue-500" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-96 mb-8"
      >
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </>
  )
}

