import { BrandContextMenu } from "@/components/brand-context-menu";
import { Suryansh4424Mark } from "@/components/suryansh4424-mark";
import { cn } from "@/lib/cn";

export function AugusttCover() {
  return (
    <BrandContextMenu>
      <div
        className={cn(
          "aspect-2/1 border-x border-edge select-none sm:aspect-3/1",
          "flex items-center justify-center",
          "screen-line-before screen-line-after before:-top-px after:-bottom-px",
          "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
        )}
      >
        <Suryansh4424Mark className="h-1/4 w-auto" />
      </div>
    </BrandContextMenu>
  );
}
