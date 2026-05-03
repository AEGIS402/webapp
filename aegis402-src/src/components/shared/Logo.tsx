interface LogoProps {
  size?: number
}

export function LogoMark({ size = 28 }: LogoProps) {
  const h = Math.round(size * 64 / 56)
  return (
    <svg width={size} height={h} viewBox="0 0 56 64" fill="none">
      <defs>
        <linearGradient id="gLogo" x1="0" y1="0" x2="56" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6B5FD4" />
          <stop offset="100%" stopColor="#4BC8E8" />
        </linearGradient>
      </defs>
      {/* Shield body */}
      <path d="M28 1 C28 1 52 8 52 8 L52 34 C52 50 28 62 28 62 C28 62 4 50 4 34 L4 8 Z" fill="#12103A" />
      {/* Back wave */}
      <path d="M6 42 C10 28 18 20 28 18 C38 20 46 28 50 42 C46 38 38 30 28 30 C18 30 10 38 6 42 Z" fill="url(#gLogo)" opacity={0.9} />
      {/* Dark cutout */}
      <path d="M10 44 C14 32 20 24 28 22 C36 24 42 32 46 44 C42 40 36 34 28 34 C20 34 14 40 10 44 Z" fill="#12103A" />
      {/* Front wave */}
      <path d="M10 46 C14 36 20 30 28 28 C36 30 42 36 46 46 C42 42 36 36 28 36 C20 36 14 42 10 46 Z" fill="url(#gLogo)" />
    </svg>
  )
}

interface LogoFullProps {
  size?: number
  onClick?: () => void
}

export function LogoFull({ size = 28, onClick }: LogoFullProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <LogoMark size={size} />
      <span style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: 11,
        color: '#A8FF3E',
        textShadow: '1px 1px 0 #2E7A00',
        letterSpacing: '0.04em',
        whiteSpace: 'nowrap',
      }}>
        AEGIS402
      </span>
    </div>
  )
}
