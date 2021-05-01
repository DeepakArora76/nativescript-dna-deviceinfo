export function round(value, precision) {
    const multiplier = 10 ** (precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
//# sourceMappingURL=utility.js.map