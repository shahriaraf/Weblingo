// TagWise – Code Sandbox
import React, { useState, useRef, useEffect } from 'react';

const TEMPLATES = {
  html: {
    name: 'HTML Starter',
    icon: '🏗️',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello, World! 👋</h1>
  <p>Edit this code to learn HTML.</p>
  <ul>
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>
  </ul>
</body>
</html>`,
  },
  flexbox: {
    name: 'Flexbox Demo',
    icon: '🔀',
    html: `<!DOCTYPE html>
<html>
<head>
<style>
  body { margin: 0; padding: 16px; background: #0f172a; font-family: sans-serif; }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 16px;
    border: 2px dashed #334155;
    border-radius: 12px;
  }
  .box {
    width: 60px; height: 60px;
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    color: white; font-weight: bold; font-size: 18px;
  }
</style>
</head>
<body>
<div class="container">
  <div class="box" style="background:#f97316">1</div>
  <div class="box" style="background:#3b82f6">2</div>
  <div class="box" style="background:#22c55e">3</div>
</div>
<p style="color:#94a3b8;margin-top:16px">Try changing justify-content and align-items!</p>
</body>
</html>`,
  },
  grid: {
    name: 'CSS Grid',
    icon: '⊞',
    html: `<!DOCTYPE html>
<html>
<head>
<style>
  body { margin: 0; padding: 16px; background: #0f172a; font-family: sans-serif; }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .cell {
    height: 70px; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    color: white; font-weight: bold; font-size: 16px;
  }
</style>
</head>
<body>
<div class="grid">
  <div class="cell" style="background:#f97316">1</div>
  <div class="cell" style="background:#3b82f6">2</div>
  <div class="cell" style="background:#22c55e">3</div>
  <div class="cell" style="background:#a855f7">4</div>
  <div class="cell" style="background:#eab308">5</div>
  <div class="cell" style="background:#ec4899">6</div>
</div>
<p style="color:#94a3b8;margin-top:16px">Try changing grid-template-columns!</p>
</body>
</html>`,
  },
  animation: {
    name: 'Animations',
    icon: '✨',
    html: `<!DOCTYPE html>
<html>
<head>
<style>
  body { margin: 0; padding: 32px; background: #0f172a; display: flex; justify-content: center; }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-30px); }
  }
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.3); opacity: 0.7; }
  }
  .box1 {
    width: 60px; height: 60px; background: #f97316;
    border-radius: 12px;
    animation: spin 2s linear infinite;
    margin: 20px;
  }
  .box2 {
    width: 60px; height: 60px; background: #3b82f6;
    border-radius: 50%;
    animation: bounce 1s ease infinite;
    margin: 20px;
  }
  .box3 {
    width: 60px; height: 60px; background: #22c55e;
    border-radius: 12px;
    animation: pulse 1.5s ease infinite;
    margin: 20px;
  }
  .row { display: flex; align-items: center; }
</style>
</head>
<body>
<div class="row">
  <div class="box1"></div>
  <div class="box2"></div>
  <div class="box3"></div>
</div>
</body>
</html>`,
  },
  js: {
    name: 'JavaScript',
    icon: '⚡',
    html: `<!DOCTYPE html>
