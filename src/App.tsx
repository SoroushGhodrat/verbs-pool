import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useTheme from './hooks/useTheme';
import Navbar from './components/common/Navbar';
import { LanguageProvider } from './context/LanguageContext';
import { Suspense } from 'react';
import EnglishGrammarPage from './pages/EnglishGrammarPage';
import EnglishVerbsPage from './pages/EnglishVerbsPage';
import NorwegianVerbsPage from './pages/NorwegianVerbsPage';
import AboutPage from './pages/AboutPage';
import UsefulSentences from './pages/UsefulSentences';

const App: React.FC = () => {
  const theme = useTheme();

  return (
    <Suspense fallback={<div>"Loading default language..."</div>}>
      <ThemeProvider theme={theme}>
        <LanguageProvider>
          <CssBaseline />
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<NorwegianVerbsPage />} />
              <Route path="/english-grammar" element={<EnglishGrammarPage />} />
              <Route path="/english-verbs" element={<EnglishVerbsPage />} />
              <Route path="/norwegian-verbs" element={<NorwegianVerbsPage />} />
              <Route path="/useful-sentences" element={<UsefulSentences />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
