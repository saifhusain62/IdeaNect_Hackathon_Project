import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Upload, AlertCircle, CheckCircle } from 'lucide-react';

const IdeaSubmit = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    fundingGoal: '',
    timeline: '',
    attachments: null
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const categories = [
    'Technology',
    'Healthcare',
    'Education',
    'Energy',
    'Finance',
    'Entertainment',
    'Food & Beverage',
    'Transportation',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'attachments') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      // Submit to backend
      // const response = await axios.post('/api/ideas/submit', formData);
      
      // Simulated success
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          title: '',
          category: '',
          description: '',
          fundingGoal: '',
          timeline: '',
          attachments: null
        });
      }, 3000);
    } catch (err) {
      setError('Failed to submit idea. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Submit Your Idea</h1>
          <p className="text-gray-600 mt-2">
            Share your innovative idea with potential investors
          </p>
        </div>

        {submitted && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center">
            <CheckCircle size={20} className="mr-2" />
            Your idea has been submitted successfully! We'll review it shortly.
          </div>
        )}

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg flex items-center">
            <AlertCircle size={20} className="mr-2" />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Title *
              </label>
              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your project title"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Description *
              </label>
              <textarea
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe your idea in detail..."
              />
              <p className="mt-1 text-sm text-gray-500">
                Minimum 100 characters
              </p>
            </div>

            {/* Funding Goal */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Funding Goal ($) *
              </label>
              <input
                type="number"
                name="fundingGoal"
                required
                value={formData.fundingGoal}
                onChange={handleChange}
                min="1000"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="50000"
              />
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estimated Timeline (months) *
              </label>
              <input
                type="number"
                name="timeline"
                required
                value={formData.timeline}
                onChange={handleChange}
                min="1"
                max="60"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="12"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Attachments (Optional)
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 transition-colors">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="attachments"
                      className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="attachments"
                        name="attachments"
                        type="file"
                        className="sr-only"
                        onChange={handleChange}
                        accept=".pdf,.doc,.docx,.ppt,.pptx"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PDF, DOC, PPT up to 10MB
                  </p>
                  {formData.attachments && (
                    <p className="text-sm text-green-600">
                      File selected: {formData.attachments.name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitted ? 'Submitting...' : 'Submit Idea'}
              </button>
            </div>
          </div>
        </form>

        {/* Tips Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            Tips for a Successful Submission
          </h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Be clear and concise in your description</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Include relevant market research and data</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Set realistic funding goals and timelines</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Highlight what makes your idea unique</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IdeaSubmit;