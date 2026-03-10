// TagWise – Practice Page
import { useState } from 'react';
import { TRACK_META } from '../data/lessons';

const PRACTICE_CHALLENGES = [
  {
    id: 'p1',
    track: 'html',
    title: 'Fix the HTML',
    icon: '🔧',
    description: 'The heading tag is wrong. Fix it!',
    difficulty: 'beginner',
    xp: 15,
    type: 'fix-code',
    buggyCode: '<h7>Welcome to my site</h7>',
    correctCode: '<h1>Welcome to my site</h1>',
    hint: 'HTML headings go from h1 (largest) to h6 (smallest)',
    explanation: 'h7 does not exist in HTML. The largest heading is h1.',
  },
  {
    id: 'p2',
    track: 'css',
    title: 'Center with Flexbox',
    icon: '🎯',
    description: 'Write CSS to center items horizontally',
    difficulty: 'beginner',
    xp: 20,
    type: 'fill-blank',
    template: 'display: flex;\n___: center;',
    answer: 'justify-content',
    hint: 'Think about which axis horizontal alignment controls',
    explanation: 'justify-content: center aligns items on the main (horizontal) axis',
  },
  {
    id: 'p3',
    track: 'html',
    title: 'Create a Link',
    icon: '🔗',
    description: 'Which is the correct anchor tag syntax?',
    difficulty: 'beginner',
    xp: 10,
    type: 'multiple-choice',
    question: 'Which creates a clickable link?',
    options: [
      '<link href="page.html">Click me</link>',
      '<a href="page.html">Click me</a>',
      '<anchor to="page.html">Click me</anchor>',
      '<click url="page.html">Click me</click>',
    ],
    answer: 1,
    explanation: 'The <a> (anchor) tag with href attribute creates hyperlinks.',
  },
  {
    id: 'p4',
    track: 'css',
    title: 'Box Model',
    icon: '📦',
    description: 'Which property adds space INSIDE the border?',
    difficulty: 'beginner',
    xp: 15,
    type: 'multiple-choice',
    question: 'Which CSS property adds space between content and border?',
    options: ['margin', 'spacing', 'padding', 'gap'],
    answer: 2,
    explanation: 'padding creates space inside the border. margin creates space outside.',
  },
  {
    id: 'p5',
    track: 'js',
    title: 'Variables',
    icon: '📦',
    description: 'Spot the correct variable declaration',
    difficulty: 'beginner',
    xp: 15,
    type: 'multiple-choice',
    question: 'Which correctly declares a constant?',
    options: ['variable name = "Alice"', 'const name = "Alice"', 'constant name = "Alice"', 'val name = "Alice"'],
    answer: 1,
    explanation: 'const declares a constant in JavaScript. var and let are also valid for variables.',
  },
  {
    id: 'p6',
    track: 'css',
    title: 'Selector Challenge',
    icon: '🎯',
    description: 'Match the right CSS selector',
    difficulty: 'intermediate',
    xp: 20,
    type: 'multiple-choice',
    question: 'How do you select all <p> elements with class="intro"?',
    options: ['p + .intro', 'p.intro', '#p.intro', 'p > .intro'],
    answer: 1,
    explanation: 'p.intro selects <p> elements that also have class="intro".',
  },
  {
    id: 'p7',
    track: 'html',
    title: 'Semantic HTML',
    icon: '🧠',
    description: 'Choose the correct semantic element',
    difficulty: 'intermediate',
    xp: 20,
    type: 'multiple-choice',
    question: 'Which element should wrap a blog post?',
    options: ['<div>', '<section>', '<article>', '<content>'],
    answer: 2,
    explanation: '<article> is for self-contained, distributable content like blog posts.',
  },
  {
    id: 'p8',
    track: 'js',
    title: 'Array Methods',
    icon: '📚',
    description: 'Which method creates a new transformed array?',
    difficulty: 'intermediate',
    xp: 25,
    type: 'multiple-choice',
    question: 'Which array method transforms each item and returns a new array?',
    options: ['.forEach()', '.filter()', '.find()', '.map()'],
    answer: 3,
    explanation: '.map() creates a new array by applying a function to each element.',
  },
];

