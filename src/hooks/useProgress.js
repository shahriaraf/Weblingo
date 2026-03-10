// TagWise – User Progress Hook
import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'tagwise_progress';

const defaultProgress = {
  completedLessons: [],   // array of lesson IDs
  xp: 0,
  streak: 0,
  lastActiveDate: null,
  hearts: 5,
  maxHearts: 5,
  gems: 0,
  level: 1,
  unlockedTracks: ['html'],
  lessonScores: {},       // { lessonId: score }
  quizAttempts: {},       // { lessonId: attempts }
  achievements: [],
  dailyGoal: 50,
  xpToday: 0,
  goalDates: {},
};

export const ACHIEVEMENTS = [
  { id: 'first-lesson', name: 'First Step', desc: 'Complete your first lesson', icon: '🌱', condition: (p) => p.completedLessons.length >= 1 },
  { id: 'html-master', name: 'HTML Hero', desc: 'Complete all HTML lessons', icon: '🏗️', condition: (p) => false },
  { id: 'streak-7', name: 'On Fire!', desc: 'Maintain a 7-day streak', icon: '🔥', condition: (p) => p.streak >= 7 },
  { id: 'xp-100', name: 'XP Hunter', desc: 'Earn 100 XP', icon: '⚡', condition: (p) => p.xp >= 100 },
  { id: 'xp-500', name: 'Scholar', desc: 'Earn 500 XP', icon: '📚', condition: (p) => p.xp >= 500 },
  { id: 'perfect-quiz', name: 'Perfectionist', desc: 'Get 100% on a quiz', icon: '💯', condition: (p) => false },
  { id: 'no-mistakes', name: 'Flawless', desc: 'Complete 5 lessons without errors', icon: '✨', condition: (p) => false },
  { id: 'level-5', name: 'Rising Star', desc: 'Reach Level 5', icon: '⭐', condition: (p) => p.level >= 5 },
];

function calcLevel(xp) {
  return Math.floor(Math.sqrt(xp / 20)) + 1;
}

function getXpForNextLevel(level) {
  return level * level * 20;
}

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...defaultProgress, ...parsed };
      }
    } catch {}
    return { ...defaultProgress };
  });

  // Persist to localStorage on every change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {}
  }, [progress]);

  // Update streak on load
  useEffect(() => {
  const today = new Date().toDateString();
  if (progress.lastActiveDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    setProgress(p => ({
      ...p,
      streak: p.lastActiveDate === yesterday ? p.streak : 0,
      lastActiveDate: today,
      xpToday: 0,
    }));
  }
}, [progress.lastActiveDate]);

  const completeLesson = useCallback((lessonId, xpEarned, score = 100) => {
    setProgress(p => {
      const today = new Date().toDateString();
      const alreadyDone = p.completedLessons.includes(lessonId);
      const newXp = p.xp + (alreadyDone ? Math.floor(xpEarned * 0.5) : xpEarned);
      const newLevel = calcLevel(newXp);
      const newXpToday = p.xpToday + xpEarned;

      // Check goal
      const goalMet = newXpToday >= p.dailyGoal;
      const newGoalDates = goalMet
        ? { ...p.goalDates, [today]: true }
        : p.goalDates;

      // Streak
      let newStreak = p.streak;
      if (goalMet && !p.goalDates[today]) {
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        newStreak = (p.goalDates[yesterday] || p.streak > 0) ? p.streak + 1 : 1;
      }

      const updated = {
        ...p,
        xp: newXp,
        level: newLevel,
        xpToday: newXpToday,
        goalDates: newGoalDates,
        streak: newStreak,
        completedLessons: alreadyDone ? p.completedLessons : [...p.completedLessons, lessonId],
        lessonScores: { ...p.lessonScores, [lessonId]: Math.max(p.lessonScores[lessonId] || 0, score) },
        lastActiveDate: today,
      };

      // Check achievements
      const newAchievements = ACHIEVEMENTS.filter(
        a => !updated.achievements.includes(a.id) && a.condition(updated)
      ).map(a => a.id);

      return { ...updated, achievements: [...updated.achievements, ...newAchievements] };
    });
  }, []);

  const loseHeart = useCallback(() => {
    setProgress(p => ({
      ...p,
      hearts: Math.max(0, p.hearts - 1),
    }));
  }, []);

  const refillHearts = useCallback(() => {
    setProgress(p => ({ ...p, hearts: p.maxHearts }));
  }, []);

  const isLessonCompleted = useCallback(
    (lessonId) => progress.completedLessons.includes(lessonId),
    [progress.completedLessons]
  );

  const getLessonScore = useCallback(
    (lessonId) => progress.lessonScores[lessonId] || 0,
    [progress.lessonScores]
  );

  const xpForNextLevel = getXpForNextLevel(progress.level);
  const xpProgress = ((progress.xp - getXpForNextLevel(progress.level - 1)) /
    (xpForNextLevel - getXpForNextLevel(progress.level - 1))) * 100;

  return {
    progress,
    completeLesson,
    loseHeart,
    refillHearts,
    isLessonCompleted,
    getLessonScore,
    xpForNextLevel,
    xpProgress: Math.min(100, Math.max(0, xpProgress)),
    resetProgress: () => setProgress({ ...defaultProgress }),
  };
}
