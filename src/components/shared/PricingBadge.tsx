"use client";

import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface PricingBadgeProps {
    badge: string;
    badgeIcon?: LucideIcon;
    className?: string;
}

const PricingBadge = ({
    badge,
    badgeIcon: BadgeIcon,
    className = "",
}: PricingBadgeProps) => {
    return (
        <div className={cls("relative z-1 inline-flex items-center gap-2 px-4 py-2 w-fit card rounded-theme text-sm", className)}>
            {BadgeIcon && <BadgeIcon className="relative z-1 h-[1em] w-auto" />}
            <span>{badge}</span>
        </div>
    );
};

export default PricingBadge;
