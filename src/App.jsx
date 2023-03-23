import WeatherApp from "./components/WeatherApp";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NoFound from "./components/NoFound";
import { WeatherProvider } from "./context/WeatherProvider";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FavoritesPage from "./pages/FavoritesPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <WeatherProvider>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/weather" element={<WeatherApp />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NoFound />} /> 
      </Routes>
      <Footer />
    </WeatherProvider>
  );
}

export default App;
