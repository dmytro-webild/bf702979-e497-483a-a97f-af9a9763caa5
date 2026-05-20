"use client";

import { useState, useEffect } from "react";
import TextBox from "@/components/Textbox";
import MediaContent from "@/components/shared/MediaContent";
import TestimonialAuthor from "@/components/shared/TestimonialAuthor";
import AnimationContainer from "@/components/sections/AnimationContainer";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import { Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, ButtonAnimationType } from "@/types/button";
import type { Avatar } from "@/components/shared/AvatarGroup";

const RADIAL_MASK_GRADIENT = "radial-gradient(circle, black 20%, transparent 70%)";

type Testimonial = {
  name: string;
  handle: string;
  testimonial: string;
  rating: number;
  imageSrc?: string;
  imageAlt?: string;
};

interface HeroOverlayTestimonialProps {
  title: string;
  description: string;
  testimonials: Testimonial[];
  testimonialRotationInterval?: number;
  tag?: string;
  tagIcon?: LucideIcon;
  tagAnimation?: ButtonAnimationType;
  buttons?: ButtonConfig[];
  buttonAnimation?: ButtonAnimationType;
  avatars?: Avatar[];
  avatarText?: string;
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  videoAriaLabel?: string;
  showDimOverlay?: boolean;
  showBlur?: boolean;
  textPosition?: "top" | "bottom";
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  textBoxClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  tagClassName?: string;
  buttonContainerClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
  avatarGroupClassName?: string;
  mediaWrapperClassName?: string;
  imageClassName?: string;
  blurClassName?: string;
  dimOverlayClassName?: string;
  testimonialCardClassName?: string;
  testimonialContentClassName?: string;
  testimonialTextClassName?: string;
  testimonialRatingClassName?: string;
  testimonialAuthorClassName?: string;
  testimonialAuthorImageClassName?: string;
  testimonialAuthorNameClassName?: string;
  testimonialAuthorHandleClassName?: string;
}

const HeroOverlayTestimonial = ({
  title,
  description,
  testimonials,
  testimonialRotationInterval = 5000,
  tag,
  tagIcon,
  tagAnimation = "opacity",
  buttons = [],
  buttonAnimation = "slide-up",
  avatars,
  avatarText,
  imageSrc,
  videoSrc,
  imageAlt = "",
  videoAriaLabel = "Hero video",
  showDimOverlay = false,
  showBlur = true,
  textPosition = "bottom",
  ariaLabel = "Hero section",
  className = "",
  containerClassName = "",
  textBoxClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  tagClassName = "",
  buttonContainerClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
  avatarGroupClassName = "",
  mediaWrapperClassName = "",
  imageClassName = "",
  blurClassName = "",
  dimOverlayClassName = "",
  testimonialCardClassName = "",
  testimonialContentClassName = "",
  testimonialTextClassName = "",
  testimonialRatingClassName = "",
  testimonialAuthorClassName = "",
  testimonialAuthorImageClassName = "",
  testimonialAuthorNameClassName = "",
  testimonialAuthorHandleClassName = "",
}: HeroOverlayTestimonialProps) => {
  const theme = useTheme();
  const shouldUseLightText = shouldUseInvertedText(false, theme.cardStyle);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (!testimonialRotationInterval || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setAnimationKey((prev) => prev + 1);
    }, testimonialRotationInterval);

    return () => clearInterval(interval);
  }, [testimonialRotationInterval, testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      aria-label={ariaLabel}
      className={cls(
        "relative w-full h-svh overflow-hidden flex flex-col",
        textPosition === "top" ? "justify-start" : "justify-end",
        className
      )}
    >
      <div className={cls("absolute inset-0 w-full h-full", mediaWrapperClassName)}>
        {showDimOverlay && (
          <div className={cls("absolute top-0 left-0 w-full h-full bg-background/20 pointer-events-none select-none z-1", dimOverlayClassName)} />
        )}
        <MediaContent
          imageSrc={imageSrc}
          videoSrc={videoSrc}
          imageAlt={imageAlt}
          videoAriaLabel={videoAriaLabel}
          imageClassName={cls("w-full h-full object-cover !rounded-none", imageClassName)}
        />
      </div>

      {showBlur && (
        <div
          className={cls(
            "absolute z-10 backdrop-blur-sm opacity-100 pointer-events-auto select-none w-[150vw] h-[150vw] left-0 -translate-x-1/2",
            textPosition === "top" ? "top-0 -translate-y-1/2" : "bottom-0 translate-y-1/2",
            blurClassName
          )}
          style={{ maskImage: RADIAL_MASK_GRADIENT }}
          aria-hidden="true"
        />
      )}

      <div className={cls(
        "relative z-10 w-content-width mx-auto h-fit flex",
        textPosition === "top" ? "items-start pt-hero-page-padding-1_5" : "items-end pb-[var(--width-10)] md:pb-hero-page-padding",
        containerClassName
      )}>
        <TextBox
          title={title}
          description={description}
          tag={tag}
          tagIcon={tagIcon}
          tagAnimation={tagAnimation}
          buttons={buttons}
          buttonAnimation={buttonAnimation}
          avatars={avatars}
          avatarText={avatarText}
          avatarGroupClassName={avatarGroupClassName}
          className={cls(
            "flex flex-col gap-3 md:gap-3 text-background w-full md:w-1/2",
            textBoxClassName
          )}
          titleClassName={cls(
            "text-7xl 2xl:text-8xl font-medium text-balance text-left",
            titleClassName
          )}
          descriptionClassName={cls(
            "text-lg md:text-xl leading-tight text-left text-balance",
            descriptionClassName
          )}
          tagClassName={cls(
            "w-fit px-3 py-1 text-sm rounded-theme card text-foreground inline-flex items-center gap-2 mb-3",
            tagClassName
          )}
          buttonContainerClassName={cls("flex flex-wrap gap-4 mt-4 max-md:justify-start", buttonContainerClassName)}
          buttonClassName={cls("", buttonClassName)}
          buttonTextClassName={cls("text-base", buttonTextClassName)}
        />
      </div>

      {currentTestimonial && (
        <div className={cls(
          "flex absolute! z-10 bottom-4 left-4 right-4 md:left-auto md:bottom-8 md:right-8 md:max-w-3/10 2xl:max-w-25/100 card rounded-theme-capped p-4 md:p-6 flex-col justify-between gap-4 md:gap-5",
          testimonialCardClassName
        )}>
          <AnimationContainer key={animationKey} className="flex flex-col gap-5">
            <div className={cls("flex flex-col gap-5 items-start", testimonialContentClassName)}>
              <div className={cls("relative z-1 flex gap-1", testimonialRatingClassName)}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={cls(
                      "h-5 w-auto text-accent",
                      index < currentTestimonial.rating ? "fill-accent" : "fill-transparent"
                    )}
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              <p className={cls("relative z-1 text-lg leading-tight", shouldUseLightText ? "text-background" : "text-foreground", testimonialTextClassName)}>
                {currentTestimonial.testimonial}
              </p>
            </div>

            <TestimonialAuthor
              name={currentTestimonial.name}
              subtitle={currentTestimonial.handle}
              imageSrc={currentTestimonial.imageSrc}
              imageAlt={currentTestimonial.imageAlt}
              useInvertedBackground={false}
              className={testimonialAuthorClassName}
              imageClassName={testimonialAuthorImageClassName}
              nameClassName={testimonialAuthorNameClassName}
              subtitleClassName={testimonialAuthorHandleClassName}
            />
          </AnimationContainer>
        </div>
      )}
    </section>
  );
};

export default HeroOverlayTestimonial;
