# 🏷️ TagWise — Learn HTML, CSS & JavaScript

> A Duolingo-style interactive PWA for mastering web development fundamentals through immersive visual learning.

---

## ✨ Features

- **57+ Lessons** across HTML, CSS, and JavaScript — covering everything from W3Schools
- **Visual Interactive Labs** — Flexbox sandbox, CSS Grid builder, Box Model visualizer, Color Mixer, Transitions lab, and more
- **Duolingo-style gamification** — XP, streaks, hearts, levels, achievements
- **Live Code Sandbox** — write HTML/CSS/JS and preview instantly
- **Practice Mode** — daily challenges to reinforce concepts
- **PWA Ready** — installs to home screen, works offline
- **Mobile-first design** — feels like a native app

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm 7+

### 1. Install dependencies
```bash
npm install
```

### 2. Run in development
```bash
npm start
```
Opens at `http://localhost:3000`

### 3. Build for production
```bash
npm run build
```
Outputs to `build/` folder — deploy anywhere.

---

## 🌐 Deploy (Free Options)

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag & drop the build/ folder to netlify.com/drop
```

### GitHub Pages
1. Push to GitHub
2. Add `"homepage": "https://yourusername.github.io/tagwise"` to package.json
3. Run: `npm run build && npx gh-pages -d build`

---

## 📱 PWA Installation

Once deployed to HTTPS:
- **Android/Chrome**: "Add to Home Screen" prompt appears automatically
- **iOS/Safari**: Share → Add to Home Screen
- **Desktop**: Install icon appears in address bar

---

## 📁 Project Structure

```
tagwise/
├── public/
│   ├── index.html          # HTML shell with fonts
│   └── manifest.json       # PWA manifest
├── src/
│   ├── App.jsx             # Root component & routing
│   ├── index.js            # Entry point + SW registration
│   ├── styles.css          # Global styles & CSS variables
│   ├── data/
│   │   └── lessons.js      # All 57+ lesson definitions
│   ├── hooks/
│   │   ├── useProgress.js  # localStorage progress store
│   │   └── usePWAInstall.js # PWA install prompt hook
│   └── components/
│       ├── TopBar.jsx          # Header with XP/hearts/streak
│       ├── BottomNav.jsx       # Tab navigation
│       ├── HomePage.jsx        # Track selector + lesson map
│       ├── LessonViewer.jsx    # Full lesson player + quiz
│       ├── VisualInteractives.jsx  # 🌟 Interactive lab widgets
│       ├── PracticePage.jsx    # Daily challenges
│       ├── SandboxPage.jsx     # Live code editor
│       ├── ProfilePage.jsx     # Stats + achievements
│       └── InstallBanner.jsx   # PWA install prompt UI
```

---

## 🧠 Lesson Coverage

### HTML (17 lessons)
- Document Structure, Elements, Attributes
- Headings, Paragraphs, Links, Images
- Lists (ul, ol), Tables
- Forms, Input Types (all 20+ types)
- Semantic HTML (header, nav, main, article, section, aside, footer)
- Divs & Spans, Meta Tags, Accessibility
- Audio, Video, iFrames, Canvas

### CSS (20 lessons)
- Selectors, Colors, Box Model, Typography
- Display Property, Flexbox, CSS Grid
- Positioning (static, relative, absolute, fixed, sticky)
- Responsive Design & Media Queries
- CSS Variables (Custom Properties)
- Transitions, Keyframe Animations, Transforms
- Pseudo-classes & Pseudo-elements
- Specificity & Cascade, Z-Index
- Shadows, Gradients, Border Radius, Overflow

### JavaScript (20 lessons)
- Variables (let, const, var), Data Types
- Operators, Strings, Arrays, Objects
- If/Else, Switch, Loops (for, while, for...of)
- Functions & Arrow Functions, Scope & Closures
- The DOM, Events, Error Handling
- Async & Promises, Fetch API
- Classes & OOP, ES Modules
- Local Storage

---

## 🎮 Gamification System

| Feature | Details |
|---------|---------|
| XP | Earned per lesson, quiz performance boosts multiplier |
| Levels | Calculated as √(xp/20) + 1 |
| Hearts | 5 hearts, lose one per mistake |
| Streak | Daily goal tracking (default: 50 XP/day) |
| Gems | Reward currency for future features |
| Achievements | 8 unlockable achievements |

---

## 🎨 Design System

- **Font**: Syne (display) + Nunito (body) + JetBrains Mono (code)
- **Color Palette**: Dark slate base with vibrant track colors
  - HTML: Orange `#f97316`
  - CSS: Blue `#3b82f6`  
  - JS: Yellow `#eab308`
- **Theme**: Dark, premium, mobile-first

---

## 🔧 Extending the App

### Add a new lesson
Edit `src/data/lessons.js` and add to `htmlLessons`, `cssLessons`, or `jsLessons`:
```js
{
  id: 'css-new-feature',
  track: TRACKS.CSS,
  unit: 5,
  unitName: 'Visual Effects',
  title: 'New Feature',
  icon: '🆕',
  difficulty: DIFFICULTY.BEGINNER,
  xp: 20,
  description: 'Learn the new CSS feature.',
  type: 'visual-interactive',
  content: { theory: 'This is the theory...' },
  quiz: [{ type: 'multiple-choice', question: '...', options: [...], answer: 0, explanation: '...' }]
}
```

### Add a visual interactive
In `src/components/VisualInteractives.jsx`:
1. Create a new React component
2. Add it to `VISUAL_COMPONENTS` registry
3. Map it to a lesson ID in `LESSON_VISUAL_MAP`

---

## 📦 Built With

- React 18
- CSS Variables + CSS-in-JS (inline styles)
- Workbox (PWA/Service Worker)
- Google Fonts (Syne, Nunito, JetBrains Mono)
- Zero external UI dependencies

---

*TagWise — Where Tags Become Wisdom* 🏷️
