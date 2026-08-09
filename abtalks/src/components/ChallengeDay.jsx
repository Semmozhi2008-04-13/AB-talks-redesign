import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { user, todayTask, challengeData } from '../data/mockData';
import { Wand2, CheckCircle, AlertCircle } from 'lucide-react';

const ChallengeDay = () => {
  const { dayId } = useParams();
  const navigate = useNavigate();
  const currentDay = parseInt(dayId);
  const task = todayTask;

  // --- State ---
  const [githubLink, setGithubLink] = useState('');
  const [linkedinLink, setLinkedinLink] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isGeneratingDraft, setIsGeneratingDraft] = useState(false);

  // --- Thoughtful Feature: AI Draft Generator ---
  const handleGenerateDraft = () => {
    setIsGeneratingDraft(true);
    setTimeout(() => {
      const draft = `🚀 Day ${currentDay} of my #ABTalks 60-day challenge!\n\nI just built a simple global state manager using React Context & useReducer. This helps manage complex app states without prop drilling! \n\nCheck out the code here: ${githubLink || "My GitHub"} \n\n#ReactJS #OpenSource #BuildInPublic`;
      setLinkedinLink(draft);
      setIsGeneratingDraft(false);
    }, 1000);
  };

  // --- Form Validation & Submission ---
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!githubLink.trim() || !linkedinLink.trim()) {
      setError("Both GitHub and LinkedIn links are required to submit.");
      return;
    }

    // Success case
    setIsSubmitted(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000); // Navigate back after 2 seconds
  };

  // --- Success State ---
  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center flex-1 text-center gap-4 pt-10">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
          <CheckCircle className="w-8 h-8" />
        </div>
        <div className="font-bold text-lg text-gray-900 dark:text-white">Submission Complete!</div>
        <div className="text-xs text-gray-500 dark:text-white/50">Great job! You're one day closer to your 60-day legacy. Redirecting you back...</div>
      </div>
    );
  }

  // --- Form State ---
  return (
    <div className="flex flex-col gap-5 pb-8">
      
      {/* 1. Task Header */}
      <div className="flex flex-col gap-1">
        <div className="text-xs font-bold text-cyan-500 dark:text-cyan-400 uppercase tracking-wider mb-1">Day {currentDay}</div>
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white leading-tight">{task.title}</h1>
        <p className="text-xs text-gray-500 dark:text-white/60 mt-1">{task.description}</p>
      </div>

      {/* 2. Task Details */}
      <div className="bg-black/20 dark:bg-black/40 border border-white/10 rounded-2xl p-4">
        <div className="text-xs font-bold text-gray-900 dark:text-white mb-2">🚀 What to build:</div>
        <ul className="text-xs text-gray-600 dark:text-white/70 space-y-1.5 list-disc pl-4">
          <li>Initialize a new React App (Vite).</li>
          <li>Use Context API to wrap your App component.</li>
          <li>Implement a `useReducer` to handle state updates.</li>
          <li>Create a custom hook `useGlobalState()` for easy access.</li>
        </ul>
        <a href={task.exampleLink} target="_blank" rel="noreferrer" className="mt-3 inline-block text-[10px] text-cyan-500 dark:text-cyan-400 underline underline-offset-2">View Example Repo →</a>
      </div>

      {/* 3. Submission Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
        
        {/* Error Alert (Edge Case: Missing inputs) */}
        {error && (
          <div className="flex items-center gap-2 p-3 bg-red-100 dark:bg-red-900/30 border border-red-500/40 rounded-xl text-red-700 dark:text-red-200 text-xs font-medium">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            {error}
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-600 dark:text-white/70">GitHub Repository/Commit URL *</label>
          <input 
            type="url" 
            placeholder="https://github.com/your/repo" 
            className="w-full px-4 py-3 bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-400 dark:placeholder:text-white/20"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1.5 relative">
          <div className="flex justify-between items-center">
            <label className="text-xs font-medium text-gray-600 dark:text-white/70">LinkedIn Post URL / Content *</label>
            <button 
              type="button" 
              onClick={handleGenerateDraft}
              className="flex items-center gap-1.5 text-[10px] text-cyan-500 dark:text-cyan-300 hover:text-cyan-400 transition"
              disabled={isGeneratingDraft}
            >
              <Wand2 className={`w-3 h-3 ${isGeneratingDraft ? 'animate-pulse' : ''}`} />
              {isGeneratingDraft ? 'Drafting...' : 'Generate Draft'}
            </button>
          </div>
          <textarea 
            placeholder="Paste your LinkedIn post URL, or generate a draft above!" 
            className="w-full px-4 py-3 min-h-[100px] bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-400 dark:placeholder:text-white/20 resize-none"
            value={linkedinLink}
            onChange={(e) => setLinkedinLink(e.target.value)}
          />
        </div>

        <button 
          type="submit" 
          className="w-full py-4 mt-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-full hover:scale-[1.02] active:scale-95 transition-all min-h-[44px] flex items-center justify-center"
        >
          Submit Day {currentDay} Proof of Work
        </button>
      </form>
    </div>
  );
};

export default ChallengeDay;