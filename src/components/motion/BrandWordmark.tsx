"use client";

import { Text } from "@once-ui-system/core";
import { motion, useReducedMotion } from "motion/react";
import { person } from "@/resources";
import { wordmarkTransition } from "./tokens";

export function BrandWordmark() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="portfolio-wordmark-motion"
      initial={reduced ? false : { letterSpacing: "0.16em", opacity: 0.4 }}
      animate={{ letterSpacing: "0.1em", opacity: 1 }}
      transition={wordmarkTransition}
    >
      <Text className="portfolio-wordmark" variant="label-strong-m">
        {person.brand}
      </Text>
    </motion.div>
  );
}
