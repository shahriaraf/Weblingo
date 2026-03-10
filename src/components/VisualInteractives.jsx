// TagWise – Visual Interactive Components
// These are the immersive, hands-on visual learning widgets

import { useState } from 'react';

// ─── FLEXBOX LAB ─────────────────────────────────────────────────────────────
export function FlexboxLab() {
  const [jc, setJc] = useState('flex-start');
  const [ai, setAi] = useState('stretch');
  const [dir, setDir] = useState('row');
  const [wrap, setWrap] = useState('nowrap');
  const [gap, setGap] = useState(8);

  const JC_OPTIONS = ['flex-start','center','flex-end','space-between','space-around','space-evenly'];
  const AI_OPTIONS = ['flex-start','center','flex-end','stretch','baseline'];
  const DIR_OPTIONS = ['row','column','row-reverse','column-reverse'];

  const BOX_COLORS = ['#f97316','#3b82f6','#22c55e','#a855f7','#eab308'];

  return (
    <div>
      {/* Preview */}
      <div style={{
        background: '#0f172a',
        border: '2px dashed #334155',
        borderRadius: '16px',
        padding: '16px',
        minHeight: '140px',
        display: 'flex',
        justifyContent: jc,
        alignItems: ai,
        flexDirection: dir,
        flexWrap: wrap,
        gap: `${gap}px`,
        marginBottom: '16px',
        transition: 'all 0.3s',
      }}>
        {BOX_COLORS.map((color, i) => (
          <div key={i} style={{
            width: dir === 'column' ? '100%' : `${40 + i * 10}px`,
            height: dir === 'row' ? `${40 + i * 10}px` : '36px',
            background: color,
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: '13px',
            flexShrink: 0,
            transition: 'all 0.3s',
          }}>
            {i + 1}
          </div>
        ))}
      </div>

      {/* Code preview */}
      <div style={{
        background: '#0f172a',
        borderRadius: '12px',
        padding: '12px 16px',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '12px',
        color: '#7dd3fc',
        marginBottom: '16px',
        lineHeight: 1.7,
        border: '1px solid #1e293b',
      }}>
        <span style={{ color: '#e879f9' }}>.container</span> {'{'}<br/>
        {'  '}<span style={{ color: '#34d399' }}>display</span>: <span style={{ color: '#fbbf24' }}>flex</span>;<br/>
        {'  '}<span style={{ color: '#34d399' }}>flex-direction</span>: <span style={{ color: '#fbbf24' }}>{dir}</span>;<br/>
        {'  '}<span style={{ color: '#34d399' }}>justify-content</span>: <span style={{ color: '#fbbf24' }}>{jc}</span>;<br/>
        {'  '}<span style={{ color: '#34d399' }}>align-items</span>: <span style={{ color: '#fbbf24' }}>{ai}</span>;<br/>
        {'  '}<span style={{ color: '#34d399' }}>flex-wrap</span>: <span style={{ color: '#fbbf24' }}>{wrap}</span>;<br/>
        {'  '}<span style={{ color: '#34d399' }}>gap</span>: <span style={{ color: '#fbbf24' }}>{gap}px</span>;<br/>
        {'}'}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <ControlRow label="flex-direction" value={dir} options={DIR_OPTIONS} onChange={setDir} color="#3b82f6" />
        <ControlRow label="justify-content" value={jc} options={JC_OPTIONS} onChange={setJc} color="#f97316" />
        <ControlRow label="align-items" value={ai} options={AI_OPTIONS} onChange={setAi} color="#22c55e" />
        <ControlRow label="flex-wrap" value={wrap} options={['nowrap', 'wrap', 'wrap-reverse']} onChange={setWrap} color="#a855f7" />

        {/* Gap slider */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#eab308', fontFamily: 'JetBrains Mono, monospace' }}>gap</span>
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>{gap}px</span>
          </div>
          <input
            type="range" min="0" max="32" value={gap}
            onChange={e => setGap(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#eab308' }}
          />
        </div>
      </div>
    </div>
  );
}

function ControlRow({ label, value, options, onChange, color }) {
  return (
    <div>
      <div style={{ fontSize: '12px', fontWeight: 700, color, fontFamily: 'JetBrains Mono, monospace', marginBottom: '6px' }}>
        {label}
      </div>
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            style={{
              padding: '5px 10px',
              borderRadius: '8px',
              border: `1.5px solid ${value === opt ? color : '#334155'}`,
              background: value === opt ? `${color}20` : 'transparent',
              color: value === opt ? color : '#64748b',
              fontSize: '11px',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── CSS GRID LAB ─────────────────────────────────────────────────────────────
export function GridLab() {
  const [cols, setCols] = useState(3);
  const [rows, setRows] = useState(2);
  const [gap, setGap] = useState(8);
  const [colTemplate, setColTemplate] = useState('equal');

  const COLORS = ['#f97316','#3b82f6','#22c55e','#a855f7','#eab308','#ec4899','#14b8a6','#f43f5e'];

  const templates = {
    equal: `repeat(${cols}, 1fr)`,
    auto: `auto auto auto`,
    custom: `2fr 1fr 1fr`,
    minmax: `repeat(${cols}, minmax(60px, 1fr))`,
  };

  return (
    <div>
      {/* Preview */}
      <div style={{
        background: '#0f172a',
        border: '2px dashed #334155',
        borderRadius: '16px',
        padding: '16px',
        display: 'grid',
        gridTemplateColumns: templates[colTemplate],
        gridTemplateRows: `repeat(${rows}, 60px)`,
        gap: `${gap}px`,
        marginBottom: '16px',
        transition: 'all 0.3s',
      }}>
        {Array.from({ length: cols * rows }).map((_, i) => (
          <div key={i} style={{
            background: COLORS[i % COLORS.length],
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: '14px',
            transition: 'all 0.3s',
          }}>
            {i + 1}
          </div>
        ))}
      </div>

      {/* Code */}
      <div style={{
        background: '#0f172a',
        borderRadius: '12px',
        padding: '12px 16px',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '12px',
        color: '#7dd3fc',
        marginBottom: '16px',
        lineHeight: 1.7,
        border: '1px solid #1e293b',
      }}>
        <span style={{ color: '#e879f9' }}>.grid</span> {'{'}<br/>
        {'  '}<span style={{ color: '#34d399' }}>display</span>: <span style={{ color: '#fbbf24' }}>grid</span>;<br/>
        {'  '}<span style={{ color: '#34d399' }}>grid-template-columns</span>: <span style={{ color: '#fbbf24' }}>{templates[colTemplate]}</span>;<br/>
        {'  '}<span style={{ color: '#34d399' }}>grid-template-rows</span>: <span style={{ color: '#fbbf24' }}>repeat({rows}, 60px)</span>;<br/>
        {'  '}<span style={{ color: '#34d399' }}>gap</span>: <span style={{ color: '#fbbf24' }}>{gap}px</span>;<br/>
        {'}'}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <SliderControl label="columns" value={cols} min={1} max={6} onChange={setCols} color="#3b82f6" />
        <SliderControl label="rows" value={rows} min={1} max={4} onChange={setRows} color="#f97316" />
        <SliderControl label="gap" value={gap} min={0} max={24} onChange={setGap} color="#22c55e" unit="px" />
        <ControlRow
          label="grid-template-columns"
          value={colTemplate}
          options={['equal', 'auto', 'custom', 'minmax']}
          onChange={setColTemplate}
          color="#a855f7"
        />
      </div>
    </div>
  );
}

function SliderControl({ label, value, min, max, onChange, color, unit = '' }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ fontSize: '12px', fontWeight: 700, color, fontFamily: 'JetBrains Mono, monospace' }}>{label}</span>
        <span style={{ fontSize: '12px', color: '#94a3b8' }}>{value}{unit}</span>
      </div>
      <input
        type="range" min={min} max={max} value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={{ width: '100%', accentColor: color }}
      />
    </div>
  );
}

// ─── BOX MODEL LAB ────────────────────────────────────────────────────────────
export function BoxModelLab() {
  const [padding, setPadding] = useState(16);
  const [margin, setMargin] = useState(12);
  const [border, setBorder] = useState(3);

  return (
    <div>
      {/* Visual */}
      <div style={{
        background: '#1e293b',
        border: '1px solid #334155',
        borderRadius: '16px',
        padding: '16px',
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '200px',
      }}>
        {/* Margin */}
        <div style={{
          background: 'rgba(234,179,8,0.1)',
          border: '2px dashed #eab308',
          borderRadius: '8px',
          padding: `${margin}px`,
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '2px',
            transform: 'translateY(-50%) rotate(-90deg)',
            fontSize: '9px',
            color: '#eab308',
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 700,
            whiteSpace: 'nowrap',
          }}>
            margin
          </div>
          {/* Border */}
          <div style={{
            background: 'rgba(168,85,247,0.1)',
            border: `${border}px solid #a855f7`,
            borderRadius: '6px',
            padding: `${padding}px`,
            position: 'relative',
          }}>
            {/* Padding label */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '2px',
              transform: 'translateY(-50%) rotate(-90deg)',
              fontSize: '9px',
              color: '#a855f7',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 700,
              whiteSpace: 'nowrap',
            }}>
              padding
            </div>
            {/* Content */}
            <div style={{
              background: 'rgba(59,130,246,0.2)',
              border: '2px solid #3b82f6',
              borderRadius: '4px',
              padding: '12px 20px',
              textAlign: 'center',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              color: '#3b82f6',
              whiteSpace: 'nowrap',
            }}>
              Content
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
        {[
          { color: '#3b82f6', label: 'Content' },
          { color: '#a855f7', label: `Padding: ${padding}px` },
          { color: '#a855f7', label: `Border: ${border}px` },
          { color: '#eab308', label: `Margin: ${margin}px` },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: item.color }} />
            <span style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'JetBrains Mono, monospace' }}>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <SliderControl label="padding" value={padding} min={0} max={40} onChange={setPadding} color="#a855f7" unit="px" />
        <SliderControl label="border-width" value={border} min={0} max={12} onChange={setBorder} color="#a855f7" unit="px" />
        <SliderControl label="margin" value={margin} min={0} max={40} onChange={setMargin} color="#eab308" unit="px" />
      </div>
    </div>
  );
}

// ─── CSS TRANSITIONS LAB ─────────────────────────────────────────────────────
export function TransitionLab() {
  const [duration, setDuration] = useState(0.3);
  const [timing, setTiming] = useState('ease');
  const [hovered, setHovered] = useState(false);
  const [prop, setProp] = useState('all');

  const TIMINGS = ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'cubic-bezier(0.34,1.56,0.64,1)'];

  return (
    <div>
      {/* Demo Box */}
      <div style={{
        height: '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px',
      }}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onTouchStart={() => setHovered(true)}
          onTouchEnd={() => setHovered(false)}
          style={{
            width: hovered ? '120px' : '70px',
            height: hovered ? '120px' : '70px',
            background: hovered
              ? 'linear-gradient(135deg, #3b82f6, #a855f7)'
              : 'linear-gradient(135deg, #334155, #475569)',
            borderRadius: hovered ? '50%' : '16px',
            transform: hovered ? 'rotate(45deg) scale(1.1)' : 'none',
            boxShadow: hovered ? '0 8px 32px rgba(59,130,246,0.5)' : '0 2px 8px rgba(0,0,0,0.3)',
            transition: `${prop} ${duration}s ${timing}`,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '12px',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 700,
            userSelect: 'none',
          }}
        >
          {hovered ? '✨' : 'Hover'}
        </div>
      </div>

      {/* Code */}
      <div style={{
        background: '#0f172a',
        borderRadius: '12px',
        padding: '12px 16px',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '12px',
        color: '#7dd3fc',
        marginBottom: '16px',
        lineHeight: 1.7,
        border: '1px solid #1e293b',
      }}>
        <span style={{ color: '#34d399' }}>transition</span>:{' '}
        <span style={{ color: '#fbbf24' }}>{prop} {duration}s {timing}</span>;
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <SliderControl label="duration" value={duration} min={0.1} max={2} onChange={setDuration} color="#3b82f6" unit="s" />
        <ControlRow label="timing-function" value={timing} options={TIMINGS} onChange={setTiming} color="#f97316" />
        <ControlRow label="property" value={prop} options={['all', 'width', 'background', 'border-radius', 'transform']} onChange={setProp} color="#22c55e" />
      </div>
    </div>
  );
}

