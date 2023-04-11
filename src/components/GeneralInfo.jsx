import useWeather from "../hooks/useWeather";
import CardBadget from "./CardBadget";
const GeneralInfo = () => {
  const { resultForecastData } = useWeather();
  const { current, forecast, location } = resultForecastData;

  // console.log("current", current);

  // console.log("forecast", forecast);
  // console.log("location", location);
  return (
    <div>
      <div className="top-0 right-0 w-[20vw] bg-secondary  p-10  text-light fixed h-full">
        <div className="space-y-3">
          <div className="flex justify-between">
            <div className="flex flex-col text-grayText">
              <div className="text-2lg">{location?.name}</div>
              <div className="text-sm">{location?.country}</div>
            </div>

            <div className="text-md">{location?.localtime}</div>
          </div>

          <section>
            <img
              src={`${current?.condition?.icon}`}
              alt={`${current?.condition?.text}`}
            />
            <h5 className="text-2xl text-grayDarkTitles">
              {current?.temp_c} Cº
            </h5>

            <div className="fles justify-between items-center">
              <div className="text-xl">
                <p className="text-grayText capitalize">
                  feels like:
                  <span className="px-2">{current?.feelslike_c}</span>
                  Cº
                </p>
              </div>
              <div className="text-sm text-grayText capitalize">
                <span>conditions {current?.condition.text}</span>
              </div>
              <div className="text-sm text-grayText capitalize">
                <span>humidity {current?.humidity}</span>
              </div>
            </div>
          </section>
          <section>
            <h5 className="text-xl text-grayDarkTitles capitalize">
              chance of rain
            </h5>
            <div className="text-sm text-grayText capitalize">
              <span>
                {forecast?.forecastday[0]?.day?.daily_chance_of_rain} %
              </span>
            </div>
          </section>

          <section>
            <div className="grid grid-cols-2 gap-1">
              <h5 className="text-sm text-grayDarkTitles capitalize">
                max temp
              </h5>

              <h5 className="text-sm text-grayDarkTitles capitalize">
                min temp
              </h5>
            </div>

            <div className="grid grid-cols-2 gap-1">
              <CardBadget data={forecast?.forecastday[0]?.day?.maxtemp_c} />
              <CardBadget data={forecast?.forecastday[0]?.day?.mintemp_c} />
            </div>
          </section>

          <section>
            <div className="grid grid-cols-2 gap-1">
              <h5 className="text-sm text-grayDarkTitles capitalize">
                Sunrise
              </h5>

              <h5 className="text-sm text-grayDarkTitles capitalize">Sunset</h5>
            </div>

            <div className="grid grid-cols-2 gap-1">
              <CardBadget data={forecast?.forecastday[0]?.astro?.sunrise} />
              <CardBadget data={forecast?.forecastday[0]?.astro?.sunset} />
            </div>
          </section>
          <section className="fixed bottom-1">
            <div className="text-md text-center text-grayDarkOpacity26">
            Powered by{" "}
            <a href="https://www.weatherapi.com/" title="Free Weather API" className="hover:text-light">
              WeatherAPI.com
            </a>
            </div>
     
          </section>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
// hide-in-print z-30 fixed right-0 top-0 h-screen translate-x-full overflow-hidden w-20 lg:w-64 bg-white transition-all duration-500 p-3 bg-secondary-light shadow  pt-10
