import WeatherApp from "./components/WeatherApp";

import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { WeatherProvider } from "./context/WeatherProvider";
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import FavoritesPage from './pages/FavoritesPage';
import SettingsPage from './pages/SettingsPage';


function App() {
  return (
  
      <WeatherProvider>
        <Navbar />
         <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/weather' element={<WeatherApp />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/settings' element={<SettingsPage />} />
        </Routes>
        <Footer />
        
      </WeatherProvider>
  );
}

export default App;
