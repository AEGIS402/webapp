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
      <div className="absolute bg-[rgba(127,118,221,0.15)] h-[28px] left-[8px] rounded-[4px] top-[148px] w-[184px]" data-name="na" />
      <div className="absolute bg-[#7f76dd] h-[28px] left-[8px] top-[148px] w-[3px]" data-name="nar" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[24px] not-italic text-[#7f76dd] text-[8px] top-[152px] whitespace-nowrap">AUDIT</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[24px] not-italic text-[#5a4a8a] text-[8px] top-[188px] whitespace-nowrap">ESCROW</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[24px] not-italic text-[#5a4a8a] text-[8px] top-[224px] whitespace-nowrap">AGENTS</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[24px] not-italic text-[#5a4a8a] text-[8px] top-[260px] whitespace-nowrap">INTEGRATIONS</p>
      <div className="absolute h-0 left-0 top-[844px] w-[200px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 1">
            <line stroke="#2D1F5D" x2="200" y1="0.5" y2="0.5" />
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
    <div className="absolute h-[26px] left-[1136px] overflow-clip top-[15px] w-[80px]">
      <div className="absolute bg-[rgba(46,122,0,0.25)] h-[26px] left-0 rounded-[4px] top-0 w-[80px]" />
      <div className="absolute border border-[#a8ff3e] border-solid h-[26px] left-0 rounded-[4px] top-0 w-[80px]" />
      <div className="absolute bg-[#a8ff3e] left-[10px] rounded-[3px] size-[6px] top-[10px]" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[22px] not-italic text-[#a8ff3e] text-[7px] top-[8px] whitespace-nowrap">ONLINE</p>
    </div>
  );
}

