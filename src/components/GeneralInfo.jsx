import useWeather from "../hooks/useWeather";
const GeneralInfo = () => {
  const { resultForecastData,  error } = useWeather();
  const {alert, current, forecast, location } = resultForecastData;

console.log("generalInfo", current)
  return (
    <div>
      
      <div className="top-0 right-0 w-[20vw] bg-secondary  p-10  text-light fixed h-full">
      <div className="space-y-3">
        <div className="flex justify-between">
          <div className="flex flex-col text-grayText">
            <div className="text-2lg">
              {location?.name}
            </div>
            <div className="text-sm">
              {location?.country}
            </div>
          </div>

          <div className="text-md">
            {location?.localtime}
          </div>
        </div>

        <section>
        <img src={`${current?.condition?.icon}`} alt={`${current?.condition?.text}`} />
          <h5 className="text-2xl text-grayDarkTitles">{current?.temp_c} Cº</h5>
          
          <div className="fles justify-between items-center">
            <div className="text-2xl">
            <p className="text-grayText">
            Feels like:
            <span className="px-2">{current?.feelslike_c}</span>
            Cº
            </p>
            </div>
            <div>
              {current?.condition.text}
            </div>
          </div>
        </section>

        <section>Chance of Rain</section>

        <section>Sunrise & Sunset</section>
        <section>Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a></section>
      </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
// hide-in-print z-30 fixed right-0 top-0 h-screen translate-x-full overflow-hidden w-20 lg:w-64 bg-white transition-all duration-500 p-3 bg-secondary-light shadow  pt-10 