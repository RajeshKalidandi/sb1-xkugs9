import React from 'react'
import { ChevronDown, Search, BookOpen, MessageCircle } from 'lucide-react'

const HelpPage: React.FC = () => {
  const faqs = [
    {
      question: "How does the AI-powered content generation work in 2024?",
      answer: "Our advanced AI system utilizes the latest natural language processing models to analyze your input (topic, keywords, etc.) and generate relevant, engaging content. It considers current trends, SEO best practices, and platform-specific requirements to create optimized content for LinkedIn and X."
    },
    {
      question: "Can I customize the AI-generated content?",
      answer: "Absolutely! After the AI generates the initial content, you can edit and refine it in our user-friendly review interface. We encourage personalizing the content to match your unique voice and style while maintaining the AI-optimized structure."
    },
    {
      question: "How do I connect my LinkedIn and X accounts securely?",
      answer: "Navigate to the Settings page and enter your API keys for LinkedIn and X. We use industry-standard encryption to protect your credentials. This secure connection allows you to publish content directly from our platform to your social media accounts."
    },
    {
      question: "What types of visuals can I create with the image generation feature?",
      answer: "Our image generation tool offers a wide range of options, including realistic photos, illustrations, infographics, and abstract designs. You can customize text overlays, apply brand colors, and choose from various styles to create visuals that perfectly complement your content."
    },
    {
      question: "How does ContentCraft ensure data privacy and security?",
      answer: "We prioritize your data security with state-of-the-art encryption, regular security audits, and strict access controls. Your personal information and generated content are never shared with third parties. We comply with GDPR, CCPA, and other relevant data protection regulations."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Help & Support Center</h1>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-8">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white p-6 rounded-lg shadow-md">
              <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center">
                {faq.question}
                <ChevronDown className="ml-2" />
              </summary>
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <BookOpen className="mr-2" /> Documentation
            </h3>
            <p className="mb-4">Explore our comprehensive guides and tutorials to make the most of ContentCraft.</p>
            <a href="#" className="text-blue-600 hover:text-blue-800">View Documentation</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <MessageCircle className="mr-2" /> Contact Support
            </h3>
            <p className="mb-4">Need personalized assistance? Our support team is here to help.</p>
            <a href="mailto:support@contentcraft.com" className="text-blue-600 hover:text-blue-800">support@contentcraft.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpPage