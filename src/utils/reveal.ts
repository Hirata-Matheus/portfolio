import type { CSSProperties } from "vue";

export function getRevealDelayStyle(index: number, step = 80, base = 0): CSSProperties {
  return {
    "--reveal-delay": `${base + index * step}ms`,
  } as CSSProperties;
}
