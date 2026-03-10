// TagWise – Main App
import React, { useState } from 'react';
import './styles.css';
import { useProgress } from './hooks/useProgress';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import HomePage from './components/HomePage';
import LessonViewer from './components/LessonViewer';
import PracticePage from './components/PracticePage';
import SandboxPage from './components/SandboxPage';
import ProfilePage from './components/ProfilePage';
import InstallBanner from './components/InstallBanner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeLesson, setActiveLesson] = useState(null);

  const {
    progress,
    completeLesson,
    loseHeart,
    resetProgress,
    xpForNextLevel,
    xpProgress,
  } = useProgress();

  const handleSelectLesson = (lesson) => {
    setActiveLesson(lesson);
  };

  const handleCompleteLesson = (lessonId, xp, score) => {
    completeLesson(lessonId, xp, score);
  };

  const handleBackFromLesson = () => {
    setActiveLesson(null);
  };

  const handleNavigate = (page) => {
    if (activeLesson) setActiveLesson(null);
    setCurrentPage(page);
  };

  // If a lesson is open, show full-screen lesson viewer
  if (activeLesson) {
    return (
      <LessonViewer
        lesson={activeLesson}
        progress={progress}
        onComplete={handleCompleteLesson}
        onBack={handleBackFromLesson}
      />
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#0f172a' }}>
      <TopBar progress={{ ...progress, xpProgress }} currentPage={currentPage} />

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: currentPage !== 'sandbox' ? 'hidden' : 'auto' }}>
        {currentPage === 'home' && (
          <HomePage
            progress={progress}
            onSelectLesson={handleSelectLesson}
          />
        )}
        {currentPage === 'practice' && (
          <PracticePage
            progress={progress}
            onComplete={handleCompleteLesson}
          />
        )}
        {currentPage === 'sandbox' && (
          <SandboxPage />
        )}
        {currentPage === 'profile' && (
          <ProfilePage
            progress={{ ...progress, xpProgress }}
            onReset={resetProgress}
          />
        )}
      </main>

      <BottomNav currentPage={currentPage} onNavigate={handleNavigate} />
      <InstallBanner />
    </div>
  );
}
