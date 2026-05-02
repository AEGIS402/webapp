import { useState, useEffect } from 'react';
import Landing from '../imports/Landing/Landing';
import Overview from '../imports/Overview/Overview';
import OverviewBlocked from '../imports/OverviewBlocked/OverviewBlocked';
import OverviewSlippageAlert from '../imports/OverviewSlippageAlert-1/OverviewSlippageAlert-3-3113';
import AuditPostAudit from '../imports/AuditPostAudit-1/AuditPostAudit-3-2295';
import Escrow from '../imports/Escrow/Escrow';
import Integrations from '../imports/Integrations/Integrations';
import NavigationSidebar from './components/NavigationSidebar';
import WalletPanel from './components/WalletPanel';
import LogoMark from './components/LogoMark';
import InteractiveAudit from './components/InteractiveAudit';
import InteractiveEscrow from './components/InteractiveEscrow';

type Screen = 'landing' | 'overview' | 'overview-blocked' | 'overview-slippage' | 'audit' | 'audit-post' | 'escrow' | 'integrations';

function FloatingNav({ currentScreen, navigate }: { currentScreen: Screen; navigate: (screen: Screen) => void }) {
  if (currentScreen === 'landing') return null;

  const screens: { key: Screen; label: string }[] = [
    { key: 'landing', label: 'Landing' },
    { key: 'overview', label: 'Overview' },
    { key: 'audit', label: 'Audit' },
    { key: 'escrow', label: 'Escrow' },
    { key: 'integrations', label: 'Integrations' },
  ];

  return (
    <div className="fixed bottom-[20px] left-1/2 -translate-x-1/2 bg-[#0e0b22] border border-[#2d1f5d] rounded-[8px] px-[16px] py-[8px] flex items-center gap-[16px] z-50">
      <button
        onClick={() => navigate('landing')}
        className="font-['IBM_Plex_Mono',sans-serif] text-[8px] text-[#5a4a8a] hover:text-[#7f76dd]"
      >
        &lt; Back
      </button>
      <div className="flex items-center gap-[8px]">
        {screens.map((screen) => (
          <button
            key={screen.key}
            onClick={() => navigate(screen.key)}
            className={`size-[8px] rounded-full transition-colors ${
              currentScreen === screen.key ||
              (currentScreen === 'overview-blocked' && screen.key === 'overview') ||
              (currentScreen === 'overview-slippage' && screen.key === 'overview') ||
              (currentScreen === 'audit-post' && screen.key === 'audit')
                ? 'bg-[#a8ff3e]'
                : 'bg-[#2d1f5d] hover:bg-[#5a4a8a]'
            }`}
            title={screen.label}
          />
        ))}
      </div>
      <span className="font-['IBM_Plex_Mono',sans-serif] text-[8px] text-[#5a4a8a]">
        {currentScreen === 'overview-blocked' ? 'Overview (Blocked)' :
         currentScreen === 'overview-slippage' ? 'Overview (Slippage)' :
         currentScreen === 'audit-post' ? 'Audit (Post-Audit)' :
         screens.find(s => s.key === currentScreen)?.label || currentScreen}
      </span>
    </div>
  );
}

function LandingWrapper({ navigate }: { navigate: (screen: Screen) => void }) {
  return (
    <div className="relative size-full">
      <Landing />
      {/* Replace navbar logo with shield mark + text */}
      <div className="absolute left-[20px] top-0 w-[140px] h-[56px] bg-[#0e0b22] z-10" />
      <div className="absolute left-[20px] top-[15px] flex items-center gap-[8px] z-20">
        <LogoMark
          height={24}
          showWordmark={false}
          onClick={() => navigate('landing')}
        />
        <button
          onClick={() => navigate('landing')}
          className="cursor-pointer hover:opacity-80 transition-opacity"
          title="AEGIS402"
        >
          <p className="font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] not-italic text-[#a8ff3e] text-[11px] whitespace-nowrap">
            AEGIS402
          </p>
        </button>
      </div>
      {/* Hero logo - 48px height above title */}
      <div className="absolute left-[200px] top-[96px] w-[240px] h-[20px] bg-[#0a0818] z-10" />
      <LogoMark
        height={48}
        showWordmark={false}
        onClick={() => navigate('landing')}
        className="absolute left-[244px] top-[72px] z-20"
      />
      {/* INSERT COIN button overlay */}
      <button
        onClick={() => navigate('overview')}
        className="absolute left-[80px] top-[442px] w-[168px] h-[44px] cursor-pointer z-10 hover:opacity-80 transition-opacity"
        title="Start Demo"
      />
      {/* VIEW DEMO button overlay */}
      <button
        onClick={() => navigate('overview')}
        className="absolute left-[264px] top-[442px] w-[132px] h-[44px] cursor-pointer z-10 hover:opacity-80 transition-opacity"
        title="View Demo"
      />
      {/* Navbar navigation links */}
      <button
        onClick={() => navigate('overview')}
        className="absolute left-[680px] top-[18px] w-[80px] h-[20px] cursor-pointer z-10"
        title="Overview"
      />
      <button
        onClick={() => navigate('audit')}
        className="absolute left-[800px] top-[18px] w-[50px] h-[20px] cursor-pointer z-10"
        title="Audit"
      />
      <button
        onClick={() => navigate('escrow')}
        className="absolute left-[880px] top-[18px] w-[60px] h-[20px] cursor-pointer z-10"
        title="Escrow"
      />
    </div>
  );
}

