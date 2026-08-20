"use client";

import { localize, pageCopy, type Locale } from "@/resources";
import { ProofStrip } from "@/components/motion/ProofStrip";

export function HomeProof({
  locale,
  projectCount,
}: {
  locale: Locale;
  projectCount: number;
}) {
  const copy = pageCopy.home;

  return (
    <ProofStrip
      className="home-proof-strip"
      items={[
        { value: 3, suffix: "+", label: localize(copy.proofYears, locale), brand: true },
        { value: projectCount, label: localize(copy.proofProjects, locale) },
        { value: 2, label: localize(copy.proofDelivery, locale) },
      ]}
    />
  );
}
