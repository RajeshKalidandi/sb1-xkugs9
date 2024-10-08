import React, { useState } from 'react'
import { Copy, Edit, Image } from 'lucide-react'

interface ContentReviewInterfaceProps {
  content: string
  onEdit: () => void
  onImageGeneration: () => void
}

const ContentReviewInterface: React.FC<ContentReviewInterfaceProps> = ({ content, onEdit, onImageGeneration }) => {
  const [editedContent, setEditedContent] = useState(content)
  const [seoScore, setSeoScore] = useState(85) // This would typically come from an API

  const handleCopy = () => {
    navigator.clipboard.writeText(editedContent)
    alert('Content copied to clipboard!')
  }

  const handlePublish = () => {
    // Here you would typically call an API to publish the content
    alert('Content published successfully!')
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Review Your Content</h2>
      <div className="mb-4">
        <textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={10}
        ></textarea>
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <button onClick={handleCopy} className="flex items-center text-blue-600 hover:text-blue-800">
            <Copy className="mr-2" size={20} /> Copy
          </button>
          <button onClick={onEdit} className="flex items-center text-green-600 hover:text-green-800">
            <Edit className="mr-2" size={20} /> Edit
          </button>
          <button onClick={onImageGeneration} className="flex items-center text-purple-600 hover:text-purple-800">
            <Image className="mr-2" size={20} /> Generate Image
          </button>
        </div>
        <div className="text-gray-600">
          SEO Score: <span className="font-bold text-green-600">{seoScore}/100</span>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h3 className="font-bold mb-2">SEO Suggestions:</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Add more relevant keywords to improve visibility</li>
          <li>Consider increasing the content length for better ranking</li>
          <li>Include a clear call-to-action to improve engagement</li>
        </ul>
      </div>
      <button
        onClick={handlePublish}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Publish Content
      </button>
    </div>
  )
}

export default ContentReviewInterface