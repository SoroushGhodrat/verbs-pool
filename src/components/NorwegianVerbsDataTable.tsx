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
} from '../data/no';

import DataTableAlphabetsBox from './DataTableAlphabetsBox';
import { HtmlTooltip } from '../styled/Styled';
import DataTableSearchBox from './DataTableSearchBox';

import { useTranslation } from 'react-i18next';
import { VerbEN, VerbNO } from '../types/types';

type UnionVerbs = VerbNO | VerbEN;

const NorwegianVerbsDataTable = () => {
  const { t } = useTranslation();

  const [filteredVerbs, setFilteredVerbs] = useState<VerbNO[]>([]);
  const [inputValue, setInputValue] = useState('');

  const tableHeaders: string[] = [
    'Infinitiv',
    'Presens',
    'Preteritum',
    'Presens Perfektum',
    'Engelsk',
  ];

  const tableCells = [
    { key: 'infinitivForm', label: 'Infinitive' },
    { key: 'presensForm', label: 'Present' },
    { key: 'preteritumForm', label: 'Past' },
    { key: 'perfektumForm', label: 'Perfect' },
    { key: 'betydning', label: 'Meaning' },
  ];

  const norwegianGroups = [
    { data: NorskA, label: 'A' },
    { data: NorskB, label: 'B' },
    { data: NorskC, label: 'C' },
    { data: NorskD, label: 'D' },
    { data: NorskE, label: 'E' },
    { data: NorskF, label: 'F' },
    { data: NorskG, label: 'G' },
    { data: NorskH, label: 'H' },
    { data: NorskI, label: 'I' },
    { data: NorskJ, label: 'J' },
    { data: NorskK, label: 'K' },
    { data: NorskL, label: 'L' },
    { data: NorskM, label: 'M' },
    { data: NorskN, label: 'N' },
    { data: NorskO, label: 'O' },
    { data: NorskP, label: 'P' },
    { data: NorskQ, label: 'Q' },
    { data: NorskR, label: 'R' },
    { data: NorskS, label: 'S' },
    { data: NorskT, label: 'T' },
    { data: NorskU, label: 'U' },
    { data: NorskV, label: 'V' },
    { data: NorskW, label: 'W' },
    { data: NorskX, label: 'X' },
    { data: NorskY, label: 'Y' },
    { data: NorskZ, label: 'Z' },
    { data: NorskØ, label: 'Ø' },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  const handleSearch = (filtered: UnionVerbs[], value: string) => {
    const filteredNO = filtered.filter((verb): verb is VerbNO => {
      return (verb as VerbNO).infinitivForm !== undefined;
    });
    setFilteredVerbs(filteredNO);
    setInputValue(value);
  };

  const renderTable = (verbs: VerbNO[], letter: string) => {
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
                sx={{ backgroundColor: '#7cb3da', textTransform: 'capitalize' }}
              >
                {/* Table headers present, past, ... */}
                <TableRow>
                  {tableHeaders?.map((header: string) => (
                    <TableCell key={header}>
                      <Typography variant="h6">{header}</Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {verbs.map((row: VerbNO, index: number) =>
                  !row.infinitivForm ? (
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
                    <StyledTableRow key={`${row.infinitivForm}-${index}`}>
                      {tableCells.map(({ key }) => (
                        <TableCell key={key}>
                          <Typography
                            variant="subtitle1"
                            gutterBottom
                            sx={{ textTransform: 'capitalize' }}
                          >
                            {row[key as keyof VerbNO]}
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
            ? norwegianGroups.map((group) =>
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

export default NorwegianVerbsDataTable;
