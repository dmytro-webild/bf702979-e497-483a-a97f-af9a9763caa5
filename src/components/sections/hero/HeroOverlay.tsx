"use client";

import TextBox from "@/components/Textbox";
import MediaContent from "@/components/shared/MediaContent";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, ButtonAnimationType } from "@/types/button";
import type { Avatar } from "@/components/shared/AvatarGroup";

const RADIAL_MASK_GRADIENT = "radial-gradient(circle, black 20%, transparent 70%)";

interface HeroOverlayProps {
  title: string;
  description: string;
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
}

const HeroOverlay = ({
  title,
  description,
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
}: HeroOverlayProps) => {
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
          <div className={cls("absolute top-0 left-0 w-full h-full bg-background/20 pointer-events-none select-none", dimOverlayClassName)} />
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
        textPosition === "top" ? "items-start pt-hero-page-padding" : "items-end pb-[var(--width-10)] md:pb-hero-page-padding",
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
            "text-lg md:text-xl leading-[1.2] text-left",
            descriptionClassName
          )}
          tagClassName={cls(
            "w-fit px-3 py-1 text-sm rounded-theme card text-foreground inline-flex items-center gap-2 mb-3",
            tagClassName
          )}
          buttonContainerClassName={cls("flex flex-wrap gap-4 max-md:justify-center mt-4", buttonContainerClassName)}
          buttonClassName={cls("", buttonClassName)}
          buttonTextClassName={cls("text-base", buttonTextClassName)}
        />
      </div>
    </section>
  );
};

export default HeroOverlay;
