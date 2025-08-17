"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/cn";

interface RangeSelectorProps {
  value: string;
  onChange: (range: string) => void;
  className?: string;
}

const ranges = [
  { value: "last_7_days", label: "7 Days" },
  { value: "last_30_days", label: "30 Days" },
  { value: "last_6_months", label: "6 Months" },
  { value: "last_year", label: "Year" },
  { value: "all_time", label: "All Time" },
];

export function RangeSelector({
  value,
  onChange,
  className,
}: RangeSelectorProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {ranges.map((range) => {
        const isActive = value === range.value;

        return (
          <motion.button
            key={range.value}
            onClick={() => onChange(range.value)}
            className={cn(
              "relative rounded-md border px-3 py-1.5 font-mono text-sm transition-colors",
              isActive
                ? "border-foreground bg-foreground text-background"
                : "border-edge bg-background text-foreground hover:border-foreground/40"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {range.label}

            {isActive && (
              <motion.div
                layoutId="activeRange"
                className="absolute inset-0 -z-10 rounded-md bg-foreground"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