function OverviewWrapper({ navigate }: { navigate: (screen: Screen) => void }) {
  // Auto-navigate to blocked state after 2 seconds (simulating S-2' demo)
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('overview-blocked');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative size-full">
      <div className="relative size-full">
        <Overview />
        {/* Hide original static sidebar and wallet panel */}
        <div className="absolute left-0 top-0 w-[200px] h-[900px] bg-[#0a0818] z-10" />
        <div className="absolute left-[1140px] top-[56px] w-[300px] h-[828px] bg-[#0a0818] z-10" />
        {/* Remove colored border from Monitor Card */}
        <style>{`
          [data-name="Monitor Card"] > [data-name="mcb"] {
            border-color: #2d1f5d !important;
            border-width: 1px !important;
          }
        `}</style>
      </div>
      <NavigationSidebar currentScreen="overview" navigate={navigate} />
      <WalletPanel currentScreen="overview" />
    </div>
  );
}

function OverviewBlockedWrapper({ navigate }: { navigate: (screen: Screen) => void }) {
  return (
    <div className="relative size-full">
      <div className="relative size-full">
        <OverviewBlocked />
        {/* Hide original static sidebar and wallet panel */}
        <div className="absolute left-0 top-0 w-[200px] h-[900px] bg-[#0a0818] z-10" />
        <div className="absolute left-[1140px] top-[56px] w-[300px] h-[828px] bg-[#0a0818] z-10" />
        {/* Remove colored border from Monitor Card */}
        <style>{`
          [data-name="Monitor Card"] > [data-name="mcb"] {
            border-color: #2d1f5d !important;
            border-width: 1px !important;
          }
        `}</style>
      </div>
      <NavigationSidebar currentScreen="overview-blocked" navigate={navigate} />
      <WalletPanel currentScreen="overview-blocked" />
      {/* Next scenario button */}
      <div
        onClick={() => navigate('overview-slippage')}
        className="absolute right-[24px] bottom-[24px] bg-[rgba(127,118,221,0.15)] border border-[#7f76dd] rounded-[6px] px-[16px] py-[8px] cursor-pointer z-30 hover:bg-[rgba(127,118,221,0.25)]"
      >
        <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[8px] text-[#7f76dd]">Next scenario →</p>
      </div>
    </div>
  );
}

function OverviewSlippageWrapper({ navigate }: { navigate: (screen: Screen) => void }) {
  return (
    <div className="relative size-full">
      <div className="relative size-full">
        <OverviewSlippageAlert />
        {/* Hide original static sidebar and wallet panel */}
        <div className="absolute left-0 top-0 w-[200px] h-[900px] bg-[#0a0818] z-10" />
        <div className="absolute left-[1140px] top-[56px] w-[300px] h-[828px] bg-[#0a0818] z-10" />
        {/* Remove colored border from Monitor Card */}
        <style>{`
          [data-name="Monitor Card"] > [data-name="mcb"] {
            border-color: #2d1f5d !important;
            border-width: 1px !important;
          }
        `}</style>
      </div>
      <NavigationSidebar currentScreen="overview-slippage" navigate={(screen) => {
        // Wire AUDIT to go to audit-post on this screen
        if (screen === 'audit') {
          navigate('audit-post');
        } else {
          navigate(screen);
        }
      }} />
      <WalletPanel currentScreen="overview-slippage" />
      {/* View Post-Audit Report link in Monitor Card step detail area */}
      <button
        onClick={() => navigate('audit-post')}
        className="absolute left-[340px] top-[316px] font-['IBM_Plex_Mono:Bold',sans-serif] text-[11px] text-[#ffe600] hover:text-[#ffed4d] cursor-pointer z-30"
      >
        → View Post-Audit Report →
      </button>
    </div>
  );
}

function AuditWrapper({ navigate }: { navigate: (screen: Screen) => void }) {
  return (
    <div className="relative size-full bg-[#0a0818]">
      {/* Grid background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(45, 31, 93, 0.12) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(45, 31, 93, 0.12) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px'
      }} />

      <NavigationSidebar currentScreen="audit" navigate={navigate} />

      {/* Topbar */}
      <div className="absolute bg-[#0e0b22] h-[56px] left-[200px] top-0 w-[1240px] z-10">
        <div className="absolute bg-[#2d1f5d] h-px left-0 top-[55px] w-[1240px]" />
        <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[24px] not-italic text-[#f2e7ff] text-[14px] top-[19px] whitespace-nowrap">Audit</p>
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#5a4a8a] text-[11px] top-[22px] whitespace-pre">Contract Audit Log · Local LLM</p>
        {/* Online badge */}
        <div className="absolute h-[26px] left-[1136px] top-[15px] w-[80px]">
          <div className="absolute bg-[rgba(46,122,0,0.25)] h-[26px] left-0 rounded-[4px] top-0 w-[80px]" />
          <div className="absolute border border-[#a8ff3e] border-solid h-[26px] left-0 rounded-[4px] top-0 w-[80px]" />
          <div className="absolute bg-[#a8ff3e] left-[10px] rounded-[3px] size-[6px] top-[10px]" />
          <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[22px] not-italic text-[#a8ff3e] text-[7px] top-[8px] whitespace-nowrap">ONLINE</p>
        </div>
      </div>

      <InteractiveAudit />
      <WalletPanel currentScreen="audit" />
    </div>
  );
}

function AuditPostWrapper({ navigate }: { navigate: (screen: Screen) => void }) {
  return (
    <div className="relative size-full bg-[#0a0818]">
      {/* Grid background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(45, 31, 93, 0.12) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(45, 31, 93, 0.12) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px'
      }} />

      {/* Hide original static components */}
      <div className="relative size-full">
        <AuditPostAudit />
        <div className="absolute left-0 top-0 w-[200px] h-[900px] bg-[#0a0818] z-10" />
        <div className="absolute left-[1140px] top-[56px] w-[300px] h-[828px] bg-[#0a0818] z-10" />
      </div>

      <NavigationSidebar currentScreen="audit" navigate={navigate} />
      <WalletPanel currentScreen="audit" />
    </div>
  );
}

function EscrowWrapper({ navigate }: { navigate: (screen: Screen) => void }) {
  return (
    <div className="relative size-full bg-[#0a0818]">
      {/* Grid background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(45, 31, 93, 0.12) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(45, 31, 93, 0.12) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px'
      }} />

      <NavigationSidebar currentScreen="escrow" navigate={navigate} />

      {/* Topbar */}
      <div className="absolute bg-[#0e0b22] h-[56px] left-[200px] top-0 w-[1240px] z-10">
        <div className="absolute bg-[#2d1f5d] h-px left-0 top-[55px] w-[1240px]" />
        <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[24px] not-italic text-[#f2e7ff] text-[14px] top-[19px] whitespace-nowrap">Escrow</p>
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#5a4a8a] text-[11px] top-[22px] whitespace-pre">Conditional Settlement · Post-Audit Hold</p>
        {/* Online badge */}
        <div className="absolute h-[26px] left-[1136px] top-[15px] w-[80px]">
          <div className="absolute bg-[rgba(46,122,0,0.25)] h-[26px] left-0 rounded-[4px] top-0 w-[80px]" />
          <div className="absolute border border-[#a8ff3e] border-solid h-[26px] left-0 rounded-[4px] top-0 w-[80px]" />
          <div className="absolute bg-[#a8ff3e] left-[10px] rounded-[3px] size-[6px] top-[10px]" />
          <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[22px] not-italic text-[#a8ff3e] text-[7px] top-[8px] whitespace-nowrap">ONLINE</p>
        </div>
      </div>

      <InteractiveEscrow />
      <WalletPanel currentScreen="escrow" />
    </div>
  );
}

function IntegrationsWrapper({ navigate }: { navigate: (screen: Screen) => void }) {
  return (
    <div className="relative size-full">
      <div className="relative size-full">
        <Integrations />
        {/* Hide original static sidebar and wallet panel */}
        <div className="absolute left-0 top-0 w-[200px] h-[900px] bg-[#0a0818] z-10" />
        <div className="absolute left-[1140px] top-[56px] w-[300px] h-[828px] bg-[#0a0818] z-10" />
      </div>
      <NavigationSidebar currentScreen="integrations" navigate={navigate} />
      <WalletPanel currentScreen="integrations" />
    </div>
  );
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');

  const navigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="relative size-full">
      {currentScreen === 'landing' && <LandingWrapper navigate={navigate} />}
      {currentScreen === 'overview' && <OverviewWrapper navigate={navigate} />}
      {currentScreen === 'overview-blocked' && <OverviewBlockedWrapper navigate={navigate} />}
      {currentScreen === 'overview-slippage' && <OverviewSlippageWrapper navigate={navigate} />}
      {currentScreen === 'audit' && <AuditWrapper navigate={navigate} />}
      {currentScreen === 'audit-post' && <AuditPostWrapper navigate={navigate} />}
      {currentScreen === 'escrow' && <EscrowWrapper navigate={navigate} />}
      {currentScreen === 'integrations' && <IntegrationsWrapper navigate={navigate} />}
      <FloatingNav currentScreen={currentScreen} navigate={navigate} />
    </div>
  );
}
