// TagWise – Home / Learn Page
import { useState } from 'react';
import { TRACK_META, TRACKS, getUnitsByTrack } from '../data/lessons';

const XP_BAR_COLORS = {
  html: ['#f97316', '#ef4444'],
  css: ['#3b82f6', '#8b5cf6'],
  js: ['#eab308', '#f97316'],
};

function TrackSelector({ activeTrack, onSelect, progress }) {
  return (
    <div style={{ display: 'flex', gap: '10px', padding: '16px 20px 0', overflowX: 'auto' }}>
      {Object.values(TRACKS).map(track => {
        const meta = TRACK_META[track];
        const completed = (progress?.completedLessons || []).filter(id => id.startsWith(track)).length;
        const isActive = activeTrack === track;

        return (
          <button
            key={track}
            onClick={() => onSelect(track)}
            style={{
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              background: isActive ? `rgba(${track === 'html' ? '249,115,22' : track === 'css' ? '59,130,246' : '234,179,8'},0.15)` : 'rgba(255,255,255,0.04)',
              border: isActive ? `2px solid ${meta.color}` : '2px solid transparent',
              borderRadius: '16px',
              cursor: 'pointer',
              transition: 'all 0.25s',
              minWidth: '90px',
            }}
          >
            <div style={{ fontSize: '28px' }}>{meta.icon}</div>
            <div style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '15px',
              color: isActive ? meta.color : '#94a3b8',
            }}>
              {meta.name}
            </div>
            <div style={{
              fontSize: '11px',
              color: isActive ? meta.color : '#64748b',
              fontWeight: 600,
            }}>
              {completed}/{meta.totalLessons}
            </div>
            {/* Mini progress bar */}
            <div style={{ width: '60px', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
              <div style={{
                height: '100%',
                width: `${(completed / meta.totalLessons) * 100}%`,
                background: meta.gradient,
                borderRadius: '2px',
                transition: 'width 0.5s ease',
              }} />
            </div>
          </button>
        );
      })}
    </div>
  );
}

