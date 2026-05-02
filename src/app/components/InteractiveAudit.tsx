import { useState } from 'react';

type TabType = 'pre' | 'post';
type StatusType = 'BLOCK' | 'ALLOW' | 'WARN' | 'CACHE' | 'HOLD' | 'PASS';

interface PreAuditRow {
  id: string;
  contract: string;
  time: string;
  status: StatusType;
}

interface PostAuditRow {
  id: string;
  merchant: string;
  slippage: string;
  status: StatusType;
}

export default function InteractiveAudit() {
  const [activeTab, setActiveTab] = useState<TabType>('pre');
  const [expandedRow, setExpandedRow] = useState<string | null>('0xA4f2...8c3d');

  const preAuditRows: PreAuditRow[] = [
    { id: '0xA4f2...8c3d', contract: '0xUniV4Hook...a2c', time: '02:14:34', status: 'BLOCK' },
    { id: '0xB8e1...3f9a', contract: '0xUSDC...eB48', time: '02:14:28', status: 'ALLOW' },
    { id: '0xC3d7...1b2e', contract: '0xRouter...5564', time: '02:14:20', status: 'ALLOW' },
    { id: '0xD9a4...7c5f', contract: '0xHook2...a8f1', time: '02:14:15', status: 'WARN' },
    { id: '0xE1b3...2d4c', contract: '0xUniV4Hook...a2c', time: '02:13:58', status: 'CACHE' },
  ];

  const postAuditRows: PostAuditRow[] = [
    { id: '0xF7c3...9d1a', merchant: 'weatherapi.eth', slippage: '67.4%', status: 'HOLD' },
    { id: '0xA4f2...8c3d', merchant: 'api.x402.io', slippage: '0.3%', status: 'PASS' },
    { id: '0xB8e1...3f9a', merchant: 'swap.uni.v4', slippage: '1.2%', status: 'PASS' },
    { id: '0xC3d7...1b2e', merchant: 'pay.agent.ai', slippage: '2.8%', status: 'PASS' },
  ];

  const handleRowClick = (rowId: string) => {
    setExpandedRow(expandedRow === rowId ? null : rowId);
  };

  const getStatusStyles = (status: StatusType) => {
    const styles = {
      BLOCK: { bg: 'rgba(255,68,68,0.12)', border: '#f44', text: '#f44' },
      ALLOW: { bg: 'rgba(46,122,0,0.12)', border: '#a8ff3e', text: '#a8ff3e' },
      WARN: { bg: 'rgba(255,230,0,0.15)', border: '#ffe600', text: '#ffe600' },
      CACHE: { bg: 'rgba(127,118,221,0.12)', border: '#7f76dd', text: '#7f76dd' },
      HOLD: { bg: 'rgba(255,230,0,0.15)', border: '#ffe600', text: '#ffe600' },
      PASS: { bg: 'rgba(46,122,0,0.12)', border: '#a8ff3e', text: '#a8ff3e' },
    };
    return styles[status];
  };

  return (
    <div className="absolute bg-[#0e0b22] h-[808px] left-[320px] top-[76px] w-[700px] rounded-[8px] border border-[#2d1f5d]">
      {/* Tab Header */}
      <div className="relative h-[40px] bg-[#130f2e] flex">
        {/* PRE-AUDIT Tab */}
        <button
          onClick={() => {
            setActiveTab('pre');
            setExpandedRow('0xA4f2...8c3d');
          }}
          className={`flex-1 relative cursor-pointer transition-colors ${
            activeTab === 'pre' ? 'bg-[rgba(127,118,221,0.12)]' : 'hover:bg-[rgba(127,118,221,0.05)]'
          }`}
        >
          <p className={`absolute left-1/2 -translate-x-1/2 top-[14px] font-['IBM_Plex_Mono',sans-serif] text-[8px] whitespace-nowrap ${
            activeTab === 'pre' ? 'font-bold text-[#7f76dd]' : 'font-normal text-[#5a4a8a]'
          }`}>
            PRE-AUDIT
          </p>
          {activeTab === 'pre' && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#7f76dd]" />}
        </button>

        {/* Vertical divider */}
        <div className="w-[1px] bg-[#2d1f5d] opacity-50" />

        {/* POST-AUDIT Tab */}
        <button
          onClick={() => {
            setActiveTab('post');
            setExpandedRow('0xF7c3...9d1a');
          }}
          className={`flex-1 relative cursor-pointer transition-colors ${
            activeTab === 'post' ? 'bg-[rgba(127,118,221,0.12)]' : 'hover:bg-[rgba(127,118,221,0.05)]'
          }`}
        >
          <p className={`absolute left-1/2 -translate-x-1/2 top-[14px] font-['IBM_Plex_Mono',sans-serif] text-[8px] whitespace-nowrap ${
            activeTab === 'post' ? 'font-bold text-[#7f76dd]' : 'font-normal text-[#5a4a8a]'
          }`}>
            POST-AUDIT
          </p>
          {activeTab === 'post' && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#7f76dd]" />}
        </button>
      </div>

      {/* Horizontal divider */}
      <div className="h-[1px] bg-[#2d1f5d] opacity-70" />

      {/* Column Headers */}
      <div className="h-[32px] bg-[#130f2e] flex items-center px-[16px]">
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[7px] w-[140px]">TX HASH</p>
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[7px] w-[160px]">
          {activeTab === 'pre' ? 'CONTRACT' : 'MERCHANT'}
        </p>
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[7px] w-[120px]">
          {activeTab === 'pre' ? 'TIME' : 'SLIPPAGE'}
        </p>
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[7px] flex-1 text-right pr-[40px]">STATUS</p>
      </div>

      {/* Horizontal divider */}
      <div className="h-[1px] bg-[#2d1f5d] opacity-50" />

      {/* Rows Container */}
      <div className="overflow-auto" style={{ maxHeight: 'calc(808px - 73px)' }}>
        {activeTab === 'pre' ? (
          // PRE-AUDIT Rows
          preAuditRows.map((row, index) => (
            <div key={row.id}>
              {/* Row Header */}
              <div
                onClick={() => handleRowClick(row.id)}
                className={`min-h-[44px] flex items-center px-[16px] cursor-pointer transition-colors ${
                  expandedRow === row.id ? 'bg-[rgba(127,118,221,0.05)]' : 'hover:bg-[rgba(127,118,221,0.03)]'
                }`}
              >
                <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#9b8ec4] text-[9px] w-[140px]">{row.id}</p>
                <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[8px] w-[160px]">{row.contract}</p>
                <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[8px] w-[120px]">{row.time}</p>
                <div className="flex-1 flex items-center justify-end gap-[12px]">
                  <div
                    className="h-[22px] px-[10px] rounded-[3px] flex items-center justify-center"
                    style={{
                      backgroundColor: getStatusStyles(row.status).bg,
                      border: `1px solid ${getStatusStyles(row.status).border}`,
                    }}
                  >
                    <p
                      className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[8px]"
                      style={{ color: getStatusStyles(row.status).text }}
                    >
                      {row.status}
                    </p>
                  </div>
                  <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[7px] w-[16px]">
                    {expandedRow === row.id ? '▼' : '▶'}
                  </p>
                </div>
              </div>

              {/* Accordion Content */}
              <div
                className="overflow-hidden transition-all duration-200 ease-in-out"
                style={{
                  maxHeight: expandedRow === row.id ? '400px' : '0',
                }}
              >
                {row.id === '0xA4f2...8c3d' && (
                  <div className="px-[16px] pb-[16px] pt-[8px]">
                    <div className="h-[1px] bg-[#2d1f5d] opacity-40 mb-[12px]" />
                    <div className="flex gap-[16px]">
                      {/* Left Column */}
                      <div className="flex-1">
                        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[7px] mb-[8px]">TRANSACTION</p>
                        <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#f2e7ff] text-[9px] mb-[4px]">0xA4f2...8c3d</p>
                        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[8px] mb-[12px]">Block #23437410 · 02:14:34</p>

                        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[7px] mb-[8px]">HOOK PERMISSIONS</p>
                        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#a8ff3e] text-[8px] mb-[2px]">● BEFORE_SWAP — declared</p>
                        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#a8ff3e] text-[8px] mb-[2px]">● AFTER_SWAP — declared</p>
                        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#f44] text-[8px]">■ MODIFY_LP — NOT DECLARED</p>
                      </div>

                      {/* Vertical Divider */}
                      <div className="w-[1px] bg-[#2d1f5d] opacity-30" />

                      {/* Right Column */}
                      <div className="flex-1">
                        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[7px] mb-[8px]">FINDING</p>
                        <div className="bg-[rgba(255,68,68,0.08)] border border-[#f44] border-l-[3px] rounded-[6px] p-[12px] mb-[12px]">
                          <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#f44] text-[8px] mb-[4px]">PERMISSION MISMATCH</p>
                          <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#9b8ec4] text-[8px]">
                            Hook requests MODIFY_LP permission not declared in x402 requirement
                          </p>
                        </div>

                        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[7px] mb-[8px]">LOCAL LLM ANALYSIS</p>
                        <div className="bg-[#130f2e] border border-[#2d1f5d] rounded-[6px] p-[12px] mb-[12px]">
                          <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#378add] text-[8px] mb-[2px]">Cache: MISS → LLM called</p>
                          <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[8px] mb-[2px]">Model: gpt-oss-120b (local) · Latency: 0.34s</p>
                          <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#a8ff3e] text-[8px]">Confidence: 0.97</p>
                        </div>

                        <div className="bg-[rgba(255,68,68,0.12)] border border-[#f44] rounded-[6px] p-[12px]">
                          <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#f44] text-[8px] mb-[4px]">PAYMENT HALTED</p>
                          <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#9b8ec4] text-[8px]">Agent notified — tx blocked</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Row Divider */}
              {index < preAuditRows.length - 1 && <div className="h-[1px] bg-[#2d1f5d] opacity-20" />}
            </div>
          ))
        ) : (
          // POST-AUDIT Rows
          postAuditRows.map((row, index) => (
            <div key={row.id}>
              {/* Row Header */}
              <div
                onClick={() => handleRowClick(row.id)}
                className={`min-h-[44px] flex items-center px-[16px] cursor-pointer transition-colors ${
                  expandedRow === row.id ? 'bg-[rgba(255,230,0,0.05)]' : 'hover:bg-[rgba(127,118,221,0.03)]'
                }`}
              >
                <p className={`font-['IBM_Plex_Mono',sans-serif] text-[9px] w-[140px] ${
                  row.id === '0xF7c3...9d1a' ? 'font-bold text-[#ffe600]' : 'font-normal text-[#9b8ec4]'
                }`}>{row.id}</p>
                <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#9b8ec4] text-[9px] w-[160px]">{row.merchant}</p>
                <p className={`font-['IBM_Plex_Mono',sans-serif] text-[9px] w-[120px] ${
                  row.slippage === '67.4%' ? 'font-bold text-[#f44]' : 'font-normal text-[#a8ff3e]'
                }`}>{row.slippage}</p>
                <div className="flex-1 flex items-center justify-end gap-[12px]">
                  <div
                    className="h-[22px] px-[10px] rounded-[3px] flex items-center justify-center"
                    style={{
                      backgroundColor: getStatusStyles(row.status).bg,
                      border: `1px solid ${getStatusStyles(row.status).border}`,
                    }}
                  >
                    <p
                      className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[8px]"
                      style={{ color: getStatusStyles(row.status).text }}
                    >
                      {row.status === 'HOLD' ? '⚠ HOLD' : row.status}
                    </p>
                  </div>
                  <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[7px] w-[16px]">
                    {expandedRow === row.id ? '▼' : '▶'}
                  </p>
                </div>
              </div>

              {/* Accordion Content */}
              <div
                className="overflow-hidden transition-all duration-200 ease-in-out"
                style={{
                  maxHeight: expandedRow === row.id ? '500px' : '0',
                }}
              >
                {row.id === '0xF7c3...9d1a' && (
                  <div className="px-[16px] pb-[16px] pt-[8px]">
                    <div className="h-[1px] bg-[#2d1f5d] opacity-40 mb-[12px]" />
                    <div className="flex gap-[16px]">
                      {/* Left Column */}
                      <div className="flex-1">
                        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[7px] mb-[8px]">TRANSACTION</p>
                        <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#f2e7ff] text-[9px] mb-[4px]">0xF7c3...9d1a</p>
                        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[8px] mb-[12px]">Block #23437892 · 02:14:36</p>

                        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[7px] mb-[8px]">SWAP RESULT</p>
                        <div className="bg-[#130f2e] border border-[#2d1f5d] rounded-[6px] p-[12px] mb-[12px]">
                          <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[7px] mb-[2px]">Expected</p>
                          <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#a8ff3e] text-[9px] mb-[6px]">≥ 0.000950 USDC</p>
                          <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[7px] mb-[2px]">Actual</p>
                          <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#f44] text-[9px]">0.000310 USDC</p>
                        </div>

                        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[7px] mb-[8px]">SLIPPAGE</p>
                        <div className="bg-[#2d1f5d] h-[6px] rounded-[3px] mb-[6px] overflow-hidden">
                          <div className="bg-[#f44] h-full" style={{ width: '67.4%' }} />
                        </div>
                        <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#f44] text-[9px]">67.4% (threshold: 5.0%)</p>
                      </div>

                      {/* Vertical Divider */}
                      <div className="w-[1px] bg-[#2d1f5d] opacity-30" />

                      {/* Right Column */}
                      <div className="flex-1">
                        <div className="bg-[rgba(255,230,0,0.08)] border border-[#ffe600] border-l-[3px] rounded-[6px] p-[12px] mb-[12px]">
                          <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#ffe600] text-[8px] mb-[4px]">SLIPPAGE ANOMALY DETECTED</p>
                          <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#9b8ec4] text-[8px] mb-[2px]">Slippage 67.4% — MEV sandwich likely</p>
                          <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[8px]">Confidence: 0.91 · Model: gpt-oss-120b</p>
                        </div>

                        <div className="bg-[rgba(255,230,0,0.1)] border border-[#ffe600] rounded-[6px] p-[12px] mb-[12px]">
                          <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#ffe600] text-[9px] mb-[4px]">0.001 USDC — ESCROW HOLD</p>
                          <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#9b8ec4] text-[8px]">Merchant: weatherapi.eth · Auto-expire: +24h</p>
                        </div>

                        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[7px] mb-[8px]">ACTIONS</p>
                        <div className="flex gap-[8px] mb-[12px]">
                          <button className="flex-1 h-[34px] bg-[rgba(168,255,62,0.12)] border border-[#a8ff3e] rounded-[6px] flex items-center justify-center hover:bg-[rgba(168,255,62,0.18)] transition-colors">
                            <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#a8ff3e] text-[8px]">RELEASE</p>
                          </button>
                          <button className="flex-1 h-[34px] bg-[rgba(55,138,221,0.12)] border border-[#378add] rounded-[6px] flex items-center justify-center hover:bg-[rgba(55,138,221,0.18)] transition-colors">
                            <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#378add] text-[8px]">REFUND</p>
                          </button>
                          <button className="flex-1 h-[34px] bg-[rgba(255,68,68,0.12)] border border-[#f44] rounded-[6px] flex items-center justify-center hover:bg-[rgba(255,68,68,0.18)] transition-colors">
                            <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#f44] text-[8px]">DISPUTE</p>
                          </button>
                        </div>
                        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[8px]">Hold since: 02:14:36 · 0.001 USDC locked</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Row Divider */}
              {index < postAuditRows.length - 1 && <div className="h-[1px] bg-[#2d1f5d] opacity-20" />}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
