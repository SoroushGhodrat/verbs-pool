export const goToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const randonColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

export const generateAlphabet = (language: "english" | "norwegian"): string[] => {
  const baseAlphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));

  if (language === "norwegian") {
    return baseAlphabet.concat(["Æ", "Ø", "Å"]);
  }

  return baseAlphabet;
};
