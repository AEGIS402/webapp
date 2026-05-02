import LogoMark from './LogoMark';

type Screen = 'landing' | 'overview' | 'overview-blocked' | 'overview-slippage' | 'audit' | 'escrow' | 'integrations';

interface NavigationSidebarProps {
  currentScreen: Screen;
  navigate: (screen: Screen) => void;
}

export default function NavigationSidebar({ currentScreen, navigate }: NavigationSidebarProps) {
  const navItems = [
    { key: 'overview' as Screen, label: 'OVERVIEW', top: 80 },
    { key: 'audit' as Screen, label: 'AUDIT', top: 116 },
    { key: 'escrow' as Screen, label: 'ESCROW', top: 152 },
    { key: 'integrations' as Screen, label: 'INTEGRATIONS', top: 188 },
  ];

  const isActive = (itemKey: Screen) => {
    if (itemKey === 'overview') {
      return currentScreen === 'overview' || currentScreen === 'overview-blocked' || currentScreen === 'overview-slippage';
    }
    return currentScreen === itemKey;
  };

  return (
    <div className="absolute bg-[#0e0b22] h-[900px] left-0 overflow-clip top-0 w-[200px] z-20" data-name="Sidebar">
      <div className="absolute bg-[#2d1f5d] h-[900px] left-[199px] top-0 w-px" data-name="sbr" />
      <div className="absolute bg-[#130f2e] h-[56px] left-0 top-0 w-[200px]" data-name="lbg" />
      <div className="absolute bg-[#2d1f5d] h-px left-0 top-[55px] w-[200px]" data-name="lbl" />

      {/* Logo - clickable to return to Landing */}
      <div
        onClick={() => navigate('landing')}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '0 16px',
          height: '56px',
          cursor: 'pointer'
        }}
      >
        <svg width="26" height="29" viewBox="0 0 64 72" fill="none">
          <path d="M32 2 L58 14 L58 38 Q58 58 32 70 Q6 58 6 38 L6 14 Z" fill="#1E1B4B"/>
          <path d="M32 2 L58 14 L58 38 Q58 58 32 70 Q6 58 6 38 L6 14 Z" fill="none" stroke="url(#sg)" strokeWidth="2"/>
          <path d="M20 42 Q28 30 32 24 Q36 30 44 42" stroke="url(#sg)" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
          <path d="M18 50 Q32 34 46 50" stroke="url(#sg)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5"/>
          <defs>
            <linearGradient id="sg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8"/>
              <stop offset="100%" stopColor="#38bdf8"/>
            </linearGradient>
          </defs>
        </svg>
        <span style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '13px',
          fontWeight: '700',
          color: '#A8FF3E',
          letterSpacing: '0.04em'
        }}>
          AEGIS402
        </span>
      </div>

      {/* Navigation items */}
      {navItems.map((item) => (
        <button
          key={item.key}
          onClick={() => navigate(item.key)}
          className="absolute left-[8px] w-[184px] h-[28px] rounded-[4px] cursor-pointer hover:bg-[rgba(127,118,221,0.1)] transition-colors"
          style={{ top: `${item.top - 4}px` }}
        >
          {isActive(item.key) && (
            <>
              <div className="absolute bg-[rgba(127,118,221,0.15)] h-[28px] left-0 rounded-[4px] top-0 w-[184px]" />
              <div className="absolute bg-[#7f76dd] h-[28px] left-0 top-0 w-[3px]" />
            </>
          )}
          <p
            className={`absolute font-['IBM_Plex_Mono',sans-serif] leading-[normal] left-[16px] not-italic text-[8px] top-[4px] whitespace-nowrap ${
              isActive(item.key) ? 'font-bold text-[#7f76dd]' : 'font-normal text-[#5a4a8a]'
            }`}
          >
            {item.label}
          </p>
        </button>
      ))}


      {/* Bottom user info */}
      <div className="absolute h-0 left-0 top-[844px] w-[200px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" x2="200" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#9b8ec4] text-[9px] top-[858px] whitespace-nowrap">
        jawgstar.eth
      </p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[8px] top-[874px] whitespace-nowrap">
        Base · Pro
      </p>
    </div>
  );
}
