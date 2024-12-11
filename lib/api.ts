export interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  image: string;
  icon: string;
}

const posts: Post[] = [
  {
    id: '1',
    title: 'Revolutionary Concrete Technologies',
    description: 'Exploring cutting-edge advancements in concrete for futuristic construction.',
    content: `<p>The world of concrete is undergoing a revolutionary transformation, paving the way for futuristic construction methods that were once thought impossible.</p>
              <h2>Self-Healing Concrete</h2>
              <p>Imagine a world where cracks in concrete structures repair themselves. This is now a reality with self-healing concrete. Embedded bacteria produce limestone, effectively sealing cracks as they appear, significantly extending the lifespan of structures and reducing maintenance costs.</p>
              <h2>Translucent Concrete</h2>
              <p>Blending the strength of concrete with the ethereal quality of light, translucent concrete is changing the face of architecture. This innovative material allows light to pass through, creating stunning visual effects while maintaining structural integrity.</p>
              <h2>3D Printed Concrete</h2>
              <p>3D printing technology is revolutionizing concrete construction. This method allows for complex geometries, reduced material waste, and faster construction times. From affordable housing solutions to artistic architectural elements, 3D printed concrete is opening up new realms of possibility.</p>
              <h2>The Future is Now</h2>
              <p>As we continue to push the boundaries of what's possible with concrete, we're not just building structures – we're shaping the future of our cities and our world.</p>`,
    author: 'Dr. Emily Chen',
    date: '2023-06-01',
    image: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    icon: 'building',
  },
  {
    id: '2',
    title: 'Eco-Revolution in Construction Materials',
    description: 'Unveiling groundbreaking eco-friendly alternatives reshaping the construction landscape.',
    content: `<p>The construction industry is witnessing an eco-revolution, with innovative, sustainable materials taking center stage in our quest for a greener future.</p>
              <h2>Mycelium: The Organic Builder</h2>
              <p>Fungi are no longer just for forests – mycelium, the root structure of fungi, is emerging as a game-changing construction material. It can be grown into specific shapes, is fire-resistant, and provides excellent thermal and acoustic insulation. This organic alternative is biodegradable and requires minimal energy to produce.</p>
              <h2>Recycled Plastic Roads</h2>
              <p>Imagine driving on a road made from the very plastic that once polluted our oceans. This is becoming a reality with recycled plastic roads. These innovative thoroughfares not only address the global plastic waste problem but also create more durable road surfaces that can last up to three times longer than traditional asphalt.</p>
              <h2>Bamboo: Nature's Steel</h2>
              <p>With its impressive strength-to-weight ratio and rapid growth rate, bamboo is emerging as a sustainable alternative to steel in many applications. This versatile material is particularly promising for creating strong, flexible structures in regions where bamboo is abundant.</p>
              <h2>A Greener Tomorrow</h2>
              <p>As we continue to innovate and adopt these eco-friendly materials, we're not just constructing buildings – we're building a more sustainable future for our planet.</p>`,
    author: 'Prof. Michael Rodriguez',
    date: '2023-06-15',
    image: 'https://images.unsplash.com/photo-1518291344630-4857135fb581?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    icon: 'recycle',
  },
  {
    id: '3',
    title: 'Smart Cities: The Future of Urban Development',
    description: 'Exploring how AI and IoT are transforming our cities into intelligent, sustainable metropolises.',
    content: `<p>The cities of tomorrow are being born today, as cutting-edge technologies reshape urban landscapes into smart, sustainable, and highly efficient ecosystems.</p>
              <h2>AI-Powered Urban Planning</h2>
              <p>Artificial Intelligence is revolutionizing urban planning, using vast amounts of data to optimize everything from traffic flow to energy consumption. These AI systems can predict and respond to urban challenges in real-time, creating cities that adapt to the needs of their inhabitants.</p>
              <h2>Internet of Things (IoT) Integration</h2>
              <p>Imagine a city where every streetlight, trash can, and building is connected and communicating. IoT is making this a reality, creating an intricate web of smart devices that work together to improve city services, reduce energy consumption, and enhance quality of life for residents.</p>
              <h2>Vertical Forests</h2>
              <p>As urban populations grow, cities are looking up – literally. Vertical forests, buildings covered in trees and plants, are becoming a popular solution to improve air quality, reduce the urban heat island effect, and bring nature back into our concrete jungles.</p>
              <h2>Sustainable Transportation Revolution</h2>
              <p>From autonomous electric vehicles to hyperloop systems, the future of urban transportation is fast, clean, and intelligent. These innovations promise to reduce traffic congestion, lower emissions, and revolutionize how we move within and between cities.</p>
              <h2>Building Tomorrow, Today</h2>
              <p>As these technologies converge, we're not just creating smart cities – we're laying the foundation for a more sustainable, efficient, and livable urban future.</p>`,
    author: 'Eng. Sarah Thompson',
    date: '2023-06-30',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    icon: 'leaf',
  },
];

export async function getPosts() {
  return posts;
}

export async function getPostById(id: string) {
  return posts.find(post => post.id === id);
}

