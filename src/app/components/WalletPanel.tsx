type Screen = 'landing' | 'overview' | 'overview-blocked' | 'overview-slippage' | 'audit' | 'escrow' | 'integrations';

interface WalletPanelProps {
  currentScreen: Screen;
}

export default function WalletPanel({ currentScreen }: WalletPanelProps) {
  const hasEscrowHold = currentScreen === 'overview-slippage' || currentScreen === 'escrow' || currentScreen === 'audit';

  return (
    <div className="absolute bg-[#0e0b22] h-[828px] left-[1140px] overflow-clip top-[56px] w-[300px] z-20" data-name="Wallet Panel">
      <div className="absolute border border-[#2d1f5d] border-solid h-[828px] left-0 rounded-[8px] top-0 w-[300px]" />
      <div className="absolute bg-[#130f2e] h-[44px] left-0 top-0 w-[300px]" />
      <div className="absolute h-0 left-0 top-[43px] w-[300px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 1">
            <line stroke="#2D1F5D" strokeOpacity="0.7" x2="300" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      {/* Header */}
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[8px] top-[16px] whitespace-nowrap">WALLET</p>

      {/* Network Badge */}
      <div className="absolute h-[22px] left-[228px] top-[11px] w-[48px]">
        <div className="absolute bg-[rgba(55,138,221,0.12)] h-[22px] left-0 rounded-[3px] top-0 w-[48px]" />
        <div className="absolute border border-[#378add] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[48px]" />
        <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#378add] text-[8px] top-[6px] whitespace-nowrap">Base</p>
      </div>

      {/* Address Box */}
      <div className="absolute bg-[#130f2e] h-[38px] left-[12px] rounded-[6px] top-[58px] w-[276px]" />
      <div className="absolute border border-[#2d1f5d] border-solid h-[38px] left-[12px] rounded-[6px] top-[58px] w-[276px]" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[22px] not-italic text-[#7f76dd] text-[10px] top-[67px] whitespace-nowrap">jawgstar.eth</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[22px] not-italic text-[#5a4a8a] text-[8px] top-[82px] whitespace-nowrap">0x7f3a...4e2b</p>

      {/* Divider */}
      <div className="absolute h-0 left-0 top-[112px] w-[300px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 1">
            <line stroke="#2D1F5D" strokeOpacity="0.4" x2="300" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      {/* Balance */}
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[7px] top-[122px] whitespace-nowrap">BALANCE</p>
      <div className="absolute left-[14px] top-[140px] flex items-baseline gap-[8px]">
        <p className="font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] not-italic text-[#a8ff3e] text-[26px]">0.482</p>
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] not-italic text-[#9b8ec4] text-[11px]">ETH</p>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[9px] top-[174px] whitespace-nowrap">≈ $1,446.00</p>

      {/* Divider */}
      <div className="absolute h-0 left-0 top-[196px] w-[300px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 1">
            <line stroke="#2D1F5D" strokeOpacity="0.4" x2="300" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      {/* Tokens */}
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[7px] top-[206px] whitespace-nowrap">TOKENS</p>

      {/* Token 1 - USDC */}
      <div className="absolute bg-[#130f2e] h-[32px] left-[12px] rounded-[6px] top-[222px] w-[276px]" />
      <div className="absolute border border-[#2d1f5d] border-solid h-[32px] left-[12px] rounded-[6px] top-[222px] w-[276px]" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[22px] not-italic text-[#378add] text-[9px] top-[233px] whitespace-nowrap">USDC</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[80px] not-italic text-[#f2e7ff] text-[8px] top-[233px] whitespace-nowrap">320.50</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[232px] not-italic text-[#5a4a8a] text-[8px] top-[233px] whitespace-nowrap">$320.50</p>

      {/* Token 2 - WETH */}
      <div className="absolute bg-[#130f2e] h-[32px] left-[12px] rounded-[6px] top-[262px] w-[276px]" />
      <div className="absolute border border-[#2d1f5d] border-solid h-[32px] left-[12px] rounded-[6px] top-[262px] w-[276px]" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[22px] not-italic text-[#7f76dd] text-[9px] top-[273px] whitespace-nowrap">WETH</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[80px] not-italic text-[#f2e7ff] text-[8px] top-[273px] whitespace-nowrap">0.12</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[232px] not-italic text-[#5a4a8a] text-[8px] top-[273px] whitespace-nowrap">$360.24</p>

      {/* Token 3 - ARB */}
      <div className="absolute bg-[#130f2e] h-[32px] left-[12px] rounded-[6px] top-[302px] w-[276px]" />
      <div className="absolute border border-[#2d1f5d] border-solid h-[32px] left-[12px] rounded-[6px] top-[302px] w-[276px]" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[22px] not-italic text-[#ff6ee7] text-[9px] top-[313px] whitespace-nowrap">ARB</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[80px] not-italic text-[#f2e7ff] text-[8px] top-[313px] whitespace-nowrap">142.0</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[232px] not-italic text-[#5a4a8a] text-[8px] top-[313px] whitespace-nowrap">$85.20</p>

      {/* Divider */}
      <div className="absolute h-0 left-0 top-[346px] w-[300px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 1">
            <line stroke="#2D1F5D" strokeOpacity="0.4" x2="300" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      {/* Escrow Hold (conditional) */}
      {hasEscrowHold && (
        <>
          <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[7px] top-[356px] whitespace-nowrap">ESCROW HOLD</p>
          <div className="absolute h-[40px] left-[12px] top-[372px] w-[276px]">
            <div className="absolute bg-[rgba(255,230,0,0.1)] h-[40px] left-0 rounded-[6px] top-0 w-[276px]" />
            <div className="absolute border border-[#ffe600] border-solid h-[40px] left-0 rounded-[6px] top-0 w-[276px]" />
            <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[12px] not-italic text-[#ffe600] text-[10px] top-[8px] whitespace-nowrap">0.001 USDC</p>
            <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#ffe600] text-[8px] top-[26px] whitespace-nowrap">⚠ 1 tx on hold</p>
          </div>
        </>
      )}

      {/* Spend Limit (when no escrow) */}
      {!hasEscrowHold && (
        <>
          <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[7px] top-[356px] whitespace-nowrap">SPEND LIMIT</p>
          <div className="absolute bg-[#2d1f5d] h-[6px] left-[14px] rounded-[3px] top-[374px] w-[272px]" />
          <div className="absolute bg-[#a8ff3e] h-[6px] left-[14px] rounded-[3px] top-[374px] w-[95px]" />
          <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#a8ff3e] text-[9px] top-[388px] whitespace-nowrap">3.50 / 10.00 USDC</p>
        </>
      )}

      {/* Divider */}
      <div className={`absolute h-0 left-0 w-[300px] ${hasEscrowHold ? 'top-[424px]' : 'top-[410px]'}`}>
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 1">
            <line stroke="#2D1F5D" strokeOpacity="0.4" x2="300" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      {/* Recent Activity */}
      <p className={`absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[7px] whitespace-nowrap ${hasEscrowHold ? 'top-[434px]' : 'top-[420px]'}`}>RECENT ACTIVITY</p>

      {/* Activity 1 */}
      <div className={`absolute bg-[#130f2e] h-[32px] left-[12px] rounded-[6px] w-[276px] ${hasEscrowHold ? 'top-[450px]' : 'top-[436px]'}`} />
      <div className={`absolute border border-[#2d1f5d] border-solid h-[32px] left-[12px] rounded-[6px] w-[276px] ${hasEscrowHold ? 'top-[450px]' : 'top-[436px]'}`} />
      <p className={`absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[22px] not-italic text-[#9b8ec4] text-[8px] whitespace-nowrap ${hasEscrowHold ? 'top-[461px]' : 'top-[447px]'}`}>api.x402.io</p>
      <p className={`absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[220px] not-italic text-[#f44] text-[8px] whitespace-nowrap ${hasEscrowHold ? 'top-[461px]' : 'top-[447px]'}`}>-0.5 USDC</p>

      {/* Activity 2 */}
      <div className={`absolute bg-[#130f2e] h-[32px] left-[12px] rounded-[6px] w-[276px] ${hasEscrowHold ? 'top-[490px]' : 'top-[476px]'}`} />
      <div className={`absolute border border-[#2d1f5d] border-solid h-[32px] left-[12px] rounded-[6px] w-[276px] ${hasEscrowHold ? 'top-[490px]' : 'top-[476px]'}`} />
      <p className={`absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[22px] not-italic text-[#9b8ec4] text-[8px] whitespace-nowrap ${hasEscrowHold ? 'top-[501px]' : 'top-[487px]'}`}>swap.uni.v4</p>
      <p className={`absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[220px] not-italic text-[#a8ff3e] text-[8px] whitespace-nowrap ${hasEscrowHold ? 'top-[501px]' : 'top-[487px]'}`}>+0.12 WETH</p>

      {/* Activity 3 */}
      <div className={`absolute bg-[#130f2e] h-[32px] left-[12px] rounded-[6px] w-[276px] ${hasEscrowHold ? 'top-[530px]' : 'top-[516px]'}`} />
      <div className={`absolute border border-[#2d1f5d] border-solid h-[32px] left-[12px] rounded-[6px] w-[276px] ${hasEscrowHold ? 'top-[530px]' : 'top-[516px]'}`} />
      <p className={`absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[22px] not-italic text-[#9b8ec4] text-[8px] whitespace-nowrap ${hasEscrowHold ? 'top-[541px]' : 'top-[527px]'}`}>pay.agent.ai</p>
      <p className={`absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[220px] not-italic text-[#f44] text-[8px] whitespace-nowrap ${hasEscrowHold ? 'top-[541px]' : 'top-[527px]'}`}>-1.2 USDC</p>

      {/* Divider */}
      <div className="absolute h-0 left-0 top-[760px] w-[300px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 1">
            <line stroke="#2D1F5D" strokeOpacity="0.4" x2="300" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      {/* AEGIS Guard Badge */}
      <div className="absolute h-[48px] left-[12px] top-[772px] w-[276px]">
        <div className={`absolute h-[48px] left-0 rounded-[8px] top-0 w-[276px] ${hasEscrowHold ? 'bg-[rgba(255,230,0,0.1)]' : 'bg-[rgba(46,122,0,0.12)]'}`} />
        <div className={`absolute border border-solid h-[48px] left-0 rounded-[8px] top-0 w-[276px] ${hasEscrowHold ? 'border-[#ffe600]' : 'border-[#a8ff3e]'}`} />
        <p className={`absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[12px] not-italic text-[8px] top-[8px] whitespace-nowrap ${hasEscrowHold ? 'text-[#ffe600]' : 'text-[#a8ff3e]'}`}>AEGIS GUARD</p>
        <p className={`absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[8px] top-[26px] whitespace-nowrap ${hasEscrowHold ? 'text-[#ffe600]' : 'text-[#a8ff3e]'}`}>
          {hasEscrowHold ? '⚠ 1 escrow hold active' : '● ACTIVE — 0 threats'}
        </p>
      </div>
    </div>
  );
}
