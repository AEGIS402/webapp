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
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" x2="200" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#9b8ec4] text-[9px] top-[858px] whitespace-nowrap">jawgstar.eth</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#5a4a8a] text-[8px] top-[874px] whitespace-nowrap">Base · Pro</p>
    </div>
  );
}

function Lv() {
  return (
    <div className="absolute h-[26px] left-[1136px] overflow-clip top-[15px] w-[80px]" data-name="lv">
      <div className="absolute bg-[rgba(255,230,0,0.25)] h-[26px] left-0 rounded-[4px] top-0 w-[80px]" data-name="lvbg" />
      <div className="absolute border border-[#ffe600] border-solid h-[26px] left-0 rounded-[4px] top-0 w-[80px]" data-name="lvbdr" />
      <div className="absolute bg-[#ffe600] left-[10px] rounded-[3px] size-[6px] top-[10px]" data-name="ldot" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[22px] not-italic text-[#ffe600] text-[7px] top-[8px] whitespace-nowrap">ONLINE</p>
    </div>
  );
}

function Topbar() {
  return (
    <div className="absolute bg-[#0e0b22] h-[56px] left-[200px] overflow-clip top-0 w-[1240px]" data-name="Topbar">
      <div className="absolute bg-[#2d1f5d] h-px left-0 top-[55px] w-[1240px]" data-name="tbl" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[24px] not-italic text-[#f2e7ff] text-[14px] top-[19px] whitespace-nowrap">Audit</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#5a4a8a] text-[11px] top-[22px] whitespace-pre">{`Post-Audit Analysis  ·  Slippage Detection`}</p>
      <Lv />
    </div>
  );
}

function Pl() {
  return (
    <div className="absolute h-[22px] left-[610px] overflow-clip top-[83px] w-[62px]" data-name="pl">
      <div className="absolute bg-[rgba(255,230,0,0.15)] h-[22px] left-0 rounded-[3px] top-0 w-[62px]" data-name="bg" />
      <div className="absolute border border-[#ffe600] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[62px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#ffe600] text-[8px] top-[6px] whitespace-nowrap">⚠ HOLD</p>
    </div>
  );
}

function Slip() {
  return (
    <div className="absolute bg-[#130f2e] h-[72px] left-[16px] overflow-clip top-[198px] w-[312px]" data-name="slip">
      <div className="absolute border border-[#2d1f5d] border-solid h-[72px] left-0 rounded-[6px] top-0 w-[312px]" data-name="slipbdr" />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#5a4a8a] text-[7px] top-[8px] whitespace-nowrap">Expected</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#a8ff3e] text-[9px] top-[22px] whitespace-nowrap">≥ 0.000950 USDC</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#5a4a8a] text-[7px] top-[42px] whitespace-nowrap">Actual</p>
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[12px] not-italic text-[#f44] text-[9px] top-[56px] whitespace-nowrap">0.000310 USDC</p>
    </div>
  );
}

function Hold() {
  return (
    <div className="absolute h-[60px] left-[336px] overflow-clip top-[140px] w-[348px]" data-name="hold">
      <div className="absolute bg-[rgba(255,230,0,0.08)] h-[60px] left-0 rounded-[6px] top-0 w-[348px]" data-name="holdbg" />
      <div className="absolute border border-[#ffe600] border-solid h-[60px] left-0 rounded-[6px] top-0 w-[348px]" data-name="holdbdr" />
      <div className="absolute bg-[#ffe600] h-[60px] left-0 top-0 w-[3px]" data-name="holdbar" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[12px] not-italic text-[#ffe600] text-[8px] top-[8px] whitespace-nowrap">SLIPPAGE ANOMALY DETECTED</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#9b8ec4] text-[8px] top-[24px] whitespace-nowrap">Slippage 67.4% — MEV sandwich likely</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#5a4a8a] text-[8px] top-[40px] whitespace-pre">{`Confidence: 0.91  ·  Model: gpt-oss-120b`}</p>
    </div>
  );
}

function Esc() {
  return (
    <div className="absolute h-[44px] left-[336px] overflow-clip top-[232px] w-[348px]" data-name="esc">
      <div className="absolute bg-[rgba(255,230,0,0.1)] h-[44px] left-0 rounded-[6px] top-0 w-[348px]" data-name="escbg" />
      <div className="absolute border border-[#ffe600] border-solid h-[44px] left-0 rounded-[6px] top-0 w-[348px]" data-name="escbdr" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[12px] not-italic text-[#ffe600] text-[9px] top-[8px] whitespace-nowrap">0.001 USDC — ESCROW HOLD</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#9b8ec4] text-[8px] top-[26px] whitespace-pre">{`Merchant: weatherapi.eth  ·  Auto-expire: +24h`}</p>
    </div>
  );
}

function Btn() {
  return (
    <div className="absolute h-[34px] left-[336px] overflow-clip top-[310px] w-[112px]" data-name="btn">
      <div className="absolute bg-[rgba(168,255,62,0.12)] h-[34px] left-0 rounded-[6px] top-0 w-[112px]" data-name="bg" />
      <div className="absolute border border-[#a8ff3e] border-solid h-[34px] left-0 rounded-[6px] top-0 w-[112px]" data-name="bdr" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[35px] not-italic text-[#a8ff3e] text-[8px] top-[11px] whitespace-nowrap">RELEASE</p>
    </div>
  );
}

function Btn1() {
  return (
    <div className="absolute h-[34px] left-[454px] overflow-clip top-[310px] w-[112px]" data-name="btn">
      <div className="absolute bg-[rgba(55,138,221,0.12)] h-[34px] left-0 rounded-[6px] top-0 w-[112px]" data-name="bg" />
      <div className="absolute border border-[#378add] border-solid h-[34px] left-0 rounded-[6px] top-0 w-[112px]" data-name="bdr" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[38px] not-italic text-[#378add] text-[8px] top-[11px] whitespace-nowrap">REFUND</p>
    </div>
  );
}

function Btn2() {
  return (
    <div className="absolute h-[34px] left-[572px] overflow-clip top-[310px] w-[112px]" data-name="btn">
      <div className="absolute bg-[rgba(255,68,68,0.12)] h-[34px] left-0 rounded-[6px] top-0 w-[112px]" data-name="bg" />
      <div className="absolute border border-[#f44] border-solid h-[34px] left-0 rounded-[6px] top-0 w-[112px]" data-name="bdr" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[35px] not-italic text-[#f44] text-[8px] top-[11px] whitespace-nowrap">DISPUTE</p>
    </div>
  );
}

function Pl1() {
  return (
    <div className="absolute h-[22px] left-[610px] overflow-clip top-[427px] w-[48px]" data-name="pl">
      <div className="absolute bg-[rgba(46,122,0,0.12)] h-[22px] left-0 rounded-[3px] top-0 w-[48px]" data-name="bg" />
      <div className="absolute border border-[#a8ff3e] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[48px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#a8ff3e] text-[8px] top-[6px] whitespace-nowrap">PASS</p>
    </div>
  );
}

function Pl2() {
  return (
    <div className="absolute h-[22px] left-[610px] overflow-clip top-[471px] w-[48px]" data-name="pl">
      <div className="absolute bg-[rgba(46,122,0,0.12)] h-[22px] left-0 rounded-[3px] top-0 w-[48px]" data-name="bg" />
      <div className="absolute border border-[#a8ff3e] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[48px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#a8ff3e] text-[8px] top-[6px] whitespace-nowrap">PASS</p>
    </div>
  );
}

function Pl3() {
  return (
    <div className="absolute h-[22px] left-[610px] overflow-clip top-[515px] w-[48px]" data-name="pl">
      <div className="absolute bg-[rgba(46,122,0,0.12)] h-[22px] left-0 rounded-[3px] top-0 w-[48px]" data-name="bg" />
      <div className="absolute border border-[#a8ff3e] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[48px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#a8ff3e] text-[8px] top-[6px] whitespace-nowrap">PASS</p>
    </div>
  );
}

function AuditList() {
  return (
    <div className="absolute bg-[#0e0b22] h-[808px] left-[320px] overflow-clip top-[76px] w-[700px]" data-name="Audit List">
      <div className="absolute border border-[#2d1f5d] border-solid h-[808px] left-0 rounded-[8px] top-0 w-[700px]" data-name="lb" />
      <div className="absolute bg-[#130f2e] h-[40px] left-0 top-0 w-[700px]" data-name="tab-bg" />
      <div className="absolute h-0 left-0 top-[39px] w-[700px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.7" x2="700" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[147px] not-italic text-[#5a4a8a] text-[8px] top-[14px] whitespace-nowrap">PRE-AUDIT</p>
      <div className="absolute bg-[rgba(255,230,0,0.1)] h-[40px] left-[350px] top-0 w-[350px]" data-name="tab2-act" />
      <div className="absolute bg-[#ffe600] h-[2px] left-[350px] top-[38px] w-[350px]" data-name="tab2-bar" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[493px] not-italic text-[#ffe600] text-[8px] top-[14px] whitespace-nowrap">POST-AUDIT</p>
      <div className="absolute h-px left-[350px] top-0 w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-4000%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 40">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.5" strokeWidth="40" x2="0.0001" y1="20" y2="21" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#130f2e] h-[32px] left-0 top-[40px] w-[700px]" data-name="hdr-bg" />
      <div className="absolute h-0 left-0 top-[71px] w-[700px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.5" x2="700" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[7px] top-[50px] whitespace-nowrap">TX HASH</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#5a4a8a] text-[7px] top-[50px] whitespace-nowrap">MERCHANT</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[360px] not-italic text-[#5a4a8a] text-[7px] top-[50px] whitespace-nowrap">SLIPPAGE</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[620px] not-italic text-[#5a4a8a] text-[7px] top-[50px] whitespace-nowrap">STATUS</p>
      <div className="absolute bg-[rgba(255,230,0,0.05)] h-[344px] left-0 top-[72px] w-[700px]" data-name="row0-bg" />
      <div className="absolute bg-[#ffe600] h-[344px] left-0 top-[72px] w-[3px]" data-name="row0-bar" />
      <div className="absolute border-[#ffe600] border-[0.5px] border-solid h-[344px] left-0 top-[72px] w-[700px]" data-name="row0-bdr" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[16px] not-italic text-[#ffe600] text-[9px] top-[86px] whitespace-nowrap">0xF7c3...9d1a</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#9b8ec4] text-[9px] top-[86px] whitespace-nowrap">weatherapi.eth</p>
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[360px] not-italic text-[#f44] text-[9px] top-[86px] whitespace-nowrap">67.4%</p>
      <Pl />
      <p className="absolute font-['IBM_Plex_Mono:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] left-[684px] not-italic text-[#ffe600] text-[8px] top-[88px] whitespace-nowrap">▼</p>
      <div className="absolute h-0 left-[16px] top-[116px] w-[668px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 668 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.4" x2="668" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[7px] top-[126px] whitespace-nowrap">TRANSACTION</p>
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[16px] not-italic text-[#f2e7ff] text-[9px] top-[140px] whitespace-nowrap">0xF7c3...9d1a</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[156px] whitespace-pre">{`Block #23437892  ·  02:14:36`}</p>
      <div className="absolute h-0 left-[16px] top-[174px] w-[312px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 312 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.3" x2="312" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[7px] top-[182px] whitespace-nowrap">SWAP RESULT</p>
      <Slip />
      <div className="absolute h-0 left-[16px] top-[282px] w-[312px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 312 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.3" x2="312" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[7px] top-[290px] whitespace-nowrap">SLIPPAGE</p>
      <div className="absolute bg-[#2d1f5d] h-[6px] left-[16px] rounded-[3px] top-[306px] w-[296px]" data-name="slip-bg" />
      <div className="absolute bg-[#f44] h-[6px] left-[16px] rounded-[3px] top-[306px] w-[199px]" data-name="slip-fill" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[16px] not-italic text-[#f44] text-[9px] top-[318px] whitespace-pre">{`67.4%  (threshold: 5.0%)`}</p>
      <div className="absolute h-[300px] left-[328px] top-[116px] w-0" data-name="Line">
        <div className="absolute bottom-full left-0 right-0 top-[-0.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.3" x2="0.0001" y1="0.5" y2="300.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[336px] not-italic text-[#5a4a8a] text-[7px] top-[126px] whitespace-nowrap">POST-AUDIT LLM</p>
      <Hold />
      <div className="absolute h-0 left-[336px] top-[210px] w-[348px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 348 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.3" x2="348" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[336px] not-italic text-[#5a4a8a] text-[7px] top-[218px] whitespace-nowrap">ESCROW STATUS</p>
      <Esc />
      <div className="absolute h-0 left-[336px] top-[286px] w-[348px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 348 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.3" x2="348" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[336px] not-italic text-[#5a4a8a] text-[7px] top-[294px] whitespace-nowrap">ACTIONS</p>
      <Btn />
      <Btn1 />
      <Btn2 />
      <div className="absolute h-0 left-[336px] top-[354px] w-[348px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 348 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.3" x2="348" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[336px] not-italic text-[#5a4a8a] text-[8px] top-[362px] whitespace-pre">{`Hold since: 02:14:36  ·  0.001 USDC locked`}</p>
      <div className="absolute h-0 left-0 top-[416px] w-[700px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.3" x2="700" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#9b8ec4] text-[9px] top-[430px] whitespace-nowrap">0xA4f2...8c3d</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#5a4a8a] text-[8px] top-[430px] whitespace-nowrap">api.x402.io</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[360px] not-italic text-[#a8ff3e] text-[9px] top-[430px] whitespace-nowrap">0.3%</p>
      <Pl1 />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[684px] not-italic text-[#5a4a8a] text-[7px] top-[432px] whitespace-nowrap">▶</p>
      <div className="absolute h-0 left-0 top-[460px] w-[700px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.2" x2="700" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#9b8ec4] text-[9px] top-[474px] whitespace-nowrap">0xB8e1...3f9a</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#5a4a8a] text-[8px] top-[474px] whitespace-nowrap">swap.uni.v4</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[360px] not-italic text-[#a8ff3e] text-[9px] top-[474px] whitespace-nowrap">1.2%</p>
      <Pl2 />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[684px] not-italic text-[#5a4a8a] text-[7px] top-[476px] whitespace-nowrap">▶</p>
      <div className="absolute h-0 left-0 top-[504px] w-[700px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.2" x2="700" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#9b8ec4] text-[9px] top-[518px] whitespace-nowrap">0xC3d7...1b2e</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#5a4a8a] text-[8px] top-[518px] whitespace-nowrap">pay.agent.ai</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[360px] not-italic text-[#a8ff3e] text-[9px] top-[518px] whitespace-nowrap">2.8%</p>
      <Pl3 />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[684px] not-italic text-[#5a4a8a] text-[7px] top-[520px] whitespace-nowrap">▶</p>
    </div>
  );
}

function Pl4() {
  return (
    <div className="absolute h-[22px] left-[228px] overflow-clip top-[11px] w-[48px]" data-name="pl">
      <div className="absolute bg-[rgba(55,138,221,0.12)] h-[22px] left-0 rounded-[3px] top-0 w-[48px]" data-name="bg" />
      <div className="absolute border border-[#378add] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[48px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#378add] text-[8px] top-[6px] whitespace-nowrap">Base</p>
    </div>
  );
}

function Escw() {
  return (
    <div className="absolute h-[40px] left-[12px] overflow-clip top-[372px] w-[276px]" data-name="escw">
      <div className="absolute bg-[rgba(255,230,0,0.1)] h-[40px] left-0 rounded-[6px] top-0 w-[276px]" data-name="escwbg" />
      <div className="absolute border border-[#ffe600] border-solid h-[40px] left-0 rounded-[6px] top-0 w-[276px]" data-name="escwbdr" />
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
      <div className="absolute bg-[#130f2e] h-[32px] left-[12px] rounded-[6px] top-[222px] w-[276px]" data-name="t0" />
      <div className="absolute border border-[#2d1f5d] border-solid h-[32px] left-[12px] rounded-[6px] top-[222px] w-[276px]" data-name="tb0" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[22px] not-italic text-[#378add] text-[9px] top-[233px] whitespace-nowrap">USDC</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[80px] not-italic text-[#f2e7ff] text-[8px] top-[233px] whitespace-nowrap">320.50</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[232px] not-italic text-[#5a4a8a] text-[8px] top-[233px] whitespace-nowrap">$320.50</p>
      <div className="absolute bg-[#130f2e] h-[32px] left-[12px] rounded-[6px] top-[262px] w-[276px]" data-name="t1" />
      <div className="absolute border border-[#2d1f5d] border-solid h-[32px] left-[12px] rounded-[6px] top-[262px] w-[276px]" data-name="tb1" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[22px] not-italic text-[#7f76dd] text-[9px] top-[273px] whitespace-nowrap">WETH</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[80px] not-italic text-[#f2e7ff] text-[8px] top-[273px] whitespace-nowrap">0.12</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[232px] not-italic text-[#5a4a8a] text-[8px] top-[273px] whitespace-nowrap">$360.24</p>
      <div className="absolute bg-[#130f2e] h-[32px] left-[12px] rounded-[6px] top-[302px] w-[276px]" data-name="t2" />
      <div className="absolute border border-[#2d1f5d] border-solid h-[32px] left-[12px] rounded-[6px] top-[302px] w-[276px]" data-name="tb2" />
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
      <Escw />
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

export default function AuditPostAudit() {
  return (
    <div className="bg-[#0a0818] relative size-full" data-name="Audit — Post-Audit">
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
      <AuditList />
      <WalletPanel />
    </div>
  );
}