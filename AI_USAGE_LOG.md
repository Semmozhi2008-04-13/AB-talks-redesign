# AI Usage Log - ABTalks Redesign

**Tool Used:** DeepSeek (Web Interface)
**Date:** August 8, 2026
**Project:** Redesign of ABTalks 60-Day Challenge Platform

## Prompt History & Iterations

1. **Initial Context & Scope:**
   - *Prompt:* "I am participating in a hackathon. I need to redesign ABTalks. It has a 60-day coding challenge for Indian college students. They submit a GitHub commit and LinkedIn post daily. Must be mobile-first at 390px. Give me the full code structure using React, Vite, and Tailwind."

2. **Landing Page (Route /):**
   - *Prompt:* "Generate the Landing page component. It needs to show trust (5k+ students, 97% consistency), explain the GitHub + LinkedIn workflow in 3 steps, and have a bright CTA. Use a gradient background from indigo to purple. Make it feel like a community."

3. **Dashboard (Route /dashboard):**
   - *Prompt:* "Build the dashboard. Show current streak, completion progress, and a 7-day timeline. I need to handle edge cases: an empty user bio (show a warning) and a missed day (show a 'Streak Freeze' banner). Include a night mode toggle button for late-night coding."

4. **Mock Data Generation:**
   - *Prompt:* "Generate mock JSON data for 60 days of the challenge. Mark Day 8 specifically as 'missed' to test the edge case. Mark Days 1-11 as completed, Day 12 as available. Provide a user object with a blank bio field to test the empty profile."

5. **Day Page (Route /day/12):**
   - *Prompt:* "Create the submission page. It must have a form with two required URL inputs (GitHub commit and LinkedIn post). If one is missing, show an error alert. Upon successful submission, show a success state and navigate back to the dashboard."

6. **UI Polishing & Responsiveness:**
   - *Prompt:* "Ensure all touch targets are at least 44px for mobile. Wrap the entire app in a 390px max-width container to simulate the mobile viewport for screenshots."

7. **Adding Winning Features (Confetti & Night Mode):**
   - *Prompt:* "Add a working Night Mode toggle using React Context so the whole app switches to a dark warm theme. Also, install canvas-confetti and fire it when the user submits the Day 12 form to give a celebratory effect."

## Implementation Notes
- **Frameworks:** React 18, React Router v6, Tailwind CSS, Lucide Icons, Canvas-Confetti.
- **Design Decisions:** Introduced "Streak Freeze" to reduce student anxiety over missed days. Used warm gradients to encourage nighttime engagement. 
- **Development Process:** Code was generated iteratively. I requested specific components one at a time, integrated them, and adjusted the styling based on the AI's feedback. Commits were made incrementally after each major component was integrated.