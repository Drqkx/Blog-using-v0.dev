import { getPostById } from '../../../lib/api'
import Image from 'next/image'
import CommentSection from '../../components/CommentSection'
import { notFound } from 'next/navigation'
import { Building, Recycle, Leaf } from 'lucide-react'
import AnimatedPostContent from '../../components/AnimatedPostContent'

const iconMap = {
  building: Building,
  recycle: Recycle,
  leaf: Leaf,
}

export async function generateMetadata({ params }) {
  const post = await getPostById(params.id)
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function BlogPost({ params }) {
  const post = await getPostById(params.id)

  if (!post) {
    notFound()
  }

  const Icon = iconMap[post.icon]

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <AnimatedPostContent post={post} Icon={Icon} />
      <CommentSection postId={post.id} />
    </article>
  )
}

