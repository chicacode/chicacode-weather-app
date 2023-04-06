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
      
      <div className="h-screen mx-auto flex flex-col ml-28 pl-28 lg:pl-48">
      <Header />
        <main className="flex-grow">
          <div className="mx-auto container max-w-2xl lg:max-w-6xl xl:max-w-7xl">
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
