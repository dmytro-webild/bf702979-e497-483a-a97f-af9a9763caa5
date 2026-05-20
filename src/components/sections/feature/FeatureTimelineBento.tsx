"use client";

import CardList from "@/components/cardStack/CardList";
import Button from "@/components/button/Button";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { getButtonProps } from "@/lib/buttonUtils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import { BentoGlobe } from "@/components/bento/BentoGlobe";
import BentoIconInfoCards from "@/components/bento/BentoIconInfoCards";
import BentoAnimatedBarChart from "@/components/bento/BentoAnimatedBarChart";
import Bento3DStackCards from "@/components/bento/Bento3DStackCards";
import Bento3DTaskList, { type TaskItem } from "@/components/bento/Bento3DTaskList";
import BentoOrbitingIcons, { type OrbitingItem } from "@/components/bento/BentoOrbitingIcons";
import BentoMap from "@/components/bento/BentoMap";
import BentoMarquee from "@/components/bento/BentoMarquee";
import BentoLineChart from "@/components/bento/BentoLineChart/BentoLineChart";
import BentoPhoneAnimation, { type PhoneApp, type PhoneApps8 } from "@/components/bento/BentoPhoneAnimation";
import BentoChatAnimation, { type ChatExchange } from "@/components/bento/BentoChatAnimation";
import Bento3DCardGrid from "@/components/bento/Bento3DCardGrid";
import BentoRevealIcon from "@/components/bento/BentoRevealIcon";
import BentoTimeline, { type TimelineItem } from "@/components/bento/BentoTimeline";
import BentoMediaStack, { type MediaStackItem } from "@/components/bento/BentoMediaStack";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, ButtonAnimationType, TitleSegment, CardAnimationType } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

export type { PhoneApp, PhoneApps8, ChatExchange, TimelineItem, MediaStackItem, TaskItem, OrbitingItem };

export type BentoInfoItem = {
    icon: LucideIcon;
    label: string;
    value: string;
};

export type Bento3DItem = {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    detail: string;
};

type BaseFeatureCard = {
    title: string;
    description: string;
    buttons?: ButtonConfig[];
};

export type FeatureCard = BaseFeatureCard & (
    | {
        bentoComponent: "icon-info-cards";
        items: BentoInfoItem[];
    }
    | {
        bentoComponent: "3d-stack-cards";
        items: [Bento3DItem, Bento3DItem, Bento3DItem];
    }
    | {
        bentoComponent: "3d-task-list";
        bentoTitle: string;
        items: TaskItem[];
    }
    | {
        bentoComponent: "orbiting-icons";
        centerIcon: LucideIcon;
        items: OrbitingItem[];
    }
    | ({
        bentoComponent: "marquee";
        centerIcon: LucideIcon;
    } & (
            | { variant: "text"; texts: string[] }
            | { variant: "icon"; icons: LucideIcon[] }
        ))
    | {
        bentoComponent: "globe" | "animated-bar-chart" | "map" | "line-chart";
    }
    | {
        bentoComponent: "3d-card-grid";
        items: [{ name: string; icon: LucideIcon }, { name: string; icon: LucideIcon }, { name: string; icon: LucideIcon }, { name: string; icon: LucideIcon }];
        centerIcon: LucideIcon;
    }
    | {
        bentoComponent: "phone";
        statusIcon: LucideIcon;
        alertIcon: LucideIcon;
        alertTitle: string;
        alertMessage: string;
        apps: PhoneApps8;
    }
    | {
        bentoComponent: "chat";
        aiIcon: LucideIcon;
        userIcon: LucideIcon;
        exchanges: ChatExchange[];
        placeholder: string;
    }
    | {
        bentoComponent: "reveal-icon";
        icon: LucideIcon;
    }
    | {
        bentoComponent: "timeline";
        heading: string;
        subheading: string;
        items: [TimelineItem, TimelineItem, TimelineItem];
        completedLabel: string;
    }
    | {
        bentoComponent: "media-stack";
        items: [MediaStackItem, MediaStackItem, MediaStackItem];
    }
);

interface FeatureTimelineBentoProps {
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
    textBoxDescriptionClassName?: string;
    textBoxClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
    titleImageWrapperClassName?: string;
    titleImageClassName?: string;
    cardContentClassName?: string;
    stepNumberClassName?: string;
    cardTitleClassName?: string;
    cardDescriptionClassName?: string;
    bentoContainerClassName?: string;
    cardButtonClassName?: string;
    cardButtonTextClassName?: string;
}

