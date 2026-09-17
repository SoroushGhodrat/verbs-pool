import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import ErrorBoundary from './components/common/ErrorBoundary';
import { LanguageProvider } from './context/LanguageContext';
import { Suspense } from 'react';
import EnglishGrammarPage from './pages/EnglishGrammarPage';
import EnglishVerbsPage from './pages/EnglishVerbsPage';
import NorwegianVerbsPage from './pages/NorwegianVerbsPage';
import AboutPage from './pages/AboutPage';
import UsefulSentences from './pages/UsefulSentences';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading default language...</div>}>
      <LanguageProvider>
        <Router>
          <Navbar />
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<NorwegianVerbsPage />} />
              <Route path="/english-grammar" element={<EnglishGrammarPage />} />
              <Route path="/english-verbs" element={<EnglishVerbsPage />} />
              <Route path="/norwegian-verbs" element={<NorwegianVerbsPage />} />
              <Route path="/useful-sentences" element={<UsefulSentences />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </ErrorBoundary>
        </Router>
      </LanguageProvider>
    </Suspense>
  );
};

export default App;
