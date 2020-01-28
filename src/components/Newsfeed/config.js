const percent = (side, gap) => (side / (2 * side + gap)) * 100;
const countLargeSide = (side, gap) => side * 2 + gap;

const gap = 40;
const side = 180;

export const sideLengthMedium = `${side / 16}em`;
export const sideLengthLarge = `${countLargeSide(side, gap) / 16}em`;
export const gapLength = `${gap / 16}em`;
export const imgPercent = `${percent(side, gap)}%`;
export const textPercent = `${100 - percent(side, gap)}%`;
