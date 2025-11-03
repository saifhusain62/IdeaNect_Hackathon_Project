import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Lightbulb, Target, DollarSign, Users, FileText } from 'lucide-react';

const SubmitIdea = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    fundingGoal: '',
    teamSize: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store idea in localStorage
    const ideas = JSON.parse(localStorage.getItem('ideas') || '[]');
    const newIdea = {
      ...formData,
      id: Date.now(),
      creatorId: user.id,
      creatorName: user.name,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
    ideas.push(newIdea);
    localStorage.setItem('ideas', JSON.stringify(ideas));
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      category: '',
      fundingGoal: '',
      teamSize: ''
    });
    
    alert('Idea submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Submit Your Idea
          </h1>
          <p className="text-gray-600 mt-2">
            Share your innovative idea with potential investors
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Lightbulb className="inline h-4 w-4 mr-1" />
                Idea Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your idea title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FileText className="inline h-4 w-4 mr-1" />
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe your idea in detail..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Target className="inline h-4 w-4 mr-1" />
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a category</option>
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="education">Education</option>
                <option value="retail">Retail</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <DollarSign className="inline h-4 w-4 mr-1" />
                  Funding Goal ($)
                </label>
                <input
                  type="number"
                  name="fundingGoal"
                  value={formData.fundingGoal}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="50000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users className="inline h-4 w-4 mr-1" />
                  Team Size
                </label>
                <input
                  type="number"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="5"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              Submit Idea
            </button>
          </form>
        </div>

        {/* User's Submitted Ideas */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Your Submitted Ideas</h2>
          <div className="space-y-4">
            {JSON.parse(localStorage.getItem('ideas') || '[]')
              .filter(idea => idea.creatorId === user?.id)
              .map(idea => (
                <div key={idea.id} className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-medium">{idea.title}</h3>
                  <p className="text-sm text-gray-500">
                    Submitted on {new Date(idea.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            {JSON.parse(localStorage.getItem('ideas') || '[]')
              .filter(idea => idea.creatorId === user?.id).length === 0 && (
              <p className="text-gray-500 text-center py-4">
                No ideas submitted yet
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitIdea;