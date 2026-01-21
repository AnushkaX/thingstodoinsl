import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import Activities from './pages/Activities';
import DistrictDetail from './pages/DistrictDetail';
import ActivityDetail from './pages/ActivityDetail';

function App() {
  return (
    <Router>
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