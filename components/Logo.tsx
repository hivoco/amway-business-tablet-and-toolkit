import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-8 w-auto" }: LogoProps) {
  return (
    <Image
      src="/amway-svg.svg"
      alt="Amway Logo"
      width={85}
      height={30}
      className={className}
      priority
    />
  );
}
