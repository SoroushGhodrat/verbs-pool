import { Box, ListItemButton, ListItemText, Typography } from "@mui/material";
import { generateAlphabet } from "../util/helper";
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const DataTableAlphabetsBox = () => {
  const englishLetters = useMemo(() => generateAlphabet("english"), []);
  const norwegianLetters = useMemo(() => generateAlphabet("norwegian"), []);

  const { language } = useLanguage();
  const [currentLanguageLetters, setCurrentLanguageLetters] = useState<string[]>([]);

  useEffect(() => {
    // Set default language to Norwegian if no language is set or if it's set to Norwegian
    if (language === "Norsk" || !language) {
      setCurrentLanguageLetters(norwegianLetters);
    } else if (language === "English") {
      setCurrentLanguageLetters(englishLetters);
    }
  }, [language, englishLetters, norwegianLetters]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography align="center" m={5} variant="h3" sx={{ textTransform: "capitalize" }}>
        {language === "Norsk" ? "vanlige norske verbene" : "common english verbs"}
      </Typography>

      <Box sx={{ borderRadius: "10px", backgroundColor: "#d7e8f4" }} p={2}>
        <Typography pb={2} variant="h6" textAlign="center">
          {language === "Norsk"
            ? "Trykk på et alfabet for å hoppe til gruppen"
            : "Press a letter to jump to the group"}
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={2}>
          {currentLanguageLetters.map((letter) => (
            <ListItemButton key={letter} component="a" href={`#${letter}`}>
              <ListItemText primary={letter} />
            </ListItemButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DataTableAlphabetsBox;
