// TagWise – Lesson Viewer / Player
import React, { useState, useEffect } from 'react';
import { TRACK_META } from '../data/lessons';
import { VISUAL_COMPONENTS, LESSON_VISUAL_MAP } from './VisualInteractives';

function ProgressBar({ current, total, color }) {
  return (
    <div style={{ height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
      <div style={{
        height: '100%',
        width: `${(current / total) * 100}%`,
        background: color,
        borderRadius: '3px',
        transition: 'width 0.4s cubic-bezier(0.34,1.56,0.64,1)',
        boxShadow: `0 0 8px ${color}60`,
      }} />
    </div>
  );
}

function XPPopup({ xp, visible }) {
  if (!visible) return null;
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 999,
      animation: 'bounceIn 0.5s cubic-bezier(.175,.885,.32,1.275) both',
      pointerEvents: 'none',
      textAlign: 'center',
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #eab308, #f97316)',
        borderRadius: '24px',
        padding: '24px 40px',
        boxShadow: '0 16px 64px rgba(234,179,8,0.5)',
      }}>
        <div style={{ fontSize: '40px', marginBottom: '4px' }}>⚡</div>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '32px', color: '#fff' }}>
          +{xp} XP
        </div>
        <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', marginTop: '4px' }}>
          Lesson Complete!
        </div>
      </div>
    </div>
  );
}

