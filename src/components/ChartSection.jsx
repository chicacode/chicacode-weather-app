import {  useState } from "react";
import LineChart from "./LineChart";
import useWeather from "../hooks/useWeather";

const ChartSection = () => {
  const { resultForecastData, loading, error } = useWeather();
  const { current, forecast, location } = resultForecastData;
  const colorCode = " hsla(213, 55%, 19%, 1)";

  console.log('forecast?.forecastday', forecast?.forecastday)
  let datasetData = [];
  const [forecastDataResult, setForecastDataResult] = useState({
    labels: [
      "8am",
      "9am",
      "10am",
      "11am",
      "12",
      "1pm",
      "2pm",
      "3pm",
      "4pm",
      "5pm",
      "6pm",
      "7pm",
    ],
    // labels: forecast?.forecastday[0]?.hour.map((data) => {
    //   console.log('map en data', data)
    //   // return labelData.push(data.day.maxtemp_c);

    // }),
    datasets: [
      {
        label: "Forecast day",
        fill: true,
        // fillColor : gradient,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 510);
          gradient.addColorStop(0, "hsla(213, 55%, 19%, 1)");
          gradient.addColorStop(1, "hsla(192, 17%, 94%, 1)");
          return gradient;
        },
        borderColor: colorCode,
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 65, 59, 80, 81, 56, 40, 56]
      },
    ],
  });

  const options = {
    responsive: true,
    datasetStrokeWidth : 3,
    pointDotStrokeWidth : 4,
    tooltipFillColor: "#4C9FCe",
    tooltipFontStyle: "medium",
    tooltipTemplate: "<%if (label){%><%=label + ' hod' %>: <%}%><%= value + '°C' %>",
    scaleLabel : "<%= Number(value).toFixed(0).replace('.', ',') + '°C'%>"
};

  // console.log("forecastDataResult en chart section", forecastDataResult  )
  return (
    <div className="w-fit max-w-screen-xl">
      <LineChart chartDarta={forecastDataResult} options={options} />
    </div>
  );
};

export default ChartSection;