function Topbar() {
  return (
    <div className="absolute bg-[#0e0b22] h-[56px] left-[200px] overflow-clip top-0 w-[1240px]">
      <div className="absolute bg-[#2d1f5d] h-px left-0 top-[55px] w-[1240px]" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[24px] not-italic text-[#f2e7ff] text-[14px] top-[19px] whitespace-nowrap">Audit</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#5a4a8a] text-[11px] top-[22px] whitespace-pre">Contract Audit Log  ·  Local LLM</p>
      <Live />
    </div>
  );
}

function AuditList() {
  return (
    <div className="absolute bg-[#0e0b22] h-[808px] left-[320px] overflow-clip top-[76px] w-[700px]">
      <div className="absolute border border-[#2d1f5d] border-solid h-[808px] left-0 rounded-[8px] top-0 w-[700px]" />

      {/* Tabs */}
      <div className="absolute bg-[#130f2e] h-[40px] left-0 top-0 w-[700px]" />
      <div className="absolute bg-[rgba(127,118,221,0.1)] h-[40px] left-0 top-0 w-[350px]" />
      <div className="absolute bg-[#7f76dd] h-[2px] left-0 top-[38px] w-[350px]" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[138px] not-italic text-[#7f76dd] text-[8px] top-[14px] whitespace-nowrap">PRE-AUDIT</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[475px] not-italic text-[#5a4a8a] text-[8px] top-[14px] whitespace-nowrap">POST-AUDIT</p>

      {/* Tab divider */}
      <div className="absolute h-[40px] left-[350px] top-0 w-px">
        <svg className="block size-full" fill="none" viewBox="0 0 1 40">
          <line stroke="#2D1F5D" strokeOpacity="0.5" x1="0.5" y1="0" x2="0.5" y2="40" />
        </svg>
      </div>

      {/* Column headers */}
      <div className="absolute h-0 left-0 top-[39px] w-[700px]">
        <svg className="block size-full" fill="none" viewBox="0 0 700 1">
          <line stroke="#2D1F5D" strokeOpacity="0.7" x2="700" y1="0.5" y2="0.5" />
        </svg>
      </div>
      <div className="absolute bg-[#130f2e] h-[32px] left-0 top-[40px] w-[700px]" />
      <div className="absolute h-0 left-0 top-[71px] w-[700px]">
        <svg className="block size-full" fill="none" viewBox="0 0 700 1">
          <line stroke="#2D1F5D" strokeOpacity="0.5" x2="700" y1="0.5" y2="0.5" />
        </svg>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[7px] top-[50px] whitespace-nowrap">TX HASH</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#5a4a8a] text-[7px] top-[50px] whitespace-nowrap">CONTRACT</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[420px] not-italic text-[#5a4a8a] text-[7px] top-[50px] whitespace-nowrap">TIME</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[620px] not-italic text-[#5a4a8a] text-[7px] top-[50px] whitespace-nowrap">RESULT</p>

      {/* Row 1 - Expanded BLOCK */}
      <div className="absolute bg-[rgba(255,68,68,0.05)] h-[344px] left-0 top-[72px] w-[700px]" />
      <div className="absolute bg-[#f44] h-[344px] left-0 top-[72px] w-[3px]" />
      <div className="absolute border-[#f44] border-[0.5px] border-solid h-[344px] left-0 top-[72px] w-[700px]" />

      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[16px] not-italic text-[#f44] text-[9px] top-[86px] whitespace-nowrap">0xA4f2...8c3d</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#9b8ec4] text-[9px] top-[86px] whitespace-nowrap">0xUniV4Hook...a2c</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[420px] not-italic text-[#5a4a8a] text-[9px] top-[86px] whitespace-nowrap">02:14:34</p>

      <div className="absolute h-[22px] left-[610px] top-[83px] w-[55px]">
        <div className="absolute bg-[rgba(255,68,68,0.12)] h-[22px] left-0 rounded-[3px] top-0 w-[55px]" />
        <div className="absolute border border-[#f44] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[55px]" />
        <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#f44] text-[8px] top-[6px] whitespace-nowrap">✕ BLOCK</p>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[684px] not-italic text-[#f44] text-[8px] top-[88px] whitespace-nowrap">▼</p>

      {/* Accordion divider */}
      <div className="absolute h-0 left-[16px] top-[116px] w-[668px]">
        <svg className="block size-full" fill="none" viewBox="0 0 668 1">
          <line stroke="#2D1F5D" strokeOpacity="0.4" x2="668" y1="0.5" y2="0.5" />
        </svg>
      </div>

      {/* Left column */}
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[7px] top-[126px] whitespace-nowrap">TRANSACTION</p>
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[16px] not-italic text-[#f2e7ff] text-[9px] top-[140px] whitespace-nowrap">0xA4f2...8c3d</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[156px] whitespace-pre">Block #23437410  ·  02:14:34</p>

      <div className="absolute h-0 left-[16px] top-[174px] w-[312px]">
        <svg className="block size-full" fill="none" viewBox="0 0 312 1">
          <line stroke="#2D1F5D" strokeOpacity="0.3" x2="312" y1="0.5" y2="0.5" />
        </svg>
      </div>

      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[7px] top-[182px] whitespace-nowrap">HOOK PERMISSIONS</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#a8ff3e] text-[8px] top-[198px] whitespace-nowrap">● BEFORE_SWAP</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#a8ff3e] text-[7px] top-[199px] whitespace-nowrap">declared</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#a8ff3e] text-[8px] top-[216px] whitespace-nowrap">● AFTER_SWAP</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#a8ff3e] text-[7px] top-[217px] whitespace-nowrap">declared</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#f44] text-[8px] top-[234px] whitespace-nowrap">■ MODIFY_LP</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#f44] text-[7px] top-[235px] whitespace-nowrap">NOT DECLARED</p>

      {/* Vertical divider */}
      <div className="absolute h-[300px] left-[328px] top-[116px] w-0">
        <svg className="block size-full" fill="none" viewBox="0 0 1 300">
          <line stroke="#2D1F5D" strokeOpacity="0.3" x1="0.5" y1="0" x2="0.5" y2="300" />
        </svg>
      </div>

      {/* Right column */}
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[336px] not-italic text-[#5a4a8a] text-[7px] top-[126px] whitespace-nowrap">FINDING</p>
      <div className="absolute bg-[rgba(255,68,68,0.08)] h-[60px] left-[336px] top-[140px] w-[348px]">
        <div className="absolute bg-[rgba(255,68,68,0.08)] h-[60px] left-0 rounded-[6px] top-0 w-[348px]" />
        <div className="absolute border border-[#f44] border-solid h-[60px] left-0 rounded-[6px] top-0 w-[348px]" />
        <div className="absolute bg-[#f44] h-[60px] left-0 top-0 w-[3px]" />
        <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[12px] not-italic text-[#f44] text-[8px] top-[8px] whitespace-nowrap">PERMISSION MISMATCH</p>
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#9b8ec4] text-[8px] top-[24px] whitespace-nowrap">Hook requests MODIFY_LP permission</p>
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#9b8ec4] text-[8px] top-[40px] whitespace-nowrap">not declared in x402 requirement</p>
      </div>

      <div className="absolute h-0 left-[336px] top-[210px] w-[348px]">
        <svg className="block size-full" fill="none" viewBox="0 0 348 1">
          <line stroke="#2D1F5D" strokeOpacity="0.3" x2="348" y1="0.5" y2="0.5" />
        </svg>
      </div>

      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[336px] not-italic text-[#5a4a8a] text-[7px] top-[218px] whitespace-nowrap">LOCAL LLM ANALYSIS</p>
      <div className="absolute bg-[#130f2e] h-[60px] left-[336px] top-[232px] w-[348px]">
        <div className="absolute bg-[#130f2e] h-[60px] left-0 rounded-[6px] top-0 w-[348px]" />
        <div className="absolute border border-[#2d1f5d] border-solid h-[60px] left-0 rounded-[6px] top-0 w-[348px]" />
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#378add] text-[8px] top-[8px] whitespace-nowrap">Cache: MISS → LLM called</p>
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#5a4a8a] text-[7px] top-[24px] whitespace-nowrap">Model: gpt-oss-120b (local) · Latency: 0.34s</p>
        <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[12px] not-italic text-[#a8ff3e] text-[8px] top-[40px] whitespace-nowrap">Confidence: 0.97</p>
      </div>

      <div className="absolute h-0 left-[336px] top-[302px] w-[348px]">
        <svg className="block size-full" fill="none" viewBox="0 0 348 1">
          <line stroke="#2D1F5D" strokeOpacity="0.3" x2="348" y1="0.5" y2="0.5" />
        </svg>
      </div>

      <div className="absolute bg-[rgba(255,68,68,0.08)] h-[44px] left-[336px] top-[310px] w-[348px]">
        <div className="absolute bg-[rgba(255,68,68,0.08)] h-[44px] left-0 rounded-[6px] top-0 w-[348px]" />
        <div className="absolute border border-[#f44] border-solid h-[44px] left-0 rounded-[6px] top-0 w-[348px]" />
        <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[12px] not-italic text-[#f44] text-[9px] top-[8px] whitespace-nowrap">PAYMENT HALTED</p>
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#9b8ec4] text-[8px] top-[26px] whitespace-nowrap">Agent notified — tx blocked</p>
      </div>

      {/* Row divider */}
      <div className="absolute h-0 left-0 top-[416px] w-[700px]">
        <svg className="block size-full" fill="none" viewBox="0 0 700 1">
          <line stroke="#2D1F5D" strokeOpacity="0.3" x2="700" y1="0.5" y2="0.5" />
        </svg>
      </div>

      {/* Row 2 - Closed ALLOW */}
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#9b8ec4] text-[9px] top-[430px] whitespace-nowrap">0xB8e1...3f9a</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#5a4a8a] text-[8px] top-[430px] whitespace-nowrap">0xUSDC...eB48</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[420px] not-italic text-[#5a4a8a] text-[8px] top-[430px] whitespace-nowrap">02:14:28</p>

      <div className="absolute h-[22px] left-[610px] top-[427px] w-[55px]">
        <div className="absolute bg-[rgba(46,122,0,0.12)] h-[22px] left-0 rounded-[3px] top-0 w-[55px]" />
        <div className="absolute border border-[#a8ff3e] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[55px]" />
        <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#a8ff3e] text-[8px] top-[6px] whitespace-nowrap">ALLOW</p>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[684px] not-italic text-[#5a4a8a] text-[7px] top-[432px] whitespace-nowrap">▶</p>

      <div className="absolute h-0 left-0 top-[460px] w-[700px]">
        <svg className="block size-full" fill="none" viewBox="0 0 700 1">
          <line stroke="#2D1F5D" strokeOpacity="0.2" x2="700" y1="0.5" y2="0.5" />
        </svg>
      </div>

      {/* Row 3 - Closed ALLOW */}
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#9b8ec4] text-[9px] top-[474px] whitespace-nowrap">0xC3d7...1b2e</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#5a4a8a] text-[8px] top-[474px] whitespace-nowrap">0xRouter...5564</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[420px] not-italic text-[#5a4a8a] text-[8px] top-[474px] whitespace-nowrap">02:14:20</p>

      <div className="absolute h-[22px] left-[610px] top-[471px] w-[55px]">
        <div className="absolute bg-[rgba(46,122,0,0.12)] h-[22px] left-0 rounded-[3px] top-0 w-[55px]" />
        <div className="absolute border border-[#a8ff3e] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[55px]" />
        <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#a8ff3e] text-[8px] top-[6px] whitespace-nowrap">ALLOW</p>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[684px] not-italic text-[#5a4a8a] text-[7px] top-[476px] whitespace-nowrap">▶</p>

      <div className="absolute h-0 left-0 top-[504px] w-[700px]">
        <svg className="block size-full" fill="none" viewBox="0 0 700 1">
          <line stroke="#2D1F5D" strokeOpacity="0.2" x2="700" y1="0.5" y2="0.5" />
        </svg>
      </div>

      {/* Row 4 - Closed WARN */}
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#9b8ec4] text-[9px] top-[518px] whitespace-nowrap">0xD9a4...7c5f</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#5a4a8a] text-[8px] top-[518px] whitespace-nowrap">0xHook2...a8f1</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[420px] not-italic text-[#5a4a8a] text-[8px] top-[518px] whitespace-nowrap">02:14:15</p>

      <div className="absolute h-[22px] left-[610px] top-[515px] w-[48px]">
        <div className="absolute bg-[rgba(255,230,0,0.12)] h-[22px] left-0 rounded-[3px] top-0 w-[48px]" />
        <div className="absolute border border-[#ffe600] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[48px]" />
        <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#ffe600] text-[8px] top-[6px] whitespace-nowrap">WARN</p>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[684px] not-italic text-[#5a4a8a] text-[7px] top-[520px] whitespace-nowrap">▶</p>

      <div className="absolute h-0 left-0 top-[548px] w-[700px]">
        <svg className="block size-full" fill="none" viewBox="0 0 700 1">
          <line stroke="#2D1F5D" strokeOpacity="0.2" x2="700" y1="0.5" y2="0.5" />
        </svg>
      </div>

      {/* Row 5 - Closed CACHE */}
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#9b8ec4] text-[9px] top-[562px] whitespace-nowrap">0xE1b3...2d4c</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#5a4a8a] text-[8px] top-[562px] whitespace-nowrap">0xUniV4Hook...a2c</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[420px] not-italic text-[#5a4a8a] text-[8px] top-[562px] whitespace-nowrap">02:13:58</p>

      <div className="absolute h-[22px] left-[610px] top-[559px] w-[55px]">
        <div className="absolute bg-[rgba(127,118,221,0.12)] h-[22px] left-0 rounded-[3px] top-0 w-[55px]" />
        <div className="absolute border border-[#7f76dd] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[55px]" />
        <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#7f76dd] text-[8px] top-[6px] whitespace-nowrap">CACHE</p>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[684px] not-italic text-[#5a4a8a] text-[7px] top-[564px] whitespace-nowrap">▶</p>
    </div>
  );
}

function WalletPanel() {
  return (
    <div className="absolute bg-[#0e0b22] h-[828px] left-[1140px] overflow-clip top-[56px] w-[300px]">
      <div className="absolute border border-[#2d1f5d] border-solid h-[828px] left-0 rounded-[8px] top-0 w-[300px]" />
      <div className="absolute bg-[#130f2e] h-[44px] left-0 top-0 w-[300px]" />
      <div className="absolute h-0 left-0 top-[43px] w-[300px]">
        <svg className="block size-full" fill="none" viewBox="0 0 300 1">
          <line stroke="#2D1F5D" strokeOpacity="0.7" x2="300" y1="0.5" y2="0.5" />
        </svg>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[8px] top-[16px] whitespace-nowrap">WALLET</p>

      <div className="absolute h-[22px] left-[228px] top-[11px] w-[48px]">
        <div className="absolute bg-[rgba(55,138,221,0.12)] h-[22px] left-0 rounded-[3px] top-0 w-[48px]" />
        <div className="absolute border border-[#378add] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[48px]" />
        <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#378add] text-[8px] top-[6px] whitespace-nowrap">Base</p>
      </div>

      <div className="absolute bg-[#130f2e] h-[38px] left-[12px] rounded-[6px] top-[58px] w-[276px]" />
      <div className="absolute border border-[#2d1f5d] border-solid h-[38px] left-[12px] rounded-[6px] top-[58px] w-[276px]" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[22px] not-italic text-[#7f76dd] text-[10px] top-[67px] whitespace-nowrap">jawgstar.eth</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[22px] not-italic text-[#5a4a8a] text-[8px] top-[82px] whitespace-nowrap">0x7f3a...4e2b</p>

      <div className="absolute h-0 left-0 top-[112px] w-[300px]">
        <svg className="block size-full" fill="none" viewBox="0 0 300 1">
          <line stroke="#2D1F5D" strokeOpacity="0.4" x2="300" y1="0.5" y2="0.5" />
        </svg>
      </div>

      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[7px] top-[122px] whitespace-nowrap">BALANCE</p>
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[14px] not-italic text-[#a8ff3e] text-[26px] top-[140px] whitespace-nowrap">0.482</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[70px] not-italic text-[#9b8ec4] text-[11px] top-[152px] whitespace-nowrap">ETH</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[9px] top-[174px] whitespace-nowrap">≈ $1,446.00</p>

      <div className="absolute h-0 left-0 top-[196px] w-[300px]">
        <svg className="block size-full" fill="none" viewBox="0 0 300 1">
          <line stroke="#2D1F5D" strokeOpacity="0.4" x2="300" y1="0.5" y2="0.5" />
        </svg>
      </div>

      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[7px] top-[206px] whitespace-nowrap">TOKENS</p>

      <div className="absolute bg-[#130f2e] h-[32px] left-[12px] rounded-[6px] top-[222px] w-[276px]" />
      <div className="absolute border border-[#2d1f5d] border-solid h-[32px] left-[12px] rounded-[6px] top-[222px] w-[276px]" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[22px] not-italic text-[#378add] text-[9px] top-[233px] whitespace-nowrap">USDC</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[80px] not-italic text-[#f2e7ff] text-[8px] top-[233px] whitespace-nowrap">320.50</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[232px] not-italic text-[#5a4a8a] text-[8px] top-[233px] whitespace-nowrap">$320.50</p>

      <div className="absolute bg-[#130f2e] h-[32px] left-[12px] rounded-[6px] top-[262px] w-[276px]" />
      <div className="absolute border border-[#2d1f5d] border-solid h-[32px] left-[12px] rounded-[6px] top-[262px] w-[276px]" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[22px] not-italic text-[#7f76dd] text-[9px] top-[273px] whitespace-nowrap">WETH</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[80px] not-italic text-[#f2e7ff] text-[8px] top-[273px] whitespace-nowrap">0.12</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[232px] not-italic text-[#5a4a8a] text-[8px] top-[273px] whitespace-nowrap">$360.24</p>

      <div className="absolute bg-[#130f2e] h-[32px] left-[12px] rounded-[6px] top-[302px] w-[276px]" />
      <div className="absolute border border-[#2d1f5d] border-solid h-[32px] left-[12px] rounded-[6px] top-[302px] w-[276px]" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[22px] not-italic text-[#ff6ee7] text-[9px] top-[313px] whitespace-nowrap">ARB</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[80px] not-italic text-[#f2e7ff] text-[8px] top-[313px] whitespace-nowrap">142.0</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[232px] not-italic text-[#5a4a8a] text-[8px] top-[313px] whitespace-nowrap">$85.20</p>

      <div className="absolute h-0 left-0 top-[760px] w-[300px]">
        <svg className="block size-full" fill="none" viewBox="0 0 300 1">
          <line stroke="#2D1F5D" strokeOpacity="0.4" x2="300" y1="0.5" y2="0.5" />
        </svg>
      </div>

      <div className="absolute h-[48px] left-[12px] top-[772px] w-[276px]">
        <div className="absolute bg-[rgba(46,122,0,0.15)] h-[48px] left-0 rounded-[8px] top-0 w-[276px]" />
        <div className="absolute border border-[#a8ff3e] border-solid h-[48px] left-0 rounded-[8px] top-0 w-[276px]" />
        <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[12px] not-italic text-[#a8ff3e] text-[8px] top-[8px] whitespace-nowrap">AEGIS GUARD</p>
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#a8ff3e] text-[8px] top-[26px] whitespace-nowrap">● ACTIVE — 0 threats</p>
      </div>
    </div>
  );
}

export default function Audit() {
  return (
    <div className="bg-[#0a0818] relative size-full">
      <div className="absolute h-[900px] left-0 top-0 w-0">
        <svg className="absolute block size-full" fill="none" viewBox="0 0 1 900">
          <line stroke="#2D1F5D" strokeOpacity="0.12" x1="0.5" y1="0" x2="0.5" y2="900" />
        </svg>
      </div>
      {[48, 96, 144, 192, 240, 288, 336, 384, 432, 480, 528, 576, 624, 672, 720, 768, 816, 864, 912, 960, 1008, 1056, 1104, 1152, 1200, 1248, 1296, 1344, 1392, 1440].map(left => (
        <div key={left} className="absolute h-[900px] top-0 w-0" style={{left}}>
          <svg className="absolute block size-full" fill="none" viewBox="0 0 1 900">
            <line stroke="#2D1F5D" strokeOpacity="0.12" x1="0.5" y1="0" x2="0.5" y2="900" />
          </svg>
        </div>
      ))}
      {[0, 48, 96, 144, 192, 240, 288, 336, 384, 432, 480, 528, 576, 624, 672, 720, 768, 816, 864].map(top => (
        <div key={top} className="absolute h-0 left-0 w-[1440px]" style={{top}}>
          <svg className="block size-full" fill="none" viewBox="0 0 1440 1">
            <line stroke="#2D1F5D" strokeOpacity="0.12" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      ))}
      <Sidebar />
      <Topbar />
      <AuditList />
      <WalletPanel />
    </div>
  );
}