function XPProgress({ progress, track }) {
  const colors = XP_BAR_COLORS[track];
  const xpToday = progress?.xpToday || 0;
  const goal = progress?.dailyGoal || 50;
  const pct = Math.min(100, (xpToday / goal) * 100);

  return (
    <div style={{
      margin: '16px 20px',
      padding: '14px 16px',
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '16px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '16px' }}>🎯</span>
          <span style={{ color: '#94a3b8', fontSize: '13px', fontWeight: 600 }}>Daily Goal</span>
        </div>
        <span style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 700,
          fontSize: '13px',
          color: pct >= 100 ? '#22c55e' : '#f1f5f9',
        }}>
          {xpToday} / {goal} XP {pct >= 100 ? '✅' : ''}
        </span>
      </div>
      <div style={{ height: '10px', background: 'rgba(255,255,255,0.08)', borderRadius: '6px', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${pct}%`,
          background: `linear-gradient(90deg, ${colors[0]}, ${colors[1]})`,
          borderRadius: '6px',
          transition: 'width 0.6s cubic-bezier(0.34,1.56,0.64,1)',
          boxShadow: `0 0 10px ${colors[0]}60`,
        }} />
      </div>
    </div>
  );
}

function LessonNode({ lesson, isCompleted, isLocked, onPress, isFirst }) {
  const meta = TRACK_META[lesson.track];
  const diffColors = {
    beginner: '#22c55e',
    intermediate: '#eab308',
    advanced: '#ef4444',
  };

  return (
    <button
      onClick={() => !isLocked && onPress(lesson)}
      disabled={isLocked}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        padding: '14px 16px',
        background: isCompleted
          ? `rgba(${lesson.track === 'html' ? '249,115,22' : lesson.track === 'css' ? '59,130,246' : '234,179,8'},0.1)`
          : 'rgba(255,255,255,0.04)',
        border: `1.5px solid ${isCompleted ? meta.color + '40' : isFirst && !isCompleted ? meta.color : 'rgba(255,255,255,0.08)'}`,
        borderRadius: '16px',
        cursor: isLocked ? 'not-allowed' : 'pointer',
        opacity: isLocked ? 0.4 : 1,
        transition: 'all 0.2s',
        textAlign: 'left',
        boxShadow: isFirst && !isCompleted ? `0 0 0 1px ${meta.color}30, 0 4px 16px ${meta.color}20` : 'none',
        animation: isFirst && !isCompleted ? 'pulse 2s infinite' : 'none',
      }}
    >
      {/* Icon circle */}
      <div style={{
        width: '52px',
        height: '52px',
        borderRadius: '16px',
        background: isCompleted ? meta.gradient : 'rgba(255,255,255,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        flexShrink: 0,
        boxShadow: isCompleted ? `0 4px 12px ${meta.color}40` : 'none',
        position: 'relative',
      }}>
        {lesson.icon}
        {isCompleted && (
          <div style={{
            position: 'absolute',
            bottom: '-4px',
            right: '-4px',
            width: '20px',
            height: '20px',
            background: '#22c55e',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '11px',
            border: '2px solid #0f172a',
          }}>
            ✓
          </div>
        )}
        {isLocked && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
          }}>
            🔒
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 700,
          fontSize: '15px',
          color: isLocked ? '#475569' : '#f1f5f9',
          marginBottom: '4px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          {lesson.title}
        </div>
        <div style={{
          fontSize: '12px',
          color: '#64748b',
          marginBottom: '6px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>
          {lesson.description}
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{
            background: `${diffColors[lesson.difficulty]}20`,
            color: diffColors[lesson.difficulty],
            fontSize: '10px',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: '6px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}>
            {lesson.difficulty}
          </span>
          <span style={{ fontSize: '11px', color: '#64748b' }}>
            ⚡ {lesson.xp} XP
          </span>
        </div>
      </div>

      {/* Arrow */}
      {!isLocked && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      )}
    </button>
  );
}

function UnitSection({ unit, progress, onSelectLesson }) {
  const completedCount = unit.lessons.filter(l =>
    progress?.completedLessons?.includes(l.id)
  ).length;

  const meta = TRACK_META[unit.lessons[0]?.track];

  return (
    <div style={{ marginBottom: '24px' }}>
      {/* Unit header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 20px',
        marginBottom: '12px',
      }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '10px',
          background: meta?.gradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          color: '#fff',
        }}>
          {unit.unitNum}
        </div>
        <div>
          <div style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: '16px',
            color: '#f1f5f9',
          }}>
            Unit {unit.unitNum}: {unit.unitName}
          </div>
          <div style={{ fontSize: '12px', color: '#64748b' }}>
            {completedCount}/{unit.lessons.length} lessons complete
          </div>
        </div>

        {/* Mini unit progress */}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '4px' }}>
          {unit.lessons.map((l, i) => (
            <div key={l.id} style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: progress?.completedLessons?.includes(l.id) ? meta?.color : 'rgba(255,255,255,0.1)',
              transition: 'background 0.3s',
            }} />
          ))}
        </div>
      </div>

      {/* Lesson list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingInline: '20px' }}>
        {unit.lessons.map((lesson, index) => {
          const isCompleted = progress?.completedLessons?.includes(lesson.id);
          // A lesson is the "first" available (not completed) one
          const allPrev = unit.lessons.slice(0, index).every(l => progress?.completedLessons?.includes(l.id));
          const isFirst = !isCompleted && allPrev;
          // Locked: previous not done and not completed (first lesson always unlocked)
          const isLocked = index > 0 && !isCompleted && !allPrev;

          return (
            <LessonNode
              key={lesson.id}
              lesson={lesson}
              isCompleted={isCompleted}
              isLocked={isLocked}
              isFirst={isFirst}
              onPress={onSelectLesson}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function HomePage({ progress, onSelectLesson }) {
  const [activeTrack, setActiveTrack] = useState(TRACKS.HTML);
  const units = getUnitsByTrack(activeTrack);

  return (
    <div style={{ flex: 1, overflowY: 'auto', paddingBottom: '90px' }}>
      {/* Track Tabs */}
      <TrackSelector activeTrack={activeTrack} onSelect={setActiveTrack} progress={progress} />

      {/* XP / Daily Goal */}
      <XPProgress progress={progress} track={activeTrack} />

      {/* Track Banner */}
      <div style={{
        margin: '0 20px 20px',
        padding: '20px',
        background: TRACK_META[activeTrack].gradient,
        borderRadius: '20px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          fontSize: '80px',
          opacity: 0.15,
          lineHeight: 1,
        }}>
          {TRACK_META[activeTrack].icon}
        </div>
        <div style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          fontSize: '22px',
          color: '#fff',
          marginBottom: '6px',
        }}>
          {TRACK_META[activeTrack].fullName}
        </div>
        <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', marginBottom: '14px' }}>
          {activeTrack === 'html' && 'Build the structure of the web. Learn every HTML element and attribute.'}
          {activeTrack === 'css' && 'Style the web beautifully. Master layout, animations, and visual design.'}
          {activeTrack === 'js' && 'Make the web interactive. From variables to async/await and beyond.'}
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '20px', color: '#fff' }}>
              {TRACK_META[activeTrack].totalLessons}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px' }}>Lessons</div>
          </div>
          <div style={{ width: '1px', background: 'rgba(255,255,255,0.2)' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '20px', color: '#fff' }}>
              {(progress?.completedLessons || []).filter(id => id.startsWith(activeTrack)).length}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px' }}>Done</div>
          </div>
          <div style={{ width: '1px', background: 'rgba(255,255,255,0.2)' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '20px', color: '#fff' }}>
              {units.length}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px' }}>Units</div>
          </div>
        </div>
      </div>

      {/* Units + Lessons */}
      {units.map(unit => (
        <UnitSection
          key={unit.unitNum}
          unit={unit}
          progress={progress}
          onSelectLesson={onSelectLesson}
        />
      ))}
    </div>
  );
}
