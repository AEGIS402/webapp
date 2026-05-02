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
      <div className="absolute bg-[rgba(127,118,221,0.15)] h-[28px] left-[8px] rounded-[4px] top-[184px] w-[184px]" data-name="na" />
      <div className="absolute bg-[#7f76dd] h-[28px] left-[8px] top-[184px] w-[3px]" data-name="nar" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[24px] not-italic text-[#7f76dd] text-[8px] top-[188px] whitespace-nowrap">ESCROW</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[24px] not-italic text-[#5a4a8a] text-[8px] top-[224px] whitespace-nowrap">AGENTS</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[24px] not-italic text-[#5a4a8a] text-[8px] top-[260px] whitespace-nowrap">INTEGRATIONS</p>
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
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[24px] not-italic text-[#f2e7ff] text-[14px] top-[19px] whitespace-nowrap">Escrow</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#5a4a8a] text-[11px] top-[22px] whitespace-pre">{`Conditional Settlement  ·  Post-Audit Hold`}</p>
      <Live />
    </div>
  );
}

function Pl() {
  return (
    <div className="absolute h-[24px] left-[16px] overflow-clip top-[14px] w-[72.5px]" data-name="pl">
      <div className="absolute bg-[rgba(255,230,0,0.15)] h-[24px] left-0 rounded-[12px] top-0 w-[72.5px]" data-name="bg" />
      <div className="absolute border border-[#ffe600] border-solid h-[24px] left-0 rounded-[12px] top-0 w-[72.5px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#ffe600] text-[8px] top-[7px] whitespace-nowrap">Holding</p>
    </div>
  );
}

