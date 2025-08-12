import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HomeGlassmorphism from './pages/HomeGlassmorphism';
import HomeNeubrutalism from './pages/HomeNeubrutalism';
import HomeMinimalist from './pages/HomeMinimalist';
import HomeModernCorp from './pages/HomeModernCorp';
import ChatPage from './pages/ChatPage';
import DocumentsPage from './pages/DocumentsPage';
import ConferencePage from './pages/ConferencePage';
import LoginPage from './pages/LoginPage';
import Navigation from './components/Navigation';
import DesignSelector from './pages/DesignSelector';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1',
    },
    secondary: {
      main: '#22d3ee',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a1a',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<DesignSelector />} />
          <Route path="/original" element={<HomePage />} />
          <Route path="/glassmorphism" element={<HomeGlassmorphism />} />
          <Route path="/neubrutalism" element={<HomeNeubrutalism />} />
          <Route path="/minimalist" element={<HomeMinimalist />} />
          <Route path="/modern" element={<HomeModernCorp />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/conference" element={<ConferencePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App
