// TagWise – Bottom Navigation
import React from 'react';

const NAV_ITEMS = [
  {
    id: 'home',
    label: 'Learn',
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
        stroke={active ? '#3b82f6' : '#64748b'}>
        <path d="M2 12L12 2l10 10"/>
        <path d="M5 9v12h14V9" fill={active ? 'rgba(59,130,246,0.15)' : 'none'} stroke="none"/>
        <path d="M5 9v12h14V9"/>
        <rect x="9" y="15" width="6" height="6" fill={active ? '#3b82f6' : 'none'} stroke={active ? '#3b82f6' : '#64748b'}/>
      </svg>
    ),
  },
  {
    id: 'practice',
    label: 'Practice',
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
        stroke={active ? '#22c55e' : '#64748b'}>
        <circle cx="12" cy="12" r="10" fill={active ? 'rgba(34,197,94,0.15)' : 'none'} stroke={active ? '#22c55e' : '#64748b'}/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    id: 'sandbox',
    label: 'Sandbox',
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
        stroke={active ? '#f97316' : '#64748b'}>
        <polyline points="16 18 22 12 16 6" fill="none"/>
        <polyline points="8 6 2 12 8 18" fill="none"/>
        <line x1="12" y1="2" x2="12" y2="22" stroke={active ? '#f97316' : '#64748b'}/>
      </svg>
    ),
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
        stroke={active ? '#a855f7' : '#64748b'}>
        <circle cx="12" cy="8" r="4" fill={active ? 'rgba(168,85,247,0.15)' : 'none'}/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill={active ? 'rgba(168,85,247,0.1)' : 'none'} strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const ACTIVE_COLORS = {
  home: '#3b82f6',
  practice: '#22c55e',
  sandbox: '#f97316',
  profile: '#a855f7',
};

export default function BottomNav({ currentPage, onNavigate }) {
  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: `calc(72px + env(safe-area-inset-bottom, 0px))`,
      paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      background: 'rgba(15,23,42,0.96)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      display: 'flex',
      alignItems: 'center',
      zIndex: 200,
      boxShadow: '0 -4px 24px rgba(0,0,0,0.4)',
    }}>
      {NAV_ITEMS.map(item => {
        const active = currentPage === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              transition: 'all 0.2s',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <div style={{
              transition: 'transform 0.2s',
              transform: active ? 'translateY(-2px)' : 'none',
            }}>
              {item.icon(active)}
            </div>
            <span style={{
              fontSize: '11px',
              fontWeight: active ? 700 : 500,
              color: active ? ACTIVE_COLORS[item.id] : '#64748b',
              fontFamily: 'Nunito, sans-serif',
              transition: 'color 0.2s',
            }}>
              {item.label}
            </span>
            {active && (
              <div style={{
                position: 'absolute',
                top: 0,
                width: '32px',
                height: '3px',
                background: ACTIVE_COLORS[item.id],
                borderRadius: '0 0 4px 4px',
              }} />
            )}
          </button>
        );
      })}
    </nav>
  );
}
