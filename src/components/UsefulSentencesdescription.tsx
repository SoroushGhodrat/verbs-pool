import React, { useState } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { UkFlag, NoFlag } from './styles/Flags';
import { randonColor } from '../util/helper';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

interface FlagTextPairProps {
  FlagComponent: React.ElementType;
  text: string;
}

const FlagTextPair: React.FC<FlagTextPairProps> = ({ FlagComponent, text }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <FlagComponent />
      <Typography variant="body2" style={{ fontSize: '20px' }}>
        {text}
      </Typography>
    </Box>
  );
};

const UsefulSentencesdescription: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleClose = () => {
    setExpanded(false);
  };
  return (
    <Container maxWidth="md" sx={{ my: { xs: 2, md: 4 } }}>
      <Box component={Paper} sx={{ p: { xs: 1, md: 2 } }}>
        <Box>
          <Typography
            sx={{ textAlign: 'center' }}
            variant="h4"
            component="h1"
            gutterBottom
          >
            Useful Sentences
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Here are some useful sentences to help you practice your English and
            Norwegian skills in a variety of common situations.
          </Typography>
        </Box>

        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          sx={{ p: 0, m: 0 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ bgcolor: '#7FCDCD', textTransform: 'capitalize' }}
          >
            Talk about opinions
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                px: 2,
                py: 1,
                backgroundColor: randonColor(),
                borderRadius: '16px',
              }}
            >
              <FlagTextPair
                FlagComponent={NoFlag}
                text="Jeg gleder meg til å ..."
              />
              <FlagTextPair
                FlagComponent={UkFlag}
                text="I am looking forward to ..."
              />
            </Box>

            <Box
              sx={{
                mt: 1,
                px: 2,
                py: 1,
                backgroundColor: randonColor(),
                borderRadius: '16px',
              }}
            >
              <FlagTextPair
                FlagComponent={NoFlag}
                text="Jeg har lyst til å ..."
              />
              <FlagTextPair FlagComponent={UkFlag} text="I want to ..." />
            </Box>

            <Box
              sx={{
                mt: 1,
                px: 2,
                py: 1,
                backgroundColor: randonColor(),
                borderRadius: '16px',
              }}
            >
              <FlagTextPair
                FlagComponent={NoFlag}
                text="Jeg er fornøyd med ..."
              />
              <FlagTextPair
                FlagComponent={UkFlag}
                text="I am satisfied with ..."
              />
            </Box>

            <Box
              sx={{
                mt: 1,
                px: 2,
                py: 1,
                backgroundColor: randonColor(),
                borderRadius: '16px',
              }}
            >
              <FlagTextPair FlagComponent={NoFlag} text="Jeg har tenkt å ..." />
              <FlagTextPair FlagComponent={UkFlag} text="I intend to ..." />
            </Box>

            <Box
              sx={{
                mt: 1,
                px: 2,
                py: 1,
                backgroundColor: randonColor(),
                borderRadius: '16px',
              }}
            >
              <FlagTextPair
                FlagComponent={NoFlag}
                text="Jeg drømmer om å ..."
              />
              <FlagTextPair FlagComponent={UkFlag} text="I dream of ..." />
            </Box>

            <AccordionActions>
              <Button variant="outlined" sx={{ mt: 2 }} onClick={handleClose}>
                Close
              </Button>
            </AccordionActions>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Accordion 2
          </AccordionSummary>
          <AccordionDetails>Accordion 2</AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
};

export default UsefulSentencesdescription;
