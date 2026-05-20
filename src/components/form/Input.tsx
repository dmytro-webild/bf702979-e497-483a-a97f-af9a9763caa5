"use client";


import { cls } from "@/lib/utils";

interface InputProps {
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
    disabled?: boolean;
    ariaLabel?: string;
    className?: string;
    error?: string;
    id?: string;
}

const Input = ({
    type = "text",
    placeholder = "",
    value,
    onChange,
    required = false,
    disabled = false,
    ariaLabel,
    className = "",
    error,
    id,
}: InputProps) => {
    return (
        <div className="w-full">
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required={required}
                disabled={disabled}
                aria-label={ariaLabel || placeholder}
                aria-invalid={!!error}
                aria-describedby={error && id ? `${id}-error` : undefined}
                className={cls(
                    "w-full relative z-1 px-4 py-3 secondary-button rounded-theme text-base text-secondary-cta-text placeholder:text-secondary-cta-text/75 focus:outline-none",
                    disabled && "opacity-50 cursor-not-allowed",
                    error && "ring-1 ring-red-500/50",
                    className
                )}
            />
            {error && (
                <p
                    id={id ? `${id}-error` : undefined}
                    className="text-red-500 text-xs mt-1"
                    role="alert"
                >
                    {error}
                </p>
            )}
        </div>
    );
};


export default Input;
