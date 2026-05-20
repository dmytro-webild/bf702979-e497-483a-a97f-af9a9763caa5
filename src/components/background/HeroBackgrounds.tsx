"use client";

import dynamic from "next/dynamic";

const AnimatedGridBackground = dynamic(() => import("./AnimatedGridBackground"), { ssr: false, loading: () => null });
const CanvasRevealBackground = dynamic(() => import("./CanvasRevealBackground"), { ssr: false, loading: () => null });
const CellWaveBackground = dynamic(() => import("./CellWaveBackground"), { ssr: false, loading: () => null });
const DownwardRaysBackground = dynamic(() => import("./DownwardRaysBackground"), { ssr: false, loading: () => null });
const GlowingOrbBackground = dynamic(() => import("./GlowingOrbBackground"), { ssr: false, loading: () => null });
const GlowingOrbSparklesBackground = dynamic(() => import("./GlowingOrbSparklesBackground"), { ssr: false, loading: () => null });
const GradientBarsBackground = dynamic(() => import("./GradientBarsBackground"), { ssr: false, loading: () => null });
const RadialGradientBackground = dynamic(() => import("./RadialGradientBackground"), { ssr: false, loading: () => null });
const RotatedRaysBackground = dynamic(() => import("./RotatedRaysBackground"), { ssr: false, loading: () => null });
const RotatingGradientBackground = dynamic(() => import("./RotatingGradientBackground"), { ssr: false, loading: () => null });
const SparklesGradientBackground = dynamic(() => import("./SparklesGradientBackground"), { ssr: false, loading: () => null });

export type HeroBackgroundVariant =
  | "plain"
  | "animated-grid"
  | "canvas-reveal"
  | "cell-wave"
  | "downward-rays-animated"
  | "downward-rays-animated-grid"
  | "downward-rays-static"
  | "downward-rays-static-grid"
  | "glowing-orb"
  | "glowing-orb-sparkles"
  | "gradient-bars"
  | "radial-gradient"
  | "rotated-rays-animated"
  | "rotated-rays-animated-grid"
  | "rotated-rays-static"
  | "rotated-rays-static-grid"
  | "rotating-gradient"
  | "sparkles-gradient";

type AnimatedGridProps = React.ComponentProps<typeof AnimatedGridBackground>;
type CanvasRevealProps = React.ComponentProps<typeof CanvasRevealBackground>;
type CellWaveProps = React.ComponentProps<typeof CellWaveBackground>;
type GlowingOrbProps = React.ComponentProps<typeof GlowingOrbBackground>;
type GlowingOrbSparklesProps = React.ComponentProps<typeof GlowingOrbSparklesBackground>;
type GradientBarsProps = React.ComponentProps<typeof GradientBarsBackground>;
type RadialGradientProps = React.ComponentProps<typeof RadialGradientBackground>;
type RotatingGradientProps = React.ComponentProps<typeof RotatingGradientBackground>;
type SparklesGradientProps = React.ComponentProps<typeof SparklesGradientBackground>;

export type HeroBackgroundVariantProps =
  | { variant: "plain" }
  | ({ variant: "animated-grid" } & AnimatedGridProps)
  | ({ variant: "canvas-reveal" } & CanvasRevealProps)
  | ({ variant: "cell-wave" } & CellWaveProps)
  | { variant: "downward-rays-animated" }
  | { variant: "downward-rays-animated-grid" }
  | { variant: "downward-rays-static" }
  | { variant: "downward-rays-static-grid" }
  | ({ variant: "glowing-orb" } & GlowingOrbProps)
  | ({ variant: "glowing-orb-sparkles" } & GlowingOrbSparklesProps)
  | ({ variant: "gradient-bars" } & GradientBarsProps)
  | ({ variant: "radial-gradient" } & RadialGradientProps)
  | { variant: "rotated-rays-animated" }
  | { variant: "rotated-rays-animated-grid" }
  | { variant: "rotated-rays-static" }
  | { variant: "rotated-rays-static-grid" }
  | ({ variant: "rotating-gradient" } & RotatingGradientProps)
  | ({ variant: "sparkles-gradient" } & SparklesGradientProps);

const heroBackgroundComponents = {
  "animated-grid": AnimatedGridBackground,
  "canvas-reveal": CanvasRevealBackground,
  "cell-wave": CellWaveBackground,
  "downward-rays": DownwardRaysBackground,
  "glowing-orb": GlowingOrbBackground,
  "glowing-orb-sparkles": GlowingOrbSparklesBackground,
  "gradient-bars": GradientBarsBackground,
  "radial-gradient": RadialGradientBackground,
  "rotated-rays": RotatedRaysBackground,
  "rotating-gradient": RotatingGradientBackground,
  "sparkles-gradient": SparklesGradientBackground,
} as const;

const HeroBackgrounds = (props: HeroBackgroundVariantProps) => {
  if (props.variant === "plain") {
    return null;
  }

  const { variant, ...restProps } = props;

  // Handle rotated-rays preset variants
  if (variant === "rotated-rays-animated") {
    return <RotatedRaysBackground animated={true} showGrid={false} {...(restProps as any)} />;
  }
  if (variant === "rotated-rays-animated-grid") {
    return <RotatedRaysBackground animated={true} showGrid={true} {...(restProps as any)} />;
  }
  if (variant === "rotated-rays-static") {
    return <RotatedRaysBackground animated={false} showGrid={false} {...(restProps as any)} />;
  }
  if (variant === "rotated-rays-static-grid") {
    return <RotatedRaysBackground animated={false} showGrid={true} {...(restProps as any)} />;
  }

  // Handle downward-rays preset variants
  if (variant === "downward-rays-animated") {
    return <DownwardRaysBackground animated={true} showGrid={false} {...(restProps as any)} />;
  }
  if (variant === "downward-rays-animated-grid") {
    return <DownwardRaysBackground animated={true} showGrid={true} {...(restProps as any)} />;
  }
  if (variant === "downward-rays-static") {
    return <DownwardRaysBackground animated={false} showGrid={false} {...(restProps as any)} />;
  }
  if (variant === "downward-rays-static-grid") {
    return <DownwardRaysBackground animated={false} showGrid={true} {...(restProps as any)} />;
  }

  const BackgroundComponent = heroBackgroundComponents[variant];
  return <BackgroundComponent {...(restProps as any)} />;
};


export default HeroBackgrounds;