function VaultHolding() {
  return (
    <div className="absolute bg-[#0e0b22] h-[220px] left-[320px] overflow-clip top-[116px] w-[216px]" data-name="Vault-Holding">
      <div className="absolute border-[#ffe600] border-[1.5px] border-solid h-[220px] left-0 rounded-[12px] top-0 w-[216px]" data-name="bdr" />
      <div className="absolute bg-[#ffe600] h-[3px] left-0 top-0 w-[216px]" data-name="acc" />
      <div className="absolute h-[120px] left-[40px] top-[-20px] w-[160px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 120">
          <ellipse cx="80" cy="60" fill="var(--fill-0, #FFE600)" fillOpacity="0.06" id="Ellipse" rx="80" ry="60" />
        </svg>
      </div>
      <Pl />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[16px] not-italic text-[#f2e7ff] text-[13px] top-[50px] whitespace-nowrap">service.eth</p>
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[16px] not-italic text-[#f2e7ff] text-[18px] top-[70px] whitespace-nowrap">0.001 USDC</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[100px] whitespace-pre">{`pay_esc001  ·  elapsed 0:08`}</p>
      <div className="absolute h-0 left-0 top-[116px] w-[216px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 216 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.5" x2="216" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[122px] whitespace-nowrap">payTo</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[129px] not-italic text-[#ffe600] text-[8px] top-[122px] whitespace-nowrap">0xPayTo...5e6f</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[150px] whitespace-nowrap">facilitator</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[140px] not-italic text-[#378add] text-[8px] top-[150px] whitespace-nowrap">Coinbase CDP</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[178px] whitespace-nowrap">contract</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[123.5px] not-italic text-[#7f76dd] text-[8px] top-[178px] whitespace-nowrap">0xEscrow...3c4d</p>
      <div className="absolute h-0 left-0 top-[190px] w-[216px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 216 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.4" x2="216" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#ffe600] text-[9px] top-[198px] whitespace-nowrap">View →</p>
    </div>
  );
}

function Pl1() {
  return (
    <div className="absolute h-[24px] left-[16px] overflow-clip top-[14px] w-[80px]" data-name="pl">
      <div className="absolute bg-[rgba(46,122,0,0.15)] h-[24px] left-0 rounded-[12px] top-0 w-[80px]" data-name="bg" />
      <div className="absolute border border-[#a8ff3e] border-solid h-[24px] left-0 rounded-[12px] top-0 w-[80px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#a8ff3e] text-[8px] top-[7px] whitespace-nowrap">Released</p>
    </div>
  );
}

function VaultReleased() {
  return (
    <div className="absolute bg-[#0e0b22] h-[220px] left-[552px] overflow-clip top-[116px] w-[216px]" data-name="Vault-Released">
      <div className="absolute border border-[#2d1f5d] border-solid h-[220px] left-0 rounded-[12px] top-0 w-[216px]" data-name="bdr" />
      <div className="absolute bg-[#a8ff3e] h-[3px] left-0 top-0 w-[216px]" data-name="acc" />
      <div className="absolute h-[120px] left-[40px] top-[-20px] w-[160px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 120">
          <ellipse cx="80" cy="60" fill="var(--fill-0, #A8FF3E)" fillOpacity="0.06" id="Ellipse" rx="80" ry="60" />
        </svg>
      </div>
      <Pl1 />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[16px] not-italic text-[#f2e7ff] text-[13px] top-[50px] whitespace-nowrap">weatherapi.eth</p>
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[16px] not-italic text-[#f2e7ff] text-[18px] top-[70px] whitespace-nowrap">0.001 USDC</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[100px] whitespace-pre">{`pay_abc123  ·  12:04:31`}</p>
      <div className="absolute h-0 left-0 top-[116px] w-[216px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 216 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.5" x2="216" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[122px] whitespace-nowrap">release tx</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[134.5px] not-italic text-[#a8ff3e] text-[8px] top-[122px] whitespace-nowrap">0xabcd...ef12</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[150px] whitespace-nowrap">commitment</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[156.5px] not-italic text-[#a8ff3e] text-[8px] top-[150px] whitespace-nowrap">matched ✓</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[178px] whitespace-nowrap">contract</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[123.5px] not-italic text-[#7f76dd] text-[8px] top-[178px] whitespace-nowrap">0xEscrow...3c4d</p>
      <div className="absolute h-0 left-0 top-[190px] w-[216px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 216 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.4" x2="216" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#a8ff3e] text-[9px] top-[198px] whitespace-nowrap">View →</p>
    </div>
  );
}

function Pl2() {
  return (
    <div className="absolute h-[24px] left-[16px] overflow-clip top-[14px] w-[80px]" data-name="pl">
      <div className="absolute bg-[rgba(255,68,68,0.15)] h-[24px] left-0 rounded-[12px] top-0 w-[80px]" data-name="bg" />
      <div className="absolute border border-[#f44] border-solid h-[24px] left-0 rounded-[12px] top-0 w-[80px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#f44] text-[8px] top-[7px] whitespace-nowrap">Refunded</p>
    </div>
  );
}

function VaultRefunded() {
  return (
    <div className="absolute bg-[#0e0b22] h-[220px] left-[784px] overflow-clip top-[116px] w-[216px]" data-name="Vault-Refunded">
      <div className="absolute border border-[#2d1f5d] border-solid h-[220px] left-0 rounded-[12px] top-0 w-[216px]" data-name="bdr" />
      <div className="absolute bg-[#f44] h-[3px] left-0 top-0 w-[216px]" data-name="acc" />
      <div className="absolute h-[120px] left-[40px] top-[-20px] w-[160px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 120">
          <ellipse cx="80" cy="60" fill="var(--fill-0, #FF4444)" fillOpacity="0.06" id="Ellipse" rx="80" ry="60" />
        </svg>
      </div>
      <Pl2 />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[16px] not-italic text-[#f2e7ff] text-[13px] top-[50px] whitespace-nowrap">bad-service.eth</p>
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[16px] not-italic text-[#f2e7ff] text-[18px] top-[70px] whitespace-nowrap">0.001 USDC</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[100px] whitespace-pre">{`pay_esc002  ·  12:07:22`}</p>
      <div className="absolute h-0 left-0 top-[116px] w-[216px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 216 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.5" x2="216" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[122px] whitespace-nowrap">refund tx</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[134.5px] not-italic text-[#f44] text-[8px] top-[122px] whitespace-nowrap">0xef56...7890</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[150px] whitespace-nowrap">commitment</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[151px] not-italic text-[#f44] text-[8px] top-[150px] whitespace-nowrap">mismatch ×</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[178px] whitespace-nowrap">contract</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[123.5px] not-italic text-[#7f76dd] text-[8px] top-[178px] whitespace-nowrap">0xEscrow...3c4d</p>
      <div className="absolute h-0 left-0 top-[190px] w-[216px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 216 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.4" x2="216" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#f44] text-[9px] top-[198px] whitespace-nowrap">View →</p>
    </div>
  );
}

function Pl3() {
  return (
    <div className="absolute h-[24px] left-[590px] overflow-clip top-[9px] w-[87.5px]" data-name="pl">
      <div className="absolute bg-[rgba(255,230,0,0.15)] h-[24px] left-0 rounded-[12px] top-0 w-[87.5px]" data-name="bg" />
      <div className="absolute border border-[#ffe600] border-solid h-[24px] left-0 rounded-[12px] top-0 w-[87.5px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#ffe600] text-[8px] top-[7px] whitespace-nowrap">⚠ HOLDING</p>
    </div>
  );
}

function Hold() {
  return (
    <div className="absolute h-[60px] left-[358px] overflow-clip top-[70px] w-[326px]" data-name="hold">
      <div className="absolute bg-[rgba(255,230,0,0.08)] h-[60px] left-0 rounded-[6px] top-0 w-[326px]" data-name="hbg" />
      <div className="absolute border border-[#ffe600] border-solid h-[60px] left-0 rounded-[6px] top-0 w-[326px]" data-name="hbdr" />
      <div className="absolute bg-[#ffe600] h-[60px] left-0 top-0 w-[3px]" data-name="hbar" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[12px] not-italic text-[#ffe600] text-[8px] top-[8px] whitespace-nowrap">SLIPPAGE ANOMALY DETECTED</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#9b8ec4] text-[8px] top-[24px] whitespace-nowrap">Post-audit output 67.4% below threshold</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#9b8ec4] text-[8px] top-[40px] whitespace-nowrap">Escrow hold triggered automatically</p>
    </div>
  );
}

function Llm() {
  return (
    <div className="absolute bg-[#130f2e] h-[56px] left-[358px] overflow-clip top-[164px] w-[326px]" data-name="llm">
      <div className="absolute border border-[#2d1f5d] border-solid h-[56px] left-0 rounded-[6px] top-0 w-[326px]" data-name="llmbdr" />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#ffe600] text-[8px] top-[8px] whitespace-nowrap">Slippage 67.4% — MEV sandwich likely</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#5a4a8a] text-[8px] top-[24px] whitespace-pre">{`Model: gpt-oss-120b  ·  Latency: 0.34s`}</p>
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[12px] not-italic text-[#a8ff3e] text-[8px] top-[40px] whitespace-nowrap">Confidence: 0.91</p>
    </div>
  );
}

function BtnRelease() {
  return (
    <div className="absolute h-[36px] left-[358px] overflow-clip top-[256px] w-[104px]" data-name="btn-RELEASE">
      <div className="absolute bg-[rgba(168,255,62,0.12)] h-[36px] left-0 rounded-[6px] top-0 w-[104px]" data-name="bg" />
      <div className="absolute border border-[#a8ff3e] border-solid h-[36px] left-0 rounded-[6px] top-0 w-[104px]" data-name="bdr" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[31px] not-italic text-[#a8ff3e] text-[8px] top-[12px] whitespace-nowrap">RELEASE</p>
    </div>
  );
}

function BtnRefund() {
  return (
    <div className="absolute h-[36px] left-[468px] overflow-clip top-[256px] w-[104px]" data-name="btn-REFUND">
      <div className="absolute bg-[rgba(55,138,221,0.12)] h-[36px] left-0 rounded-[6px] top-0 w-[104px]" data-name="bg" />
      <div className="absolute border border-[#378add] border-solid h-[36px] left-0 rounded-[6px] top-0 w-[104px]" data-name="bdr" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[34px] not-italic text-[#378add] text-[8px] top-[12px] whitespace-nowrap">REFUND</p>
    </div>
  );
}

function BtnDispute() {
  return (
    <div className="absolute h-[36px] left-[578px] overflow-clip top-[256px] w-[104px]" data-name="btn-DISPUTE">
      <div className="absolute bg-[rgba(255,68,68,0.12)] h-[36px] left-0 rounded-[6px] top-0 w-[104px]" data-name="bg" />
      <div className="absolute border border-[#f44] border-solid h-[36px] left-0 rounded-[6px] top-0 w-[104px]" data-name="bdr" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[31px] not-italic text-[#f44] text-[8px] top-[12px] whitespace-nowrap">DISPUTE</p>
    </div>
  );
}

function VaultDetail() {
  return (
    <div className="absolute bg-[#0e0b22] h-[532px] left-[320px] overflow-clip top-[352px] w-[700px]" data-name="Vault Detail">
      <div className="absolute border border-[#ffe600] border-solid h-[532px] left-0 rounded-[8px] top-0 w-[700px]" data-name="db" />
      <div className="absolute bg-[rgba(255,230,0,0.8)] h-[3px] left-0 top-0 w-[700px]" data-name="dtop" />
      <div className="absolute bg-[#130f2e] h-[40px] left-0 top-0 w-[700px]" data-name="dhbg" />
      <div className="absolute h-0 left-0 top-[39px] w-[700px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.6" x2="700" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[16px] not-italic text-[#ffe600] text-[9px] top-[13px] whitespace-pre">{`VAULT DETAIL  —  service.eth`}</p>
      <Pl3 />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[7px] top-[54px] whitespace-nowrap">PAYMENT INFO</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[70px] whitespace-nowrap">paymentId</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[120px] not-italic text-[#f2e7ff] text-[8px] top-[70px] whitespace-nowrap">pay_esc001</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[96px] whitespace-nowrap">payTo</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[120px] not-italic text-[#ffe600] text-[8px] top-[96px] whitespace-nowrap">0xPayTo...5e6f</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[122px] whitespace-nowrap">amount</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[120px] not-italic text-[#ffe600] text-[8px] top-[122px] whitespace-nowrap">0.001 USDC</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[148px] whitespace-nowrap">network</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[120px] not-italic text-[#378add] text-[8px] top-[148px] whitespace-nowrap">Base</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[174px] whitespace-nowrap">facilitator</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[120px] not-italic text-[#378add] text-[8px] top-[174px] whitespace-nowrap">Coinbase CDP</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[200px] whitespace-nowrap">contract</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[120px] not-italic text-[#7f76dd] text-[8px] top-[200px] whitespace-nowrap">0xEscrow...3c4d</p>
      <div className="absolute h-0 left-[16px] top-[242px] w-[326px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.4" x2="326" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[7px] top-[250px] whitespace-nowrap">SLIPPAGE RESULT</p>
      <div className="absolute bg-[#2d1f5d] h-[6px] left-[16px] rounded-[3px] top-[268px] w-[326px]" data-name="slip-bg" />
      <div className="absolute bg-[#f44] h-[6px] left-[16px] rounded-[3px] top-[268px] w-[219px]" data-name="slip-fill" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[16px] not-italic text-[#f44] text-[9px] top-[280px] whitespace-pre">{`67.4%  (threshold: 5.0%)`}</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[298px] whitespace-nowrap">Expected: ≥ 0.000950 USDC</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#f44] text-[8px] top-[314px] whitespace-pre">{`Actual:     0.000310 USDC`}</p>
      <div className="absolute h-[492px] left-[350px] top-[40px] w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.2%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.3" x2="0.0001" y1="0.5" y2="492.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[358px] not-italic text-[#5a4a8a] text-[7px] top-[54px] whitespace-nowrap">HOLD REASON</p>
      <Hold />
      <div className="absolute h-0 left-[358px] top-[140px] w-[326px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.3" x2="326" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[358px] not-italic text-[#5a4a8a] text-[7px] top-[148px] whitespace-nowrap">POST-AUDIT LLM</p>
      <Llm />
      <div className="absolute h-0 left-[358px] top-[232px] w-[326px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.3" x2="326" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[358px] not-italic text-[#5a4a8a] text-[7px] top-[240px] whitespace-nowrap">ACTIONS</p>
      <BtnRelease />
      <BtnRefund />
      <BtnDispute />
      <div className="absolute h-0 left-[358px] top-[302px] w-[326px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.3" x2="326" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[358px] not-italic text-[#5a4a8a] text-[8px] top-[310px] whitespace-pre">{`Hold since: 02:14:36  ·  Auto-expire: +24h`}</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[358px] not-italic text-[#5a4a8a] text-[8px] top-[326px] whitespace-nowrap">0.001 USDC locked in escrow contract</p>
    </div>
  );
}

function Pl4() {
  return (
    <div className="absolute h-[24px] left-[228px] overflow-clip top-[11px] w-[50px]" data-name="pl">
      <div className="absolute bg-[rgba(55,138,221,0.12)] h-[24px] left-0 rounded-[12px] top-0 w-[50px]" data-name="bg" />
      <div className="absolute border border-[#378add] border-solid h-[24px] left-0 rounded-[12px] top-0 w-[50px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#378add] text-[8px] top-[7px] whitespace-nowrap">Base</p>
    </div>
  );
}

function Esc() {
  return (
    <div className="absolute h-[40px] left-[12px] overflow-clip top-[372px] w-[276px]" data-name="esc">
      <div className="absolute bg-[rgba(255,230,0,0.1)] h-[40px] left-0 rounded-[6px] top-0 w-[276px]" data-name="escbg" />
      <div className="absolute border border-[#ffe600] border-solid h-[40px] left-0 rounded-[6px] top-0 w-[276px]" data-name="escbdr" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[12px] not-italic text-[#ffe600] text-[10px] top-[8px] whitespace-nowrap">0.001 USDC</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#ffe600] text-[8px] top-[26px] whitespace-nowrap">⚠ 1 tx on hold</p>
    </div>
  );
}

function Guard() {
  return (
    <div className="absolute h-[48px] left-[12px] overflow-clip top-[772px] w-[276px]" data-name="guard">
      <div className="absolute bg-[rgba(255,230,0,0.1)] h-[48px] left-0 rounded-[8px] top-0 w-[276px]" data-name="gsbg" />
      <div className="absolute border border-[#ffe600] border-solid h-[48px] left-0 rounded-[8px] top-0 w-[276px]" data-name="gsbdr" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[12px] not-italic text-[#ffe600] text-[8px] top-[8px] whitespace-nowrap">AEGIS GUARD</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#ffe600] text-[8px] top-[26px] whitespace-nowrap">⚠ 1 escrow hold active</p>
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
      <Pl4 />
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
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[7px] top-[356px] whitespace-nowrap">ESCROW HOLD</p>
      <Esc />
      <div className="absolute h-0 left-0 top-[428px] w-[300px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.4" x2="300" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[7px] top-[438px] whitespace-nowrap">RECENT ESCROW</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#9b8ec4] text-[9px] top-[454px] whitespace-nowrap">weatherapi.eth</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[212px] not-italic text-[#a8ff3e] text-[9px] top-[454px] whitespace-nowrap">RELEASED</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#9b8ec4] text-[9px] top-[474px] whitespace-nowrap">service.eth</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[212px] not-italic text-[#ffe600] text-[9px] top-[474px] whitespace-nowrap">HOLD</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#9b8ec4] text-[9px] top-[494px] whitespace-nowrap">bad-service.eth</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[212px] not-italic text-[#7f76dd] text-[9px] top-[494px] whitespace-nowrap">REFUNDED</p>
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

export default function Escrow() {
  return (
    <div className="bg-[#0a0818] relative size-full" data-name="Escrow">
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
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[320px] not-italic text-[#ffe600] text-[22px] top-[76px] whitespace-nowrap">1</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[342px] not-italic text-[#9b8ec4] text-[11px] top-[81px] whitespace-nowrap">Holding</p>
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[480px] not-italic text-[#a8ff3e] text-[22px] top-[76px] whitespace-nowrap">1</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[502px] not-italic text-[#9b8ec4] text-[11px] top-[81px] whitespace-nowrap">Released</p>
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[640px] not-italic text-[#7f76dd] text-[22px] top-[76px] whitespace-nowrap">1</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[662px] not-italic text-[#9b8ec4] text-[11px] top-[81px] whitespace-nowrap">Refunded</p>
      <VaultHolding />
      <VaultReleased />
      <VaultRefunded />
      <VaultDetail />
      <WalletPanel />
    </div>
  );
}