const FeatureTimelineBento = ({
    features,
    animationType,
    title,
    titleSegments,
    description,
    tag,
    tagIcon,
    tagAnimation,
    buttons,
    buttonAnimation,
    textboxLayout,
    useInvertedBackground,
    ariaLabel = "Feature section",
    className = "",
    containerClassName = "",
    cardClassName = "",
    textBoxTitleClassName = "",
    textBoxDescriptionClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
    titleImageWrapperClassName = "",
    titleImageClassName = "",
    cardContentClassName = "",
    stepNumberClassName = "",
    cardTitleClassName = "",
    cardDescriptionClassName = "",
    bentoContainerClassName = "",
    cardButtonClassName = "",
    cardButtonTextClassName = "",
}: FeatureTimelineBentoProps) => {
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    const getBentoComponent = (feature: FeatureCard) => {
        switch (feature.bentoComponent) {
            case "globe":
                return (
                    <div className="relative w-full h-full min-h-0" style={{
                        maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to bottom, black 40%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to bottom, black 40%, transparent 100%)",
                        maskComposite: "intersect",
                        WebkitMaskComposite: "source-in"
                    }}>
                        <BentoGlobe className="w-full scale-150 mt-[15%]" />
                    </div>
                );
            case "icon-info-cards":
                return <BentoIconInfoCards items={feature.items} useInvertedBackground={useInvertedBackground} />;
            case "animated-bar-chart":
                return <BentoAnimatedBarChart />;
            case "3d-stack-cards":
                return <Bento3DStackCards cards={feature.items.map(item => ({ Icon: item.icon, title: item.title, subtitle: item.subtitle, detail: item.detail }))} useInvertedBackground={useInvertedBackground} />;
            case "3d-task-list":
                return <Bento3DTaskList title={feature.bentoTitle} items={feature.items} useInvertedBackground={useInvertedBackground} />;
            case "orbiting-icons":
                return <BentoOrbitingIcons centerIcon={feature.centerIcon} items={feature.items} useInvertedBackground={useInvertedBackground} />;
            case "marquee":
                return feature.variant === "text"
                    ? <BentoMarquee centerIcon={feature.centerIcon} variant="text" texts={feature.texts} useInvertedBackground={useInvertedBackground} />
                    : <BentoMarquee centerIcon={feature.centerIcon} variant="icon" icons={feature.icons} useInvertedBackground={useInvertedBackground} />;
            case "map":
                return <BentoMap useInvertedBackground={useInvertedBackground} />;
            case "line-chart":
                return <BentoLineChart useInvertedBackground={useInvertedBackground} />;
            case "3d-card-grid":
                return <Bento3DCardGrid items={feature.items} centerIcon={feature.centerIcon} useInvertedBackground={useInvertedBackground} />;
            case "phone":
                return <BentoPhoneAnimation statusIcon={feature.statusIcon} alertIcon={feature.alertIcon} alertTitle={feature.alertTitle} alertMessage={feature.alertMessage} apps={feature.apps} useInvertedBackground={useInvertedBackground} />;
            case "chat":
                return <BentoChatAnimation aiIcon={feature.aiIcon} userIcon={feature.userIcon} exchanges={feature.exchanges} placeholder={feature.placeholder} useInvertedBackground={useInvertedBackground} />;
            case "reveal-icon":
                return <BentoRevealIcon icon={feature.icon} useInvertedBackground={useInvertedBackground} />;
            case "timeline":
                return <BentoTimeline heading={feature.heading} subheading={feature.subheading} items={feature.items} completedLabel={feature.completedLabel} useInvertedBackground={useInvertedBackground} />;
            case "media-stack":
                return <BentoMediaStack items={feature.items} useInvertedBackground={useInvertedBackground} />;
        }
    };

    return (
        <CardList
            title={title}
            titleSegments={titleSegments}
            description={description}
            tag={tag}
            tagIcon={tagIcon}
            tagAnimation={tagAnimation}
            buttons={buttons}
            buttonAnimation={buttonAnimation}
            textboxLayout={textboxLayout}
            animationType={animationType}
            useInvertedBackground={useInvertedBackground}
            className={className}
            containerClassName={containerClassName}
            cardClassName={cardClassName}
            titleClassName={textBoxTitleClassName}
            descriptionClassName={textBoxDescriptionClassName}
            textBoxClassName={textBoxClassName}
            tagClassName={textBoxTagClassName}
            buttonContainerClassName={textBoxButtonContainerClassName}
            buttonClassName={textBoxButtonClassName}
            buttonTextClassName={textBoxButtonTextClassName}
            titleImageWrapperClassName={titleImageWrapperClassName}
            titleImageClassName={titleImageClassName}
            ariaLabel={ariaLabel}
        >
            {features.map((feature, index) => (
                <div
                    key={index}
                    className={cls("relative z-1 w-full min-h-0 h-full flex flex-col justify-between items-center p-6 gap-6 md:p-15 md:gap-15", index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse", cardContentClassName)}
                >
                    <div className="w-full md:w-1/2 min-w-0 h-fit md:h-full flex flex-col justify-center">
                        <div className="w-full min-w-0 flex flex-col gap-3 md:gap-5">
                            <div
                                className={cls(
                                    "h-8 w-[var(--height-8)] primary-button text-primary-cta-text rounded-theme flex items-center justify-center",
                                    stepNumberClassName
                                )}
                            >
                                <p className="text-sm truncate">
                                    {index + 1}
                                </p>
                            </div>
                            <h2 className={cls("mt-1 text-4xl md:text-5xl font-medium leading-[1.15] text-balance", shouldUseLightText && "text-background", cardTitleClassName)}>
                                {feature.title}
                            </h2>
                            <p className={cls("text-base leading-[1.15] text-balance", shouldUseLightText ? "text-background" : "text-foreground", cardDescriptionClassName)}>
                                {feature.description}
                            </p>
                            {feature.buttons && feature.buttons.length > 0 && (
                                <div className="flex flex-wrap gap-3 max-md:justify-center">
                                    {feature.buttons.slice(0, 2).map((button, btnIndex) => (
                                        <Button key={`${button.text}-${btnIndex}`} {...getButtonProps(button, btnIndex, theme.defaultButtonVariant, cardButtonClassName, cardButtonTextClassName)} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div
                        className={cls(
                            "relative w-full md:w-1/2 aspect-square overflow-hidden rounded-theme-capped secondary-button p-5",
                            bentoContainerClassName
                        )}
                    >
                        <div className="relative w-full h-full overflow-hidden mask-soft-edges">
                            {getBentoComponent(feature)}
                        </div>
                    </div>
                </div>
            ))}
        </CardList>
    );
};


export default FeatureTimelineBento;
