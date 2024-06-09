export const goToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const randonColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
