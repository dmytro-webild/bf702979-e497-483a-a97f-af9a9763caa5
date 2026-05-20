"use client";

import { useRive, useStateMachineInput, Layout, Fit } from "@rive-app/react-canvas";
import { useTagEffects } from "./useTagEffects";

const STATE_MACHINE_NAME = "State Machine 1";
const HOVER_INPUT_NAME = "Hover";

const Tag = () => {
    const { shouldShow, handleMouseEnter, handleClick } = useTagEffects();

    const { rive, RiveComponent } = useRive({
        src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/watermark-bob2.riv",
        stateMachines: STATE_MACHINE_NAME,
        autoplay: true,
        layout: new Layout({
            fit: Fit.Contain,
        }),
    });

    const hoverInput = useStateMachineInput(rive, STATE_MACHINE_NAME, HOVER_INPUT_NAME);

    const handleTagClick = () => {
        window.open('https://webild.io', '_blank');
    };

    const onMouseEnter = () => {
        handleMouseEnter();
        if (hoverInput) {
            hoverInput.value = true;
        }
    };

    const onMouseLeave = () => {
        if (hoverInput) {
            hoverInput.value = false;
        }
    };

    if (!shouldShow) {
        return null;
    }

    return (
        <button
            className="fixed z-[99999] bottom-6 right-6 w-[160px] h-[92px] cursor-pointer"
            onClick={(e) => handleClick(e, handleTagClick)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <RiveComponent className="w-full h-full" />
        </button>
    );
};

export default Tag;
