// TagWise – Profile Page
import React from 'react';
import { TRACK_META, TRACKS, allLessons } from '../data/lessons';
import { ACHIEVEMENTS } from '../hooks/useProgress';

function LevelBadge({ level, xp, xpProgress }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '28px 20px',
      background: 'linear-gradient(135deg, #1e293b, #263348)',
      borderRadius: '24px',
      border: '1px solid rgba(255,255,255,0.08)',
      marginBottom: '20px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* BG decoration */}
      <div style={{
        position: 'absolute',
        top: '-30px', right: '-30px',
        width: '120px', height: '120px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
      }} />

      {/* Avatar */}
      <div style={{
        width: '80px', height: '80px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '36px',
        marginBottom: '12px',
        boxShadow: '0 8px 32px rgba(59,130,246,0.4)',
        border: '3px solid rgba(255,255,255,0.15)',
      }}>
        👨‍💻
      </div>

      <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '20px', color: '#f1f5f9', marginBottom: '4px' }}>
        Developer
      </div>
      <div style={{ color: '#64748b', fontSize: '13px', marginBottom: '16px' }}>
        TagWise Learner
      </div>

      {/* Level */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #eab308, #f97316)',
          padding: '4px 16px',
          borderRadius: '20px',
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          fontSize: '15px',
          color: '#fff',
          boxShadow: '0 3px 12px rgba(234,179,8,0.4)',
        }}>
          Level {level}
        </div>
        <span style={{ color: '#94a3b8', fontSize: '14px' }}>{xp} XP total</span>
      </div>

      {/* XP progress bar */}
      <div style={{ width: '100%', maxWidth: '280px' }}>
        <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{
            height: '100%',
            width: `${xpProgress}%`,
            background: 'linear-gradient(90deg, #eab308, #f97316)',
            borderRadius: '4px',
            transition: 'width 0.6s ease',
            boxShadow: '0 0 10px rgba(234,179,8,0.5)',
          }} />
        </div>
        <div style={{ color: '#475569', fontSize: '11px', textAlign: 'center', marginTop: '6px' }}>
          {Math.round(xpProgress)}% to Level {level + 1}
        </div>
      </div>
    </div>
  );
}

function TrackProgress({ progress }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '20px',
      padding: '18px',
      marginBottom: '20px',
    }}>
      <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '16px', color: '#f1f5f9', marginBottom: '14px' }}>
        📊 Progress
      </div>

      {Object.values(TRACKS).map(track => {
        const meta = TRACK_META[track];
        const total = meta.totalLessons;
        const completed = (progress.completedLessons || []).filter(id => id.startsWith(track)).length;
        const pct = total > 0 ? (completed / total) * 100 : 0;

        return (
          <div key={track} style={{ marginBottom: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px' }}>{meta.icon}</span>
                <span style={{ fontWeight: 700, color: '#f1f5f9', fontSize: '14px' }}>{meta.name}</span>
              </div>
              <span style={{ color: meta.color, fontSize: '13px', fontWeight: 700 }}>
                {completed}/{total}
              </span>
            </div>
            <div style={{ height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{
                height: '100%',
                width: `${pct}%`,
                background: meta.gradient,
                borderRadius: '4px',
                transition: 'width 0.6s ease',
                boxShadow: `0 0 8px ${meta.color}50`,
              }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function StatsGrid({ progress }) {
  const stats = [
    { icon: '⚡', label: 'Total XP', value: progress.xp || 0, color: '#eab308' },
    { icon: '🔥', label: 'Day Streak', value: `${progress.streak || 0}d`, color: '#f97316' },
    { icon: '✅', label: 'Completed', value: (progress.completedLessons || []).length, color: '#22c55e' },
    { icon: '❤️', label: 'Hearts', value: `${progress.hearts || 5}/5`, color: '#ef4444' },
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '10px',
      marginBottom: '20px',
    }}>
      {stats.map(s => (
        <div key={s.label} style={{
          padding: '16px',
          background: `${s.color}10`,
          border: `1px solid ${s.color}25`,
          borderRadius: '16px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '24px', marginBottom: '6px' }}>{s.icon}</div>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '22px', color: s.color, marginBottom: '2px' }}>
            {s.value}
          </div>
          <div style={{ fontSize: '11px', color: '#64748b' }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

function AchievementCard({ achievement, unlocked }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 14px',
      background: unlocked ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.02)',
      border: `1px solid ${unlocked ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.05)'}`,
      borderRadius: '14px',
      opacity: unlocked ? 1 : 0.5,
    }}>
      <div style={{
        width: '44px', height: '44px',
        borderRadius: '12px',
        background: unlocked ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.05)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '22px', flexShrink: 0,
        filter: unlocked ? 'none' : 'grayscale(100%)',
      }}>
        {achievement.icon}
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: '14px', color: unlocked ? '#f1f5f9' : '#475569' }}>
          {achievement.name}
        </div>
        <div style={{ fontSize: '12px', color: '#64748b' }}>{achievement.desc}</div>
      </div>
      {unlocked && (
        <div style={{ marginLeft: 'auto', color: '#22c55e', fontSize: '16px' }}>✓</div>
      )}
    </div>
  );
}

export default function ProfilePage({ progress, onReset }) {
  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '20px', paddingBottom: '90px' }}>

      <LevelBadge
        level={progress.level || 1}
        xp={progress.xp || 0}
        xpProgress={progress.xpProgress || 0}
      />

      <StatsGrid progress={progress} />
      <TrackProgress progress={progress} />

      {/* Achievements */}
      <div style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        padding: '18px',
        marginBottom: '20px',
      }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '16px', color: '#f1f5f9', marginBottom: '14px' }}>
          🏆 Achievements
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {ACHIEVEMENTS.map(ach => (
            <AchievementCard
              key={ach.id}
              achievement={ach}
              unlocked={(progress.achievements || []).includes(ach.id)}
            />
          ))}
        </div>
      </div>

      {/* Reset */}
      <div style={{
        background: 'rgba(239,68,68,0.05)',
        border: '1px solid rgba(239,68,68,0.15)',
        borderRadius: '20px',
        padding: '18px',
      }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '15px', color: '#f1f5f9', marginBottom: '8px' }}>
          ⚠️ Reset Progress
        </div>
        <div style={{ color: '#64748b', fontSize: '13px', marginBottom: '14px' }}>
          This will erase all your progress, XP, and achievements. Cannot be undone.
        </div>
        <button
          onClick={() => {
            if (window.confirm('Are you sure? This cannot be undone!')) onReset();
          }}
          style={{
            padding: '10px 20px',
            background: 'rgba(239,68,68,0.15)',
            border: '1px solid rgba(239,68,68,0.3)',
            borderRadius: '10px',
            color: '#ef4444',
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: '13px',
            fontFamily: 'Nunito, sans-serif',
          }}
        >
          Reset All Progress
        </button>
      </div>
    </div>
  );
}