export default function PracticePage({ progress, onComplete }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showResult, setShowResult] = useState(false);
  const [fillValue, setFillValue] = useState('');
  const [streak, setStreak] = useState(0);

  const challenge = PRACTICE_CHALLENGES[currentIdx % PRACTICE_CHALLENGES.length];
  const meta = TRACK_META[challenge.track];

  const handleAnswer = (idx) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const correct = idx === challenge.answer;
    setScore(s => ({ correct: s.correct + (correct ? 1 : 0), total: s.total + 1 }));
    setStreak(s => correct ? s + 1 : 0);
    if (correct) onComplete?.(challenge.id, challenge.xp, 100);
  };

  const handleNext = () => {
    setCurrentIdx(i => i + 1);
    setSelected(null);
    setAnswered(false);
    setFillValue('');
  };

  const diffColor = { beginner: '#22c55e', intermediate: '#eab308', advanced: '#ef4444' };

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '20px', paddingBottom: '90px' }}>
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '24px', color: '#f1f5f9', marginBottom: '6px' }}>
          Daily Practice
        </h1>
        <div style={{ color: '#64748b', fontSize: '14px' }}>
          {score.total > 0 ? `${score.correct}/${score.total} correct today` : 'Keep your skills sharp!'}
        </div>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
        {[
          { icon: '🎯', label: 'Accuracy', value: score.total > 0 ? `${Math.round((score.correct/score.total)*100)}%` : '--', color: '#3b82f6' },
          { icon: '⚡', label: 'Streak',  value: streak > 0 ? `${streak}x` : '--', color: '#eab308' },
          { icon: '✅', label: 'Done', value: score.total, color: '#22c55e' },
        ].map(s => (
          <div key={s.label} style={{
            flex: 1, padding: '12px 8px',
            background: `${s.color}10`,
            border: `1px solid ${s.color}25`,
            borderRadius: '14px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '18px', marginBottom: '2px' }}>{s.icon}</div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '16px', color: s.color }}>
              {s.value}
            </div>
            <div style={{ fontSize: '10px', color: '#64748b' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Challenge Card */}
      <div style={{
        background: 'rgba(255,255,255,0.04)',
        border: `1px solid ${meta.color}30`,
        borderRadius: '20px',
        overflow: 'hidden',
        marginBottom: '16px',
        animation: 'fadeIn 0.3s ease',
      }}>
        {/* Top bar */}
        <div style={{
          padding: '14px 18px',
          background: `${meta.color}10`,
          borderBottom: `1px solid ${meta.color}20`,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          <span style={{ fontSize: '22px' }}>{challenge.icon}</span>
          <div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '15px', color: '#f1f5f9' }}>
              {challenge.title}
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '3px' }}>
              <span style={{
                fontSize: '10px', fontWeight: 700,
                background: `${meta.color}20`, color: meta.color,
                padding: '2px 8px', borderRadius: '6px',
              }}>
                {meta.name}
              </span>
              <span style={{
                fontSize: '10px', fontWeight: 700,
                background: `${diffColor[challenge.difficulty]}20`, color: diffColor[challenge.difficulty],
                padding: '2px 8px', borderRadius: '6px',
              }}>
                {challenge.difficulty}
              </span>
            </div>
          </div>
          <div style={{ marginLeft: 'auto', fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#eab308', fontSize: '13px' }}>
            ⚡ {challenge.xp}
          </div>
        </div>

        {/* Question */}
        <div style={{ padding: '18px' }}>
          <div style={{ color: '#f1f5f9', fontSize: '16px', fontWeight: 600, marginBottom: '16px', lineHeight: 1.5 }}>
            {challenge.question || challenge.description}
          </div>

          {/* Multiple choice */}
          {challenge.type === 'multiple-choice' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {challenge.options.map((opt, i) => {
                let bg = 'rgba(255,255,255,0.04)';
                let border = '1.5px solid rgba(255,255,255,0.08)';
                let color = '#f1f5f9';
                if (answered) {
                  if (i === challenge.answer) { bg = 'rgba(34,197,94,0.15)'; border = '1.5px solid #22c55e'; color = '#22c55e'; }
                  else if (selected === i) { bg = 'rgba(239,68,68,0.15)'; border = '1.5px solid #ef4444'; color = '#ef4444'; }
                } else if (selected === i) {
                  bg = 'rgba(59,130,246,0.15)'; border = '1.5px solid #3b82f6'; color = '#3b82f6';
                }

                return (
                  <button key={i} onClick={() => handleAnswer(i)} disabled={answered} style={{
                    padding: '12px 16px',
                    background: bg, border, borderRadius: '12px',
                    color, cursor: answered ? 'default' : 'pointer',
                    textAlign: 'left',
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 600, fontSize: '14px',
                    transition: 'all 0.2s',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}>
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          {/* Explanation */}
          {answered && (
            <div style={{
              marginTop: '14px',
              padding: '12px 14px',
              background: selected === challenge.answer ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)',
              border: `1px solid ${selected === challenge.answer ? 'rgba(34,197,94,0.25)' : 'rgba(239,68,68,0.25)'}`,
              borderRadius: '10px',
              animation: 'fadeIn 0.3s ease',
            }}>
              <div style={{ fontWeight: 700, color: selected === challenge.answer ? '#22c55e' : '#ef4444', marginBottom: '4px', fontSize: '14px' }}>
                {selected === challenge.answer ? '🎉 Correct!' : '❌ Not quite'}
              </div>
              <div style={{ color: '#94a3b8', fontSize: '13px', lineHeight: 1.5 }}>
                {challenge.explanation}
              </div>
            </div>
          )}

          {/* Hint */}
          {!answered && (
            <details style={{ marginTop: '12px' }}>
              <summary style={{ color: '#64748b', fontSize: '13px', cursor: 'pointer', fontWeight: 600 }}>
                💡 Show hint
              </summary>
              <div style={{ color: '#94a3b8', fontSize: '13px', marginTop: '8px', padding: '10px', background: 'rgba(255,255,255,0.04)', borderRadius: '8px' }}>
                {challenge.hint}
              </div>
            </details>
          )}
        </div>
      </div>

      {/* Next button */}
      {answered && (
        <button
          onClick={handleNext}
          style={{
            width: '100%', padding: '16px',
            background: meta.gradient,
            border: 'none', borderRadius: '14px',
            color: '#fff',
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700, fontSize: '16px',
            cursor: 'pointer',
            boxShadow: `0 4px 16px ${meta.color}40`,
            animation: 'fadeIn 0.3s ease',
          }}
        >
          Next Challenge →
        </button>
      )}
    </div>
  );
}
