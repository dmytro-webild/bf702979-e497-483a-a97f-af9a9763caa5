"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { cls } from "@/lib/utils";
import { useButtonClick } from "@/components/button/useButtonClick";

interface FeatureCardTwentyNineItemData {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  titleImageSrc: string;
  buttonText: string;
  buttonHref?: string;
}

interface FeatureCardTwentyNineItemProps {
  item: FeatureCardTwentyNineItemData;
  itemNumber: number;
  isActive?: boolean;
  onItemClick?: () => void;
  className?: string;
  itemContentClassName?: string;
  itemTitleClassName?: string;
  itemDescriptionClassName?: string;
}

const MASK_GRADIENT = "linear-gradient(to bottom, transparent, black 60%)";

const FeatureCardTwentyNineItem = forwardRef<HTMLDivElement, FeatureCardTwentyNineItemProps>(
  (
    {
        item,
        itemNumber,
        isActive = false,
        onItemClick,
        className = "",
        itemContentClassName = "",
        itemTitleClassName = "",
        itemDescriptionClassName = "",
      },
      ref
    ) => {
      const handleButtonClick = useButtonClick(item.buttonHref);

      return (
        <div
          ref={ref}
          className={cls(
            "feature-card-twenty-nine-item relative overflow-hidden h-full rounded-theme-capped group",
            isActive && "is-active",
            className
          )}
          role="article"
          aria-label={`${item.title} - Feature ${itemNumber}`}
          tabIndex={0}
          onClick={onItemClick}
        >
          <div
            className="absolute top-6 right-6 z-10"
            onClick={(e) => {
              e.stopPropagation();
              handleButtonClick();
            }}
          >
            <div className="primary-button rounded-theme px-4 py-2 cursor-pointer">
              <p className="text-primary-cta-text text-sm font-medium">
                {item.buttonText}
              </p>
            </div>
          </div>

          <Image
            src={item.imageSrc}
            alt={item.imageAlt || item.title}
            width={1920}
            height={1080}
            className="relative z-1 object-cover rounded-theme-capped h-full w-full  "
            unoptimized={item.imageSrc.startsWith('http') || item.imageSrc.startsWith('//')}
            aria-hidden={item.imageAlt === ""}
          />

          <div
            className="absolute z-10 bottom-0 left-0 right-0 h-30 backdrop-blur-xl opacity-100"
            style={{ maskImage: MASK_GRADIENT }}
            aria-hidden="true"
          />

          <div
            className="feature-card-twenty-nine-content-wrapper absolute z-20 transition-all duration-400 ease-out flex flex-col gap-2 group-hover:[transform:translateY(var(--hover-translate-y))]"
            style={{
              top: "var(--content-top-position)",
              left: "calc((var(--vw-1_5) * 1.5))",
              width: "calc(100% - (var(--vw-1_5) * 3))",
            }}
          >
            <div className="feature-card-twenty-nine-title-row flex items-center gap-2">
              <div className="h-[calc(var(--text-xl)*1.75)] aspect-square secondary-button p-px rounded-theme overflow-hidden flex-shrink-0">
                <Image
                  src={item.titleImageSrc}
                  alt=""
                  width={48}
                  height={48}
                  className="w-full h-full object-cover rounded-theme"
                  unoptimized={item.titleImageSrc.startsWith('http') || item.titleImageSrc.startsWith('//')}
                  aria-hidden="true"
                />
              </div>
              <h2
                className={cls(
                  "feature-card-twenty-nine-title font-semibold truncate leading-[110%] transition-colors text-background group-hover:text-foreground",
                  itemTitleClassName
                )}
              >
                {item.title}
              </h2>
              <div className="h-[calc(var(--text-xl)*1.25)] aspect-square flex-shrink-0">
                <Image
                  src="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/icons/verified-badge.webp"
                  alt="Verified"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div
              className="feature-card-twenty-nine-description-wrapper transition-all duration-400 ease-out opacity-0 group-hover:opacity-100"
            >
              <p
                className={cls("feature-card-twenty-nine-description leading-[120%] w-full text-foreground", itemDescriptionClassName)}
              >
                {item.description}
              </p>
            </div>
          </div>

          <div
            className={cls(
              "feature-card-twenty-nine-reveal-bg !absolute left-0 bottom-0 card backdrop-blur-xs z-10 rounded-theme-capped transition-all duration-400 ease-out translate-y-full right-0 group-hover:translate-y-0 group-hover:left-[calc(var(--vw-1_5)*0.75)] group-hover:bottom-[calc(var(--vw-1_5)*0.75)] group-hover:right-[calc(var(--vw-1_5)*0.75)]",
              itemContentClassName
            )}
            style={{
              height: "var(--reveal-bg-height)",
            }}
          ></div>
        </div>
    );
  }
);

FeatureCardTwentyNineItem.displayName = "FeatureCardTwentyNineItem";

export default FeatureCardTwentyNineItem;
