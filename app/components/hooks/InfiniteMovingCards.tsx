"use client";

import { cn } from "../../lib/utils";
import React, { useCallback, useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    id: number;
    image?: React.ReactNode; // Accepts an image tag or any React node
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

 
  const [start, setStart] = useState(false);
const addAnimation = useCallback(() => {
  if (containerRef.current && scrollerRef.current) {
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      if (scrollerRef.current) {
        scrollerRef.current.appendChild(duplicatedItem);
      }
    });
    getDirection();
    getSpeed();
    setStart(true);
  }
}, []);
 useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden rounded-3xl  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] cursor-pointer",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full  shrink-0 flex-nowrap gap-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="relative  shrink-0 rounded-2xl w-50 grayscale-00 "
            key={item.id}
          >
            <blockquote>
              {/* <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1  "
              ></div> */}
              {/* Render image if provided */}
              {item.image && (
                <div className="mb-4 flex justify-center grayscale-100">
                  {item.image}
                </div>
              )}
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
