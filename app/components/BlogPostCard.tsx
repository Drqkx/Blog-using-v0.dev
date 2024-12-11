'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Building, Recycle, Leaf } from 'lucide-react'

const iconMap = {
  building: Building,
  recycle: Recycle,
  leaf: Leaf,
}

const BlogPostCard = ({ post }) => {
  const Icon = iconMap[post.icon]

  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:rotate-1"
    >
      <Link href={`/post/${post.id}`}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-xl font-bold text-white mb-2 drop-shadow-lg">{post.title}</h2>
            <p className="text-sm text-gray-200 line-clamp-2 drop-shadow-lg">{post.description}</p>
          </div>
          <motion.div 
            className="absolute top-4 right-4 bg-blue-500 p-2 rounded-full"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
            <span>{post.author}</span>
            <span>{post.date}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default BlogPostCard

