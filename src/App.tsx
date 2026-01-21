import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import Activities from './pages/Activities';
import DistrictDetail from './pages/DistrictDetail';
import ActivityDetail from './pages/ActivityDetail';

function App() {
  // Get base path for GitHub Pages
  // This should match the base path in vite.config.ts
  const getBasePath = () => {
    const path = window.location.pathname;
    // Check if we're on GitHub Pages with a repository subdirectory
    // Common patterns: username.github.io/repo-name/ or username.github.io/
    const repoMatch = path.match(/^\/([^\/]+)\//);
    // Ignore common paths that aren't repository names
    const ignorePaths = ['assets', 'src', 'dist', 'node_modules', 'index.html'];
    if (repoMatch && !ignorePaths.includes(repoMatch[1])) {
      return `/${repoMatch[1]}/`;
    }
    return '/';
  };

  const basePath = getBasePath();

  return (
    <Router basename={basePath}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/district/:id" element={<DistrictDetail />} />
            <Route path="/activity/:id" element={<ActivityDetail />} />
          </Routes>
        </main>
        <MobileNav />
      </div>
    </Router>
  );
}

export default App;