function QuizQuestion({ question, onAnswer, onNext, hearts }) {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSelect = (idx) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const correct = idx === question.answer;
    setIsCorrect(correct);
    onAnswer(correct);
  };

  return (
    <div style={{ animation: 'fadeIn 0.3s ease' }}>
      {/* Question */}
      <div style={{
        padding: '20px',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px',
        marginBottom: '20px',
      }}>
        <div style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
          Question
        </div>
        <div style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 700,
          fontSize: '18px',
          color: '#f1f5f9',
          lineHeight: 1.4,
        }}>
          {question.question}
        </div>
      </div>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
        {question.options.map((opt, i) => {
          const isSelected = selected === i;
          const isAnswer = i === question.answer;
          let bg = 'rgba(255,255,255,0.04)';
          let border = '2px solid rgba(255,255,255,0.08)';
          let color = '#f1f5f9';

          if (answered) {
            if (isAnswer) {
              bg = 'rgba(34,197,94,0.15)';
              border = '2px solid #22c55e';
              color = '#22c55e';
            } else if (isSelected && !isAnswer) {
              bg = 'rgba(239,68,68,0.15)';
              border = '2px solid #ef4444';
              color = '#ef4444';
            }
          } else if (isSelected) {
            bg = 'rgba(59,130,246,0.15)';
            border = '2px solid #3b82f6';
            color = '#3b82f6';
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={answered}
              style={{
                width: '100%',
                padding: '14px 18px',
                background: bg,
                border,
                borderRadius: '14px',
                color,
                cursor: answered ? 'default' : 'pointer',
                textAlign: 'left',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 600,
                fontSize: '15px',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div style={{
                width: '28px', height: '28px',
                borderRadius: '8px',
                background: answered && isAnswer ? '#22c55e' : answered && isSelected ? '#ef4444' : 'rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '13px', fontWeight: 800, flexShrink: 0,
                color: answered && (isAnswer || isSelected) ? '#fff' : '#64748b',
              }}>
                {answered && isAnswer ? '✓' : answered && isSelected && !isAnswer ? '✗' : String.fromCharCode(65 + i)}
              </div>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {answered && (
        <div style={{
          padding: '14px 16px',
          background: isCorrect ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)',
          border: `1px solid ${isCorrect ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'}`,
          borderRadius: '12px',
          marginBottom: '20px',
          animation: 'fadeIn 0.3s ease',
        }}>
          <div style={{
            fontWeight: 700,
            color: isCorrect ? '#22c55e' : '#ef4444',
            marginBottom: '6px',
            fontSize: '15px',
          }}>
            {isCorrect ? '🎉 Correct!' : '❌ Not quite...'}
          </div>
          <div style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.5 }}>
            {question.explanation}
          </div>
        </div>
      )}

      {answered && (
        <button
          onClick={onNext}
          style={{
            width: '100%',
            padding: '16px',
            background: isCorrect
              ? 'linear-gradient(135deg, #22c55e, #16a34a)'
              : 'linear-gradient(135deg, #3b82f6, #2563eb)',
            border: 'none',
            borderRadius: '14px',
            color: '#fff',
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: '16px',
            cursor: 'pointer',
            boxShadow: isCorrect ? '0 4px 16px rgba(34,197,94,0.4)' : '0 4px 16px rgba(59,130,246,0.4)',
          }}
        >
          Continue →
        </button>
      )}
    </div>
  );
}

export default function LessonViewer({ lesson, progress, onComplete, onBack }) {
  const [phase, setPhase] = useState('learn'); // 'learn' | 'quiz' | 'done'
  const [quizIndex, setQuizIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [showXP, setShowXP] = useState(false);
  const [mistakes, setMistakes] = useState(0);

  const meta = TRACK_META[lesson.track];
  const hasQuiz = lesson.quiz && lesson.quiz.length > 0;

  const VisualComponent = VISUAL_COMPONENTS[LESSON_VISUAL_MAP[lesson.id]];

  const handleQuizAnswer = (isCorrect) => {
    if (isCorrect) {
      setCorrectCount(c => c + 1);
    } else {
      setMistakes(m => m + 1);
    }
  };

  const handleNext = () => {
    if (quizIndex < (lesson.quiz?.length || 0) - 1) {
      setQuizIndex(q => q + 1);
    } else {
      // Done
      const score = Math.round((correctCount / (lesson.quiz?.length || 1)) * 100);
      const earnedXP = Math.round(lesson.xp * (0.5 + 0.5 * score / 100));
      setPhase('done');
      setShowXP(true);
      onComplete(lesson.id, earnedXP, score);
      setTimeout(() => setShowXP(false), 2000);
    }
  };

  const totalSteps = 1 + (lesson.quiz?.length || 0);
  const currentStep = phase === 'learn' ? 0 : phase === 'quiz' ? quizIndex + 1 : totalSteps;

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#0f172a',
      minHeight: '100vh',
    }}>
      {/* Header */}
      <div style={{
        padding: '16px 20px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(15,23,42,0.9)',
        backdropFilter: 'blur(12px)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <button
          onClick={onBack}
          style={{
            width: '36px', height: '36px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '10px',
            color: '#94a3b8',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '16px',
            flexShrink: 0,
          }}
        >
          ✕
        </button>

        <div style={{ flex: 1 }}>
          <ProgressBar
            current={currentStep}
            total={totalSteps}
            color={meta.color}
          />
        </div>

        <div style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 700,
          fontSize: '13px',
          color: meta.color,
          background: `${meta.color}15`,
          padding: '4px 10px',
          borderRadius: '8px',
          flexShrink: 0,
        }}>
          ⚡ {lesson.xp} XP
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px', paddingBottom: '100px' }}>

        {/* LEARN PHASE */}
        {phase === 'learn' && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            {/* Lesson Header */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{
                fontSize: '40px',
                marginBottom: '10px',
                animation: 'bounceIn 0.5s cubic-bezier(.175,.885,.32,1.275)',
              }}>
                {lesson.icon}
              </div>
              <div style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: '26px',
                color: '#f1f5f9',
                marginBottom: '8px',
                lineHeight: 1.2,
              }}>
                {lesson.title}
              </div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: `${meta.color}15`,
                color: meta.color,
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 700,
                border: `1px solid ${meta.color}30`,
              }}>
                {meta.icon} {meta.name}
              </div>
            </div>

            {/* Theory Card */}
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '20px',
              marginBottom: '20px',
            }}>
              <div style={{ color: '#94a3b8', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                📖 Concept
              </div>
              <div
                style={{
                  color: '#cbd5e1',
                  fontSize: '15px',
                  lineHeight: 1.7,
                }}
                dangerouslySetInnerHTML={{ __html: lesson.content?.theory || '' }}
              />
            </div>

            {/* Visual Interactive */}
            {VisualComponent && (
              <div style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: '20px',
                marginBottom: '20px',
              }}>
                <div style={{ color: '#94a3b8', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' }}>
                  🎮 Interactive Lab
                </div>
                <VisualComponent />
              </div>
            )}

            {/* Continue Button */}
            <button
              onClick={() => hasQuiz ? setPhase('quiz') : (() => {
                setPhase('done');
                setShowXP(true);
                onComplete(lesson.id, lesson.xp, 100);
                setTimeout(() => setShowXP(false), 2000);
              })()}
              style={{
                width: '100%',
                padding: '18px',
                background: meta.gradient,
                border: 'none',
                borderRadius: '16px',
                color: '#fff',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '17px',
                cursor: 'pointer',
                boxShadow: `0 6px 24px ${meta.color}40`,
                marginTop: '8px',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
              onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              {hasQuiz ? 'Take the Quiz →' : 'Complete Lesson ✓'}
            </button>
          </div>
        )}

        {/* QUIZ PHASE */}
        {phase === 'quiz' && lesson.quiz && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            <div style={{ marginBottom: '20px' }}>
              <div style={{
                color: '#94a3b8',
                fontSize: '13px',
                fontWeight: 600,
                marginBottom: '6px',
              }}>
                Question {quizIndex + 1} of {lesson.quiz.length}
              </div>
              <div style={{ color: '#64748b', fontSize: '12px' }}>
                {correctCount} correct so far
                {mistakes > 0 && ` · ${mistakes} mistake${mistakes > 1 ? 's' : ''}`}
              </div>
            </div>
            <QuizQuestion
              question={lesson.quiz[quizIndex]}
              onAnswer={handleQuizAnswer}
              onNext={handleNext}
            />
          </div>
        )}

        {/* DONE PHASE */}
        {phase === 'done' && (
          <div style={{ animation: 'bounceIn 0.6s cubic-bezier(.175,.885,.32,1.275)', textAlign: 'center', paddingTop: '40px' }}>
            <div style={{ fontSize: '72px', marginBottom: '16px' }}>🎉</div>
            <div style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: '28px',
              color: '#f1f5f9',
              marginBottom: '8px',
            }}>
              Lesson Complete!
            </div>
            <div style={{ color: '#94a3b8', fontSize: '15px', marginBottom: '32px' }}>
              You earned <strong style={{ color: '#eab308' }}>+{lesson.xp} XP</strong>
              {hasQuiz && ` with ${Math.round((correctCount / lesson.quiz.length) * 100)}% accuracy`}
            </div>

            {/* Stats */}
            <div style={{
              display: 'flex',
              gap: '12px',
              marginBottom: '32px',
              justifyContent: 'center',
            }}>
              {[
                { icon: '⚡', label: 'XP Earned', value: lesson.xp, color: '#eab308' },
                { icon: '💎', label: 'Accuracy', value: hasQuiz ? `${Math.round((correctCount / lesson.quiz.length) * 100)}%` : '100%', color: '#3b82f6' },
                { icon: '🔥', label: 'Streak', value: `${progress?.streak || 1}d`, color: '#f97316' },
              ].map(stat => (
                <div key={stat.label} style={{
                  flex: 1,
                  padding: '14px 8px',
                  background: `${stat.color}15`,
                  border: `1px solid ${stat.color}30`,
                  borderRadius: '16px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '22px', marginBottom: '4px' }}>{stat.icon}</div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '18px', color: stat.color }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '10px', color: '#64748b', marginTop: '2px' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <button
              onClick={onBack}
              style={{
                width: '100%',
                padding: '18px',
                background: meta.gradient,
                border: 'none',
                borderRadius: '16px',
                color: '#fff',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '17px',
                cursor: 'pointer',
                boxShadow: `0 6px 24px ${meta.color}40`,
              }}
            >
              Back to Lessons
            </button>
          </div>
        )}
      </div>

      <XPPopup xp={lesson.xp} visible={showXP} />
    </div>
  );
}
