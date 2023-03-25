import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import NoFound from "./components/NoFound";
import { WeatherProvider } from "./context/WeatherProvider";
import FavoritesPage from "./pages/FavoritesPage";
import RecentSearchesPage from "./pages/RecentSearchesPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <WeatherProvider>
      <Sidebar />
      
      <div className="h-screen mx-auto flex flex-col pl-16 lg:pl-48">
      <Header />
        <main className="flex-grow">
          <div className="mx-auto max-w-2xl lg:max-w-3xl xl:max-w-5xl px-0 lg:px-6 xl:px-8">
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/recent-searches" element={<RecentSearchesPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<NoFound />} />
            </Routes>
          </div>
        </main>
      </div>

      {/* <Footer /> */}
    </WeatherProvider>
  );
}

export default App;
// work on this design
// https://dribbble.com/shots/18425258-Srawana-Weather-Dashboard-Design
