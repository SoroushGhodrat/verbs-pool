import { Box, ListItemButton, ListItemText, Typography } from "@mui/material";

const DataTableAlphabetsBox = () => {
  const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65)).concat([
    "Æ",
    "Ø",
    "Å",
  ]);
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
<Typography align='center' m={5} variant="h3" sx={{ textTransform: "capitalize" }}>
  mest brukte norske verbene
</Typography>

      <Box sx={{ borderRadius: "10px", backgroundColor: "#d7e8f4" }} p={2}>
        <Typography pb={2} variant="h6" textAlign="center">
          Trykk på et alfabet for å hoppe til gruppen
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={2}>
          {letters.map((letter) => (
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
