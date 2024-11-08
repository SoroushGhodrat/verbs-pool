import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import { goToTop } from "../util/helper";
import { useTheme } from "@mui/material/styles";
import { StyledTableRow } from "../styled/Styled";
import _ from "lodash";

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
  A as NorskA,
  B as NorskB,
  C as NorskC,
  D as NorskD,
  E as NorskE,
  F as NorskF,
  G as NorskG,
  H as NorskH,
  I as NorskI,
  J as NorskJ,
  K as NorskK,
  L as NorskL,
  M as NorskM,
  N as NorskN,
  O as NorskO,
  P as NorskP,
  Q as NorskQ,
  R as NorskR,
  S as NorskS,
  T as NorskT,
  U as NorskU,
  V as NorskV,
  W as NorskW,
  X as NorskX,
  Y as NorskY,
  Z as NorskZ,
  Ø as NorskØ,
} from "../data/no";
import {
  A as EnglishA,
  B as EnglishB,
  C as EnglishC,
  D as EnglishD,
  E as EnglishE,
  F as EnglishF,
  G as EnglishG,
  H as EnglishH,
  I as EnglishI,
  J as EnglishJ,
  K as EnglishK,
  L as EnglishL,
  M as EnglishM,
  N as EnglishN,
  O as EnglishO,
  P as EnglishP,
  Q as EnglishQ,
  R as EnglishR,
  S as EnglishS,
  T as EnglishT,
  U as EnglishU,
  V as EnglishV,
  W as EnglishW,
  // X as EnglishX,
  Y as EnglishY,
  Z as EnglishZ,
} from "../data/en";
import DataTableAlphabetsBox from "./DataTableAlphabetsBox";
import { HtmlTooltip } from "../styled/Styled";
import DataTableSearchBox from "./DataTableSearchBox";
import { useLanguage } from "../context/LanguageContext";

type Verb = {
  infinitiv: string;
  presens?: string;
  preteritum?: string;
  perfektum?: string;
  meaning?: string;
};

type VerbEN = {
  infinitiv: string;
  past?: string;
  past_participle?: string;
  s_es_ies?: string;
  ing?: string;
};

type Headers = {
  Norsk: string[];
  English: string[];
};

