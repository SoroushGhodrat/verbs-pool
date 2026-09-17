export const goToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const randomColor = (opacity: number = 0.1) => {
  const color = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  const alpha = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, '0');
  return `#${color}${alpha}`;
};
