import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DeveloperDashboard from './pages/DeveloperDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/developer-dashboard" element={<DeveloperDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
