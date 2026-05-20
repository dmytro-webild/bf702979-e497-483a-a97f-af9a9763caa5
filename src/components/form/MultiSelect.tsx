"use client";

import { ChevronDown } from "lucide-react";
import { cls } from "@/lib/utils";

interface MultiSelectProps {
    label: string;
    options: string[];
    selectedOptions: string[];
    onToggle: (option: string) => void;
    ariaLabel?: string;
    className?: string;
}

const MultiSelect = ({
    label,
    options,
    selectedOptions,
    onToggle,
    ariaLabel,
    className = "",
}: MultiSelectProps) => {
    return (
        <div className={cls("relative secondary-button rounded-theme", className)}>
            <select
                value={selectedOptions[selectedOptions.length - 1] || ""}
                onChange={(e) => onToggle(e.target.value)}
                aria-label={ariaLabel || label}
                className={cls(
                    "relative z-1 w-full px-4 py-3 text-base bg-transparent focus:outline-none appearance-none cursor-pointer",
                    selectedOptions.length > 0 ? "text-secondary-cta-text" : "text-secondary-cta-text/75"
                )}
            >
                <option value="" disabled>
                    {selectedOptions.length > 0 ? selectedOptions.join(", ") : label}
                </option>
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {selectedOptions.includes(opt) ? `✓ ${opt}` : opt}
                    </option>
                ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-(--text-base) w-auto text-secondary-cta-text/75 pointer-events-none" />
        </div>
    );
};

export default MultiSelect;
