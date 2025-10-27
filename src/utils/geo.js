// Pass latitude or longitude for parsing the number to 6 digits
export const fmt = (n) => Number(n).toFixed(6);
// Pass degree to get the cardinal/direction
export const toCardinal = (deg) => {
  const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
  return dirs[Math.round((deg % 360) / 45)];
};
// For generating random id
export const nowISO = () => new Date().toISOString();
