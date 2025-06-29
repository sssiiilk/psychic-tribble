import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DeveloperDashboard from './pages/DeveloperDashboard';
import AuthPage from './pages/AuthPage';
import SearchPage from './pages/SearchPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import PropertyDetails from './pages/PropertyDetails';
import UserProfile from './pages/UserProfile';
import BackendStatus from './components/BackendStatus';

function App() {
  return (
    <>
      <BackendStatus />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/property/:id" element={<PropertyDetailsPage />} />
          <Route path="/property-details/:id" element={<PropertyDetails />} />
          <Route path="/developer-dashboard" element={<DeveloperDashboard />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
