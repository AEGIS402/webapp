function Sidebar() {
  return (
    <div className="absolute bg-[#0e0b22] h-[900px] left-0 overflow-clip top-0 w-[200px]" data-name="Sidebar">
      <div className="absolute bg-[#2d1f5d] h-[900px] left-[199px] top-0 w-px" data-name="sbr" />
      <div className="absolute bg-[#130f2e] h-[56px] left-0 top-0 w-[200px]" data-name="lbg" />
      <div className="absolute bg-[#2d1f5d] h-px left-0 top-[55px] w-[200px]" data-name="lbl" />
      <div className="absolute bg-[#534ab7] h-[18px] left-[14px] rounded-[3px] top-[18px] w-[22px]" data-name="sh1" />
      <div className="absolute bg-[#534ab7] h-[7px] left-[18px] rounded-[3px] top-[13px] w-[14px]" data-name="sh2" />
      <div className="absolute bg-[#7f76dd] h-[3px] left-[19px] rounded-[1px] top-[24px] w-[12px]" data-name="sw1" />
      <div className="absolute bg-[#378add] h-[2px] left-[21px] rounded-[1px] top-[29px] w-[9px]" data-name="sw2" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[44px] not-italic text-[#a8ff3e] text-[9px] top-[20px] whitespace-nowrap">AEGIS402</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[24px] not-italic text-[#5a4a8a] text-[8px] top-[80px] whitespace-nowrap">OVERVIEW</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[24px] not-italic text-[#5a4a8a] text-[8px] top-[116px] whitespace-nowrap">PAYMENTS</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[24px] not-italic text-[#5a4a8a] text-[8px] top-[152px] whitespace-nowrap">AUDIT</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[24px] not-italic text-[#5a4a8a] text-[8px] top-[188px] whitespace-nowrap">ESCROW</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[24px] not-italic text-[#5a4a8a] text-[8px] top-[224px] whitespace-nowrap">AGENTS</p>
      <div className="absolute bg-[rgba(127,118,221,0.15)] h-[28px] left-[8px] rounded-[4px] top-[256px] w-[184px]" data-name="na" />
      <div className="absolute bg-[#7f76dd] h-[28px] left-[8px] top-[256px] w-[3px]" data-name="nar" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[24px] not-italic text-[#7f76dd] text-[8px] top-[260px] whitespace-nowrap">INTEGRATIONS</p>
      <div className="absolute h-0 left-0 top-[844px] w-[200px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" x2="200" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#9b8ec4] text-[9px] top-[858px] whitespace-nowrap">jawgstar.eth</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[8px] top-[874px] whitespace-nowrap">Base · Pro</p>
    </div>
  );
}

function Live() {
  return (
    <div className="absolute h-[26px] left-[1136px] overflow-clip top-[15px] w-[80px]" data-name="Live">
      <div className="absolute bg-[rgba(46,122,0,0.25)] h-[26px] left-0 rounded-[4px] top-0 w-[80px]" data-name="lvbg" />
      <div className="absolute border border-[#a8ff3e] border-solid h-[26px] left-0 rounded-[4px] top-0 w-[80px]" data-name="lvbdr" />
      <div className="absolute bg-[#a8ff3e] left-[10px] rounded-[3px] size-[6px] top-[10px]" data-name="ldot" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[22px] not-italic text-[#a8ff3e] text-[7px] top-[8px] whitespace-nowrap">ONLINE</p>
    </div>
  );
}

function Topbar() {
  return (
    <div className="absolute bg-[#0e0b22] h-[56px] left-[200px] overflow-clip top-0 w-[1240px]" data-name="Topbar">
      <div className="absolute bg-[#2d1f5d] h-px left-0 top-[55px] w-[1240px]" data-name="tbl" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[24px] not-italic text-[#f2e7ff] text-[14px] top-[19px] whitespace-nowrap">Integrations</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[210px] not-italic text-[#5a4a8a] text-[11px] top-[22px] whitespace-pre">{`Hook Registry  ·  x402 Connections`}</p>
      <Live />
    </div>
  );
}

function Pl() {
  return (
    <div className="absolute h-[22px] left-[556px] overflow-clip top-[44px] w-[125px]" data-name="pl">
      <div className="absolute bg-[rgba(168,255,62,0.1)] h-[22px] left-0 rounded-[3px] top-0 w-[125px]" data-name="bg" />
      <div className="absolute border border-[#a8ff3e] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[125px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#a8ff3e] text-[8px] top-[6px] whitespace-nowrap">+ Register Hook</p>
    </div>
  );
}

function Pl1() {
  return (
    <div className="absolute h-[22px] left-[16px] overflow-clip top-[14px] w-[83px]" data-name="pl">
      <div className="absolute bg-[rgba(46,122,0,0.12)] h-[22px] left-0 rounded-[3px] top-0 w-[83px]" data-name="bg" />
      <div className="absolute border border-[#a8ff3e] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[83px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#a8ff3e] text-[8px] top-[6px] whitespace-nowrap">CONNECTED</p>
    </div>
  );
}

function Perm() {
  return (
    <div className="absolute h-[18px] left-[16px] overflow-clip top-[80px] w-[74.5px]" data-name="perm">
      <div className="absolute bg-[rgba(168,255,62,0.1)] h-[18px] left-0 rounded-[3px] top-0 w-[74.5px]" data-name="pbg" />
      <div className="absolute border-[#a8ff3e] border-[0.5px] border-solid h-[18px] left-0 rounded-[3px] top-0 w-[74.5px]" data-name="pbdr" />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[7px] not-italic text-[#a8ff3e] text-[6px] top-[5px] whitespace-nowrap">BEFORE_SWAP</p>
    </div>
  );
}

function Perm1() {
  return (
    <div className="absolute h-[18px] left-[96.5px] overflow-clip top-[80px] w-[69px]" data-name="perm">
      <div className="absolute bg-[rgba(168,255,62,0.1)] h-[18px] left-0 rounded-[3px] top-0 w-[69px]" data-name="pbg" />
      <div className="absolute border-[#a8ff3e] border-[0.5px] border-solid h-[18px] left-0 rounded-[3px] top-0 w-[69px]" data-name="pbdr" />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[7px] not-italic text-[#a8ff3e] text-[6px] top-[5px] whitespace-nowrap">AFTER_SWAP</p>
    </div>
  );
}

function HookAegisV4Hook() {
  return (
    <div className="absolute bg-[#130f2e] h-[156px] left-[16px] overflow-clip top-[76px] w-[326px]" data-name="Hook-AEGIS V4 Hook">
      <div className="absolute border-[#a8ff3e] border-[1.5px] border-solid h-[156px] left-0 rounded-[8px] top-0 w-[326px]" data-name="cbdr" />
      <div className="absolute bg-[rgba(168,255,62,0.8)] h-[3px] left-0 top-0 w-[326px]" data-name="acc" />
      <Pl1 />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[16px] not-italic text-[#f2e7ff] text-[10px] top-[46px] whitespace-nowrap">AEGIS V4 Hook</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#7f76dd] text-[8px] top-[62px] whitespace-nowrap">0xUniV4Hook...a2c</p>
      <Perm />
      <Perm1 />
      <div className="absolute h-0 left-0 top-[118px] w-[326px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.5" x2="326" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[130px] whitespace-nowrap">Base</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[143px] not-italic text-[#5a4a8a] text-[8px] top-[130px] whitespace-nowrap">v1.2.0</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[266px] not-italic text-[#a8ff3e] text-[8px] top-[130px] whitespace-nowrap">142 txs</p>
    </div>
  );
}

function Pl2() {
  return (
    <div className="absolute h-[22px] left-[16px] overflow-clip top-[14px] w-[83px]" data-name="pl">
      <div className="absolute bg-[rgba(46,122,0,0.12)] h-[22px] left-0 rounded-[3px] top-0 w-[83px]" data-name="bg" />
      <div className="absolute border border-[#a8ff3e] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[83px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#a8ff3e] text-[8px] top-[6px] whitespace-nowrap">CONNECTED</p>
    </div>
  );
}

function Perm2() {
  return (
    <div className="absolute h-[18px] left-[16px] overflow-clip top-[80px] w-[69px]" data-name="perm">
      <div className="absolute bg-[rgba(168,255,62,0.1)] h-[18px] left-0 rounded-[3px] top-0 w-[69px]" data-name="pbg" />
      <div className="absolute border-[#a8ff3e] border-[0.5px] border-solid h-[18px] left-0 rounded-[3px] top-0 w-[69px]" data-name="pbdr" />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[7px] not-italic text-[#a8ff3e] text-[6px] top-[5px] whitespace-nowrap">AFTER_SWAP</p>
    </div>
  );
}

function HookSlippageGuard() {
  return (
    <div className="absolute bg-[#130f2e] h-[156px] left-[358px] overflow-clip top-[76px] w-[326px]" data-name="Hook-Slippage Guard">
      <div className="absolute border border-[#2d1f5d] border-solid h-[156px] left-0 rounded-[8px] top-0 w-[326px]" data-name="cbdr" />
      <div className="absolute bg-[rgba(168,255,62,0.8)] h-[3px] left-0 top-0 w-[326px]" data-name="acc" />
      <Pl2 />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[16px] not-italic text-[#f2e7ff] text-[10px] top-[46px] whitespace-nowrap">Slippage Guard</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#7f76dd] text-[8px] top-[62px] whitespace-nowrap">0xSlipGuard...f3d</p>
      <Perm2 />
      <div className="absolute h-0 left-0 top-[118px] w-[326px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.5" x2="326" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[130px] whitespace-nowrap">Base</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[143px] not-italic text-[#5a4a8a] text-[8px] top-[130px] whitespace-nowrap">v0.9.1</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[266px] not-italic text-[#a8ff3e] text-[8px] top-[130px] whitespace-nowrap">38 txs</p>
    </div>
  );
}

function Pl3() {
  return (
    <div className="absolute h-[22px] left-[16px] overflow-clip top-[14px] w-[48px]" data-name="pl">
      <div className="absolute bg-[rgba(255,230,0,0.12)] h-[22px] left-0 rounded-[3px] top-0 w-[48px]" data-name="bg" />
      <div className="absolute border border-[#ffe600] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[48px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#ffe600] text-[8px] top-[6px] whitespace-nowrap">WARN</p>
    </div>
  );
}

function Perm3() {
  return (
    <div className="absolute h-[18px] left-[16px] overflow-clip top-[80px] w-[74.5px]" data-name="perm">
      <div className="absolute bg-[rgba(255,230,0,0.1)] h-[18px] left-0 rounded-[3px] top-0 w-[74.5px]" data-name="pbg" />
      <div className="absolute border-[#ffe600] border-[0.5px] border-solid h-[18px] left-0 rounded-[3px] top-0 w-[74.5px]" data-name="pbdr" />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[7px] not-italic text-[#ffe600] text-[6px] top-[5px] whitespace-nowrap">BEFORE_SWAP</p>
    </div>
  );
}

function Perm4() {
  return (
    <div className="absolute h-[18px] left-[96.5px] overflow-clip top-[80px] w-[63.5px]" data-name="perm">
      <div className="absolute bg-[rgba(255,230,0,0.1)] h-[18px] left-0 rounded-[3px] top-0 w-[63.5px]" data-name="pbg" />
      <div className="absolute border-[#ffe600] border-[0.5px] border-solid h-[18px] left-0 rounded-[3px] top-0 w-[63.5px]" data-name="pbdr" />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[7px] not-italic text-[#ffe600] text-[6px] top-[5px] whitespace-nowrap">MODIFY_LP</p>
    </div>
  );
}

function HookPaymentRouter() {
  return (
    <div className="absolute bg-[#130f2e] h-[156px] left-[16px] overflow-clip top-[248px] w-[326px]" data-name="Hook-Payment Router">
      <div className="absolute border border-[#2d1f5d] border-solid h-[156px] left-0 rounded-[8px] top-0 w-[326px]" data-name="cbdr" />
      <div className="absolute bg-[rgba(255,230,0,0.8)] h-[3px] left-0 top-0 w-[326px]" data-name="acc" />
      <Pl3 />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[16px] not-italic text-[#f2e7ff] text-[10px] top-[46px] whitespace-nowrap">Payment Router</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#7f76dd] text-[8px] top-[62px] whitespace-nowrap">0xRouter...5564</p>
      <Perm3 />
      <Perm4 />
      <div className="absolute h-0 left-0 top-[118px] w-[326px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.5" x2="326" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[130px] whitespace-nowrap">Base</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[143px] not-italic text-[#5a4a8a] text-[8px] top-[130px] whitespace-nowrap">v2.0.0</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[266px] not-italic text-[#ffe600] text-[8px] top-[130px] whitespace-nowrap">7 txs</p>
    </div>
  );
}

function Pl4() {
  return (
    <div className="absolute h-[22px] left-[16px] overflow-clip top-[14px] w-[104px]" data-name="pl">
      <div className="absolute bg-[rgba(45,31,93,0.08)] h-[22px] left-0 rounded-[3px] top-0 w-[104px]" data-name="bg" />
      <div className="absolute border border-[#5a4a8a] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[104px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#5a4a8a] text-[8px] top-[6px] whitespace-nowrap">DISCONNECTED</p>
    </div>
  );
}

function Perm5() {
  return (
    <div className="absolute h-[18px] left-[16px] overflow-clip top-[80px] w-[74.5px]" data-name="perm">
      <div className="absolute bg-[rgba(90,74,138,0.1)] h-[18px] left-0 rounded-[3px] top-0 w-[74.5px]" data-name="pbg" />
      <div className="absolute border-[#5a4a8a] border-[0.5px] border-solid h-[18px] left-0 rounded-[3px] top-0 w-[74.5px]" data-name="pbdr" />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[7px] not-italic text-[#5a4a8a] text-[6px] top-[5px] whitespace-nowrap">BEFORE_SWAP</p>
    </div>
  );
}

function HookTestHook() {
  return (
    <div className="absolute bg-[#130f2e] h-[156px] left-[358px] overflow-clip top-[248px] w-[326px]" data-name="Hook-Test Hook">
      <div className="absolute border border-[#2d1f5d] border-solid h-[156px] left-0 rounded-[8px] top-0 w-[326px]" data-name="cbdr" />
      <div className="absolute bg-[rgba(90,74,138,0.3)] h-[3px] left-0 top-0 w-[326px]" data-name="acc" />
      <Pl4 />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[10px] top-[46px] whitespace-nowrap">Test Hook</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#7f76dd] text-[8px] top-[62px] whitespace-nowrap">0xTestHook...9b2e</p>
      <Perm5 />
      <div className="absolute h-0 left-0 top-[118px] w-[326px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.5" x2="326" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[130px] whitespace-nowrap">Base Sepolia</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[143px] not-italic text-[#5a4a8a] text-[8px] top-[130px] whitespace-nowrap">v0.1.0</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[266px] not-italic text-[#5a4a8a] text-[8px] top-[130px] whitespace-nowrap">0 txs</p>
    </div>
  );
}

function Pl5() {
  return (
    <div className="absolute h-[22px] left-[550px] overflow-clip top-[7px] w-[97px]" data-name="pl">
      <div className="absolute bg-[rgba(46,122,0,0.15)] h-[22px] left-0 rounded-[3px] top-0 w-[97px]" data-name="bg" />
      <div className="absolute border border-[#a8ff3e] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[97px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#a8ff3e] text-[8px] top-[6px] whitespace-nowrap">✓ CONNECTED</p>
    </div>
  );
}

function Pl6() {
  return (
    <div className="absolute h-[22px] left-[594px] overflow-clip top-[58px] w-[48px]" data-name="pl">
      <div className="absolute bg-[rgba(168,255,62,0.1)] h-[22px] left-0 rounded-[3px] top-0 w-[48px]" data-name="bg" />
      <div className="absolute border border-[#a8ff3e] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[48px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#a8ff3e] text-[8px] top-[6px] whitespace-nowrap">PASS</p>
    </div>
  );
}

function Pl7() {
  return (
    <div className="absolute h-[22px] left-[594px] overflow-clip top-[80px] w-[48px]" data-name="pl">
      <div className="absolute bg-[rgba(168,255,62,0.1)] h-[22px] left-0 rounded-[3px] top-0 w-[48px]" data-name="bg" />
      <div className="absolute border border-[#a8ff3e] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[48px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#a8ff3e] text-[8px] top-[6px] whitespace-nowrap">PASS</p>
    </div>
  );
}

function Pl8() {
  return (
    <div className="absolute h-[22px] left-[594px] overflow-clip top-[102px] w-[48px]" data-name="pl">
      <div className="absolute bg-[rgba(168,255,62,0.1)] h-[22px] left-0 rounded-[3px] top-0 w-[48px]" data-name="bg" />
      <div className="absolute border border-[#a8ff3e] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[48px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#a8ff3e] text-[8px] top-[6px] whitespace-nowrap">PASS</p>
    </div>
  );
}

function Pl9() {
  return (
    <div className="absolute h-[22px] left-[594px] overflow-clip top-[124px] w-[48px]" data-name="pl">
      <div className="absolute bg-[rgba(255,230,0,0.1)] h-[22px] left-0 rounded-[3px] top-0 w-[48px]" data-name="bg" />
      <div className="absolute border border-[#ffe600] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[48px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#ffe600] text-[8px] top-[6px] whitespace-nowrap">HOLD</p>
    </div>
  );
}

function Pl10() {
  return (
    <div className="absolute h-[22px] left-[594px] overflow-clip top-[146px] w-[55px]" data-name="pl">
      <div className="absolute bg-[rgba(255,68,68,0.1)] h-[22px] left-0 rounded-[3px] top-0 w-[55px]" data-name="bg" />
      <div className="absolute border border-[#f44] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[55px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#f44] text-[8px] top-[6px] whitespace-nowrap">BLOCK</p>
    </div>
  );
}

function BtnDisconnect() {
  return (
    <div className="absolute h-[32px] left-[338px] overflow-clip top-[200px] w-[157px]" data-name="btn-disconnect">
      <div className="absolute bg-[rgba(255,68,68,0.1)] h-[32px] left-0 rounded-[6px] top-0 w-[157px]" data-name="b1bg" />
      <div className="absolute border border-[#f44] border-solid h-[32px] left-0 rounded-[6px] top-0 w-[157px]" data-name="b1bdr" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[46.5px] not-italic text-[#f44] text-[8px] top-[11px] whitespace-nowrap">DISCONNECT</p>
    </div>
  );
}

function BtnRefresh() {
  return (
    <div className="absolute h-[32px] left-[503px] overflow-clip top-[200px] w-[157px]" data-name="btn-refresh">
      <div className="absolute bg-[rgba(55,138,221,0.1)] h-[32px] left-0 rounded-[6px] top-0 w-[157px]" data-name="b2bg" />
      <div className="absolute border border-[#378add] border-solid h-[32px] left-0 rounded-[6px] top-0 w-[157px]" data-name="b2bdr" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[54.5px] not-italic text-[#378add] text-[8px] top-[11px] whitespace-nowrap">REFRESH</p>
    </div>
  );
}

function HookDetail() {
  return (
    <div className="absolute bg-[#130f2e] h-[364px] left-[16px] overflow-clip top-[428px] w-[668px]" data-name="Hook Detail">
      <div className="absolute border border-[#a8ff3e] border-solid h-[364px] left-0 rounded-[8px] top-0 w-[668px]" data-name="db" />
      <div className="absolute bg-[rgba(168,255,62,0.7)] h-[3px] left-0 top-0 w-[668px]" data-name="dtop" />
      <div className="absolute bg-[#0e0b22] h-[36px] left-0 top-0 w-[668px]" data-name="dhbg" />
      <div className="absolute h-0 left-0 top-[35px] w-[668px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 668 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.5" x2="668" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[14px] not-italic text-[#a8ff3e] text-[9px] top-[11px] whitespace-pre">{`HOOK DETAIL  —  AEGIS V4 Hook`}</p>
      <Pl5 />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[7px] top-[46px] whitespace-nowrap">REGISTRATION</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[8px] top-[62px] whitespace-nowrap">address</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[110px] not-italic text-[#7f76dd] text-[8px] top-[62px] whitespace-nowrap">0xUniV4Hook...a2c</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[8px] top-[84px] whitespace-nowrap">network</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[110px] not-italic text-[#378add] text-[8px] top-[84px] whitespace-nowrap">Base</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[8px] top-[106px] whitespace-nowrap">version</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[110px] not-italic text-[#f2e7ff] text-[8px] top-[106px] whitespace-nowrap">v1.2.0</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[8px] top-[128px] whitespace-nowrap">registered</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[110px] not-italic text-[#9b8ec4] text-[8px] top-[128px] whitespace-nowrap">2026-04-28</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[8px] top-[150px] whitespace-nowrap">tx count</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[110px] not-italic text-[#a8ff3e] text-[8px] top-[150px] whitespace-nowrap">142</p>
      <div className="absolute h-0 left-[14px] top-[174px] w-[314px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 314 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.3" x2="314" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[7px] top-[182px] whitespace-nowrap">PERMISSIONS</p>
      <div className="absolute bg-[#a8ff3e] left-[14px] rounded-[2px] size-[7px] top-[198px]" data-name="pd" />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[28px] not-italic text-[#a8ff3e] text-[8px] top-[198px] whitespace-nowrap">BEFORE_SWAP</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[234px] not-italic text-[#5a4a8a] text-[7px] top-[198px] whitespace-nowrap">allowed</p>
      <div className="absolute bg-[#a8ff3e] left-[14px] rounded-[2px] size-[7px] top-[220px]" data-name="pd" />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[28px] not-italic text-[#a8ff3e] text-[8px] top-[220px] whitespace-nowrap">AFTER_SWAP</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[234px] not-italic text-[#5a4a8a] text-[7px] top-[220px] whitespace-nowrap">allowed</p>
      <div className="absolute bg-[#2d1f5d] left-[14px] rounded-[2px] size-[7px] top-[242px]" data-name="pd" />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[28px] not-italic text-[#5a4a8a] text-[8px] top-[242px] whitespace-nowrap">MODIFY_LP</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[234px] not-italic text-[#2d1f5d] text-[7px] top-[242px] whitespace-nowrap">not registered</p>
      <div className="absolute h-[324px] left-[332px] top-[40px] w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.31%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.3" x2="0.0001" y1="0.5" y2="324.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[338px] not-italic text-[#5a4a8a] text-[7px] top-[46px] whitespace-nowrap">RECENT EVENTS</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[338px] not-italic text-[#9b8ec4] text-[8px] top-[62px] whitespace-nowrap">beforeSwap</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[428px] not-italic text-[#7f76dd] text-[8px] top-[62px] whitespace-nowrap">0xA4f2...8c3d</p>
      <Pl6 />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[338px] not-italic text-[#9b8ec4] text-[8px] top-[84px] whitespace-nowrap">afterSwap</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[428px] not-italic text-[#7f76dd] text-[8px] top-[84px] whitespace-nowrap">0xA4f2...8c3d</p>
      <Pl7 />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[338px] not-italic text-[#9b8ec4] text-[8px] top-[106px] whitespace-nowrap">beforeSwap</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[428px] not-italic text-[#7f76dd] text-[8px] top-[106px] whitespace-nowrap">0xF7c3...9d1a</p>
      <Pl8 />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[338px] not-italic text-[#9b8ec4] text-[8px] top-[128px] whitespace-nowrap">afterSwap</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[428px] not-italic text-[#7f76dd] text-[8px] top-[128px] whitespace-nowrap">0xF7c3...9d1a</p>
      <Pl9 />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[338px] not-italic text-[#9b8ec4] text-[8px] top-[150px] whitespace-nowrap">beforeSwap</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[428px] not-italic text-[#7f76dd] text-[8px] top-[150px] whitespace-nowrap">0xB8e1...3f9a</p>
      <Pl10 />
      <div className="absolute h-0 left-[338px] top-[178px] w-[322px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 322 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.3" x2="322" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[338px] not-italic text-[#5a4a8a] text-[7px] top-[186px] whitespace-nowrap">ACTIONS</p>
      <BtnDisconnect />
      <BtnRefresh />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute bg-[#0e0b22] h-[808px] left-[320px] overflow-clip top-[76px] w-[700px]" data-name="Main">
      <div className="absolute border border-[#2d1f5d] border-solid h-[808px] left-0 rounded-[8px] top-0 w-[700px]" data-name="mb" />
      <div className="absolute bg-[#130f2e] h-[40px] left-0 top-0 w-[700px]" data-name="tab-bg" />
      <div className="absolute h-0 left-0 top-[39px] w-[700px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.7" x2="700" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[rgba(127,118,221,0.12)] h-[40px] left-0 top-0 w-[350px]" data-name="tab1-act" />
      <div className="absolute bg-[#7f76dd] h-[2px] left-0 top-[38px] w-[350px]" data-name="tab1-bar" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[143px] not-italic text-[#7f76dd] text-[8px] top-[14px] whitespace-nowrap">CONNECTED</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[497px] not-italic text-[#5a4a8a] text-[8px] top-[14px] whitespace-nowrap">AVAILABLE</p>
      <div className="absolute h-px left-[350px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-4000%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 40">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.5" strokeWidth="40" x2="0.0001" y1="20" y2="21" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[7px] top-[54px] whitespace-nowrap">HOOK CONTRACTS</p>
      <Pl />
      <HookAegisV4Hook />
      <HookSlippageGuard />
      <HookPaymentRouter />
      <HookTestHook />
      <HookDetail />
    </div>
  );
}

function Pl11() {
  return (
    <div className="absolute h-[22px] left-[228px] overflow-clip top-[11px] w-[48px]" data-name="pl">
      <div className="absolute bg-[rgba(55,138,221,0.12)] h-[22px] left-0 rounded-[3px] top-0 w-[48px]" data-name="bg" />
      <div className="absolute border border-[#378add] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[48px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#378add] text-[8px] top-[6px] whitespace-nowrap">Base</p>
    </div>
  );
}

function Guard() {
  return (
    <div className="absolute h-[48px] left-[12px] overflow-clip top-[772px] w-[276px]" data-name="guard">
      <div className="absolute bg-[rgba(46,122,0,0.15)] h-[48px] left-0 rounded-[8px] top-0 w-[276px]" data-name="gsbg" />
      <div className="absolute border border-[#a8ff3e] border-solid h-[48px] left-0 rounded-[8px] top-0 w-[276px]" data-name="gsbdr" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[12px] not-italic text-[#a8ff3e] text-[8px] top-[8px] whitespace-nowrap">AEGIS GUARD</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#a8ff3e] text-[8px] top-[26px] whitespace-nowrap">● ACTIVE — 2 hooks connected</p>
    </div>
  );
}

function WalletPanel() {
  return (
    <div className="absolute bg-[#0e0b22] h-[828px] left-[1140px] overflow-clip top-[56px] w-[300px]" data-name="Wallet Panel">
      <div className="absolute border border-[#2d1f5d] border-solid h-[828px] left-0 rounded-[8px] top-0 w-[300px]" data-name="wpb" />
      <div className="absolute bg-[#130f2e] h-[44px] left-0 top-0 w-[300px]" data-name="wph" />
      <div className="absolute h-0 left-0 top-[43px] w-[300px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.7" x2="300" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[8px] top-[16px] whitespace-nowrap">WALLET</p>
      <Pl11 />
      <div className="absolute bg-[#130f2e] h-[38px] left-[12px] rounded-[6px] top-[58px] w-[276px]" data-name="addr" />
      <div className="absolute border border-[#2d1f5d] border-solid h-[38px] left-[12px] rounded-[6px] top-[58px] w-[276px]" data-name="addrbdr" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[22px] not-italic text-[#7f76dd] text-[10px] top-[67px] whitespace-nowrap">jawgstar.eth</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[22px] not-italic text-[#5a4a8a] text-[8px] top-[82px] whitespace-nowrap">0x7f3a...4e2b</p>
      <div className="absolute h-0 left-0 top-[112px] w-[300px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.4" x2="300" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[7px] top-[122px] whitespace-nowrap">BALANCE</p>
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[14px] not-italic text-[#a8ff3e] text-[26px] top-[140px] whitespace-nowrap">0.482</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[70px] not-italic text-[#9b8ec4] text-[11px] top-[152px] whitespace-nowrap">ETH</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[9px] top-[174px] whitespace-nowrap">≈ $1,446.00</p>
      <div className="absolute h-0 left-0 top-[196px] w-[300px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.4" x2="300" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[7px] top-[206px] whitespace-nowrap">TOKENS</p>
      <div className="absolute bg-[#130f2e] h-[32px] left-[12px] rounded-[6px] top-[222px] w-[276px]" data-name="tok0" />
      <div className="absolute border border-[#2d1f5d] border-solid h-[32px] left-[12px] rounded-[6px] top-[222px] w-[276px]" data-name="tokb0" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[22px] not-italic text-[#378add] text-[9px] top-[233px] whitespace-nowrap">USDC</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[80px] not-italic text-[#f2e7ff] text-[8px] top-[233px] whitespace-nowrap">320.50</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[232px] not-italic text-[#5a4a8a] text-[8px] top-[233px] whitespace-nowrap">$320.50</p>
      <div className="absolute bg-[#130f2e] h-[32px] left-[12px] rounded-[6px] top-[262px] w-[276px]" data-name="tok1" />
      <div className="absolute border border-[#2d1f5d] border-solid h-[32px] left-[12px] rounded-[6px] top-[262px] w-[276px]" data-name="tokb1" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[22px] not-italic text-[#7f76dd] text-[9px] top-[273px] whitespace-nowrap">WETH</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[80px] not-italic text-[#f2e7ff] text-[8px] top-[273px] whitespace-nowrap">0.12</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[232px] not-italic text-[#5a4a8a] text-[8px] top-[273px] whitespace-nowrap">$360.24</p>
      <div className="absolute bg-[#130f2e] h-[32px] left-[12px] rounded-[6px] top-[302px] w-[276px]" data-name="tok2" />
      <div className="absolute border border-[#2d1f5d] border-solid h-[32px] left-[12px] rounded-[6px] top-[302px] w-[276px]" data-name="tokb2" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[22px] not-italic text-[#ff6ee7] text-[9px] top-[313px] whitespace-nowrap">ARB</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[80px] not-italic text-[#f2e7ff] text-[8px] top-[313px] whitespace-nowrap">142.0</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[232px] not-italic text-[#5a4a8a] text-[8px] top-[313px] whitespace-nowrap">$85.20</p>
      <div className="absolute h-0 left-0 top-[346px] w-[300px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.4" x2="300" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[7px] top-[356px] whitespace-nowrap">HOOK STATUS</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#9b8ec4] text-[8px] top-[372px] whitespace-nowrap">AEGIS V4 Hook</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[220px] not-italic text-[#a8ff3e] text-[8px] top-[372px] whitespace-nowrap">CONNECTED</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#9b8ec4] text-[8px] top-[392px] whitespace-nowrap">Slippage Guard</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[220px] not-italic text-[#a8ff3e] text-[8px] top-[392px] whitespace-nowrap">CONNECTED</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#9b8ec4] text-[8px] top-[412px] whitespace-nowrap">Payment Router</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[220px] not-italic text-[#ffe600] text-[8px] top-[412px] whitespace-nowrap">WARN</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#9b8ec4] text-[8px] top-[432px] whitespace-nowrap">Test Hook</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[220px] not-italic text-[#5a4a8a] text-[8px] top-[432px] whitespace-nowrap">OFF</p>
      <div className="absolute h-0 left-0 top-[760px] w-[300px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.4" x2="300" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Guard />
    </div>
  );
}

export default function Integrations() {
  return (
    <div className="bg-[#0a0818] relative size-full" data-name="Integrations">
      <div className="absolute h-[900px] left-0 top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[48px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[96px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[144px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[192px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[240px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[288px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[336px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[384px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[432px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[480px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[528px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[576px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[624px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[672px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[720px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[768px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[816px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[864px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[912px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[960px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[1008px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[1056px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[1104px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[1152px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[1200px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[1248px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[1296px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[1344px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[1392px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[900px] left-[1440px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="0.0001" y1="0.5" y2="900.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-0 w-[1440px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[48px] w-[1440px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[96px] w-[1440px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[144px] w-[1440px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[192px] w-[1440px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[240px] w-[1440px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[288px] w-[1440px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[336px] w-[1440px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[384px] w-[1440px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[432px] w-[1440px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[480px] w-[1440px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[528px] w-[1440px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[576px] w-[1440px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[624px] w-[1440px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[672px] w-[1440px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[720px] w-[1440px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[768px] w-[1440px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[816px] w-[1440px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[864px] w-[1440px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.12" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Sidebar />
      <Topbar />
      <Main />
      <WalletPanel />
    </div>
  );
}