"use client";

import React, { useEffect,  useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import CardStackTextBox from "../../CardStackTextBox";
import { useCardAnimation } from "../../hooks/useCardAnimation";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, ButtonAnimationType, CardAnimationType, TitleSegment } from "../../types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

interface TimelineProcessFlowItem {
  content: React.ReactNode;
  media: React.ReactNode;
  reverse: boolean;
}

interface TimelineProcessFlowProps {
  items: TimelineProcessFlowItem[];
  title: string;
  titleSegments?: TitleSegment[];
  description: string;
  tag?: string;
  tagIcon?: LucideIcon;
  tagAnimation?: ButtonAnimationType;
  buttons?: ButtonConfig[];
  buttonAnimation?: ButtonAnimationType;
  textboxLayout: TextboxLayout;
  animationType: CardAnimationType;
  useInvertedBackground?: InvertedBackground;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  textBoxClassName?: string;
  textBoxTitleClassName?: string;
  textBoxDescriptionClassName?: string;
  textBoxTagClassName?: string;
  textBoxButtonContainerClassName?: string;
  textBoxButtonClassName?: string;
  textBoxButtonTextClassName?: string;
  itemClassName?: string;
  mediaWrapperClassName?: string;
  numberClassName?: string;
  contentWrapperClassName?: string;
  gapClassName?: string;
  titleImageWrapperClassName?: string;
  titleImageClassName?: string;
}

const TimelineProcessFlow = ({
  items,
  title,
  titleSegments,
  description,
  tag,
  tagIcon,
  tagAnimation,
  buttons,
  buttonAnimation,
  textboxLayout,
  animationType,
  useInvertedBackground,
  ariaLabel = "Timeline process flow section",
  className = "",
  containerClassName = "",
  textBoxClassName = "",
  textBoxTitleClassName = "",
  textBoxDescriptionClassName = "",
  textBoxTagClassName = "",
  textBoxButtonContainerClassName = "",
  textBoxButtonClassName = "",
  textBoxButtonTextClassName = "",
  itemClassName = "",
  mediaWrapperClassName = "",
  numberClassName = "",
  contentWrapperClassName = "",
  gapClassName = "",
  titleImageWrapperClassName = "",
  titleImageClassName = "",
}: TimelineProcessFlowProps) => {
  const { itemRefs } = useCardAnimation({ animationType, itemCount: items.length, useIndividualTriggers: true });
  const [isMdScreen, setIsMdScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".timeline-line-fill",
      { yPercent: -100 },
      {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      className={cls(
        "relative py-20 w-full",
        useInvertedBackground && "bg-foreground",
        className
      )}
      aria-label={ariaLabel}
    >
      <div className={cls("w-full flex flex-col gap-6", containerClassName)}>
        <div className="relative w-content-width mx-auto">
          <CardStackTextBox
            title={title}
            titleSegments={titleSegments}
            description={description}
            tag={tag}
            tagIcon={tagIcon}
            tagAnimation={tagAnimation}
            buttons={buttons}
            buttonAnimation={buttonAnimation}
            textboxLayout={textboxLayout}
            useInvertedBackground={useInvertedBackground}
            textBoxClassName={textBoxClassName}
            titleClassName={textBoxTitleClassName}
            descriptionClassName={textBoxDescriptionClassName}
            tagClassName={textBoxTagClassName}
            buttonContainerClassName={textBoxButtonContainerClassName}
            buttonClassName={textBoxButtonClassName}
            buttonTextClassName={textBoxButtonTextClassName}
            titleImageWrapperClassName={titleImageWrapperClassName}
            titleImageClassName={titleImageClassName}
          />
        </div>
        <div className="timeline-container relative w-full">
          {/* Mobile line - outside ol for correct positioning */}
          <div className="md:hidden pointer-events-none absolute top-0 right-[var(--width-10)] w-px h-full z-10 overflow-hidden">
            <div className="relative timeline-line h-full bg-foreground overflow-hidden">
              <div className="timeline-line-fill w-full h-full bg-accent" />
            </div>
          </div>
          <ol className={cls("relative w-content-width mx-auto flex flex-col gap-10 md:gap-20 md:p-6", isMdScreen && "card", "md:rounded-theme-capped", gapClassName)}>
            {/* Desktop line - inside ol for correct stacking context */}
            <div className="hidden md:block pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-px h-full z-0 overflow-hidden py-6">
              <div className="relative timeline-line h-full bg-foreground overflow-hidden">
                <div className="timeline-line-fill w-full h-full bg-accent" />
              </div>
            </div>
            {items.map((item, index) => (
              <li
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={cls(
                  "relative z-10 w-full flex flex-col gap-6 md:gap-0 md:flex-row justify-between",
                  item.reverse && "flex-col md:flex-row-reverse",
                  itemClassName
                )}
              >
                <div
                  className={cls("relative w-70 md:w-[calc(50%-var(--width-5))]", mediaWrapperClassName)}
                >
                  {item.media}
                </div>
                <div
                  className={cls(
                    "absolute! top-1/2 right-[calc(var(--height-8)/-2)] md:right-auto md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 h-8 aspect-square rounded-theme flex items-center justify-center z-50 primary-button",
                    numberClassName
                  )}
                >
                  <p className="text-sm text-primary-cta-text">{index + 1}</p>
                </div>
                <div className={cls("relative w-70 md:w-[calc(50%-var(--width-5))]", contentWrapperClassName)}>
                  {item.content}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};


export default TimelineProcessFlow;