<html>
<head>
<style>
  body { margin: 0; padding: 16px; background: #0f172a; font-family: sans-serif; color: #f1f5f9; }
  button {
    padding: 10px 20px; background: #3b82f6; color: white;
    border: none; border-radius: 8px; cursor: pointer; font-size: 16px;
    margin-right: 8px; margin-bottom: 8px;
  }
  button:hover { background: #2563eb; }
  #output { margin-top: 16px; padding: 16px; background: #1e293b; border-radius: 10px; min-height: 50px; }
  .counter { font-size: 48px; font-weight: bold; text-align: center; padding: 20px; color: #3b82f6; }
</style>
</head>
<body>
<div class="counter" id="count">0</div>
<div style="text-align:center">
  <button onclick="document.getElementById('count').textContent = +document.getElementById('count').textContent + 1">
    + Increment
  </button>
  <button onclick="document.getElementById('count').textContent = +document.getElementById('count').textContent - 1">
    - Decrement
  </button>
  <button onclick="document.getElementById('count').textContent = 0">
    ↺ Reset
  </button>
</div>
<div id="output" style="color:#94a3b8;font-size:14px">Click the buttons!</div>
</body>
</html>`,
  },
};

export default function SandboxPage() {
  const [activeTemplate, setActiveTemplate] = useState('html');
  const [code, setCode] = useState(TEMPLATES.html.html);
  const [liveCode, setLiveCode] = useState(TEMPLATES.html.html);
  const [activeTab, setActiveTab] = useState('code'); // 'code' | 'preview'
  const textareaRef = useRef(null);
  const updateTimer = useRef(null);

  useEffect(() => {
    if (updateTimer.current) clearTimeout(updateTimer.current);
    updateTimer.current = setTimeout(() => setLiveCode(code), 500);
    return () => clearTimeout(updateTimer.current);
  }, [code]);

  const loadTemplate = (key) => {
    setActiveTemplate(key);
    setCode(TEMPLATES[key].html);
    setActiveTab('code');
  };

  const handleTabKey = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const newCode = code.substring(0, start) + '  ' + code.substring(end);
      setCode(newCode);
      setTimeout(() => {
        e.target.selectionStart = start + 2;
        e.target.selectionEnd = start + 2;
      }, 0);
    }
  };

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingBottom: '72px' }}>
      {/* Header */}
      <div style={{ padding: '16px 20px 12px' }}>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '22px', color: '#f1f5f9', marginBottom: '4px' }}>
          Code Sandbox
        </h1>
        <p style={{ color: '#64748b', fontSize: '13px' }}>Write and preview HTML, CSS & JS live</p>
      </div>

      {/* Template picker */}
      <div style={{ paddingInline: '20px', marginBottom: '12px' }}>
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
          {Object.entries(TEMPLATES).map(([key, t]) => (
            <button
              key={key}
              onClick={() => loadTemplate(key)}
              style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                background: activeTemplate === key ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.04)',
                border: `1.5px solid ${activeTemplate === key ? '#3b82f6' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '10px',
                color: activeTemplate === key ? '#3b82f6' : '#94a3b8',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: 700,
                fontFamily: 'Nunito, sans-serif',
                transition: 'all 0.2s',
              }}
            >
              {t.icon} {t.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tab switcher */}
      <div style={{ paddingInline: '20px', marginBottom: '12px' }}>
        <div style={{
          display: 'flex',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '12px',
          padding: '4px',
        }}>
          {['code', 'preview'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                flex: 1,
                padding: '9px',
                background: activeTab === tab ? 'rgba(59,130,246,0.2)' : 'transparent',
                border: activeTab === tab ? '1.5px solid rgba(59,130,246,0.4)' : '1.5px solid transparent',
                borderRadius: '9px',
                color: activeTab === tab ? '#3b82f6' : '#64748b',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '13px',
                fontFamily: 'Nunito, sans-serif',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              {tab === 'code' ? '📝 Code' : '👁️ Preview'}
            </button>
          ))}
        </div>
      </div>

      {/* Editor / Preview */}
      <div style={{ flex: 1, paddingInline: '20px', minHeight: '300px' }}>
        {activeTab === 'code' ? (
          <div style={{
            height: '100%',
            minHeight: '350px',
            background: '#0a0f1e',
            border: '1px solid #1e293b',
            borderRadius: '16px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}>
            {/* Editor header */}
            <div style={{
              padding: '10px 16px',
              borderBottom: '1px solid #1e293b',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                {['#ef4444', '#eab308', '#22c55e'].map(c => (
                  <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
                ))}
              </div>
              <span style={{ color: '#475569', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace' }}>
                index.html
              </span>
              <div style={{ marginLeft: 'auto', fontSize: '11px', color: '#22c55e', fontFamily: 'JetBrains Mono, monospace' }}>
                ● Live
              </div>
            </div>

            {/* Textarea */}
            <textarea
              ref={textareaRef}
              value={code}
              onChange={e => setCode(e.target.value)}
              onKeyDown={handleTabKey}
              spellCheck={false}
              style={{
                flex: 1,
                width: '100%',
                background: 'transparent',
                border: 'none',
                color: '#e2e8f0',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '13px',
                lineHeight: 1.6,
                padding: '14px 16px',
                resize: 'none',
                outline: 'none',
                tabSize: 2,
                minHeight: '280px',
              }}
            />
          </div>
        ) : (
          <div style={{
            height: '100%',
            minHeight: '350px',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid #1e293b',
            background: '#fff',
          }}>
            <iframe
              srcDoc={liveCode}
              title="Preview"
              sandbox="allow-scripts"
              style={{
                width: '100%',
                height: '400px',
                border: 'none',
                display: 'block',
              }}
            />
          </div>
        )}
      </div>

      {/* Bottom action */}
      <div style={{ padding: '12px 20px', display: 'flex', gap: '10px' }}>
        <button
          onClick={() => setCode(TEMPLATES[activeTemplate].html)}
          style={{
            padding: '12px 16px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            color: '#94a3b8',
            cursor: 'pointer',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 700,
            fontSize: '13px',
          }}
        >
          ↺ Reset
        </button>
        <button
          onClick={() => setActiveTab(activeTab === 'code' ? 'preview' : 'code')}
          style={{
            flex: 1,
            padding: '12px',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            border: 'none',
            borderRadius: '12px',
            color: '#fff',
            cursor: 'pointer',
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: '14px',
          }}
        >
          {activeTab === 'code' ? '▶ Run Preview' : '← Back to Code'}
        </button>
      </div>
    </div>
  );
}
