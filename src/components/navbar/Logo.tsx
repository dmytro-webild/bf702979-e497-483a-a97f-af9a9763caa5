"use client";

import Image from "next/image";
import { cls } from "@/lib/utils";
import { useButtonClick } from "@/components/button/useButtonClick";

interface LogoProps {
  logoSrc?: string;
  logoAlt?: string;
  brandName?: string;
  className?: string;
  imageClassName?: string;
  textClassName?: string;
  onClick?: () => void;
  href?: string;
}

const Logo = ({
  logoSrc,
  logoAlt = "",
  brandName = "Webild",
  className = "",
  imageClassName = "",
  textClassName = "",
  onClick,
  href,
}: LogoProps) => {
  const handleClick = useButtonClick(href, onClick);
  const isClickable = onClick || href;

  if (logoSrc) {
    const imageElement = (
      <div className={cls("relative h-[calc(var(--text-xl)*1.25)] w-auto", className)}>
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={100}
          height={24}
          className={cls("h-full w-auto object-contain", imageClassName)}
          unoptimized={logoSrc.startsWith('http') || logoSrc.startsWith('//')}
        />
      </div>
    );

    if (isClickable) {
      return (
        <button onClick={handleClick} className="cursor-pointer">
          {imageElement}
        </button>
      );
    }

    return imageElement;
  }

  if (isClickable) {
    return (
      <button onClick={handleClick} className="cursor-pointer">
        <h2 className={cls("text-xl font-medium text-foreground", textClassName)}>
          {brandName}
        </h2>
      </button>
    );
  }

  return (
    <h2 className={cls("text-xl font-medium text-foreground", textClassName)}>
      {brandName}
    </h2>
  );
};


export default Logo;
