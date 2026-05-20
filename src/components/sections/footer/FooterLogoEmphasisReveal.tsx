"use client";

import { useRef, useEffect, useState } from "react";
import FooterLogoEmphasis from "./FooterLogoEmphasis";
import { cls } from "@/lib/utils";

interface FooterColumn {
  items: Array<{
    label: string;
    href?: string;
    onClick?: () => void;
  }>;
}

interface FooterLogoEmphasisRevealProps {
  columns: FooterColumn[];
  logoText: string;
  ariaLabel?: string;
  className?: string;
  wrapperClassName?: string;
  containerClassName?: string;
  footerClassName?: string;
  footerContainerClassName?: string;
  logoClassName?: string;
  columnsClassName?: string;
  columnClassName?: string;
  itemClassName?: string;
  iconClassName?: string;
  buttonClassName?: string;
}

const FooterLogoEmphasisReveal = ({
  columns,
  logoText,
  ariaLabel,
  className = "",
  wrapperClassName = "",
  containerClassName = "",
  footerClassName = "",
  footerContainerClassName = "",
  logoClassName = "",
  columnsClassName = "",
  columnClassName = "",
  itemClassName = "",
  iconClassName = "",
  buttonClassName = "",
}: FooterLogoEmphasisRevealProps) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        const height = footerRef.current.offsetHeight;
        setFooterHeight(height);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    const currentFooter = footerRef.current;

    if (currentFooter) {
      resizeObserver.observe(currentFooter);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section
      className={cls("relative z-0 w-full mt-20", className)}
      style={{
        height: footerHeight ? `${footerHeight}px` : "auto",
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      <div
        className={cls("fixed bottom-0 w-full flex items-center justify-center overflow-hidden", wrapperClassName)}
        style={{ height: footerHeight ? `${footerHeight}px` : "auto" }}
      >
        <div ref={footerRef} className={cls("w-full", containerClassName)}>
          <FooterLogoEmphasis
            columns={columns}
            logoText={logoText}
            ariaLabel={ariaLabel}
            className={cls("mt-0", footerClassName)}
            containerClassName={footerContainerClassName}
            logoClassName={logoClassName}
            columnsClassName={columnsClassName}
            columnClassName={columnClassName}
            itemClassName={itemClassName}
            iconClassName={iconClassName}
            buttonClassName={buttonClassName}
          />
        </div>
      </div>
    </section>
  );
};


export default FooterLogoEmphasisReveal;
