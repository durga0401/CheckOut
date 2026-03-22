/**
 * MoiLogo — Logo 3 (white MOi, blue dot on i)
 * Effects: gradient-fill letters, animated gradient shadow/glow, shimmer sweep,
 *          orbit dot around O, sonar ripple on i dot, subtle breathe.
 */
const MoiLogo = () => (
  <>
    <style>{`
      /* ── Shimmer sweep across letters ── */
      @keyframes moi-shimmer-move {
        0%   { x: -140px; }
        100% { x:  180px; }
      }
      /* ── Gradient shadow hue rotate ── */
      @keyframes moi-shadow-shift {
        0%   { stdDeviation: 3; }
        50%  { stdDeviation: 5; }
        100% { stdDeviation: 3; }
      }
      /* ── Outer glow pulse ── */
      @keyframes moi-glow-pulse {
        0%,100% { opacity: .45; transform: scale(1);    }
        50%      { opacity: .85; transform: scale(1.04); }
      }
      /* ── Orbit dot spinning around the O ── */
      @keyframes moi-orbit {
        from { transform: rotate(0deg)   translateX(22px) rotate(0deg);   }
        to   { transform: rotate(360deg) translateX(22px) rotate(-360deg); }
      }
      /* ── Subtle scale breathe on logo ── */
      @keyframes moi-breathe {
        0%,100% { transform: scale(1); }
        50%      { transform: scale(1.014); }
      }
      /* ── Ripple / sonar rings on i dot ── */
      @keyframes moi-ripple {
        0%   { r: 3;  opacity: 0.85; }
        100% { r: 11; opacity: 0;    }
      }
      @keyframes moi-ripple2 {
        0%   { r: 3;  opacity: 0.6; }
        100% { r: 14; opacity: 0;   }
      }
      @keyframes moi-dot-pulse {
        0%,100% { opacity: 1;   r: 3;   }
        50%      { opacity: .75; r: 3.6; }
      }
      /* ── Gradient underbar sweep ── */
      @keyframes moi-bar-slide {
        0%   { transform: translateX(-160px); opacity: 0;   }
        15%  { opacity: 1; }
        85%  { opacity: 1; }
        100% { transform: translateX(160px);  opacity: 0;   }
      }
      .moi-shimmer-rect  { animation: moi-shimmer-move 2.8s cubic-bezier(.4,0,.6,1) infinite 0.4s; }
      .moi-glow-layer    { animation: moi-glow-pulse 2.6s ease-in-out infinite; }
      .moi-orbit-dot     { animation: moi-orbit 3.2s linear infinite; transform-origin: 84px 25px; }
      .moi-logo-root     { animation: moi-breathe 4s ease-in-out infinite; transform-origin: center; overflow: visible; display: block; }
      .moi-ripple1       { animation: moi-ripple  1.8s ease-out infinite 0s; }
      .moi-ripple2       { animation: moi-ripple2 1.8s ease-out infinite 0.65s; }
      .moi-i-dot         { animation: moi-dot-pulse 2s ease-in-out infinite; }
      .moi-underbar      { animation: moi-bar-slide 3.5s ease-in-out infinite 1s; }
    `}</style>

    <svg
      viewBox="0 0 148 52"
      width="130"
      height="42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MOI Technologies"
      className="moi-logo-root"
    >
      <defs>
        {/* ── GRADIENT FILLS for letters ── */}
        {/* M — blue-to-white diagonal */}
        <linearGradient id="moi-grad-m" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#60CFFF"/>
          <stop offset="55%"  stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#a8d8ff"/>
        </linearGradient>
        {/* O — cyan-to-white-to-blue */}
        <linearGradient id="moi-grad-o" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#38BDF8"/>
          <stop offset="50%"  stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#2096D9"/>
        </linearGradient>
        {/* i — white-to-blue */}
        <linearGradient id="moi-grad-i" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#60CFFF"/>
        </linearGradient>

        {/* ── GRADIENT SHADOW filter ── */}
        {/* Deep coloured shadow below/behind letters */}
        <filter id="moi-grad-shadow" x="-20%" y="-20%" width="150%" height="180%">
          {/* Blur the source */}
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blurA"/>
          {/* Shift down */}
          <feOffset dx="0" dy="5" result="shifted"/>
          {/* Colorize — deep indigo-blue */}
          <feColorMatrix in="shifted" type="matrix"
            values="0   0   0.9 0  0
                    0   0.3 0.9 0  0
                    0   0.5 1   0  0
                    0   0   0   0.55 0"
            result="colorShadow"/>
          {/* Second layer — wider cyan glow */}
          <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blurB"/>
          <feOffset dx="0" dy="3" in="blurB" result="shiftedB"/>
          <feColorMatrix in="shiftedB" type="matrix"
            values="0   0.6 1   0  0
                    0   0.4 0.9 0  0
                    0   0.2 0.8 0  0
                    0   0   0   0.3 0"
            result="cyanAura"/>
          <feMerge>
            <feMergeNode in="cyanAura"/>
            <feMergeNode in="colorShadow"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* ── Ambient glow filter (for the pulsing layer) ── */}
        <filter id="moi-blue-glow" x="-18%" y="-18%" width="140%" height="145%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur"/>
          <feColorMatrix in="blur" type="matrix"
            values="0  0.5 1  0 0
                    0  0.4 1  0 0
                    0  0.3 1  0 0
                    0  0   0  1 0"
            result="blueGlow"/>
          <feMerge>
            <feMergeNode in="blueGlow"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* ── Shimmer gradient ── */}
        <linearGradient id="moi-shimmer" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="white" stopOpacity="0"/>
          <stop offset="42%"  stopColor="white" stopOpacity="0"/>
          <stop offset="50%"  stopColor="white" stopOpacity="0.6"/>
          <stop offset="58%"  stopColor="white" stopOpacity="0"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </linearGradient>

        {/* ── Gradient underbar ── */}
        <linearGradient id="moi-bar-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="rgba(32,150,217,0)"/>
          <stop offset="30%"  stopColor="#2096D9"/>
          <stop offset="50%"  stopColor="#60CFFF"/>
          <stop offset="70%"  stopColor="#2096D9"/>
          <stop offset="100%" stopColor="rgba(32,150,217,0)"/>
        </linearGradient>

        {/* ── Clip — shimmer limited to letter outlines ── */}
        <clipPath id="moi-letters-clip">
          <path d="M 2,46 L 2,4 L 26,28 L 50,4 L 50,46 L 43,46 L 43,17 L 26,38 L 9,17 L 9,46 Z"/>
          <circle cx="84" cy="25" r="20"/>
          <rect x="118" y="16" width="8" height="30" rx="4"/>
          <circle cx="122" cy="7" r="4"/>
        </clipPath>

        {/* ── Orbit dot glow ── */}
        <filter id="moi-dot-glow" x="-250%" y="-250%" width="600%" height="600%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ══════════════════════════════════
          PULSING AMBIENT GLOW  (blue)
         ══════════════════════════════════ */}
      <g className="moi-glow-layer" filter="url(#moi-blue-glow)" opacity="0.6">
        <path d="M 2,46 L 2,4 L 26,28 L 50,4 L 50,46 L 43,46 L 43,17 L 26,38 L 9,17 L 9,46 Z" fill="white"/>
        <circle cx="84" cy="25" r="20" fill="white"/>
        <circle cx="84" cy="25" r="12" fill="#08080C"/>
        <rect x="79.5" y="31" width="9" height="15" fill="#08080C"/>
        <rect x="118" y="16" width="8" height="30" rx="4" fill="white"/>
        <circle cx="122" cy="7" r="3.5" fill="#2096D9"/>
      </g>

      {/* ══════════════════════════════════
          MAIN LETTERS  — gradient fill + coloured shadow
         ══════════════════════════════════ */}
      <g filter="url(#moi-grad-shadow)">
        {/* M */}
        <path
          d="M 2,46 L 2,4 L 26,28 L 50,4 L 50,46 L 43,46 L 43,17 L 26,38 L 9,17 L 9,46 Z"
          fill="url(#moi-grad-m)"
        />

        {/* O — ring + keyhole notch */}
        <circle cx="84" cy="25" r="20" fill="url(#moi-grad-o)"/>
        <circle cx="84" cy="25" r="12" fill="#08080C"/>
        <rect x="79.5" y="31" width="9" height="15" fill="#08080C"/>

        {/* i stem */}
        <rect x="118" y="16" width="8" height="30" rx="4" fill="url(#moi-grad-i)"/>

        {/* i dot — pulsing blue */}
        <circle className="moi-i-dot" cx="122" cy="7" r="3" fill="#2096D9"/>
      </g>

      {/* ── Sonar ripple rings from i dot ── */}
      <circle className="moi-ripple1" cx="122" cy="7" r="3" fill="none" stroke="#2096D9" strokeWidth="1"/>
      <circle className="moi-ripple2" cx="122" cy="7" r="3" fill="none" stroke="rgba(32,150,217,0.4)" strokeWidth="0.8"/>

      {/* ══════════════════════════════════
          SHIMMER SWEEP
         ══════════════════════════════════ */}
      <g clipPath="url(#moi-letters-clip)">
        <rect
          className="moi-shimmer-rect"
          x="-140" y="0"
          width="50" height="52"
          fill="url(#moi-shimmer)"
        />
      </g>

      {/* ══════════════════════════════════
          ORBIT DOT around O
         ══════════════════════════════════ */}
      <g className="moi-orbit-dot" filter="url(#moi-dot-glow)">
        <circle cx="84" cy="25" r="2.2" fill="#60CFFF"/>
        <circle cx="84" cy="25" r="3.6" fill="rgba(32,150,217,0.25)"/>
      </g>

      {/* ══════════════════════════════════
          GRADIENT UNDERBAR  (sweeps L→R)
         ══════════════════════════════════ */}
      <rect
        className="moi-underbar"
        x="0" y="48"
        width="148" height="2"
        rx="1"
        fill="url(#moi-bar-grad)"
      />

    </svg>
  </>
);

export default MoiLogo;
