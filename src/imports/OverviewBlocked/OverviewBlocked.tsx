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
      <div className="absolute bg-[rgba(127,118,221,0.15)] h-[28px] left-[8px] rounded-[4px] top-[76px] w-[184px]" data-name="na" />
      <div className="absolute bg-[#7f76dd] h-[28px] left-[8px] top-[76px] w-[3px]" data-name="nar" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[24px] not-italic text-[#7f76dd] text-[8px] top-[80px] whitespace-nowrap">OVERVIEW</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[24px] not-italic text-[#5a4a8a] text-[8px] top-[116px] whitespace-nowrap">PAYMENTS</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[24px] not-italic text-[#5a4a8a] text-[8px] top-[152px] whitespace-nowrap">AUDIT</p>
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
      <div className="absolute bg-[rgba(255,68,68,0.25)] h-[26px] left-0 rounded-[4px] top-0 w-[80px]" data-name="lvbg" />
      <div className="absolute border border-[#f44] border-solid h-[26px] left-0 rounded-[4px] top-0 w-[80px]" data-name="lvbdr" />
      <div className="absolute bg-[#f44] left-[10px] rounded-[3px] size-[6px] top-[10px]" data-name="ldot" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[22px] not-italic text-[#f44] text-[7px] top-[8px] whitespace-nowrap">ONLINE</p>
    </div>
  );
}

