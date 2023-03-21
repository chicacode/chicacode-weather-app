import useWeather from "../hooks/useWeather";
import CardDetail from "./CardDetail";


const WeatherCard = () => {
  const { resultData } = useWeather();
  console.log(resultData);
  const { name, weather, main, coord, sys, wind } = resultData;

  return (
    <div>
      <div className="max-w-sm p-6 bg-white border border-gray rounded-lg">
        <div className="flex justify-around items-center">
        <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt="Sunset in the mountains" width={100} height={100}/>
          <a href="#">
            <h5 className="mb-2 text-2xl font-medium tracking-tight text-primary">
              {name}, {sys.country}
            </h5>
          </a>
        </div>

        <CardDetail data={weather}/> 
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray rounded-full px-3 py-1 text-sm  mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray rounded-full px-3 py-1 text-sm mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray rounded-full px-3 py-1 text-sm mr-2 mb-2">
            #winter
          </span>
        </div>

        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Go to this step by step guideline process on how to certify for your
          weekly benefits:
        </p>
        <a
          href="#"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          See our guideline
          <svg
            className="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default WeatherCard;
