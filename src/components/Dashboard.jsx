import DashboardHeader from "./DashboardHeader";
import WeatherApp from "./WeatherApp";
import ChartHeader from "./ChartHeader";
import GeneralInfo from "./GeneralInfo";
import useWeather from "../hooks/useWeather";
import Loader from "./Loader";

const Dashboard = () => {
  const { resultForecastData, loading, error } = useWeather();
  return (
    <div>
      {resultForecastData?.current && <GeneralInfo />}
      <DashboardHeader />
      <WeatherApp />

      <ChartHeader />
    </div>
  );
};

export default Dashboard;
