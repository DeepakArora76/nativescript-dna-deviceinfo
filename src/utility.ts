export function round(value: number, precision: number): number {
  const multiplier = 10 ** (precision || 0);
  return Math.round(value * multiplier) / multiplier;
}