// ─── POSITION LAB ─────────────────────────────────────────────────────────────
export function PositionLab() {
  const [position, setPosition] = useState('static');
  const [top, setTop] = useState(20);
  const [left, setLeft] = useState(20);

  const descriptions = {
    static: 'Normal document flow. top/left/right/bottom have no effect.',
    relative: 'Offset from its normal position. Original space is preserved.',
    absolute: 'Removed from flow. Positioned relative to nearest positioned ancestor.',
    fixed: 'Removed from flow. Fixed to the viewport — stays on scroll.',
    sticky: 'Hybrid: acts like relative until it reaches a threshold, then sticks.',
  };

  return (
    <div>
      {/* Demo */}
      <div style={{
        background: '#0f172a',
        border: '2px dashed #334155',
        borderRadius: '16px',
        padding: '16px',
        minHeight: '160px',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '12px',
      }}>
        <div style={{ color: '#475569', fontSize: '12px', marginBottom: '8px', fontFamily: 'JetBrains Mono, monospace' }}>
          parent container (position: relative)
        </div>
        {/* Static placeholder */}
        <div style={{
          width: '80px', height: '50px',
          background: '#1e293b', border: '2px dashed #334155',
          borderRadius: '8px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#475569', fontSize: '11px', fontFamily: 'JetBrains Mono, monospace',
        }}>
          {position === 'relative' ? 'ghost' : 'box 1'}
        </div>

        {/* Positioned box */}
        <div style={{
          width: '80px', height: '50px',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          borderRadius: '8px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: '12px',
          fontFamily: 'Syne, sans-serif', fontWeight: 700,
          position: position === 'static' ? 'static' : position === 'fixed' ? 'relative' : position,
          top: position !== 'static' ? `${top}px` : 'auto',
          left: position !== 'static' ? `${left}px` : 'auto',
          transition: 'all 0.3s',
          boxShadow: '0 4px 16px rgba(59,130,246,0.4)',
          zIndex: 2,
        }}>
          📦 me
        </div>

        {position === 'static' && (
          <div style={{
            width: '80px', height: '50px',
            background: '#1e293b', border: '1px solid #334155',
            borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#475569', fontSize: '11px',
          }}>
            box 3
          </div>
        )}
      </div>

      {/* Description */}
      <div style={{
        background: 'rgba(59,130,246,0.1)',
        border: '1px solid rgba(59,130,246,0.25)',
        borderRadius: '10px',
        padding: '10px 14px',
        fontSize: '13px',
        color: '#94a3b8',
        marginBottom: '16px',
        lineHeight: 1.5,
      }}>
        <strong style={{ color: '#3b82f6' }}>position: {position}</strong> — {descriptions[position]}
      </div>

      {/* Position selector */}
      <ControlRow
        label="position"
        value={position}
        options={['static', 'relative', 'absolute', 'fixed', 'sticky']}
        onChange={setPosition}
        color="#3b82f6"
      />

      {position !== 'static' && (
        <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <SliderControl label="top" value={top} min={0} max={80} onChange={setTop} color="#f97316" unit="px" />
          <SliderControl label="left" value={left} min={0} max={160} onChange={setLeft} color="#22c55e" unit="px" />
        </div>
      )}
    </div>
  );
}

