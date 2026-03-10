// TagWise – Install Banner Component
import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export default function InstallBanner() {
  const { canInstall, isIOS, triggerInstall } = usePWAInstall();
  const [dismissed, setDismissed] = useState(false);
  const [installing, setInstalling] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  if (!canInstall || dismissed) return null;

  const handleInstall = async () => {
    if (isIOS) {
      setShowIOSGuide(true);
      return;
    }
    setInstalling(true);
    await triggerInstall();
    setInstalling(false);
  };

  return (
    <>
      <div style={{
        position: 'fixed',
        bottom: 'calc(72px + env(safe-area-inset-bottom, 0px) + 12px)',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 32px)',
        maxWidth: '480px',
        zIndex: 1000,
        animation: 'slideUp 0.4s ease both',
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #1e3a5f 0%, #1e293b 100%)',
          border: '1px solid rgba(59,130,246,0.3)',
          borderRadius: '20px',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
        }}>
          {/* Icon */}
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            flexShrink: 0,
            boxShadow: '0 4px 12px rgba(59,130,246,0.4)',
          }}>
            📲
          </div>

          {/* Text */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '15px', color: '#f1f5f9', lineHeight: 1.2 }}>
              Install TagWise
            </div>
            <div style={{ color: '#94a3b8', fontSize: '12px', marginTop: '3px' }}>
              Learn offline · No browser UI · Feels native
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
            <button
              onClick={() => setDismissed(true)}
              style={{
                background: 'none',
                border: 'none',
                color: '#64748b',
                cursor: 'pointer',
                fontSize: '18px',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
              }}
              aria-label="Dismiss"
            >
              ✕
            </button>
            <button
              onClick={handleInstall}
              disabled={installing}
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                border: 'none',
                borderRadius: '10px',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: 700,
                padding: '8px 16px',
                fontFamily: 'Nunito, sans-serif',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 8px rgba(59,130,246,0.4)',
                opacity: installing ? 0.7 : 1,
                transition: 'all 0.2s',
              }}
            >
              {installing ? '⏳' : isIOS ? 'How to Install' : 'Install App'}
            </button>
          </div>
        </div>
      </div>

      {/* iOS Guide Modal */}
      {showIOSGuide && (
        <div
          onClick={() => setShowIOSGuide(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 2000,
            background: 'rgba(0,0,0,0.7)',
            display: 'flex', alignItems: 'flex-end',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              width: '100%',
              background: '#1e293b',
              borderRadius: '24px 24px 0 0',
              padding: '24px',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>📲</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '20px', color: '#f1f5f9' }}>
                Install on iPhone/iPad
              </div>
            </div>

            {[
              { step: '1', icon: '⬆️', text: 'Tap the Share button at the bottom of Safari' },
              { step: '2', icon: '📋', text: 'Scroll down and tap "Add to Home Screen"' },
              { step: '3', icon: '✅', text: 'Tap "Add" — TagWise will appear on your home screen!' },
            ].map(item => (
              <div key={item.step} style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '16px', marginBottom: '8px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '14px',
              }}>
                <div style={{
                  width: '40px', height: '40px',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px', flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: 1.4 }}>
                  {item.text}
                </div>
              </div>
            ))}

            <button
              onClick={() => setShowIOSGuide(false)}
              style={{
                width: '100%', padding: '14px',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                border: 'none', borderRadius: '14px',
                color: '#fff', fontWeight: 700,
                fontSize: '16px', cursor: 'pointer',
                fontFamily: 'Nunito, sans-serif',
                marginTop: '8px',
              }}
            >
              Got it! 🎉
            </button>
          </div>
        </div>
      )}
    </>
  );
}
