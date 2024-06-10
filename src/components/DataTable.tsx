import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import { goToTop, randonColor } from "../util/helper";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Zoom,
  useMediaQuery,
  Theme,
  Grid,
  IconButton,
  Box,
} from "@mui/material";
import {
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
  Y,
  Z,
  Ø,
  verbs,
} from "../data/no";
import DataTableAlphabetsBox from "./DataTableAlphabetsBox";
import { HtmlTooltip } from "../styled/Styled";
import DataTableSearchBox from "./DataTableSearchBox";
// import { verbs } from "../data/no";

type Verb = {
  infinitiv?: string;
  presens?: string;
  preteritum?: string;
  perfektum?: string;
  imperative?: string;
  meaning?: string;
}[];

const groups = [
  { data: A, label: "Gruppe A" },
  { data: B, label: "Gruppe B" },
  { data: C, label: "Gruppe C" },
  { data: D, label: "Gruppe D" },
  { data: E, label: "Gruppe E" },
  { data: F, label: "Gruppe F" },
  { data: G, label: "Gruppe G" },
  { data: H, label: "Gruppe H" },
  { data: I, label: "Gruppe I" },
  { data: J, label: "Gruppe J" },
  { data: K, label: "Gruppe K" },
  { data: L, label: "Gruppe L" },
  { data: M, label: "Gruppe M" },
  { data: N, label: "Gruppe N" },
  { data: O, label: "Gruppe O" },
  { data: P, label: "Gruppe P" },
  { data: Q, label: "Gruppe Q" },
  { data: R, label: "Gruppe R" },
  { data: S, label: "Gruppe S" },
  { data: T, label: "Gruppe T" },
  { data: U, label: "Gruppe U" },
  { data: V, label: "Gruppe V" },
  { data: W, label: "Gruppe W" },
  { data: X, label: "Gruppe X" },
  { data: Y, label: "Gruppe Y" },
  { data: Z, label: "Gruppe Z" },
  { data: Ø, label: "Gruppe Ø" },
];

const renderTableBody = (verbs: Verb) => {
  return verbs.map((row) => (
    <TableRow key={uuidv4()}>
      <TableCell>{row.infinitiv}</TableCell>
      <TableCell>{row.presens}</TableCell>
      <TableCell>{row.preteritum}</TableCell>
      <TableCell>har {row.perfektum}</TableCell>
      <TableCell>{row.imperative}</TableCell>
      <TableCell>{row.meaning}</TableCell>
    </TableRow>
  ));
};

const renderTable = (verbs: Verb, letter: string) => {
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
        <Typography textAlign="center" variant="h5" gutterBottom mt={5} mb={5} id={letter}>
          {letter}
        </Typography>

        <HtmlTooltip title="gå til toppen" placement="right" TransitionComponent={Zoom}>
          <IconButton onClick={goToTop}>
            <ArrowUpward
              sx={{
                cursor: "pointer",
                transition: "transform 0.5s, color 1s",
                "&:hover": {
                  transform: "scale(1.2)",
                  color: "#00bfff",
                },
              }}
            />
          </IconButton>
        </HtmlTooltip>
      </Box>

      <Paper>
        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: "#7cb3da", textTransform: "capitalize" }}>
              <TableRow>
                <TableCell>infinitiv</TableCell>
                <TableCell>presens</TableCell>
                <TableCell>preteritum</TableCell>
                <TableCell>perfektum</TableCell>
                <TableCell>Imperative</TableCell>
                <TableCell>English</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderTableBody(verbs)}</TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

function DataTable() {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  const [filteredVerbs, setFilteredVerbs] = useState<Verb[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (filtered: Verb[], value: string) => {
    setFilteredVerbs(filtered);
    setInputValue(value);
  };

  console.log("filteredVerbs", filteredVerbs);

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Grid container justifyContent="center" mb={5}>
        <Grid item xs={isMobile ? 12 : 7} justifyContent="center">
          <DataTableAlphabetsBox />

          <DataTableSearchBox onSearch={handleSearch} />

          {filteredVerbs.length > 0 &&
            renderTable(
              filteredVerbs,
              `Jeg har funnet ${filteredVerbs.length} ${
                filteredVerbs.length === 1 ? "resultat" : "resultater"
              } 🥳`
            )}

          {inputValue.length > 0 && filteredVerbs.length === 0 && (
            <Typography textAlign="center" variant="h5" gutterBottom mt={5} mb={5}>
              Jeg fant ikke noe for <span style={{ color: "#ff5722" }}>" {inputValue} "</span> 🥸
            </Typography>
          )}

          {inputValue.length === 0 && groups.map((group) => renderTable(group.data, group.label))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default DataTable;