// ─── SELECTOR GAME ────────────────────────────────────────────────────────────
export function SelectorGame() {
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);

  const challenges = [
    { selector: '.box', target: 'div with class="box"', elements: [
      { tag: 'div', class: 'box', id: '', text: 'I have class box', match: true },
      { tag: 'p', class: '', id: 'para', text: 'I have an ID', match: false },
      { tag: 'div', class: 'container', id: '', text: 'Different class', match: false },
    ]},
    { selector: '#title', target: 'element with id="title"', elements: [
      { tag: 'h1', class: '', id: 'title', text: 'Main Title', match: true },
      { tag: 'h2', class: 'title', id: '', text: 'Section Title', match: false },
      { tag: 'p', class: '', id: '', text: 'Paragraph', match: false },
    ]},
    { selector: 'p', target: 'all paragraph elements', elements: [
      { tag: 'p', class: '', id: '', text: 'Paragraph 1', match: true },
      { tag: 'div', class: '', id: '', text: 'A div', match: false },
      { tag: 'p', class: 'note', id: '', text: 'Paragraph 2', match: true },
    ]},
  ];

  const [challengeIdx, setChallengeIdx] = useState(0);
  const challenge = challenges[challengeIdx];

const handleElementClick = (el, idx) => {
  if (result) return; // prevent clicking during feedback

  setSelected(idx);
  const correct = el.match;

  setResult(correct ? 'correct' : 'wrong');

  setTimeout(() => {
    setResult(null);
    setSelected(null);
  }, 1500);
};

  return (
    <div>
      <div style={{
        background: 'rgba(59,130,246,0.1)',
        border: '1px solid rgba(59,130,246,0.25)',
        borderRadius: '12px',
        padding: '12px 16px',
        marginBottom: '16px',
        textAlign: 'center',
      }}>
        <div style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '6px' }}>
          Click the element(s) that match:
        </div>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '22px',
          fontWeight: 700,
          color: '#3b82f6',
        }}>
          {challenge.selector}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
        {challenge.elements.map((el, i) => (
          <button
            key={i}
            onClick={() => handleElementClick(el, i)}
            style={{
              padding: '12px 16px',
              background: selected === i
                ? (el.match ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)')
                : 'rgba(255,255,255,0.04)',
              border: `2px solid ${selected === i
                ? (el.match ? '#22c55e' : '#ef4444')
                : '#334155'}`,
              borderRadius: '12px',
              color: '#f1f5f9',
              cursor: 'pointer',
              textAlign: 'left',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '13px',
              transition: 'all 0.2s',
            }}
          >
            <span style={{ color: '#e879f9' }}>{'<'}{el.tag}</span>
            {el.class && <span style={{ color: '#fbbf24' }}> class="{el.class}"</span>}
            {el.id && <span style={{ color: '#34d399' }}> id="{el.id}"</span>}
            <span style={{ color: '#e879f9' }}>{'>'}</span>
            <span style={{ color: '#cbd5e1' }}> {el.text}</span>
            <span style={{ color: '#e879f9' }}>{'</'}{el.tag}{'>'}</span>
          </button>
        ))}
      </div>

      <button
        onClick={() => { setChallengeIdx((challengeIdx + 1) % challenges.length); setSelected(null); }}
        style={{
          width: '100%', padding: '12px',
          background: 'rgba(59,130,246,0.15)',
          border: '1px solid rgba(59,130,246,0.3)',
          borderRadius: '12px',
          color: '#3b82f6',
          fontWeight: 700, cursor: 'pointer',
          fontFamily: 'Nunito, sans-serif',
        }}
      >
        Next Challenge →
      </button>
    </div>
  );
}