const DataTable = () => {
  const { language } = useLanguage();
  console.log("language:", language);

  const table_headers: Headers = {
    Norsk: ["Infinitiv", "Presens", "Preteritum", "Presens Perfektum", "Engelsk"],
    English: ["Infinitive", "Present", "Past", "Present Perfect", "Present continuous"],
  };

  const tableCells = {
    Norsk: [
      { key: "infinitiv", label: "Infinitive" },
      { key: "presens", label: "Present" },
      { key: "preteritum", label: "Past" },
      { key: "perfektum", label: "Perfect" },
      { key: "meaning", label: "Meaning" },
    ],
    English: [
      { key: "infinitiv", label: "Infinitiv" },
      { key: "past", label: "Past" },
      { key: "past_participle", label: "Past Participle" },
      { key: "s_es_ies", label: "S/ES/IES" },
      { key: "ing", label: "ING" },
    ],
  };

  const theme = useTheme();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  const currentTableHeaders = table_headers[language];

  const [filteredVerbs, setFilteredVerbs] = useState<Verb[]>([]);
  const [inputValue, setInputValue] = useState("");
  // Define groups for both languages
  const norwegianGroups = [
    { data: NorskA, label: "A" },
    { data: NorskB, label: "B" },
    { data: NorskC, label: "C" },
    { data: NorskD, label: "D" },
    { data: NorskE, label: "E" },
    { data: NorskF, label: "F" },
    { data: NorskG, label: "G" },
    { data: NorskH, label: "H" },
    { data: NorskI, label: "I" },
    { data: NorskJ, label: "J" },
    { data: NorskK, label: "K" },
    { data: NorskL, label: "L" },
    { data: NorskM, label: "M" },
    { data: NorskN, label: "N" },
    { data: NorskO, label: "O" },
    { data: NorskP, label: "P" },
    { data: NorskQ, label: "Q" },
    { data: NorskR, label: "R" },
    { data: NorskS, label: "S" },
    { data: NorskT, label: "T" },
    { data: NorskU, label: "U" },
    { data: NorskV, label: "V" },
    { data: NorskW, label: "W" },
    { data: NorskX, label: "X" },
    { data: NorskY, label: "Y" },
    { data: NorskZ, label: "Z" },
    { data: NorskØ, label: "Ø" },
  ];

  const englishGroups = [
    { data: EnglishA, label: "A" },
    { data: EnglishB, label: "B" },
    { data: EnglishC, label: "C" },
    { data: EnglishD, label: "D" },
    { data: EnglishE, label: "E" },
    { data: EnglishF, label: "F" },
    { data: EnglishG, label: "G" },
    { data: EnglishH, label: "H" },
    { data: EnglishI, label: "I" },
    { data: EnglishJ, label: "J" },
    { data: EnglishK, label: "K" },
    { data: EnglishL, label: "L" },
    { data: EnglishM, label: "M" },
    { data: EnglishN, label: "N" },
    { data: EnglishO, label: "O" },
    { data: EnglishP, label: "P" },
    { data: EnglishQ, label: "Q" },
    { data: EnglishR, label: "R" },
    { data: EnglishS, label: "S" },
    { data: EnglishT, label: "T" },
    { data: EnglishU, label: "U" },
    { data: EnglishV, label: "V" },
    { data: EnglishW, label: "W" },
    // { data: EnglishX, label: "X" },
    { data: EnglishY, label: "Y" },
    { data: EnglishZ, label: "Z" },
  ];

  // const handleSearch = (filtered: Verb[], value: string) => {
  const handleSearch = (filtered: any, value: string) => {
    setFilteredVerbs(filtered);
    setInputValue(value);
  };

  // Select the appropriate group based on the current language
  const groups = language === "Norsk" ? norwegianGroups : englishGroups;

  const renderTable = (verbs: Verb[] | VerbEN[], letter: string) => {
    return (
      <>
        {/* Letters group header */}
        <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
          <Typography textAlign="center" variant="h5" gutterBottom mt={5} mb={5} id={letter}>
            {`Gruppe ${letter}`}
          </Typography>

          {/* Go-to-top arrow icon */}
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
                {/* Table headers present, past, ... */}
                <TableRow>
                  {currentTableHeaders?.map((header: string) => (
                    <TableCell key={uuidv4()}>
                      <Typography variant="h6">{header}</Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {verbs.map((row: Verb | VerbEN) => {
                  return _.isEmpty(row.infinitiv) ? (
                    <StyledTableRow key={uuidv4()}>
                      <TableCell colSpan={5}>
                        <Typography variant="body2" textAlign="center" gutterBottom>
                          Denne gruppen har ikke noe verb!
                        </Typography>
                      </TableCell>
                    </StyledTableRow>
                  ) : (
                    <StyledTableRow key={uuidv4()}>
                      {tableCells[language].map(({ key }) => (
                        <TableCell key={key}>
                          <Typography
                            variant="subtitle1"
                            gutterBottom
                            sx={{ textTransform: "capitalize" }}
                          >
                            {row[key as keyof typeof row]}
                          </Typography>
                        </TableCell>
                      ))}
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </>
    );
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Grid container justifyContent="center" mb={5}>
        <Grid item xs={isMobile ? 11 : 7} justifyContent="center">
          <DataTableAlphabetsBox />
          <DataTableSearchBox onSearch={handleSearch} />
          {inputValue.length === 0
            ? groups.map((group) => renderTable(group.data, `${group.label}`))
            : filteredVerbs.length > 0 &&
              renderTable(
                filteredVerbs,
                `Jeg har funnet ${filteredVerbs.length} ${
                  filteredVerbs.length === 1 ? "resultat" : "resultater"
                } 🥳`,
              )}
          {inputValue.length !== 0 && filteredVerbs.length === 0 && (
            <Typography textAlign="center" variant="h5" gutterBottom mt={5} mb={5}>
              Jeg fant ikke noe for
              <span style={{ color: theme.palette.error.main }}>" {inputValue} "</span>
              🥸
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default DataTable;
