"use client";

import Link from "next/link";

import { NAV_LINKS } from "@/features/profile/config/nav";

export function SectionJump() {
  return (
    <div className="fixed top-1/2 right-4 z-50 hidden -translate-y-1/2 lg:block">
      <div className="min-w-28 space-y-1 rounded-xl border border-edge bg-background/95 p-2 shadow-lg backdrop-blur">
        {NAV_LINKS.map((item) => (
          <Link
            key={item.href}
            href={`/${item.href}`}
            className="block rounded-md px-2 py-1.5 text-sm text-foreground hover:bg-accent"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