// ─── COLOR MIXER ─────────────────────────────────────────────────────────────
export function ColorMixer() {
  const [r, setR] = useState(59);
  const [g, setG] = useState(130);
  const [b, setB] = useState(246);
  const [format, setFormat] = useState('hex');

  const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
  const hsl = (() => {
    const rn = r/255, gn = g/255, bn = b/255;
    const max = Math.max(rn,gn,bn), min = Math.min(rn,gn,bn);
    let h = 0, s = 0, l = (max+min)/2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d/(2-max-min) : d/(max+min);
      if (max === rn) h = ((gn-bn)/d + (gn < bn ? 6 : 0)) / 6;
      else if (max === gn) h = ((bn-rn)/d + 2) / 6;
      else h = ((rn-gn)/d + 4) / 6;
    }
    return `hsl(${Math.round(h*360)}, ${Math.round(s*100)}%, ${Math.round(l*100)}%)`;
  })();

  const displays = { hex, rgb: `rgb(${r}, ${g}, ${b})`, hsl };

  return (
    <div>
      {/* Preview */}
      <div style={{
        height: '100px',
        background: `rgb(${r}, ${g}, ${b})`,
        borderRadius: '16px',
        marginBottom: '16px',
        transition: 'background 0.1s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `0 8px 32px rgb(${r}, ${g}, ${b}, 0.4)`,
      }}>
        <div style={{
          background: 'rgba(0,0,0,0.4)',
          borderRadius: '8px',
          padding: '6px 14px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '14px',
          fontWeight: 700,
          color: '#fff',
        }}>
          {displays[format]}
        </div>
      </div>

      {/* Format toggle */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        {['hex', 'rgb', 'hsl'].map(f => (
          <button
            key={f}
            onClick={() => setFormat(f)}
            style={{
              flex: 1, padding: '8px',
              background: format === f ? 'rgba(59,130,246,0.2)' : 'transparent',
              border: `1.5px solid ${format === f ? '#3b82f6' : '#334155'}`,
              borderRadius: '8px',
              color: format === f ? '#3b82f6' : '#64748b',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '13px', fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* RGB Sliders */}
      {[
        { label: 'R', value: r, onChange: setR, color: '#ef4444' },
        { label: 'G', value: g, onChange: setG, color: '#22c55e' },
        { label: 'B', value: b, onChange: setB, color: '#3b82f6' },
      ].map(ch => (
        <div key={ch.label} style={{ marginBottom: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: ch.color, fontFamily: 'JetBrains Mono, monospace' }}>
              {ch.label}
            </span>
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>{ch.value}</span>
          </div>
          <input
            type="range" min={0} max={255} value={ch.value}
            onChange={e => ch.onChange(Number(e.target.value))}
            style={{ width: '100%', accentColor: ch.color }}
          />
        </div>
      ))}
    </div>
  );
}

// ─── HTML STRUCTURE VISUAL ────────────────────────────────────────────────────
export function DocumentTree() {
  const [expanded, setExpanded] = useState(new Set(['html', 'head', 'body']));

  const toggle = (id) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const nodes = [
    { id: 'html', tag: 'html', depth: 0, color: '#f97316', children: ['head', 'body'] },
    { id: 'head', tag: 'head', depth: 1, color: '#3b82f6', children: ['title', 'meta'] },
    { id: 'title', tag: 'title', depth: 2, color: '#a855f7', text: 'My Page', children: [] },
    { id: 'meta', tag: 'meta', depth: 2, color: '#a855f7', text: 'charset="UTF-8"', children: [] },
    { id: 'body', tag: 'body', depth: 1, color: '#22c55e', children: ['h1', 'p', 'div'] },
    { id: 'h1', tag: 'h1', depth: 2, color: '#eab308', text: 'Hello World', children: [] },
    { id: 'p', tag: 'p', depth: 2, color: '#eab308', text: 'A paragraph', children: [] },
    { id: 'div', tag: 'div', depth: 2, color: '#eab308', text: 'class="box"', children: [] },
  ];

  // Determine which nodes are visible
  const getVisible = () => {
    const visible = [];
    const visit = (id, parentVisible) => {
      const node = nodes.find(n => n.id === id);
      if (!node) return;
      visible.push(node);
      if (expanded.has(id)) {
        node.children.forEach(cid => visit(cid, true));
      }
    };
    visit('html', true);
    return visible;
  };

  return (
    <div style={{ fontFamily: 'JetBrains Mono, monospace' }}>
      <div style={{ marginBottom: '12px', color: '#64748b', fontSize: '12px' }}>
        Tap a tag to expand/collapse its children
      </div>
      {getVisible().map(node => (
        <div
          key={node.id}
          onClick={() => node.children.length > 0 && toggle(node.id)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            paddingLeft: `${node.depth * 20}px`,
            paddingBlock: '7px',
            cursor: node.children.length > 0 ? 'pointer' : 'default',
            borderLeft: node.depth > 0 ? `2px solid ${node.color}30` : 'none',
            marginLeft: node.depth > 0 ? `${(node.depth - 1) * 20 + 10}px` : '0',
          }}
        >
          {node.children.length > 0 && (
            <span style={{ color: '#64748b', fontSize: '10px', width: '12px' }}>
              {expanded.has(node.id) ? '▼' : '▶'}
            </span>
          )}
          {node.children.length === 0 && <span style={{ width: '12px' }} />}

          <span style={{
            background: `${node.color}20`,
            color: node.color,
            padding: '2px 8px',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: 700,
          }}>
            &lt;{node.tag}{node.text && node.children.length === 0 ? '' : ''}&gt;
          </span>

          {node.text && (
            <span style={{ color: '#94a3b8', fontSize: '12px' }}>
              {node.text}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── VISUAL REGISTRY ─────────────────────────────────────────────────────────
export const VISUAL_COMPONENTS = {
  'flexbox-lab': FlexboxLab,
  'grid-lab': GridLab,
  'box-model-lab': BoxModelLab,
  'transition-lab': TransitionLab,
  'selector-game': SelectorGame,
  'color-mixer': ColorMixer,
  'document-tree': DocumentTree,
};

// Map lesson IDs to their visual component
export const LESSON_VISUAL_MAP = {
  'css-flexbox': 'flexbox-lab',
  'css-grid': 'grid-lab',
  'css-box-model': 'box-model-lab',
  'css-transitions': 'transition-lab',
  'css-selectors': 'selector-game',
  'css-colors': 'color-mixer',
  'html-structure': 'document-tree',
};
