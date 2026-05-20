"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import CardStack from "@/components/cardStack/CardStack";
import MediaContent from "@/components/shared/MediaContent";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, TitleSegment, ButtonAnimationType } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type FeatureCard = {
  id: string;
  title: string;
  descriptions: string[];
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
};

interface FeatureCardTwentySevenItemProps {
  title: string;
  descriptions: string[];
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const FeatureCardTwentySevenItem = ({
  title,
  descriptions,
  imageSrc,
  videoSrc,
  imageAlt = "",
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}: FeatureCardTwentySevenItemProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cls(
        "relative w-full h-full min-h-0 group [perspective:3000px] cursor-pointer",
        className
      )}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={cls(
          "relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]",
          isFlipped && "[transform:rotateY(180deg)]"
        )}
      >
        <div className="relative w-full h-full card rounded-theme-capped p-6 gap-6 flex flex-col [backface-visibility:hidden]">
          <div className="flex justify-between items-start">
            <h3 className={cls("text-2xl font-medium leading-tight", titleClassName)}>
              {title}
            </h3>
            <div className="h-[calc(var(--text-2xl)*1.25)] w-[calc(var(--text-2xl)*1.25)] aspect-square rounded-theme primary-button flex items-center justify-center shrink-0">
              <Plus className="h-1/2 w-1/2 text-primary-cta-text" />
            </div>
          </div>
          <div className="w-full aspect-square md:aspect-[10/11] flex items-center justify-center rounded-theme-capped overflow-hidden">
            <MediaContent
              imageSrc={imageSrc}
              videoSrc={videoSrc}
              imageAlt={imageAlt}
              imageClassName="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="absolute! inset-0 w-full h-full card rounded-theme-capped p-6 gap-6 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex justify-between items-start">
            <h3 className={cls("text-2xl font-medium leading-tight", titleClassName)}>
              {title}
            </h3>
            <div className="h-[calc(var(--text-2xl)*1.25)] w-[calc(var(--text-2xl)*1.25)] aspect-square rounded-theme primary-button flex items-center justify-center shrink-0">
              <Plus className="h-1/2 w-1/2 rotate-45 text-primary-cta-text" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            {descriptions.map((desc, index) => (
              <p key={index} className={cls("text-lg text-foreground/75 leading-tight", descriptionClassName)}>
                {desc}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardTwentySevenProps {
  features: FeatureCard[];
  animationType: CardAnimationType;
  title: string;
  titleSegments?: TitleSegment[];
  description: string;
  tag?: string;
  tagIcon?: LucideIcon;
  tagAnimation?: ButtonAnimationType;
  buttons?: ButtonConfig[];
  buttonAnimation?: ButtonAnimationType;
  textboxLayout: TextboxLayout;
  useInvertedBackground: InvertedBackground;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  cardClassName?: string;
  textBoxTitleClassName?: string;
  textBoxTitleImageWrapperClassName?: string;
  textBoxTitleImageClassName?: string;
  textBoxDescriptionClassName?: string;
  cardTitleClassName?: string;
  cardDescriptionClassName?: string;
  textBoxClassName?: string;
  textBoxTagClassName?: string;
  textBoxButtonContainerClassName?: string;
  textBoxButtonClassName?: string;
  textBoxButtonTextClassName?: string;
}

const FeatureCardTwentySeven = ({
  features,
  animationType,
  title,
  titleSegments,
  description,
  tag,
  tagIcon,
  tagAnimation = "opacity",
  buttons = [],
  buttonAnimation = "slide-up",
  textboxLayout,
  useInvertedBackground = false,
  ariaLabel = "Feature section",
  className = "",
  containerClassName = "",
  cardClassName = "",
  textBoxTitleClassName = "",
  textBoxTitleImageWrapperClassName = "",
  textBoxTitleImageClassName = "",
  textBoxDescriptionClassName = "",
  cardTitleClassName = "",
  cardDescriptionClassName = "",
  textBoxClassName = "",
  textBoxTagClassName = "",
  textBoxButtonContainerClassName = "",
  textBoxButtonClassName = "",
  textBoxButtonTextClassName = "",
}: FeatureCardTwentySevenProps) => {
  return (
    <CardStack
      mode="buttons"
      gridVariant="uniform-all-items-equal"
      animationType={animationType}
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
      className={className}
      containerClassName={containerClassName}
      textBoxClassName={textBoxClassName}
      titleClassName={textBoxTitleClassName}
      titleImageWrapperClassName={textBoxTitleImageWrapperClassName}
      titleImageClassName={textBoxTitleImageClassName}
      descriptionClassName={textBoxDescriptionClassName}
      tagClassName={textBoxTagClassName}
      buttonContainerClassName={textBoxButtonContainerClassName}
      buttonClassName={textBoxButtonClassName}
      buttonTextClassName={textBoxButtonTextClassName}
      ariaLabel={ariaLabel}
    >
      {features.map((feature, index) => (
        <FeatureCardTwentySevenItem
          key={`${feature.id}-${index}`}
          title={feature.title}
          descriptions={feature.descriptions}
          imageSrc={feature.imageSrc}
          videoSrc={feature.videoSrc}
          imageAlt={feature.imageAlt}
          className={cardClassName}
          titleClassName={cardTitleClassName}
          descriptionClassName={cardDescriptionClassName}
        />
      ))}
    </CardStack>
  );
};


export default FeatureCardTwentySeven;
