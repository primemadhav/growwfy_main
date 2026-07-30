"use client";

import { motion } from "motion/react";
import React from "react";

interface TimelineContentProps {
  children?: React.ReactNode;
  animationNum?: number;
  timelineRef?: React.RefObject<any>;
  customVariants?: any;
  className?: string;
  as?: keyof typeof motion | string;
  key?: React.Key | null | undefined;
}

export function TimelineContent({
  children,
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  as = "div",
}: TimelineContentProps) {
  // Use appropriate motion component depending on "as" prop
  const Component = (motion as any)[as] || motion.div;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={animationNum}
      variants={customVariants}
      className={className}
    >
      {children}
    </Component>
  );
}
