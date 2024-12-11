import { getPosts } from '../lib/api'
import BlogPostCard from './components/BlogPostCard'
import HeroSection from './components/HeroSection'

export default async function Home() {
  const posts = await getPosts()

  return (
    <div>
      <HeroSection />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

