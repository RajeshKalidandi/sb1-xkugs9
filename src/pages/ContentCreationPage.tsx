import React, { useState } from 'react'
import ContentInputForm from '../components/ContentInputForm'
import ContentReviewInterface from '../components/ContentReviewInterface'
import ImageGenerationInterface from '../components/ImageGenerationInterface'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const ContentCreationPage: React.FC = () => {
  const [step, setStep] = useState<'input' | 'review' | 'image'>('input')
  const [generatedContent, setGeneratedContent] = useState<string>('')
  const [generatedImage, setGeneratedImage] = useState<string>('')

  const handleContentGeneration = (content: string) => {
    setGeneratedContent(content)
    setStep('review')
  }

  const handleImageGeneration = (imageUrl: string) => {
    setGeneratedImage(imageUrl)
    setStep('image')
  }

  const handleBack = () => {
    if (step === 'review') setStep('input')
    if (step === 'image') setStep('review')
  }

  const handleNext = () => {
    if (step === 'input') setStep('review')
    if (step === 'review') setStep('image')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Create Your Content</h1>
      <div className="max-w-4xl mx-auto">
        {step === 'input' && (
          <ContentInputForm onGenerate={handleContentGeneration} />
        )}
        {step === 'review' && (
          <ContentReviewInterface
            content={generatedContent}
            onEdit={() => setStep('input')}
            onImageGeneration={() => setStep('image')}
          />
        )}
        {step === 'image' && (
          <ImageGenerationInterface
            content={generatedContent}
            onGenerate={handleImageGeneration}
            generatedImage={generatedImage}
          />
        )}
        <div className="mt-8 flex justify-between">
          <button
            onClick={handleBack}
            className={`flex items-center ${step === 'input' ? 'invisible' : ''}`}
          >
            <ArrowLeft className="mr-2" /> Back
          </button>
          <button
            onClick={handleNext}
            className={`flex items-center ${step === 'image' ? 'invisible' : ''}`}
          >
            Next <ArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContentCreationPage