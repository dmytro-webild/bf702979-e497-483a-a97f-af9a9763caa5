"use client";

import TextBox from "@/components/Textbox";
import MediaContent from "@/components/shared/MediaContent";
import MediaBadge, { type MediaBadgeProps } from "@/components/shared/MediaBadge";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import { useButtonAnimation } from "@/components/hooks/useButtonAnimation";
import type { LucideIcon } from "lucide-react";
import type { InvertedBackground } from "@/providers/themeProvider/config/constants";
import type { ButtonAnimationType } from "@/types/button";

interface Metric {
  value: string;
  title: string;
}

interface MetricSplitMediaAboutProps {
  title: string;
  description: string;
  tag?: string;
  tagIcon?: LucideIcon;
  tagAnimation?: ButtonAnimationType;
  metrics: Metric[];
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  videoAriaLabel?: string;
  mediaBadge?: MediaBadgeProps;
  mediaAnimation?: ButtonAnimationType;
  metricsAnimation?: ButtonAnimationType;
  useInvertedBackground: InvertedBackground;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  gridClassName?: string;
  leftColumnClassName?: string;
  rightColumnClassName?: string;
  textBoxClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  tagClassName?: string;
  metricsContainerClassName?: string;
  metricCardClassName?: string;
  metricValueClassName?: string;
  metricTitleClassName?: string;
  mediaWrapperClassName?: string;
  imageClassName?: string;
}

const MetricSplitMediaAbout = ({
  title,
  description,
  tag,
  tagIcon,
  tagAnimation = "opacity",
  metrics,
  imageSrc,
  videoSrc,
  imageAlt = "",
  videoAriaLabel = "About section video",
  mediaBadge,
  mediaAnimation = "none",
  metricsAnimation = "none",
  useInvertedBackground = false,
  ariaLabel = "About section",
  className = "",
  containerClassName = "",
  gridClassName = "",
  leftColumnClassName = "",
  rightColumnClassName = "",
  textBoxClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  tagClassName = "",
  metricsContainerClassName = "",
  metricCardClassName = "",
  metricValueClassName = "",
  metricTitleClassName = "",
  mediaWrapperClassName = "",
  imageClassName = "",
}: MetricSplitMediaAboutProps) => {
  const theme = useTheme();
  const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);
  const { containerRef: mediaContainerRef } = useButtonAnimation({ animationType: mediaAnimation });
  const { containerRef: metricsContainerRef } = useButtonAnimation({ animationType: metricsAnimation });

  return (
    <section
      aria-label={ariaLabel}
      className={cls(
        "relative py-20 w-full",
        useInvertedBackground && "bg-foreground",
        className
      )}
    >
      <div className={cls("w-content-width mx-auto", containerClassName)}>
        <div className={cls("grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10", gridClassName)}>
          <div className={cls("flex flex-col gap-6 md:gap-10", leftColumnClassName)}>
            <TextBox
              title={title}
              description={description}
              tag={tag}
              tagIcon={tagIcon}
              tagAnimation={tagAnimation}
              useInvertedBackground={useInvertedBackground}
              className={cls("gap-3 md:gap-3", textBoxClassName)}
              titleClassName={cls("text-6xl font-medium text-balance", titleClassName)}
              descriptionClassName={cls("text-lg leading-tight text-balance", descriptionClassName)}
              tagClassName={cls("mb-1", tagClassName)}
            />
            {metrics && metrics.length > 0 && (
              <div ref={metricsContainerRef} className={cls(
                "grid gap-6 md:gap-4",
                metrics.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2",
                metricsContainerClassName
              )}>
                {metrics.slice(0, 2).map((metric, index) => (
                  <div
                    key={index}
                    className={cls(
                      "card rounded-theme-capped p-6 flex flex-col gap-8 md:gap-16",
                      metricCardClassName
                    )}
                  >
                    <span
                      className={cls(
                        "text-6xl font-medium truncate",
                        shouldUseLightText ? "text-background" : "text-foreground",
                        metricValueClassName
                      )}
                    >
                      {metric.value}
                    </span>
                    <h3
                      className={cls(
                        "text-lg",
                        shouldUseLightText ? "text-background" : "text-foreground",
                        metricTitleClassName
                      )}
                    >
                      {metric.title}
                    </h3>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={cls("relative aspect-square md:aspect-auto md:h-0 md:min-h-full", mediaBadge ? "overflow-visible" : "overflow-hidden", rightColumnClassName)}>
            <div ref={mediaContainerRef} className={cls(
              "absolute inset-0 w-full h-full overflow-hidden card rounded-theme-capped",
              mediaWrapperClassName
            )}>
              <MediaContent
                imageSrc={imageSrc}
                videoSrc={videoSrc}
                imageAlt={imageAlt}
                videoAriaLabel={videoAriaLabel}
                imageClassName={cls("w-full h-full object-cover", imageClassName)}
              />
            </div>
            {mediaBadge && <MediaBadge {...mediaBadge} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricSplitMediaAbout;
