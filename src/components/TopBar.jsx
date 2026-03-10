// TagWise – Top Navigation Bar
import React from 'react';

const icons = {
  heart: (filled) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? '#ef4444' : 'none'} stroke={filled ? '#ef4444' : '#64748b'} strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  fire: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round">
      <path d="M12 2c0 0-5 5-5 11a5 5 0 0 0 10 0c0-6-5-11-5-11z"/>
      <path d="M12 2c0 0 2 3 2 6-1-1-2-2-2-2s-2 1.5-2 4a3 3 0 0 0 6 0"/>
    </svg>
  ),
  gem: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 22 9 18 22 6 22 2 9"/>
    </svg>
  ),
};

export default function TopBar({ progress, currentPage }) {
  const hearts = progress?.hearts ?? 5;
  const streak = progress?.streak ?? 0;
  const gems = progress?.gems ?? 0;

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(15,23,42,0.92)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      paddingInline: '20px',
      gap: '12px',
    }}>
      {/* Logo */}
      <div style={{
        fontFamily: 'Syne, sans-serif',
        fontWeight: 800,
        fontSize: '22px',
        letterSpacing: '-0.5px',
        flex: 1,
      }}>
        <span style={{ color: '#f1f5f9' }}>Tag</span>
        <span style={{
          background: 'linear-gradient(90deg, #3b82f6, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>Wise</span>
      </div>

      {/* Stats pills */}
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>

        {/* Streak */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          background: streak > 0 ? 'rgba(249,115,22,0.15)' : 'rgba(255,255,255,0.06)',
          border: `1px solid ${streak > 0 ? 'rgba(249,115,22,0.3)' : 'rgba(255,255,255,0.08)'}`,
          borderRadius: '20px',
          padding: '6px 12px',
          cursor: 'default',
        }}>
          {icons.fire}
          <span style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: '14px',
            color: streak > 0 ? '#f97316' : '#64748b',
          }}>
            {streak}
          </span>
        </div>

        {/* Gems */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          background: 'rgba(168,85,247,0.12)',
          border: '1px solid rgba(168,85,247,0.25)',
          borderRadius: '20px',
          padding: '6px 12px',
        }}>
          {icons.gem}
          <span style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: '14px',
            color: '#a855f7',
          }}>
            {gems}
          </span>
        </div>

        {/* Hearts */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '3px',
        }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} style={{
              display: 'inline-flex',
              transition: 'transform 0.2s',
              transform: i < hearts ? 'scale(1)' : 'scale(0.8)',
              opacity: i < hearts ? 1 : 0.3,
            }}>
              {icons.heart(i < hearts)}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
