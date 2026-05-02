interface LogoMarkProps {
  height: number;
  showWordmark?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function LogoMark({ height, showWordmark = false, onClick, className = '' }: LogoMarkProps) {
  // Original image is 261×268px
  // Shield only (without wordmark) is approximately the top 75% of the image
  const width = height * (261 / 268);

  return (
    <div
      onClick={onClick}
      className={`relative flex-shrink-0 ${onClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''} ${className}`}
      style={{
        width: `${width}px`,
        height: showWordmark ? `${height}px` : `${height}px`,
        overflow: 'hidden'
      }}
    >
      <img
        src="/logo-aegis402.png"
        alt="AEGIS402"
        className="absolute top-0 left-0"
        style={{
          width: `${width}px`,
          height: `${height * (showWordmark ? 1 : 1.33)}px`,
          objectFit: 'contain',
          objectPosition: 'top center'
        }}
      />
    </div>
  );
}
