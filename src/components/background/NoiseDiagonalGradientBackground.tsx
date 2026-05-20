"use client";

import { cls } from "@/lib/utils";

interface NoiseDiagonalGradientBackgroundProps {
    className?: string;
}

const NoiseDiagonalGradientBackground = ({ className = "" }: NoiseDiagonalGradientBackgroundProps) => {
    return (
        <div
            className={cls("fixed inset-0 -z-10 bg-background-accent/10",
                className
            )}
        >
            <div
                className="absolute inset-0 overflow-hidden pointer-events-none opacity-100 bg-gradient-to-br from-background via-background-accent/10 to-background-accent/20"
                aria-hidden="true"
            />
            <div
                className="absolute inset-0 bg-repeat mix-blend-overlay opacity-10"
                style={{
                    backgroundImage: "url(https://webuild-dev.s3.eu-north-1.amazonaws.com/default/noise.webp)",
                    backgroundSize: "512px"
                }}
                aria-hidden="true"
            />
        </div>
    );
};


export default NoiseDiagonalGradientBackground;
