import DashboardHeader from "./DashboardHeader";
import WeatherApp from "./WeatherApp";
import ChartHeader from "./ChartHeader";

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <WeatherApp />
      <ChartHeader />
    </div>
  );
};

export default Dashboard;
