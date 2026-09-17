import { useState } from 'react';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import { goToTop } from '../util/helper';
import { useTheme } from '@mui/material/styles';
import { StyledTableRow } from '../styled/Styled';

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
  IconButton,
  Box,
  Grid,
} from '@mui/material';
// import Grid from "@mui/material/Grid2";

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
} from '../data/en';
import DataTableAlphabetsBox from './DataTableAlphabetsBox';
import { HtmlTooltip } from '../styled/Styled';
import DataTableSearchBox from './DataTableSearchBox';

import { useTranslation } from 'react-i18next';
import { VerbEN, VerbNO } from '../types/types';

type UnionVerbs = VerbNO | VerbEN;

const EnglishVerbsDataTable = () => {
  const { t } = useTranslation();

  const [filteredVerbs, setFilteredVerbs] = useState<VerbEN[]>([]);
  const [inputValue, setInputValue] = useState('');

  const tableHeader: string[] = [
    'Base',
    'Past',
    'Past Participle',
    'Present Perfect',
    'Present Simple 3rd Person Singular',
    'Present Participle',
  ];

  const tableCells = [
    { key: 'baseForm', label: 'Base' },
    { key: 'pastForm', label: 'Past' },
    { key: 'pastParticipleForm', label: 'Past Participle' },
    { key: 'presentPerfectForm', label: 'Present Perfect' },
    {
      key: 'presentSimple3rdPersonSingular',
      label: 'Present Simple 3rd Person Singular',
    },
    { key: 'presentParticiple', label: 'Present Participle' },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  const englishGroups = [
    { data: EnglishA, label: 'A' },
    { data: EnglishB, label: 'B' },
    { data: EnglishC, label: 'C' },
    { data: EnglishD, label: 'D' },
    { data: EnglishE, label: 'E' },
    { data: EnglishF, label: 'F' },
    { data: EnglishG, label: 'G' },
    { data: EnglishH, label: 'H' },
    { data: EnglishI, label: 'I' },
    { data: EnglishJ, label: 'J' },
    { data: EnglishK, label: 'K' },
    { data: EnglishL, label: 'L' },
    { data: EnglishM, label: 'M' },
    { data: EnglishN, label: 'N' },
    { data: EnglishO, label: 'O' },
    { data: EnglishP, label: 'P' },
    { data: EnglishQ, label: 'Q' },
    { data: EnglishR, label: 'R' },
    { data: EnglishS, label: 'S' },
    { data: EnglishT, label: 'T' },
    { data: EnglishU, label: 'U' },
    { data: EnglishV, label: 'V' },
    { data: EnglishW, label: 'W' },
    // { data: EnglishX, label: "X" },
    { data: EnglishY, label: 'Y' },
    { data: EnglishZ, label: 'Z' },
  ];

  const handleSearch = (filtered: UnionVerbs[], value: string) => {
    const filteredNO = filtered.filter((verb): verb is VerbEN => {
      return (verb as VerbEN).baseForm !== undefined;
    });
    setFilteredVerbs(filteredNO);
    setInputValue(value);
  };

  const renderTable = (verbs: VerbEN[], letter: string) => {
    return (
      <>
        {/* Letters group header */}
        <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
          <Typography
            textAlign="center"
            textTransform={'capitalize'}
            variant="h5"
            gutterBottom
            mt={5}
            mb={5}
            id={letter}
          >
            {`${t('group')} ${letter}`}
          </Typography>

          {/* Go-to-top arrow icon */}
          <HtmlTooltip
            title={t('scroll to top')}
            placement="right"
            TransitionComponent={Zoom}
          >
            {/* <HtmlTooltip title="gå til toppen" placement="right" TransitionComponent={Zoom}> */}
            <IconButton onClick={goToTop}>
              <ArrowUpward
                sx={{
                  cursor: 'pointer',
                  transition: 'transform 0.5s, color 1s',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    color: '#00bfff',
                  },
                }}
              />
            </IconButton>
          </HtmlTooltip>
        </Box>

        <Paper>
          <TableContainer>
            <Table>
              <TableHead
                sx={{
                  backgroundColor: '#7cb3da',
                  textTransform: 'capitalize',
                }}
              >
                {/* Table headers present, past, ... */}
                <TableRow>
                  {tableHeader?.map((header: string) => (
                    <TableCell key={header}>
                      <Typography variant="h6">{header}</Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {verbs.map((row: VerbEN, index: number) =>
                  !row.baseForm ? (
                    <StyledTableRow key={`empty-${index}`}>
                      <TableCell colSpan={5}>
                        <Typography
                          variant="body2"
                          textAlign="center"
                          gutterBottom
                        >
                          {t('this group has no verb!')}
                        </Typography>
                      </TableCell>
                    </StyledTableRow>
                  ) : (
                    <StyledTableRow key={`${row.baseForm}-${index}`}>
                      {tableCells.map(({ key }) => (
                        <TableCell key={key}>
                          <Typography
                            variant="subtitle1"
                            gutterBottom
                            sx={{ textTransform: 'capitalize' }}
                          >
                            {key === 'pastParticipleForm'
                              ? `Had ${row[key as keyof VerbEN]}`
                              : key === 'presentPerfectForm'
                                ? `Have/Has ${row[key as keyof VerbEN]}`
                                : row[key as keyof VerbEN]}
                          </Typography>
                        </TableCell>
                      ))}
                    </StyledTableRow>
                  )
                )}
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
        <Grid item xs={isMobile ? 11 : 7} sx={{ justifyContent: 'center' }}>
          <DataTableAlphabetsBox />
          <DataTableSearchBox onSearch={handleSearch} />
          {inputValue.length === 0
            ? englishGroups.map((group) =>
                renderTable(group.data, `${group.label}`)
              )
            : filteredVerbs.length > 0 &&
              renderTable(
                filteredVerbs,
                `Jeg har funnet ${filteredVerbs.length} ${
                  filteredVerbs.length === 1 ? 'resultat' : 'resultater'
                } 🥳`
              )}
          {inputValue.length !== 0 && filteredVerbs.length === 0 && (
            <Typography
              textAlign="center"
              variant="h5"
              gutterBottom
              mt={5}
              mb={5}
            >
              Jeg fant ikke noe for
              <span style={{ color: theme.palette.error.main }}>
                " {inputValue} "
              </span>
              🥸
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default EnglishVerbsDataTable;
