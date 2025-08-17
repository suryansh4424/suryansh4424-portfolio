export function Suryansh4424Mark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 44 20"
      {...props}
    >
      {/* S */}
      <rect x="0" width="16" height="4" fill="currentColor" />
      <rect x="0" y="0" width="4" height="8" fill="currentColor" />
      <rect x="0" y="8" width="16" height="4" fill="currentColor" />
      <rect x="12" y="12" width="4" height="8" fill="currentColor" />
      <rect x="0" y="16" width="16" height="4" fill="currentColor" />

      {/* R */}
      <rect x="24" width="12" height="4" fill="currentColor" />
      <rect x="24" y="0" width="4" height="20" fill="currentColor" />
      <rect x="36" y="0" width="4" height="8" fill="currentColor" />
      <rect x="24" y="8" width="12" height="4" fill="currentColor" />
      <rect x="28" y="12" width="4" height="4" fill="currentColor" />
      <rect x="32" y="16" width="8" height="4" fill="currentColor" />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128">
      <rect x="0" width="16" height="4" fill="${color}" />
      <rect x="0" y="0" width="4" height="8" fill="${color}" />
      <rect x="0" y="8" width="16" height="4" fill="${color}" />
      <rect x="12" y="12" width="4" height="8" fill="${color}" />
      <rect x="0" y="16" width="16" height="4" fill="${color}" />
      <rect x="24" width="12" height="4" fill="${color}" />
      <rect x="24" y="0" width="4" height="20" fill="${color}" />
      <rect x="36" y="0" width="4" height="8" fill="${color}" />
      <rect x="24" y="8" width="12" height="4" fill="${color}" />
      <rect x="28" y="12" width="4" height="4" fill="${color}" />
      <rect x="32" y="16" width="8" height="4" fill="${color}" /></svg>`;
}
