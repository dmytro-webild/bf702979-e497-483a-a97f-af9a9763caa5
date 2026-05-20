"use client";


import useSvgTextLogo from "./useSvgTextLogo";
import { cls } from "@/lib/utils";

interface SvgTextLogoProps {
  logoText: string;
  adjustHeightFactor?: number;
  verticalAlign?: "top" | "center";
  className?: string;
}

const SvgTextLogo = ({
  logoText,
  adjustHeightFactor,
  verticalAlign = "top",
  className = "",
}: SvgTextLogoProps) => {
  const { svgRef, textRef, viewBox, aspectRatio } = useSvgTextLogo(logoText, false, adjustHeightFactor);

  return (
    <svg
      ref={svgRef}
      viewBox={viewBox}
      className={cls("w-full", className)}
      style={{ aspectRatio: aspectRatio }}
      preserveAspectRatio="none"
      role="img"
      aria-label={`${logoText} logo`}
    >
      <text
        ref={textRef}
        x="0"
        y={verticalAlign === "center" ? "50%" : "0"}
        className="font-bold fill-current"
        style={{
          fontSize: "20px",
          letterSpacing: "-0.02em",
          dominantBaseline: verticalAlign === "center" ? "middle" : "hanging"
        }}
      >
        {logoText}
      </text>
    </svg>
  );
};


export default SvgTextLogo;
