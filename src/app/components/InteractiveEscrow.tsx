import { useState } from 'react';

type VaultStatus = 'holding' | 'released' | 'refunded';

interface Vault {
  merchant: string;
  amount: string;
  paymentId: string;
  status: VaultStatus;
  elapsed?: string;
}

export default function InteractiveEscrow() {
  const [selectedVault, setSelectedVault] = useState<string | null>('service.eth');

  const vaults: Vault[] = [
    { merchant: 'service.eth', amount: '0.001 USDC', paymentId: 'pay_esc001', status: 'holding', elapsed: '0:08' },
    { merchant: 'weatherapi.eth', amount: '0.001 USDC', paymentId: 'pay_abc123', status: 'released' },
    { merchant: 'bad-service.eth', amount: '0.001 USDC', paymentId: 'pay_esc002', status: 'refunded' },
  ];

  const handleVaultClick = (merchant: string) => {
    setSelectedVault(selectedVault === merchant ? null : merchant);
  };

  const getStatusStyles = (status: VaultStatus, isSelected: boolean) => {
    const styles = {
      holding: {
        border: '#ffe600',
        bg: 'rgba(255,230,0,0.05)',
        accent: '#ffe600',
        pill: { bg: 'rgba(255,230,0,0.15)', text: '#ffe600' },
      },
      released: {
        border: '#a8ff3e',
        bg: 'rgba(168,255,62,0.05)',
        accent: '#a8ff3e',
        pill: { bg: 'rgba(46,122,0,0.12)', text: '#a8ff3e' },
      },
      refunded: {
        border: '#f44',
        bg: 'rgba(255,68,68,0.05)',
        accent: '#f44',
        pill: { bg: 'rgba(255,68,68,0.12)', text: '#f44' },
      },
    };

    return {
      border: isSelected ? styles[status].border : '#2d1f5d',
      borderWidth: isSelected ? '1.5px' : '1px',
      bg: isSelected ? styles[status].bg : 'transparent',
      ...styles[status],
    };
  };

  return (
    <div className="absolute left-[320px] top-[76px] w-[700px]">
      {/* Summary Counters */}
      <div className="flex gap-[160px] mb-[16px]">
        <div>
          <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#ffe600] text-[32px] leading-[normal]">1</p>
          <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[9px] leading-[normal]">Holding</p>
        </div>
        <div>
          <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#a8ff3e] text-[32px] leading-[normal]">1</p>
          <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[9px] leading-[normal]">Released</p>
        </div>
        <div>
          <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#7f76dd] text-[32px] leading-[normal]">1</p>
          <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[9px] leading-[normal]">Refunded</p>
        </div>
      </div>

      {/* Vault Cards */}
      <div className="flex gap-[16px] mb-[16px]">
        {vaults.map((vault) => {
          const isSelected = selectedVault === vault.merchant;
          const styles = getStatusStyles(vault.status, isSelected);

          return (
            <div
              key={vault.merchant}
              onClick={() => handleVaultClick(vault.merchant)}
              className="flex-1 bg-[#0e0b22] rounded-[12px] cursor-pointer transition-all duration-200 overflow-hidden"
              style={{
                border: `${styles.borderWidth} solid ${styles.border}`,
                backgroundColor: styles.bg,
              }}
            >
              {/* Top accent */}
              <div className="h-[3px]" style={{ backgroundColor: styles.accent }} />

              {/* Card content */}
              <div className="p-[16px] relative">
                {/* Ellipse glow effect */}
                <div className="absolute left-[40px] top-[-20px] w-[160px] h-[120px] pointer-events-none">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 120">
                    <ellipse cx="80" cy="60" fill={styles.accent} fillOpacity="0.06" rx="80" ry="60" />
                  </svg>
                </div>

                {/* Status pill */}
                <div
                  className="inline-block h-[24px] px-[10px] rounded-[12px] mb-[12px]"
                  style={{
                    backgroundColor: styles.pill.bg,
                    border: `1px solid ${styles.accent}`,
                  }}
                >
                  <p
                    className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[8px] leading-[24px]"
                    style={{ color: styles.pill.text }}
                  >
                    {vault.status === 'holding' ? 'Holding' : vault.status === 'released' ? 'Released' : 'Refunded'}
                  </p>
                </div>

                {/* Merchant */}
                <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#f2e7ff] text-[13px] mb-[8px]">{vault.merchant}</p>

                {/* Amount */}
                <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#f2e7ff] text-[18px] mb-[8px]">{vault.amount}</p>

                {/* Payment ID + elapsed */}
                <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[8px] mb-[16px]">
                  {vault.paymentId}{vault.elapsed ? ` · elapsed ${vault.elapsed}` : vault.status === 'released' ? ' · 12:04:31' : ' · 12:07:22'}
                </p>

                {/* Divider */}
                <div className="h-[1px] bg-[#2d1f5d] opacity-50 mb-[8px]" />

                {/* Details rows */}
                <div className="space-y-[8px] text-[8px]">
                  <div className="flex justify-between">
                    <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">payTo</p>
                    <p className="font-['IBM_Plex_Mono:Regular',sans-serif]" style={{ color: styles.accent }}>
                      {vault.status === 'holding' ? '0xPayTo...5e6f' : vault.status === 'released' ? '0xabcd...ef12' : '0xRefund...7890'}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">facilitator</p>
                    <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#378add]">Coinbase CDP</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">contract</p>
                    <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#7f76dd]">0xEscrow...3c4d</p>
                  </div>
                </div>

                {/* Bottom divider */}
                <div className="h-[1px] bg-[#2d1f5d] opacity-40 my-[8px]" />

                {/* View link */}
                <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[9px]" style={{ color: styles.accent }}>View →</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Vault Detail Panel */}
      <div
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          maxHeight: selectedVault ? '600px' : '0',
          opacity: selectedVault ? 1 : 0,
        }}
      >
        {selectedVault === 'service.eth' && (
          <div className="bg-[#0e0b22] rounded-[8px] border border-[#ffe600]">
            {/* Top accent */}
            <div className="h-[3px] bg-[#ffe600]" />

            {/* Header */}
            <div className="bg-[#130f2e] h-[44px] flex items-center justify-between px-[16px]">
              <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#ffe600] text-[10px]">VAULT DETAIL — service.eth</p>
              <div className="h-[22px] px-[10px] rounded-[3px] bg-[rgba(255,230,0,0.15)] border border-[#ffe600] flex items-center">
                <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#ffe600] text-[8px]">⚠ HOLDING</p>
              </div>
            </div>

            <div className="h-[1px] bg-[#2d1f5d] opacity-70" />

            {/* Content */}
            <div className="flex gap-[16px] p-[16px]">
              {/* Left Column */}
              <div className="flex-1 space-y-[12px]">
                <div>
                  <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[7px] mb-[4px]">PAYMENT INFO</p>
                  <div className="space-y-[4px] text-[8px]">
                    <div className="flex justify-between">
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">paymentId</p>
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#f2e7ff]">pay_esc001</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">payTo</p>
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#ffe600]">0xPayTo...5e6f</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">amount</p>
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#ffe600]">0.001 USDC</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">network</p>
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#378add]">Base</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">facilitator</p>
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#378add]">Coinbase CDP</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">contract</p>
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#7f76dd]">0xEscrow...3c4d</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[7px] mb-[8px]">SLIPPAGE RESULT</p>
                  <div className="bg-[#2d1f5d] h-[6px] rounded-[3px] mb-[6px] overflow-hidden">
                    <div className="bg-[#f44] h-full" style={{ width: '67.4%' }} />
                  </div>
                  <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#f44] text-[9px]">67.4% (threshold: 5.0%)</p>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="w-[1px] bg-[#2d1f5d] opacity-30" />

              {/* Right Column */}
              <div className="flex-1 space-y-[12px]">
                <div className="bg-[rgba(255,230,0,0.08)] border border-[#ffe600] border-l-[3px] rounded-[6px] p-[12px]">
                  <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#ffe600] text-[8px] mb-[4px]">HOLD REASON</p>
                  <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#9b8ec4] text-[8px] mb-[2px]">Post-audit output 67.4% below threshold</p>
                  <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#9b8ec4] text-[8px]">Escrow hold triggered automatically</p>
                </div>

                <div className="bg-[#130f2e] border border-[#2d1f5d] rounded-[6px] p-[12px]">
                  <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#ffe600] text-[8px] mb-[2px]">Slippage 67.4% — MEV sandwich likely</p>
                  <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[8px] mb-[2px]">Model: gpt-oss-120b · Latency: 0.34s</p>
                  <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#a8ff3e] text-[8px]">Confidence: 0.91</p>
                </div>

                <div>
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
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="h-[1px] bg-[#2d1f5d] opacity-30 mx-[16px]" />
            <div className="px-[16px] py-[12px]">
              <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[8px]">Hold since: 02:14:36 · Auto-expire: +24h · 0.001 USDC locked</p>
            </div>
          </div>
        )}

        {selectedVault === 'weatherapi.eth' && (
          <div className="bg-[#0e0b22] rounded-[8px] border border-[#a8ff3e]">
            {/* Top accent */}
            <div className="h-[3px] bg-[#a8ff3e]" />

            {/* Header */}
            <div className="bg-[#130f2e] h-[44px] flex items-center justify-between px-[16px]">
              <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#a8ff3e] text-[10px]">VAULT DETAIL — weatherapi.eth</p>
              <div className="h-[22px] px-[10px] rounded-[3px] bg-[rgba(46,122,0,0.12)] border border-[#a8ff3e] flex items-center">
                <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#a8ff3e] text-[8px]">✓ RELEASED</p>
              </div>
            </div>

            <div className="h-[1px] bg-[#2d1f5d] opacity-70" />

            {/* Content */}
            <div className="flex gap-[16px] p-[16px]">
              {/* Left Column */}
              <div className="flex-1 space-y-[12px]">
                <div>
                  <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[7px] mb-[4px]">PAYMENT INFO</p>
                  <div className="space-y-[4px] text-[8px]">
                    <div className="flex justify-between">
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">paymentId</p>
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#f2e7ff]">pay_abc123</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">payTo</p>
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#a8ff3e]">0xabcd...ef12</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">amount</p>
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#a8ff3e]">0.001 USDC</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">network</p>
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#378add]">Base</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">commitment</p>
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#a8ff3e]">matched ✓</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">contract</p>
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#7f76dd]">0xEscrow...3c4d</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="w-[1px] bg-[#2d1f5d] opacity-30" />

              {/* Right Column */}
              <div className="flex-1 space-y-[12px]">
                <div className="bg-[rgba(168,255,62,0.08)] border border-[#a8ff3e] border-l-[3px] rounded-[6px] p-[12px]">
                  <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#a8ff3e] text-[8px] mb-[4px]">SETTLEMENT COMPLETE</p>
                  <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#9b8ec4] text-[8px] mb-[2px]">Payment released to merchant</p>
                  <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#9b8ec4] text-[8px] mb-[2px]">Post-audit verification: passed</p>
                  <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#9b8ec4] text-[8px]">Commitment hash: matched ✓</p>
                </div>

                <div className="space-y-[4px] text-[8px]">
                  <div className="flex justify-between">
                    <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">release tx</p>
                    <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#a8ff3e]">0xabcd...ef12</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">released at</p>
                    <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#f2e7ff]">12:04:31</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedVault === 'bad-service.eth' && (
          <div className="bg-[#0e0b22] rounded-[8px] border border-[#f44]">
            {/* Top accent */}
            <div className="h-[3px] bg-[#f44]" />

            {/* Header */}
            <div className="bg-[#130f2e] h-[44px] flex items-center justify-between px-[16px]">
              <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#f44] text-[10px]">VAULT DETAIL — bad-service.eth</p>
              <div className="h-[22px] px-[10px] rounded-[3px] bg-[rgba(255,68,68,0.12)] border border-[#f44] flex items-center">
                <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#f44] text-[8px]">↩ REFUNDED</p>
              </div>
            </div>

            <div className="h-[1px] bg-[#2d1f5d] opacity-70" />

            {/* Content */}
            <div className="flex gap-[16px] p-[16px]">
              {/* Left Column */}
              <div className="flex-1 space-y-[12px]">
                <div>
                  <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a] text-[7px] mb-[4px]">PAYMENT INFO</p>
                  <div className="space-y-[4px] text-[8px]">
                    <div className="flex justify-between">
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">paymentId</p>
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#f2e7ff]">pay_esc002</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">refund tx</p>
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#f44]">0xef56...7890</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">amount</p>
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#f44]">0.001 USDC</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">network</p>
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#378add]">Base</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">commitment</p>
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#f44]">mismatch ×</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">contract</p>
                      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#7f76dd]">0xEscrow...3c4d</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="w-[1px] bg-[#2d1f5d] opacity-30" />

              {/* Right Column */}
              <div className="flex-1 space-y-[12px]">
                <div className="bg-[rgba(255,68,68,0.08)] border border-[#f44] border-l-[3px] rounded-[6px] p-[12px]">
                  <p className="font-['IBM_Plex_Mono:Bold',sans-serif] text-[#f44] text-[8px] mb-[4px]">COMMITMENT MISMATCH</p>
                  <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#9b8ec4] text-[8px] mb-[2px]">Service response hash did not match</p>
                  <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#9b8ec4] text-[8px]">expected commitment — auto-refunded</p>
                </div>

                <div className="space-y-[4px] text-[8px]">
                  <div className="flex justify-between">
                    <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">refund tx</p>
                    <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#f44]">0xef56...7890</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#5a4a8a]">refunded at</p>
                    <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[#f2e7ff]">12:07:22</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
