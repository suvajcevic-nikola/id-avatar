export const simpleHash = (str: string) => {
  return (
    str.split("").reduce((hash, char) => (hash ^ char.charCodeAt(0)) * 5, 5) >>>
    2
  );
};

export const avatarSvgString = (input: string, color: string) => {
  const hash = simpleHash(input);
  const hue = hash % 360;
  const complementaryHue = (hue + 180) % 360;
  const backgroundColor = `hsl(${complementaryHue}, 100%, 50%)`;
  let identicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 5">`;
  identicon += `<rect width="5" height="5" fill="${backgroundColor}" />`;
  for (let i = 0; i < 25; i++) {
    if (hash & (1 << i % 15)) {
      identicon += `<rect x="${(i % 5) * 0.6 + 1}" y="${Math.floor(i / 5) * 0.6 + 1}" width="0.6" height="0.6" fill="${color}"/>`;
    }
  }
  identicon += "</svg>";
  return identicon;
};
