import React, { useState } from 'react'

interface ContentInputFormProps {
  onGenerate: (content: string) => void
}

const ContentInputForm: React.FC<ContentInputFormProps> = ({ onGenerate }) => {
  const [topic, setTopic] = useState('')
  const [keywords, setKeywords] = useState('')
  const [platform, setPlatform] = useState('LinkedIn')
  const [contentLength, setContentLength] = useState('Medium')
  const [additionalInstructions, setAdditionalInstructions] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically call an API to generate content
    // For now, we'll just simulate it with a placeholder
    const generatedContent = `Generated content about ${topic} for ${platform}...`
    onGenerate(generatedContent)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="topic" className="block text-gray-700 font-bold mb-2">Topic</label>
        <input
          type="text"
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="keywords" className="block text-gray-700 font-bold mb-2">Keywords</label>
        <input
          type="text"
          id="keywords"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="platform" className="block text-gray-700 font-bold mb-2">Platform</label>
        <select
          id="platform"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="LinkedIn">LinkedIn</option>
          <option value="X">X</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="contentLength" className="block text-gray-700 font-bold mb-2">Content Length</label>
        <select
          id="contentLength"
          value={contentLength}
          onChange={(e) => setContentLength(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Short">Short</option>
          <option value="Medium">Medium</option>
          <option value="Long">Long</option>
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="additionalInstructions" className="block text-gray-700 font-bold mb-2">Additional Instructions</label>
        <textarea
          id="additionalInstructions"
          value={additionalInstructions}
          onChange={(e) => setAdditionalInstructions(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Generate Content
      </button>
    </form>
  )
}

export default ContentInputForm