function Topbar() {
  return (
    <div className="absolute bg-[#0e0b22] h-[56px] left-[200px] overflow-clip top-0 w-[1240px]" data-name="Topbar">
      <div className="absolute bg-[#2d1f5d] h-px left-0 top-[55px] w-[1240px]" data-name="tbl" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[24px] not-italic text-[#f2e7ff] text-[14px] top-[19px] whitespace-nowrap">Overview</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#5a4a8a] text-[11px] top-[22px] whitespace-pre">{`Agent Developer  ·  jawgstar.eth`}</p>
      <Lv />
    </div>
  );
}

function Pl() {
  return (
    <div className="absolute h-[22px] left-[566px] overflow-clip top-[11px] w-[83px]" data-name="pl">
      <div className="absolute bg-[rgba(255,68,68,0.15)] h-[22px] left-0 rounded-[3px] top-0 w-[83px]" data-name="bg" />
      <div className="absolute border border-[#f44] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[83px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] left-[10px] not-italic text-[#f44] text-[8px] top-[6px] whitespace-nowrap">✕ BLOCKED</p>
    </div>
  );
}

function MonitorCard() {
  return (
    <div className="absolute bg-[#0e0b22] h-[280px] left-[320px] overflow-clip top-[76px] w-[700px]" data-name="Monitor Card">
      <div className="absolute border-[#f44] border-[1.5px] border-solid h-[280px] left-0 rounded-[8px] top-0 w-[700px]" data-name="mcb" />
      <div className="absolute bg-[rgba(255,68,68,0.8)] h-[3px] left-0 top-0 w-[700px]" data-name="mct" />
      <div className="absolute bg-[#130f2e] h-[44px] left-0 top-0 w-[700px]" data-name="agbg" />
      <div className="absolute h-0 left-0 top-[43px] w-[700px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.7" x2="700" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#534ab7] h-[12px] left-[14px] rounded-[2px] top-[16px] w-[16px]" data-name="s1" />
      <div className="absolute bg-[#7f76dd] h-[2px] left-[16px] top-[21px] w-[10px]" data-name="s2" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[38px] not-italic text-[#f2e7ff] text-[10px] top-[16px] whitespace-nowrap">TRADING AGENT</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[210px] not-italic text-[#9b8ec4] text-[10px] top-[17px] whitespace-pre">{`weatherapi.eth  ·  Hook swap TX`}</p>
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[500px] not-italic text-[#ffe600] text-[10px] top-[16px] whitespace-nowrap">0.001 USDC</p>
      <Pl />
      <div className="absolute h-0 left-[148px] top-[84px] w-[104px]" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 2">
            <line id="Line" stroke="var(--stroke-0, #A8FF3E)" strokeOpacity="0.6" strokeWidth="2" x2="104" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[296px] top-[84px] w-[104px]" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 2">
            <line id="Line" stroke="var(--stroke-0, #FF4444)" strokeOpacity="0.6" strokeWidth="2" x2="104" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[444px] top-[84px] w-[104px]" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 2">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.3" strokeWidth="2" x2="104" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[104px] size-[44px] top-[62px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <circle cx="22" cy="22" fill="var(--fill-0, #2E7A00)" fillOpacity="0.22" id="Ellipse" r="21" stroke="var(--stroke-0, #A8FF3E)" strokeWidth="2" />
        </svg>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[119px] not-italic text-[#a8ff3e] text-[14px] top-[76px] whitespace-nowrap">✓</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[104px] not-italic text-[#a8ff3e] text-[8px] top-[112px] whitespace-nowrap">402</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[104px] not-italic text-[#a8ff3e] text-[8px] top-[125px] whitespace-nowrap">PARSED</p>
      <div className="absolute left-[252px] size-[44px] top-[62px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <circle cx="22" cy="22" fill="var(--fill-0, #FF4444)" fillOpacity="0.22" id="Ellipse" r="21" stroke="var(--stroke-0, #FF4444)" strokeWidth="2" />
        </svg>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Bold','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] left-[268px] not-italic text-[#f44] text-[12px] top-[77px] whitespace-nowrap">✕</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[252px] not-italic text-[#f44] text-[8px] top-[112px] whitespace-nowrap">CONTRACT</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[252px] not-italic text-[#f44] text-[8px] top-[125px] whitespace-nowrap">AUDIT</p>
      <div className="absolute left-[400px] size-[44px] top-[62px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <circle cx="22" cy="22" fill="var(--fill-0, #2D1F5D)" fillOpacity="0.08" id="Ellipse" r="21" stroke="var(--stroke-0, #2D1F5D)" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute left-[419px] size-[7px] top-[81px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #2D1F5D)" fillOpacity="0.35" id="Ellipse" r="3.5" />
        </svg>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[400px] not-italic text-[#5a4a8a] text-[8px] top-[112px] whitespace-nowrap">x402</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[400px] not-italic text-[#5a4a8a] text-[8px] top-[125px] whitespace-nowrap">PAYMENT</p>
      <div className="absolute left-[548px] size-[44px] top-[62px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <circle cx="22" cy="22" fill="var(--fill-0, #2D1F5D)" fillOpacity="0.08" id="Ellipse" r="21" stroke="var(--stroke-0, #2D1F5D)" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute left-[567px] size-[7px] top-[81px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #2D1F5D)" fillOpacity="0.35" id="Ellipse" r="3.5" />
        </svg>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[548px] not-italic text-[#5a4a8a] text-[8px] top-[112px] whitespace-nowrap">POST</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[548px] not-italic text-[#5a4a8a] text-[8px] top-[125px] whitespace-nowrap">AUDIT</p>
      <div className="absolute h-0 left-0 top-[178px] w-[700px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.5" x2="700" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[7px] top-[186px] whitespace-nowrap">STEP DETAIL</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[9px] top-[204px] whitespace-nowrap">02:14:33</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[82px] not-italic text-[#a8ff3e] text-[10px] top-[204px] whitespace-nowrap">✓ 402 received — amount: 0.001 USDC · token: USDC · network: Base</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[82px] not-italic text-[#5a4a8a] text-[10px] top-[222px] whitespace-pre">{`   payTo: 0xWeatherAPI...f3d · resource: /api/weather · expiresAt: +30s`}</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[9px] top-[240px] whitespace-nowrap">02:14:34</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] left-[82px] not-italic text-[#f44] text-[10px] top-[240px] whitespace-nowrap">✕ Contract audit FAILED — hook permission mismatch</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[82px] not-italic text-[#f44] text-[10px] top-[258px] whitespace-pre">{`   hook 0xUniV4Hook...a2c requests MODIFY_LP — not declared in x402`}</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[9px] top-[276px] whitespace-nowrap">02:14:34</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] left-[82px] not-italic text-[#f44] text-[10px] top-[276px] whitespace-nowrap">✕ Payment halted — agent notified</p>
    </div>
  );
}

function Pl1() {
  return (
    <div className="absolute h-[22px] left-[612px] overflow-clip top-[91px] w-[55px]" data-name="pl">
      <div className="absolute bg-[rgba(255,68,68,0.12)] h-[22px] left-0 rounded-[3px] top-0 w-[55px]" data-name="bg" />
      <div className="absolute border border-[#f44] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[55px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#f44] text-[8px] top-[6px] whitespace-nowrap">BLOCK</p>
    </div>
  );
}

function Pl2() {
  return (
    <div className="absolute h-[22px] left-[612px] overflow-clip top-[223px] w-[55px]" data-name="pl">
      <div className="absolute bg-[rgba(46,122,0,0.12)] h-[22px] left-0 rounded-[3px] top-0 w-[55px]" data-name="bg" />
      <div className="absolute border border-[#a8ff3e] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[55px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#a8ff3e] text-[8px] top-[6px] whitespace-nowrap">ALLOW</p>
    </div>
  );
}

function Pl3() {
  return (
    <div className="absolute h-[22px] left-[612px] overflow-clip top-[355px] w-[48px]" data-name="pl">
      <div className="absolute bg-[rgba(255,230,0,0.12)] h-[22px] left-0 rounded-[3px] top-0 w-[48px]" data-name="bg" />
      <div className="absolute border border-[#ffe600] border-solid h-[22px] left-0 rounded-[3px] top-0 w-[48px]" data-name="bd" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[10px] not-italic text-[#ffe600] text-[8px] top-[6px] whitespace-nowrap">WARN</p>
    </div>
  );
}

function LiveFeed() {
  return (
    <div className="absolute bg-[#0e0b22] h-[434px] left-[320px] overflow-clip top-[450px] w-[700px]" data-name="Live Feed">
      <div className="absolute border border-[#2d1f5d] border-solid h-[434px] left-0 rounded-[8px] top-0 w-[700px]" data-name="fb" />
      <div className="absolute bg-[#130f2e] h-[36px] left-0 top-0 w-[700px]" data-name="fhbg" />
      <div className="absolute h-0 left-0 top-[35px] w-[700px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.6" x2="700" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[8px] top-[12px] whitespace-nowrap">█ LIVE FEED</p>
      <div className="absolute bg-[rgba(255,68,68,0.05)] h-[132px] left-px top-[36px] w-[698px]" data-name="blk" />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[9px] top-[96px] whitespace-nowrap">02:14:34</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[110px] not-italic text-[#9b8ec4] text-[10px] top-[96px] whitespace-nowrap">defi.hook.eth</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[360px] not-italic text-[#ffe600] text-[10px] top-[96px] whitespace-nowrap">0.001 USDC</p>
      <Pl1 />
      <div className="absolute h-0 left-0 top-[168px] w-[700px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.25" x2="700" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[9px] top-[228px] whitespace-nowrap">02:14:28</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[110px] not-italic text-[#9b8ec4] text-[10px] top-[228px] whitespace-nowrap">api.x402.io</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[360px] not-italic text-[#ffe600] text-[10px] top-[228px] whitespace-nowrap">0.5 USDC</p>
      <Pl2 />
      <div className="absolute h-0 left-0 top-[300px] w-[700px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 1">
            <line id="Line" stroke="var(--stroke-0, #2D1F5D)" strokeOpacity="0.25" x2="700" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#5a4a8a] text-[9px] top-[360px] whitespace-nowrap">02:14:21</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[110px] not-italic text-[#9b8ec4] text-[10px] top-[360px] whitespace-nowrap">pay.agent.ai</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[360px] not-italic text-[#ffe600] text-[10px] top-[360px] whitespace-nowrap">1.2 USDC</p>
      <Pl3 />
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

function Guard() {
  return (
    <div className="absolute h-[48px] left-[12px] overflow-clip top-[772px] w-[276px]" data-name="guard">
      <div className="absolute bg-[rgba(46,122,0,0.15)] h-[48px] left-0 rounded-[8px] top-0 w-[276px]" data-name="gsbg" />
      <div className="absolute border border-[#a8ff3e] border-solid h-[48px] left-0 rounded-[8px] top-0 w-[276px]" data-name="gsbdr" />
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[12px] not-italic text-[#a8ff3e] text-[8px] top-[8px] whitespace-nowrap">AEGIS GUARD</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#a8ff3e] text-[8px] top-[26px] whitespace-nowrap">● ACTIVE — 0 threats</p>
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

export default function OverviewBlocked() {
  return (
    <div className="bg-[#0a0818] relative size-full" data-name="Overview — BLOCKED">
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
      <MonitorCard />
      <LiveFeed />
      <WalletPanel />
    </div>
  );
}