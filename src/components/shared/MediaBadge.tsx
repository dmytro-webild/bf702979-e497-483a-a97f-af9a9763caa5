"use client";

import Image from "next/image";
import { cls } from "@/lib/utils";

export interface MediaBadgeProps {
  text: string;
  avatarSrc?: string;
  avatarAlt?: string;
  className?: string;
}

const MediaBadge = ({
  text,
  avatarSrc,
  avatarAlt = "",
  className = "",
}: MediaBadgeProps) => {
  return (
    <div
      className={cls(
        "absolute! z-20 card backdrop-blur flex items-center gap-2 px-4 py-2 rounded-theme",
        avatarSrc
          ? "-top-[calc(var(--spacing-2)+var(--text-sm))] -right-[calc(var(--spacing-2)+var(--text-sm))]"
          : "-top-[calc(var(--spacing-2)+var(--text-sm)/2)] -right-[calc(var(--spacing-2)+var(--text-sm)/2)]",
        className
      )}
    >
      <span className="h-(--text-sm) w-auto aspect-square rounded-full bg-accent animate-pulsate" />
      <p className="text-sm leading-tight font-medium text-foreground">{text}</p>
      {avatarSrc && (
        <div className="relative h-[calc(var(--text-sm)*2)] aspect-square card rounded-theme overflow-hidden">
          <Image
            src={avatarSrc}
            alt={avatarAlt}
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
};


export default MediaBadge;
