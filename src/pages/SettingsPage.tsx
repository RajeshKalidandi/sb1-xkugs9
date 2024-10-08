import React, { useState } from 'react'
import { Save } from 'lucide-react'

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState({
    defaultContentLength: 'Medium',
    defaultPlatform: 'LinkedIn',
    linkedInApiKey: '',
    xApiKey: '',
    language: 'English',
    timezone: 'UTC',
    notifications: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setSettings(prevSettings => ({
      ...prevSettings,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the settings to a backend or local storage
    alert('Settings saved successfully!')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Settings</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="defaultContentLength" className="block text-gray-700 font-bold mb-2">Default Content Length</label>
          <select
            id="defaultContentLength"
            name="defaultContentLength"
            value={settings.defaultContentLength}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Short">Short</option>
            <option value="Medium">Medium</option>
            <option value="Long">Long</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="defaultPlatform" className="block text-gray-700 font-bold mb-2">Default Platform</label>
          <select
            id="defaultPlatform"
            name="defaultPlatform"
            value={settings.defaultPlatform}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="LinkedIn">LinkedIn</option>
            <option value="X">X</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="linkedInApiKey" className="block text-gray-700 font-bold mb-2">LinkedIn API Key</label>
          <input
            type="password"
            id="linkedInApiKey"
            name="linkedInApiKey"
            value={settings.linkedInApiKey}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="xApiKey" className="block text-gray-700 font-bold mb-2">X API Key</label>
          <input
            type="password"
            id="xApiKey"
            name="xApiKey"
            value={settings.xApiKey}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="language" className="block text-gray-700 font-bold mb-2">Language</label>
          <select
            id="language"
            name="language"
            value={settings.language}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="timezone" className="block text-gray-700 font-bold mb-2">Timezone</label>
          <select
            id="timezone"
            name="timezone"
            value={settings.timezone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="UTC">UTC</option>
            <option value="EST">EST</option>
            <option value="PST">PST</option>
            <option value="CET">CET</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-gray-700 font-bold">Enable Notifications</span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
        >
          <Save className="mr-2" /> Save Settings
        </button>
      </form>
    </div>
  )
}

export default SettingsPage