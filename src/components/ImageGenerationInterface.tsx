import React, { useState } from 'react'
import { RefreshCw, Download } from 'lucide-react'

interface ImageGenerationInterfaceProps {
  content: string
  onGenerate: (imageUrl: string) => void
  generatedImage: string
}

const ImageGenerationInterface: React.FC<ImageGenerationInterfaceProps> = ({ content, onGenerate, generatedImage }) => {
  const [customization, setCustomization] = useState({
    textOverlay: '',
    brandColor: '#000000',
    imageStyle: 'realistic',
  })

  const handleGenerate = () => {
    // Here you would typically call an API to generate the image
    // For now, we'll just use a placeholder image
    const placeholderImage = 'https://via.placeholder.com/800x600.png?text=Generated+Image'
    onGenerate(placeholderImage)
  }

  const handleDownload = () => {
    // Here you would typically implement the download logic
    alert('Image download started!')
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Generate Image</h2>
      <div className="mb-4">
        <label htmlFor="textOverlay" className="block text-gray-700 font-bold mb-2">Text Overlay</label>
        <input
          type="text"
          id="textOverlay"
          value={customization.textOverlay}
          onChange={(e) => setCustomization({ ...customization, textOverlay: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="brandColor" className="block text-gray-700 font-bold mb-2">Brand Color</label>
        <input
          type="color"
          id="brandColor"
          value={customization.brandColor}
          onChange={(e) => setCustomization({ ...customization, brandColor: e.target.value })}
          className="w-full h-10 border rounded-lg"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="imageStyle" className="block text-gray-700 font-bold mb-2">Image Style</label>
        <select
          id="imageStyle"
          value={customization.imageStyle}
          onChange={(e) => setCustomization({ ...customization, imageStyle: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="realistic">Realistic</option>
          <option value="cartoon">Cartoon</option>
          <option value="abstract">Abstract</option>
        </select>
      </div>
      <button
        onClick={handleGenerate}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 mb-4"
      >
        Generate Image
      </button>
      {generatedImage && (
        <div className="mt-6">
          <img src={generatedImage} alt="Generated content image" className="w-full rounded-lg shadow-md mb-4" />
          <div className="flex justify-between">
            <button
              onClick={handleGenerate}
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <RefreshCw className="mr-2" size={20} /> Regenerate
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center text-green-600 hover:text-green-800"
            >
              <Download className="mr-2" size={20} /> Download
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageGenerationInterface