"use client";

import { cls } from "@/lib/utils";

interface NoiseBackgroundProps {
    className?: string;
}

const NoiseBackground = ({ className = "" }: NoiseBackgroundProps) => {
    return (
        <div
            className={cls("fixed inset-0 -z-10 bg-background-accent/10",
                className
            )}
        >
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


export default NoiseBackground;
