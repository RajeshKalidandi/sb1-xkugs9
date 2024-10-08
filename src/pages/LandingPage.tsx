import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, Edit, Image, Share, TrendingUp, Lock, Brain } from 'lucide-react'

const LandingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">AI-Powered Content Creation for 2024</h1>
        <p className="text-xl mb-8">Create engaging, SEO-optimized content for LinkedIn and X with advanced AI assistance</p>
        <Link to="/create" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
          Start Creating Now
        </Link>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Powered by LLaMA 3.2</h2>
        <p className="text-xl mb-8">Experience the power of Meta's latest language model, fine-tuned for content creation</p>
        <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="AI Collaboration" className="mx-auto rounded-lg shadow-lg" />
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          icon={<Zap className="h-12 w-12 text-blue-600" />}
          title="AI-Powered Insights"
          description="Leverage cutting-edge AI to generate content tailored to your audience and platform"
        />
        <FeatureCard
          icon={<Edit className="h-12 w-12 text-blue-600" />}
          title="Smart Editing"
          description="Refine and customize your content with our intuitive AI-assisted editor"
        />
        <FeatureCard
          icon={<Image className="h-12 w-12 text-blue-600" />}
          title="Visual Content Creation"
          description="Generate eye-catching visuals and infographics to boost engagement"
        />
        <FeatureCard
          icon={<Share className="h-12 w-12 text-blue-600" />}
          title="Multi-Platform Publishing"
          description="Share your content directly to LinkedIn and X with optimized formatting"
        />
        <FeatureCard
          icon={<TrendingUp className="h-12 w-12 text-blue-600" />}
          title="SEO Optimization"
          description="Enhance your content's visibility with built-in SEO tools and recommendations"
        />
        <FeatureCard
          icon={<Brain className="h-12 w-12 text-blue-600" />}
          title="LLaMA 3.2 Integration"
          description="Harness the power of Meta's advanced language model for superior content generation"
        />
      </section>

      <section className="text-center bg-gray-100 py-16 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to revolutionize your content strategy?</h2>
        <p className="text-xl mb-8">Join thousands of professionals using ContentCraft to boost their online presence</p>
        <Link to="/create" className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300">
          Get Started for Free
        </Link>
      </section>
    </div>
  )
}

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default LandingPage